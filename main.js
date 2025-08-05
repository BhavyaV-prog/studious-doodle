
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsGrid = document.getElementById("results-grid");
const messageArea = document.getElementById("message-area");
const randomButton = document.getElementById("random-button");
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("recipe-details-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    searchRecipes(searchTerm);
  } else {
    showMessage("Please enter a search term", true);
  }
});



const indianVegRecipes = [
  {
    idMeal: "Pv",
    strMeal: "Pav Bhaji",
    strMealThumb: "images/pav bhaji.jpg",
    strCategory: "Street Food",
    strArea: "Indian",
    strInstructions:
    `<h4>Boil the veggies</h4>
  <p>Boil potatoes and cauliflower until soft. Mash them roughly and set aside.</p>

  <h4>Prepare the bhaji (masala base)</h4>
  <p>Heat 1 tbsp butter in a pan. Add chopped onions and sauté until golden.</p>
  <p>Add ginger-garlic paste. Sauté for 1 min until raw smell disappears.</p>
  <p>Add chopped tomatoes and capsicum. Cook until tomatoes soften.</p>

  <h4>Spice it up</h4>
  <p>Add turmeric, red chili powder, and pav bhaji masala. Mix well.</p>
  <p>Cook the masala for 2–3 minutes on medium heat.</p>

  <h4>Add mashed vegetables</h4>
  <p>Add the boiled and mashed veggies to the masala mixture.</p>
  <p>Pour ½ cup water and mix everything. Mash with a potato masher to get a smooth consistency.</p>
  <p>Simmer for 5–7 minutes, stirring often. Add more butter or water as needed.</p>

  <h4>Toast the pav</h4>
  <p>Slice pavs and toast them on a pan with butter until golden and crispy.</p>

  <h4>Serve</h4>
  <p>Serve hot bhaji with toasted pav, topped with a dollop of butter, chopped onions, coriander, and a wedge of lemon.</p>`,
    strYoutube: "https://www.youtube.com/watch?v=sAnPUIvPc1I",
    ingredients: [
      { ingredient: "2 cups Potatoes (boiled and mashed)"},
      { ingredient: "1 cup Cauliflower (boiled and mashed)" },
      { ingredient: "1 medium Onion (finely chopped)" },
      { ingredient: "1 medium Tomato (finely chopped)" },
      { ingredient: "1 small Capsicum/Bell pepper (optional, finely chopped)" },
      { ingredient: "2 tbsp Butter" },
      { ingredient: "1–2 tsp Pav Bhaji Masala" },
      { ingredient: "½ tsp Red Chili Powder (adjust to taste)" },
      { ingredient: "½ tsp Turmeric Powder" },
      { ingredient: "1 tsp Ginger-Garlic Paste" },
      { ingredient: "Salt to taste" },
      { ingredient: "Lemon wedges, Fresh coriander, Chopped onions (for garnish)" },
      { ingredient: "Pav (bread rolls), Butter for toasting" },
      
    
    ]
  },
  {
    idMeal: "Db",
    strMeal: "Dabeli",
    strMealThumb: "images/dabeli.jpg",
    strCategory: "Street Food",
    strArea: "Indian",
    strInstructions:
    `<h4>Prepare the stuffing</h4>
    <p>Boil and mash the potatoes. In a pan, heat oil and add cumin seeds.</p>
    <p>Add mashed potatoes, dabeli masala, salt, and a little water. Cook for 2–3 minutes. Set aside.</p>

    <h4>Assemble the fillings</h4>
    <p>Spread the potato mixture on one half of the sliced pav.</p>
    <p>Top with tamarind chutney, garlic chutney, chopped onions, pomegranate seeds, and roasted peanuts.</p>

    <h4>Toast the pav</h4>
  <p>Close the pav and toast both sides on a pan with butter until golden brown.</p>

    <h4>Serve</h4>
    <p>Serve hot with extra chutney and sev on the side for crunch.</p>`,

    strYoutube: "https://www.youtube.com/watch?v=Q-IHUyTZU_E",
    ingredients: [
    { ingredient: "Potatoes" },
    { ingredient: "Dabeli masala" },
    { ingredient: "Pav buns" },
    { ingredient: "Tamarind chutney" },
    { ingredient: "Garlic chutney" },
    { ingredient: "Chopped onions" },
    { ingredient: "Pomegranate seeds" },
    { ingredient: "Roasted peanuts" },
    { ingredient: "Butter" },
    { ingredient: "Sev" }
    ]
  },
  {
    idMeal: "Vpv",
    strMeal: "Vada pav",
    strMealThumb: "images/vada pav.png",
    strCategory: "Street Food",
    strArea: "Indian",
    strInstructions:
    `<h4>Make the potato filling</h4>
      <p>Boil and mash potatoes. In a pan, heat oil, add mustard seeds, curry leaves, green chili, and ginger-garlic paste. Sauté and add turmeric, salt, mashed potatoes, and coriander.</p>

      <h4>Prepare the batter</h4>
      <p>In a bowl, mix besan, salt, baking soda, and water to form a thick batter.</p>

      <h4>Make the vadas</h4>
      <p>Form balls from the potato filling, dip in the batter, and deep-fry until golden.</p>

      <h4>Assemble Vada Pav</h4>
      <p>Slice pav, apply chutneys, place the vada inside, and serve hot with fried green chili.</p>
      `,
    strYoutube: "https://youtu.be/r4saZD0J_gU",
    ingredients:[
    { ingredient: "Pav buns" },
    { ingredient: "Potatoes" },
    { ingredient: "Green chili" },
    { ingredient: "Ginger-garlic paste" },
    { ingredient: "Turmeric" },
    { ingredient: "Mustard seeds" },
    { ingredient: "Curry leaves" },
    {ingredient: "Coriander" },
    { ingredient: "Besan (gram flour)" },
    { ingredient: "Baking soda" },
    { ingredient: "Salt" },
    { ingredient: "Oil" },
    ]     
  },
  {
    idMeal: "Ds",
    strMeal: "Dosa",
    strMealThumb: "images/dosa.jpg",
    strCategory: "Street Food",
    strArea: "Indian",
    strInstructions:
    `<h4>Prepare the batter</h4>
    <p>Soak rice and urad dal separately, grind to a smooth paste, mix, and ferment overnight.</p>

    <h4>Cook the dosa</h4>
    <p>Heat a tawa, pour batter, and spread into a thin circle. Drizzle oil or ghee on edges.</p>

    <h4>Cook and serve</h4>
        <p>Once golden and crisp, fold and serve hot with chutney and sambar.</p>
    `,
    strYoutube: "https://www.youtube.com/watch?v=1dCguTWLiJ4",
    ingredients: [
    { ingredient: "Dosa batter (rice + urad dal)" },
    { ingredient: "Oil or ghee" },
    { ingredient: "Salt" },
    ]
  },
  {
    idMeal: "Pp",
    strMeal: "Palak paneer",
    strMealThumb: "images/Palak-Paneer.jpg",
    strCategory: "Vegetarian curry",
    strArea: "Indian",
    strInstructions:
    `<h4>Prepare spinach puree</h4>
    <p>Blanch spinach leaves, cool, and blend to a smooth paste.</p>

    <h4>Make the masala</h4>
    <p>In a pan, heat oil, sauté cumin, onions, and ginger-garlic paste. Add tomatoes and cook till soft.</p>

    h4>Combine and cook</h4>
    <p>Add spinach puree, spices, and salt. Cook for 5–7 mins. Add paneer and simmer.</p>

    <h4>Finish</h4>
    <p>Add a splash of cream and serve hot with naan or rice.</p>
    `,
    strYoutube: "https://m.youtube.com/watch?v=vCDy7vjbz_M&t=0s",
    ingredients:[
    { ingredient: "Spinach (palak)" },
    { ingredient: "Paneer" },
    { ingredient: "Onions" },
    { ingredient: "Tomatoes" },
    { ingredient: "Ginger-garlic paste" },
    { ingredient: "Garam masala" },
    { ingredient: "Cumin" },
    { ingredient: "Cream" },
    { ingredient: "Salt" },
    { ingredient: "Oil or ghee" },
    ]
  },
  {
    idMeal: "Sm",
    strMeal: "Samosa",
    strMealThumb: "images/samosa.jpg",
    strCategory: "Street Food",
    strArea: "Indian",
    strInstructions:
    `<h4>Prepare the dough</h4>
<p>Mix maida, salt, and oil. Add water and knead a stiff dough. Rest for 30 mins.</p>

<h4>Make the filling</h4>
<p>Boil potatoes and peas. In a pan, sauté cumin, ginger, and add mashed veggies, spices, and salt.</p>

<h4>Shape and fry</h4>
<p>Roll dough, cut into halves, make cone shapes, fill, and seal. Deep fry until golden brown.</p>
`,
strYoutube:"https://www.youtube.com/watch?v=3OZn-iCGf5s&pp=ygUJI2FzYW1idXNh",
ingredients:[
    { ingredient: "Maida (flour)" },
    { ingredient: "Potatoes" },
    { ingredient: "Peas" },
    { ingredient: "Cumin seeds" },
    { ingredient: "Ginger" },
    { ingredient: "Garam masala" },
    { ingredient: "Salt" },
    { ingredient: "Oil" },

    ]
  },
  {
    idMeal: "Sz",
    strMeal: "Sizzler",
    strMealThumb: "images/sizzler.jpg",
    strCategory: "Dish meal",
    strArea: "Indian",
    strInstructions:
    `<h4>Prepare the base</h4>
<p>Boil and stir-fry rice/noodles. Grill cutlet or paneer until crispy.</p>

<h4>Cook veggies</h4>
<p>Sauté mixed vegetables with sauces and salt.</p>

<h4>Assemble the sizzler</h4>
<p>Heat iron plate, place cabbage leaf, arrange rice, veggies, and cutlet. Pour hot sauce and serve steaming hot.</p>
`,
strYoutube:"https://m.youtube.com/watch?v=B5AhbQZ9qAA",
ingredients: [
  { ingredient: "Mixed vegetables (carrot, beans, capsicum)" },
  { ingredient: "Boiled rice or noodles" },
  { ingredient: "Veg cutlet or paneer" },
  { ingredient: "Sizzling sauce (soy sauce, chili sauce, garlic)" },
  { ingredient: "Butter" },
  { ingredient: "Cabbage leaf" },
  ]
  },
  {
    idMeal: "Is",
    strMeal: "Idli Sambar",
    strMealThumb: "images/idli-sambar.jpg",
    strCategory: "Breakfast meal",
    strArea: "Indian",
    strInstructions:
    `<h4>Steam idlis</h4>
<p>Pour batter into idli plates and steam for 10–12 mins. Set aside.</p>

<h4>Prepare sambar</h4>
<p>Cook toor dal until soft. Boil veggies separately. In a pan, sauté mustard seeds, curry leaves, add dal, veggies, tamarind, and sambar powder.</p>

<h4>Serve</h4>
<p>Serve hot sambar with idlis and coconut chutney.</p>
`,
strYoutube:"https://www.youtube.com/watch?v=3lWb4qBqrms&pp=0gcJCfwAo7VqN5tD",
ingredients: [
  { ingredient: "Idli batter (rice and urad dal)" },
  { ingredient: "Toor dal" },
  { ingredient: "Sambar powder" },
  { ingredient: "Tamarind" },
  { ingredient: "Mustard seeds" },
  { ingredient: "Curry leaves" },
  { ingredient: "Vegetables (like drumstick, carrots)" },
  { ingredient: "Salt" },
]
  },
  {
    
    idMeal: "Sfr",
    strMeal: "Schezwan Fried Rice",
    strMealThumb: "images/schezwan-veg-fried-rice.jpg",
    strCategory: "Indo-Chinese dish",
    strArea: "Indian",
    strInstructions:
    `<h4>Prep the veggies</h4>
<p>Chop all veggies finely. Heat oil in a wok, sauté garlic and vegetables on high flame.</p>

<h4>Add sauces</h4>
<p>Add soy sauce, schezwan sauce, and salt. Toss well.</p>

<h4>Combine with rice</h4>
<p>Add cooked rice and stir-fry for 2–3 mins. Garnish with spring onions and serve.</p>
`,
strYoutube:"https://www.youtube.com/watch?v=MM7U0h9wScM",
ingredients: [
  { ingredient: "Cooked rice" },
  { ingredient: "Schezwan sauce" },
  { ingredient: "Vegetables (carrot, capsicum, cabbage)" },
  { ingredient: "Soy sauce" },
  { ingredient: "Garlic" },
  { ingredient: "Spring onions" },
  { ingredient: "Oil" },
]
  },
  {
    idMeal: "Sp",
    strMeal: "Sev puri",
    strMealThumb: "images/Sevpuri.jpg",
    strCategory: "Fast food",
    strArea: "Indian",
    strInstructions:
    `<h4>Assemble the base</h4>
<p>Place papdi on a plate. Top with mashed potatoes, onions, tomatoes.</p>

<h4>Add chutneys</h4>
<p>Spoon green and tamarind chutney generously over each.</p>

<h4>Finish</h4>
<p>Sprinkle chaat masala and lots of sev. Garnish with coriander.</p>`,
strYoutube:"https://www.youtube.com/watch?v=a4xJhM8ZVqE&pp=0gcJCdgAo7VqN5tD",
ingredients: [
  { ingredient: "Papdi (flat puris)" },
  { ingredient: "Boiled potatoes" },
  { ingredient: "Onion" },
  { ingredient: "Tomato" },
  { ingredient: "Green chutney" },
  { ingredient: "Tamarind chutney" },
  { ingredient: "Sev" },
  { ingredient: "Chaat masala" },
]
  },
  {
    idMeal: "P",
    strMeal: "Paani puri",
    strMealThumb: "images/pani-puri.jpg",
    strCategory: "Fast food",
    strArea: "Indian",
    strInstructions:
    `<h4>Make green pani</h4>
<p>Blend mint, coriander, chili, tamarind, cumin, and black salt. Chill well.</p>

<h4>Prepare filling</h4>
<p>Mix mashed potatoes with moong/chana and spices.</p>

<h4>Serve</h4>
<p>Crack open puris, fill with stuffing, tamarind chutney, and green pani. Serve immediately.</p>
`,
strYoutube:"https://www.youtube.com/watch?v=uplm_zjmEok",
ingredients: [
  { ingredient: "Puris" },
  { ingredient: "Boiled potatoes" },
  { ingredient: "Boiled moong or chana" },
  { ingredient: "Tamarind chutney" },
  { ingredient: "Mint leaves" },
  { ingredient: "Coriander leaves" },
  { ingredient: "Green chili" },
  { ingredient: "Black salt" },
  { ingredient: "Roasted cumin powder" },
]
  },
  {
    idMeal: "D",
    strMeal: "Dhokla",
    strMealThumb: "images/Dhokla_on_Gujrart.jpg",
    strCategory: " Traditional Gujarati cuisine",
    strArea: "Indian",
    strInstructions:
    `<h4>Make the batter</h4>
<p>Mix besan, curd, turmeric, salt, and water. Rest for 15 mins. Add eno and mix quickly.</p>

<h4>Steam the dhokla</h4>
<p>Pour batter into greased tray and steam for 15–20 mins. Cool slightly and cut into pieces.</p>

<h4>Prepare tempering</h4>
<p>Heat oil, add mustard seeds, curry leaves, green chili, sugar, and lemon juice. Pour over dhokla and serve.</p>
`,
strYoutube:"https://www.youtube.com/watch?v=97-Y-XeYN88&pp=0gcJCfwAo7VqN5tD",
ingredients: [
  { ingredient: "Besan (gram flour)" },
  { ingredient: "Curd" },
  { ingredient: "Eno fruit salt" },
  { ingredient: "Turmeric" },
  { ingredient: "Salt" },
  { ingredient: "Mustard seeds" },
  { ingredient: "Curry leaves" },
  { ingredient: "Green chili" },
  { ingredient: "Sugar" },
  { ingredient: "Lemon juice" },
]
  },
  {
     idMeal: "Bb",
    strMeal: " Baingan Bharta",
    strMealThumb: "images/Baingan-Bharta.jpg",
    strCategory: "Curry",
    strArea: "Indian",
    strInstructions:
    `<h4>Roast the brinjal</h4>
<p>Roast eggplant over flame until soft. Peel skin and mash the pulp.</p>

<h4>Make the masala</h4>
<p>In a pan, sauté onions, garlic, and green chili. Add tomatoes and cook till mushy.</p>

<h4>Cook together</h4>
<p>Add mashed brinjal, spices, and salt. Cook for 5–10 mins. Garnish with coriander and serve.</p>
`,
strYoutube:"https://www.youtube.com/watch?v=4K0Icc-oAbw&pp=0gcJCfwAo7VqN5tD",
ingredients: [
  { ingredient: "Brinjal (eggplant)" },
  { ingredient: "Onions" },
  { ingredient: "Tomatoes" },
  { ingredient: "Garlic" },
  { ingredient: "Green chili" },
  { ingredient: "Turmeric" },
  { ingredient: "Red chili powder" },
  { ingredient: "Garam masala" },
  { ingredient: "Coriander leaves" },
  { ingredient: "Salt" },
  { ingredient: "Oil" },
]
  },

];



