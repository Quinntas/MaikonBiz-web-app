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
