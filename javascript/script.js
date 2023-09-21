// Get references to the input field, ingredient list, and recipe list
const ingredientInput = document.getElementById("ingredient");
const ingredientList = document.getElementById("ingredient-list");
const recipeList = document.getElementById("recipe-list");

// Function to display recipes on the web page
function displayRecipes(ingredientValue) {
  // Clear the previous recipes
  recipeList.innerHTML = '';

  if (ingredientValue !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = ingredientValue;
    ingredientList.appendChild(listItem);
    ingredientInput.value = "";

    // Get the list of all ingredients
    const ingredientsList = Array.from(document.querySelectorAll("#ingredient-list li"));
    const ingredientsArray = ingredientsList.map(item => item.textContent);

    // Call the fetchRecipes function with the ingredients list
    fetchRecipes(ingredientsArray);
  }
}

// Function to fetch recipes using JSONP with flexible ingredient matching
function fetchRecipes(ingredientsArray) {
  const apiKey = "5ae04e38092e84803117d87ec2025d5e";
  let apiUrl = `https://api.edamam.com/api/recipes/v2?type=public`;

  if (ingredientsArray.length > 0) {
    apiUrl += `&q=${encodeURIComponent(ingredientsArray.join(' OR '))}`;
  }

  apiUrl += `&app_id=f6f259aa&app_key=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Clear the previous recipes
      recipeList.innerHTML = '';

      for (let i = 0; i < data.hits.length; i++) {
        const recipe = data.hits[i].recipe;

        // Create a link (<a>) element for each recipe title
        const link = document.createElement("a");
        link.textContent = recipe.label;
        link.href = recipe.url; // Set the href attribute to the recipe's URL
        link.target = "_blank"; // Open the link in a new tab/window

        // Create a list item (<li>) and append the link to it
        const listItem = document.createElement("li");
        listItem.appendChild(link);

        // Append the list item to the recipe list
        recipeList.appendChild(listItem);
      }
      console.log(data);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
}


// Function to add an ingredient to the list and fetch recipes
function addIngredient() {
  const ingredientValue = ingredientInput.value.trim();
  displayRecipes(ingredientValue);
}

// Add an event listener to the "Add Ingredient" button
document.getElementById("add-ingredient").addEventListener("click", addIngredient);

// Add an event listener for the "keydown" event on the input field
ingredientInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
    addIngredient();
  }
});

// Get references to the form, input field, and button
const form = document.getElementById("ingredient-form");

// Add an event listener to the form's submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  addIngredient();
});
