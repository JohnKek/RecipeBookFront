<template>

  <body>
  <div class="wrapper">

    <header class="header">
      <div class="header_container container">
        <div class="header_menu_burger"><span></span></div>
        <nav class="header_menu">
          <ul class="menu_list">
            <li class="menu_item"><router-link :to="{name: 'recipeSearch',params:{name: 'Диетические столы'}}">Диетические столы</router-link></li>
            <li class="menu_item"><router-link :to="{name: 'recipeSearch',params:{name: 'Правильное питание'}}">Правильное питание</router-link></li>
            <li class="menu_item"><router-link :to="{name: 'recipeSearch',params:{name: 'Первое блюдо'}}">Первое блюдо</router-link></li>
            <li class="menu_item"><router-link :to="{name: 'recipeSearch',params:{name: 'Второе блюдо'}}">Второе блюдо</router-link></li>
            <li class="menu_item"><router-link :to="{name: 'recipeSearch',params:{name: 'К празднику'}}">К празднику</router-link></li>
            <li class="menu_item"><router-link :to="{name: 'recipeSearch',params:{name: 'Национальная кухня'}}">Национальная кухня</router-link></li>
          </ul>
        </nav>
        <router-link class="header_logo" :to="{name: 'main'}"><div class="header_logo"></div></router-link>
        <div class="right_icons">
          <router-link class="add_link" :to="{name:'products'}"><div class="add_product"></div>
            <div class="add_text">Создать продукт</div></router-link>
          <router-link class="add_link" :to="{name:'CreateRecipe'}"><div class="add_recipe"></div>
            <div class="add_text">Добавить рецепт</div></router-link>
          <div class="header_profile"></div>
        </div>
      </div>
    </header>

    <main class="main_block">
      <div class="main_block_container container">
        <div class="main_blocks_body">
          <div class="form">
<!--            <button class="search_button" type="submit" @click="logMet(search)"><router-link :to="{name: 'recipeSearch',params:{name: search}}"></router-link></button>-->
           <router-link :to="{name: 'recipeSearch',params:{name: search}}"><button class="search_button" type="submit" @click="logMet(search)"></button></router-link>

            <input class="form_input_main" id="searchField" type="text" placeholder="Поиск по названию или ингредиенту" v-model="search">
            </div>

          <div class="recipes_block">
            <div class="recipe_item" v-for="recipe in recipes" :key="recipe.idRecipe">
              <Card :recipe="recipe"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  </body>
</template>

<script>
import Card from "@/components/Card";
import Vue from "vue";

export default {
  components: {Card},
  data() {
    return {
      recipes: [],
      recipe: null,
      search:''

    }
  },

  mounted() {
    this.loadRecipe()
  },
  methods: {
    async loadRecipe() {
      var productApi = Vue.resource('http://localhost:8080/recipe/all');
      productApi.get().then(result =>
          result.json().then(data =>
              data.forEach(recipe => this.recipes.push(recipe))
          )
      )
      this.recipes.forEach(recipe => console.log(recipe.id_recipe))
      console.log(this.recipes)
    },
    getId(id) {
      console.log(id)
    },
    logMet(info){
      console.log(info)
    }
  },
}
</script>

<style lang="css" >
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  font-weight: 400;
}
a {
  text-decoration: none;
  color: inherit;
}
.wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
}
.container {
  max-width: 1100px;
  padding: 0px 20px;
  margin: 0px auto;
  box-sizing: content-box;
}

/******************HEADER********************/

