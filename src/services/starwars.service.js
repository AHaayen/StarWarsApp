import axios from 'axios';

let baseUrl = 'https://swapi.co/api/people'
const axiosConfig =  {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
}

function getCharacters(page){
   return axios.get(baseUrl + '/?page=' + page , axiosConfig)
}

function getCharacter(searchString){
    return axios.get(baseUrl + '?search=' + searchString, axiosConfig);
}
let starWarsService = { getCharacters, getCharacter };

export default starWarsService;
