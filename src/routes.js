const {
  addNoteHandler,
  getAllHandler,
  getNoteByIdHandler,
  updateNoteHandler,
  deleteNoteHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: updateNoteHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteHandler,
  },
];

module.exports = routes;
