import { Component, computed, signal } from '@angular/core';

import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
@Component({
  imports: [],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly nRecipes = MOCK_RECIPES.length;

  protected readonly recipeNumber = signal(-1);
  protected readonly activeRecipe = computed<RecipeModel>(() => MOCK_RECIPES[this.recipeNumber()]);

  protected readonly servings = signal(1);
  protected readonly adjustedIngredients = computed(() =>
    this.activeRecipe().ingredients.map((ingredient) => ({
      name: ingredient.name,
      quantity: ingredient.quantity * this.servings(),
      unit: ingredient.unit,
    })),
  );

  protected decreaseServings() {
    this.servings.update((count) => count - 1);
  }

  protected increaseServings() {
    this.servings.update((count) => count + 1);
  }

  protected prevRecipe() {
    this.recipeNumber.update((count) => count - 1);
    // this.activeRecipe.set(MOCK_RECIPES[this.recipeNumber()]);
  }

  protected nextRecipe() {
    this.recipeNumber.update((count) => count + 1);
    // this.activeRecipe.set(MOCK_RECIPES[this.recipeNumber()]);
  }

  // protected onCook() {
  //   console.log('Meal is Ready!');
  //   this.title.set('Meal is Ready!');
  // }

  // protected onEat() {
  //   console.log('Yummy!');
  //   this.title.set('Yummy!');
  // }

  // protected onReset() {
  //   this.title.set('My Recipe Box');
  // }
}
