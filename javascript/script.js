// Get references to the input field, ingredient list, and recipe list
const ingredientInput = document.getElementById("ingredient");
const ingredientList = document.getElementById("ingredient-list");
const recipeList = document.getElementById("recipe-list");

<<<<<<< HEAD
// Function to add an ingredient to the list and fetch recipes
function addIngredient() {
  const ingredientValue = ingredientInput.value.trim();
=======

// Function to add an ingredient to the list and fetch recipes
function addIngredient() {
  const ingredientValue = ingredientInput.value.trim();
=======

// Function to display recipes on the web page
function displayRecipes(recipes) {
    // Clear the previous recipes
    recipeList.innerHTML = '';
>>>>>>> 98f35e48fc2bfa5fcc037ff736c24dadf34d4453

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

// Function to fetch recipes using JSONP
function fetchRecipes(ingredientsArray) {
  const apiKey = "5ae04e38092e84803117d87ec2025d5e";
  const ingredientText = encodeURIComponent(ingredientsArray.join(','));
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientText}&app_id=f6f259aa&app_key=${apiKey}`;
  const recipeList = document.getElementById("recipe-list"); // Get reference to the recipe list in your HTML

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Clear the previous recipes
      recipeList.innerHTML = "";

      for (let i = 0; i < data.hits.length; i++) {
        const recipe = data.hits[i].recipe;
        
        // Create a list item for each recipe and display its label
        const listItem = document.createElement("li");
        listItem.textContent = recipe.label;
        recipeList.appendChild(listItem);
      }
      console.log(data);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
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
<<<<<<< HEAD
=======

function addIngredient() {
    const ingredientValue = ingredientInput.value.trim();

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

// Function to fetch recipes using JSONP
function fetchRecipes(ingredientsArray) {
  const apiKey = "5ae04e38092e84803117d87ec2025d5e";
  const ingredientText = encodeURIComponent(ingredientsArray.join(','));
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientText}&app_id=f6f259aa&app_key=${apiKey}`;
  const recipeList = document.getElementById("recipe-list"); // Get reference to the recipe list in your HTML

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Clear the previous recipes
      recipeList.innerHTML = "";

      for (let i = 0; i < data.hits.length; i++) {
        const recipe = data.hits[i].recipe;
        
        // Create a list item for each recipe and display its label
        const listItem = document.createElement("li");
        listItem.textContent = recipe.label;
        recipeList.appendChild(listItem);
      }
      console.log(data);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
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
=======
        // Call the fetchRecipes function with the ingredients list
        fetchRecipes(ingredientsArray);
    }
}

function fetchRecipes(ingredientsArray) {
    const apiKey = "5ae04e38092e84803117d87ec2025d5e";
    const apiUrl = `https://api.example.com/recipes?ingredients=${ingredientsArray.join(",")}&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            recipeList.innerHTML = ""; // Clear previous recipe list
            data.recipes.forEach((recipe) => {
                const listItem = document.createElement("li");
                listItem.textContent = recipe.name;
                recipeList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching recipes:", error);
        });
}
>>>>>>> 98f35e48fc2bfa5fcc037ff736c24dadf34d4453
