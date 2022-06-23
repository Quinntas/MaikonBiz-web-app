import fs from "fs";

const data = JSON.parse(fs.readFileSync("data/personas_data.json", "utf-8"));

const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

const getCategories = (array) => {
  const categories = array.map((persona) => persona.category);
  return [...new Set(categories)];
};

const getTags = (array) => {
  let tags = [];
  for (let i = 0; i < array.length; i++) {
    tags = tags.concat(array[i].tags);
  }
  return [...new Set(tags)];
};

const getSearch = (search, array) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    const questionParams = array[i].questions["QUESTION_1"].toLowerCase();
    if (questionParams.includes(search.toLowerCase())) {
      results = results.concat(array[i]);
    }
  }
  return results;
};

async function PersonaIdPage(req, res) {
  const personaData = data.personas.map((persona) => persona);

  if (req.query.search) {
    const results = getSearch(req.query.search, personaData);

    return res.status(200).json({
      meta: { length: results.length },
      data: results,
    });
  }

  if (req.query.pid == "all") {
    const personaDataPaginated = paginate(
      personaData,
      req.query.limit,
      req.query.page
    );

    return res.status(200).json({
      meta: { length: personaData.length },
      categories: getCategories(personaData),
      tags: getTags(personaData),
      prices: 12,
      data: personaDataPaginated,
    });
  }
  return res
    .status(200)
    .json({ data: personaData[parseInt(req.query.personaId) - 1] });
}

export default PersonaIdPage;
