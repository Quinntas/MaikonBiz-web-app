import fs from "fs";

const data = JSON.parse(fs.readFileSync("data/personas_data.json", "utf-8"));

const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

async function PersonaIdPage(req, res) {
  if (req.query.pid == "all") {
    const personaData = data.data.map((persona) => persona);

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
