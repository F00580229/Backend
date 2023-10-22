import express from 'express';
const app = express();
import { json } from 'body-parser';


app.use(json());
const PORT =  3000;

const hobbies = [
    {
        "id":1,
        "name": "Playing Cricket",
        "tasks": ["Bowling", "Batting","keeping"],
        "LikedTaskInCricket": "I like To Bat."
      },
      {
        "id": 2,
        "name": "FrenchFries",
        "ingredients": ["potato", "salt", "pepper", "oil"],
        "instructions": "Heavy fried and add some salt"
      },
      {"id":3,
       "name":"I like to do coding", 
      "ProgrammingLanguageIDone":["Java","Javascript","Python"],
      "WhatIdo":"ILikeToSolveCodingProblems."
      },
      {"id":4,
      "name":"Doing Designig", 
      "IUse":["FIgma","canva"],
      "WhatIdo":"I like to do Web design"
     },
];


app.get('/hobbies', (req, res) => {
  res.json(hobbies);
});


app.get('/hobbies/:id', (req, res) => {
  const hobbiesID = req.params.id;
  const hobbie = hobbies.find((b) => b.id === hobbiesid);
  if (!hobbie) {
    res.status(404).json({ error: 'hobbie not found' });
  } else {
    res.json(hobbie);
  }
});


app.post('/hobbies', (req, res) => {
  const Newhobbie = req.body;
  books.push(Newhobbie);
  res.status(201).json(Newhobbie);
});

app.put('/hobbies/:id', (req, res) => {

  res.json({ message: 'hobbie updated' });
});


app.delete('/hobbies/:id', (req, res) => {

  res.json({ message: 'hobbie deleted' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
