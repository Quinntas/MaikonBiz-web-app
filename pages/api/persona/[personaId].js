import fs from "fs";
const data = JSON.parse(fs.readFileSync("data/personas_data.json", "utf-8"));

function PersonaIdPage(req, res) {
  if (req.query.personaId == "0") {
    return res
      .status(200)
      .json({ data: data.data.map((persona) => persona.id) });
  }
  return res
    .status(200)
    .json({ data: data.data[parseInt(req.query.personaId) - 1] });
}

export default PersonaIdPage;
