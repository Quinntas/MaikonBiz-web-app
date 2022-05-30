import fs from "fs";
const data = JSON.parse(fs.readFileSync("data/personas_demo.json", "utf-8"));

function PersonaIdPage(req, res) {
  if (req.query.personaId == "0") {
    res.status(200).json({ data: data.Sheet1.map((persona) => persona.id) });
  } else {
    res
      .status(200)
      .json({ data: data.Sheet1[parseInt(req.query.personaId) - 1] });
  }
}

export default PersonaIdPage;