function showMessage(message, isError = false, isLoading = false) {
  messageArea.textContent = message;
  if (isError) messageArea.classList.add("error");
  if (isLoading) messageArea.classList.add("loading");
}

function clearMessage() {
  messageArea.textContent = "";
  messageArea.className = "message";
}

function displayRecipes(recipes) {
  

  if (!recipes || recipes.length === 0) {
    showMessage("No recipes to display");
    return;
  }

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe-item");
    recipeDiv.dataset.id = recipe.idMeal;

    recipeDiv.innerHTML = `
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" loading="lazy">
        <h3>${recipe.strMeal}</h3>
    `;

    resultsGrid.appendChild(recipeDiv);
  });
}

randomButton.addEventListener("click", getRandomRecipe);
function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * indianVegRecipes.length);
  const randomRecipe = indianVegRecipes[randomIndex];
  displayRecipeDetails(randomRecipe);
  showModal();
}


function showModal() {
  console.log(" showModal() called"); 
  modal.classList.remove("hidden"); 
  document.body.style.overflow = "hidden";
}


function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

resultsGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".recipe-item");

  if (card) {
    const recipeId = card.dataset.id;
    getRecipeDetails(recipeId);
  }
});

function getRecipeDetails(id) {
  console.log("Clicked ID:", id);
  console.log("Available IDs:", indianVegRecipes.map(r => r.idMeal)); 
  const recipe = indianVegRecipes.find(item => item.idMeal.toLowerCase() === id.toLowerCase());
  console.log("Recipe Details:", recipe);




  if (recipe) {
    displayRecipeDetails(recipe);
    showModal();
  } else {
    modalContent.innerHTML = '<p class="message error">Recipe not found.</p>';
    showModal();
  }
}

