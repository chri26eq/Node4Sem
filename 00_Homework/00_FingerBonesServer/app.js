const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.json()); // tillader Express at parse json i request bodyen

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

let nextId = 6;

//------------Endpoints------------

app.get("/fingerbones", (requ, resp) => {
  if (fingerBones.length === 0) {
    resp.status(204).send({ data: fingerBones });
  } else {
    resp.send({ data: fingerBones });
  }
});

app.get("/fingerbones/:id", (requ, resp) => {
  const fingerBoneId = +requ.params.id;
  const foundFingerBone = findFingerboneById(fingerBoneId);

  if (!foundFingerBone) {
    resp
      .status(404)
      .send({ error: `No Fingerbone found with id ${fingerBoneId}` });
  } else {
    resp.send({ data: foundFingerBone });
  }
});

app.post("/fingerbones", (requ, resp) => {
  const newFingerBone = requ.body;
  newFingerBone.id = nextId++;
  fingerBones.push(newFingerBone);

  resp.send({ data: fingerBones[fingerBones.length - 1] });
});

app.put("/fingerbones/:id", (requ, resp) => {
  const id = +requ.params.id;
  const newFingerBone = requ.body;

  overwriteFingerBoneById(id, newFingerBone);
  resp.send({ data: findFingerboneById(newFingerBone.id) });
});

app.patch("/fingerbones/:id", (requ, resp) => {
  const id = +requ.params.id;
  const foundFingerBoneIndex = fingerBones.findIndex((bone) => bone.id === id);
  
  if (foundFingerBoneIndex === -1) {
    resp.status(404).send({ error: "Fingerbone not found!" });
  } else {
    const existingFingerBone = fingerBones[id];

    const newFingerBone = {...existingFingerBone, ...requ.body, id: existingFingerBone.id}

    fingerBones[foundFingerBoneIndex] = newFingerBone;

    resp.send({data: {newFingerBone}})
  }
});

app.delete("/fingerbones/:id", (requ, resp) => {
  const id = +requ.params.id;
  const foundFingerBoneIndex = fingerBones.findIndex((bone) => bone.id === id);

  if (foundFingerBoneIndex === -1) {
    resp.status(404).send({ error: "Fingerbone not found!" });
  } else {
    const deletedBone = fingerBones.splice(foundFingerBoneIndex, 1);
    resp.send({
      data: {
        message: "Fingerbone deleted!",
        deletedBone: deletedBone,
      },
    });
  }
});

//------------Hjælpefunktioner------------

function findFingerboneById(id) {
  return fingerBones.find((bone) => bone.id === id);
}

function overwriteFingerBoneById(id, fingerBoneObj) {
  let fingerBoneIndex = fingerBones.findIndex((bone) => bone.id == id);
  fingerBones[fingerBoneIndex] = fingerBoneObj;
}

//------------Port listener------------

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", PORT);
});
