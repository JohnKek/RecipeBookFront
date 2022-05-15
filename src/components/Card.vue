<template>
  <router-link :to="{name: 'recipePage',params:{id: recipe.idRecipe}}"><div>
    <img class="recipe_pic"
         :src="require(`../assets/${idRep}`)" alt="">
    <div class="recipe_description">
      <div class="recipe_name">{{ recipe.recipeName }}</div>
      <div class="recipe_time">
        <div class="time_pic"></div>
        <div class="time_text">{{ recipe.recipeTime }} минуты</div>
      </div>
    </div>

  </div></router-link>
</template>

<script>
export default {
  data(){
    return{
      idRep:null
    }
  },
  mounted() {
    this.idRep=this.recipe.recipeImgPath.replace(/"/g,'')
  },
  name: "Card",
  /*props:['recipe'],*/
  props:{
    recipe:{
      type:Object,
      required: true
    }
  }
}
</script>