.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid #999999;
}
.header::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.8;
  /*z-index: 2;*/
}
.header_container {
  position: relative;
  display: flex;
  /*justify-content: space-between;*/
  max-width: 100%;
  min-height: 80px;
  align-items: center;
}
.header_menu_burger {
  position: relative;
  width: 30px;
  height: 17px;
  z-index: 30;
}
.header_menu_burger::before {
  top: 0px;
}
.header_menu_burger::after {
  bottom: 0px;
}
.header_menu_burger::before, .header_menu_burger::after {
  content: "";
  background-color: #666666;
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0px;
  transition: all .3s ease;
}
.header_menu_burger span {
  position: absolute;
  left:0px;
  width: 100%;
  height: 1px;
  top: 8px;
  background-color: #666666;
}
.header_menu_burger.active::before {
  transform: rotate(-37deg);
  width: 40%;
  top: 4px;
}
.header_menu_burger.active::after {
  transform: rotate(37deg);
  width: 40%;
  bottom: 4px;
}
body.lock {
  overflow: hidden;
}
.header_menu {
  position: fixed;
  width: 350px;
  height: 100%;
  top: 0px;
  left: -1000%;
  overflow: auto;
  opacity: 1;
  background-color: #d9effa;
  padding: 80px 0px 0px 0px;
  transition: all .3s ease;
  z-index: 2;
}
.header_menu.active {
  left: 0px;
}
.menu_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
.menu_item {
  position: relative;
  width: 100%;
  border-top: 1px solid #a5d1e8;
  padding: 10px 25px;
  transition: .3s background-color ease;
}
.menu_item:last-child {
  border-bottom: 1px solid #a5d1e8;
}
.menu_item:hover {
  background-color: #bbdef0;
}
.menu_link {
  color: inherit;
  line-height: 171%;
  font-size: 16px;
  transition: opacity .1s linear;
}
.header_logo {
  width: 96px;
  height: 55px;
  text-align: center;
  margin: 0 auto;
  background: url(../assets/logo.png) 0 0/ 100% auto no-repeat;
  z-index: 2;
}
.header_profile {
  background: url(../assets/icons/account.png) 0 0/ 100% auto no-repeat;
  width: 30px;
  height: 30px;
  z-index: 2;
}

/*********************MAIN************************/

.main_blocks_body {

}
.form {
  width: 550px;
  margin: 0px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}
.form_input_main {
  display: flex;

  width: 100%;
  height: 50px;
  border-radius: 35px;
  padding: 15px 15px 15px 55px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: #ededed;
  color: #666666;
}
.form_input:focus{
  outline: 0;
}

.search_button {
  background: url(../assets/icons/search.png) 0 0/ 100% auto no-repeat;
  width: 25px;
  height: 25px;
  border: none;
  position: absolute;
  left: 15px;
  bottom: 12px;
  cursor: pointer;
  padding: 0px;
  margin: auto 0;
}


.recipes_block {
  margin: 50px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.recipe_item {
  position: relative;
  width: 1000px;
  height: 400px;
  color: #fff;
  margin: 7px;
  background-color: #0f0f0f;
  border-radius: 20px;
}
.recipe_item img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  opacity: 0.8;
  transition: .5s opacity ease;
}
.recipe_item:hover img {
  opacity: 0.4;
}
.recipe_description{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 25px;
}
.recipe_author {
  font-size: 18px;
  font-weight: 300;
}
.recipe_name {
  font-size: 60px;
  font-weight: 600;
  margin: 25px 0px 0px 0px;
  line-height: 120%;
}
.recipe_time {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 18px;
}
.time_pic {
  background: url(../assets/icons/time.png) 0 0/ auto 100% no-repeat;
  width: 40px;
  height: 40px;
  margin: 0px 5px 0px 0px;
}
.time_text {
  font-size: 18px;
  font-weight: 300;
}
.right_icons {
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
}
.right_icons >*:not(:last-child) {
  margin: 0px 30px 0px 0px;
}
.add_link {
  display: flex;
  align-items: center;
}
.add_text {
  width: 100px;
  margin: 0px 0px 0px 10px;
  font-size: 12px;
}
.add_product {
  background: url(../assets/icons/ingridient.png) 0 0/ 100% auto no-repeat;
  width: 30px;
  height: 30px;
  z-index: 5;
}
.add_recipe {
  background: url(../assets/icons/recipe.png) 0 0/ 100% auto no-repeat;
  width: 30px;
  height: 30px;
  z-index: 5;
}
.header_profile {
  background: url(../assets/icons/account.png) 0 0/ 100% auto no-repeat;
  width: 30px;
  height: 30px;
  z-index: 2;
}

.form_title {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0px 0px 25px 0px;
}
.form_item {
  margin: 0px 0px 20px 0px;
}
.form_label {
  display: block;
  font-size: 16px;
  margin: 0px 0px 5px 0px;
}
.form_input {
  height: 40px;
  width: 400px;
  font-size: 16px;
  border: none;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 5px;
  transition: .3s box-shadow ease;
}
.form_input:focus {
  box-shadow: 0px 0px 12px #a5d1e8;
}
.button_block {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>