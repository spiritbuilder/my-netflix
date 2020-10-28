import axios from "axios";

//base url to make requests to movie database

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

// instance.get('foobar') => this creates https://api.themoviedb.org/3/foobar 

export default instance; 