import Search from './models/Search';
import Recipe from './models/Recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchViews from './views/searchViews';

const state = {};


/**
 * SEARCH
 */
const controlSearch = async () => {
    const query = searchViews.getInput();

    if(query) {
        state.search = new Search(query);

        searchViews.clearInput();
        searchViews.clearResults();
        renderLoader(elements.searchRes);

        try {
        await state.search.getRecipes();
        clearLoader();

        searchViews.renderResults(state.search.recipes);
        } catch (e) {
            alert('something is wrong with search');
            clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if(btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchViews.clearResults();
        searchViews.renderResults(state.search.recipes, goToPage);
    }
});

/**
 * RECIPE
 */

const contorlRecipe = async () => {
    const id = window.location.hash.replace('#', '');

    if(id) {
        state.recipe = new Recipe(id);

        try {
        await state.recipe.getRecipe();

        state.recipe.calcTime();
        state.recipe.calcServings();
        } catch (e) {
            alert('wrong recipe');
        }

    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, contorlRecipe));

