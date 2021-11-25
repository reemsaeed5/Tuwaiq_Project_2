const e = require("express");
const { Employ } = require("../Data");

app.get("/user", (req, res) => {
  res.send(users);
});

app.post("/Employ", (req, res) => {
  const vanction = user.find((elem) => elem.id === parseInt(req.params.id));
  if (vanction) {
    const newVaction = {
      id: req.params.id,
      Name: req.body.Name,
      JobTitle: req.body.JobTitle,
      Tell: req.body.Tell,
      vanction: req.body.vanction,
      starDate: req.body.starDate,
      enddate: req.body.enddate,
      state: req.body.state,
    };

    vanction.push(newVaction);
    res.status(201);
    res.send(vanction);
    
  } else {
    res.status(404).end();
  }
});
