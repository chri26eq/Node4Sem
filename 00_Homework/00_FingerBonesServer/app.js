const express = require("express");
const app = express();
app.use(express.json()); // tillader Express at parse json i request bodyen

//------------Endpoints------------

app.get("/fingerbones", (requ, resp) => {
  resp.send({ data: fingerBones });
});

app.get("/fingerbones/:id", (requ, resp) => {
  resp.send({ data: findFingerboneById(requ.params.id) });
});

app.post("/fingerbones", (requ, resp) => {
  fingerBones.push(requ.body.data);
  resp.send({ data: fingerBones[fingerBones.length - 1] });
});

app.put("/fingerbones/:id", (requ, resp) => {
  const id = +requ.params.id;
  const newFingerBone = requ.body.data;

  overwriteFingerBoneById(id, newFingerBone);
  resp.send({ data: findFingerboneById(newFingerBone.id) });
});

app.delete("/fingerbones/:id", (req, res) => {
  const id = +req.params.id;
  const index = fingerBones.findIndex((bone) => bone.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Fingerbone not found!" });
  }

  const deletedBone = fingerBones.splice(index, 1);
  res.json({
    data: {
      message: "Fingerbone deleted!",
      deletedBone: deletedBone,
    },
  });
});

//------------Hjælpefunktioner------------

function findFingerboneById(id) {
  return fingerBones.find((bone) => bone.id == id);
}

function overwriteFingerBoneById(id, fingerBoneObj) {
  let fingerBoneIndex = fingerBones.findIndex((bone) => bone.id == id);
  fingerBones[fingerBoneIndex] = fingerBoneObj;
}

//------------Constants------------

const fingerBones = [
  {
    id: 0,
    name: "Pinky Tip",
    sizeInMillimeters: 22,
    fingerNr: 5,
    isConnectingBone: false,
  },
  {
    id: 1,
    name: "Nosepicker",
    sizeInMillimeters: 28,
    fingerNr: 2,
    isConnectingBone: false,
  },
  {
    id: 2,
    name: "Thumb's Up Core",
    sizeInMillimeters: 35,
    fingerNr: 1,
    isConnectingBone: true,
  },
  {
    id: 3,
    name: "Middle Finger Middle",
    sizeInMillimeters: 30,
    fingerNr: 3,
    isConnectingBone: true,
  },
  {
    id: 4,
    name: "Ring Holder",
    sizeInMillimeters: 28,
    fingerNr: 4,
    isConnectingBone: true,
  },
  {
    id: 5,
    name: "Chernobyl Special",
    sizeInMillimeters: 2,
    fingerNr: 6,
    isConnectingBone: false,
  },
];

//------------Port listener------------

app.listen(8080);