const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", () => {
  const printContent = document.getElementById("recipe-details-content").innerHTML;
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>Print Recipe</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2, h3, h4 { color: #333; }
          img { max-width: 100%; height: auto; }
          ul { padding-left: 20px; }
          .video-wrapper { margin-top: 20px; }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
});

modalCloseBtn.addEventListener("click", closeModal);


function searchRecipes(query) {
  clearMessage();
  resultsGrid.innerHTML = "";
  const filteredRecipes = indianVegRecipes.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredRecipes.length > 0) {
    displayRecipes(filteredRecipes);
  } else {
    showMessage(`No recipes found for "${query}"`, true);
  }
}

function displayRecipeDetails(recipe) {
  const categoryHTML = recipe.strCategory
    ? `<h3>Category: ${recipe.strCategory}</h3>`
    : "";
  const areaHTML = recipe.strArea ? `<h3>Area: ${recipe.strArea}</h3>` : "";
  const instructionsHTML = `
  <h3>Instructions</h3>
  <div class="instructions-block">
    ${recipe.strInstructions || "Instructions not available."}
  </div>
`;

  const youtubeHTML = recipe.strYoutube
    ? `<h3>Video Recipe</h3><div class="video-wrapper"><a href="${recipe.strYoutube}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></div>`
    : "";

  let ingredientsHTML = "";
  if (recipe.ingredients && recipe.ingredients.length > 0) {
    const ingredientsList = recipe.ingredients
      .map(
        (item) =>
          `<li>${item.ingredient}</li>`
      )
      .join("");
    ingredientsHTML = `<h3>Ingredients</h3><ul>${ingredientsList}</ul>`;
  }

  modalContent.innerHTML = `
    <h2>${recipe.strMeal}</h2>
    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
    ${categoryHTML}
    ${areaHTML}
    ${ingredientsHTML}
    ${instructionsHTML}
    ${youtubeHTML}
  `;
  
}
displayRecipes(indianVegRecipes);



