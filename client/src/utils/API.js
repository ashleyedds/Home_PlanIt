import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const BASEURL = "https://api.edamam.com/search?q="
const APIKEY =  "&app_id=53df96e7&app_key=6ae1fffea955931009d9dd91fd23c9bb&from=0&to=3"
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
