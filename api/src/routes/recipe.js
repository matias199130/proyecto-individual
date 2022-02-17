const { Recipe, Diet } = require("../db"); //trae de la base de datos
const { API_KEY} = process.env;
 
const axios = require("axios");
const router = require('express').Router();
const { Router } = require('express');
// [ ] GET /recipes?name="...":
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

//router.get('/recipes', async (req, res)=>{

  const getApiInfo = async () => {
  const recipeApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
  );
  const todoRecipe = await recipeApi.data.results.map(e => {
    return {
      name: e.title,
   vegetarian: e.vegetarian,
      vegan: e.vegan,
      glutenFree: e.glutenFree,
      dairyFree: e.dairyFree,
      image: e.image,
      idApi: e.id,
      core: e.spoonacularScore,
      healthScore: e.healthScore,
      types: e.dishTypes?.map((el) => el),
      diets: e.diets?.map((el) => el),
      summary: e.summary,
      steps:
        e.analyzedInstructions[0] && e.analyzedInstructions[0].steps
          ? e.analyzedInstructions[0].steps.map((item) => item.step).join(" \n")
          : "",
    };
  });

  return todoRecipe;
};




const getDb = async () =>{
const recipeDb = await Recipe.findAll({
  include: {
    model: Diet,
    attributes: ["name"],
    through: {
      attributes: [],
    },
  },
});

return recipeDb
}



const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDb();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  let recipesTotal = await getAllRecipes();
  if (name) {
    let recipeName = await recipesTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase()));
      recipeName.length ? res.status(200).send(recipeName) : res.status(404).send("error");
  }else{
   res.status(200).send(recipesTotal);
  }
})
// [ ] GET /recipes/{idReceta}
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

// [ ] POST /recipe
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos

module.exports = router;
