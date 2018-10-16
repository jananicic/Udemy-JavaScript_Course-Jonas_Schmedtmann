import axios from 'axios';
import {apiKey} from "../config";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://www.food2fork.com/api/get?key=${apiKey}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (e) {
            alert(e);
        }
    }

    calcTime() {
        // we need 15 min for each of 3 ingredients
        const ingNum = this.ingredients.length;
        const periods = Math.ceil(ingNum / 3);

        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }
}