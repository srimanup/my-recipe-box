import { Component, computed, signal } from '@angular/core';

import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { RecipeModel } from '../models';

@Component({
  imports: [RecipeDetail],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly nRecipes = MOCK_RECIPES.length;

  protected readonly recipeNumber = signal(-1);
  protected readonly activeRecipe = computed<RecipeModel | undefined>(() => {
    if (this.recipeNumber() > -1 && this.recipeNumber() < this.nRecipes)
      return MOCK_RECIPES[this.recipeNumber()];
    else return undefined;
  });

  protected prevRecipe() {
    this.recipeNumber.update((count) => count - 1);
  }

  protected nextRecipe() {
    this.recipeNumber.update((count) => count + 1);
  }
}
