import fs from "fs";
import { prismaClient } from "/prisma/prismaClient";

const data = JSON.parse(fs.readFileSync("data/personas_data.json", "utf-8"));

const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

async function PersonaIdPage(req, res) {
  if (req.query.pid == "all") {
    const personaData = data.data.map((persona) => persona);

    for (let i = 0; i < personaData.length; i++) {
      let qna = [];
      for (let j = 0; j < personaData[i].persona.questions.length; j++) {
        const obj = personaData[i].persona.questions[j];
        if (Object.keys(obj)[0] == "mail") continue;
        let question = Object.keys(obj)[0];
        if (question[0] == " ") question = question.substring(1);
        qna.push({
          question: question,
          answer: obj[Object.keys(obj)[0]],
        });
      }

      await prismaClient.getInstance().persona.create({
        data: {
          author: {
            connect: { id: "efaeb0cc-567e-4492-9728-96c60131cc45" },
          },
          createdOn: personaData[i].created_on,
          modifiedOn: personaData[i].modified_on,
          questions: {
            create: qna,
          },
        },
      });
    }

    return res.status(200).json({
      meta: { length: personaData.length },
      data: paginate(personaData, req.query.limit, req.query.page),
    });
  }
  return res
    .status(200)
    .json({ data: data.data[parseInt(req.query.personaId) - 1] });
}

export default PersonaIdPage;
