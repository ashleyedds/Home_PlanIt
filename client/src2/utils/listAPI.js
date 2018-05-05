import axios from "axios";

export default {
  // Gets all books
  getList: function() {
    return axios.get("/api/lists");
  },
  // Gets the book with the given id
  getListItem: function(id) {
    return axios.get("/api/" + id);
  },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
  saveList: function(listData) {
    return axios.post("/api/lists", listData);
  }
};