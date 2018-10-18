import axios from 'axios';
import {proxy, apiKey} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

     async getRecipes() {
        try{
            const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`);
            this.recipes = result.data.recipes;
        } catch (e) {
            alert(e);
        }
    }
};