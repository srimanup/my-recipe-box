import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})
export class RecipeDetail {
  readonly activeRecipe = input.required<RecipeModel>();

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
}
