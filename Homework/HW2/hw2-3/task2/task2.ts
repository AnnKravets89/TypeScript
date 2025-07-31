interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((recipesObjects) => {
        console.log(recipesObjects);
        const recipes: IRecipe[] = recipesObjects.recipes;
            for (let recipe of recipes) {
                let recipeCard: HTMLDivElement = document.createElement('div');
                recipeCard.classList.add('recipe-card');

                let containerDiv: HTMLDivElement = document.createElement("div");
                containerDiv.classList.add("recipe-block");

                let imgDiv: HTMLDivElement = document.createElement('div');
                imgDiv.classList.add('img-block');

                let img: HTMLImageElement = document.createElement("img");
                img.src = recipe.image;

                let titleDiv: HTMLDivElement = document.createElement("div");
                titleDiv.classList.add('title-block');

                let title: HTMLDivElement = document.createElement("div");
                title.classList.add('title');

                let h2: HTMLHeadingElement = document.createElement("h2");
                h2.innerText = `${recipe.id}. ${recipe.name}`;

                let ratingItem: HTMLParagraphElement = document.createElement("p");
                ratingItem.innerText = `rating: ${recipe.rating}`;

                let infoDiv: HTMLDivElement = document.createElement("div");
                infoDiv.classList.add('info-block');

                let mealDiv: HTMLDivElement = document.createElement("div");
                    for(let meal of recipe['mealType']) {
                        let pMeal: HTMLParagraphElement = document.createElement("p");
                        pMeal.innerText = meal;
                        mealDiv.appendChild(pMeal);
                    }

                let cuisineItem: HTMLParagraphElement = document.createElement("p");
                cuisineItem.innerText = `Cuisine: ${recipe.cuisine}`;

                let difItem: HTMLParagraphElement = document.createElement("p");
                difItem.innerText = `Difficulty: ${recipe.difficulty}`;

                let ingredientDiv: HTMLDivElement = document.createElement("div");
                ingredientDiv.classList.add('ingredient-block');

                let ingredientTitle: HTMLHeadingElement = document.createElement("h3");
                ingredientTitle.innerText = 'Ingredients';

                let ul: HTMLUListElement = document.createElement("ul");
                    for(let ingredient of recipe['ingredients']) {
                        let li: HTMLLIElement = document.createElement("li");
                        li.innerText = ingredient;
                        ul.appendChild(li);
                    }

                let cookDiv: HTMLDivElement = document.createElement("div");
                cookDiv.classList.add('cook-block');

                let instructionDiv: HTMLDivElement = document.createElement("div");
                instructionDiv.classList.add('instruction-block');

                let cookSteps: HTMLHeadingElement = document.createElement("h3");
                cookSteps.innerText = 'Cooking instructions';

                let ol: HTMLOListElement = document.createElement("ol");
                    for(let i = 0; i < recipe['instructions'].length; i++) {
                        let li: HTMLLIElement = document.createElement("li");
                        li.innerText = recipe['instructions'][i];
                        ol.appendChild(li);
                    }

                let cookItemsDiv: HTMLDivElement = document.createElement("div");
                cookItemsDiv.classList.add('cook-items-block');

                let cookTimeDiv: HTMLDivElement = document.createElement("div");
                cookTimeDiv.classList.add('cook-time');

                let servCount: HTMLParagraphElement = document.createElement("p");
                servCount.innerText = `Servings: ${recipe.servings}`;

                let prepTime: HTMLParagraphElement = document.createElement("p");
                prepTime.innerText = `Preparation time: ${recipe.prepTimeMinutes} minutes`;

                let cookTime: HTMLParagraphElement = document.createElement("p");
                cookTime.innerText = `Cooking time: ${recipe.cookTimeMinutes} minutes`;

                let calories: HTMLParagraphElement = document.createElement("p");
                calories.innerText = `Calories: ${recipe.caloriesPerServing} kcal`;

                let reviewDiv: HTMLDivElement = document.createElement("div");
                reviewDiv.classList.add('review');

                let revCount: HTMLParagraphElement = document.createElement("p");
                revCount.innerText = `Review Count: ${recipe.reviewCount}`;

                let tagsDiv: HTMLDivElement = document.createElement("div");
                tagsDiv.innerText = 'Tags:';
                    for(let tag of recipe['tags']) {
                        let pTag: HTMLParagraphElement = document.createElement('p');
                        pTag.innerText = tag;
                        tagsDiv.appendChild(pTag);
                    }
                                                            cookTimeDiv.append(servCount, prepTime, cookTime, calories)
                                                        cookItemsDiv.append(reviewDiv, cookTimeDiv);
                                                    instructionDiv.append(cookSteps, ol);
                                                cookDiv.append(ingredientDiv, instructionDiv);
                                            ingredientDiv.append(ingredientTitle, ul);
                                        infoDiv.append(mealDiv, cuisineItem, difItem);
                                    title.append(h2, ratingItem);
                                titleDiv.append(title, infoDiv, cookDiv);
                            reviewDiv.append(revCount, tagsDiv);
                        imgDiv.appendChild(img);
                    containerDiv.append(imgDiv, titleDiv);
                recipeCard.append(containerDiv, cookItemsDiv);
            document.body.appendChild(recipeCard);
        }
    });
