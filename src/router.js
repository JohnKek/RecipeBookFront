import VueRouter from "vue-router";
import RecipeList from "@/components/RecipeList";
import RecipeShow from "@/components/RecipeShow";
import CreateRecipe2 from "@/components/CreateRecipe2";
import products from "@/components/products";
import Search from "@/components/Search";
import Changes from "@/components/Changes";
export default new VueRouter({
    routes:[
        {
            path: '/',
            name:'main',
            component: RecipeList
        },
        {
            path: '/recipe',
            name:'recipe',
            component: RecipeShow
        },
        {
            path: '/recipe/:id',
            name:'recipePage',
            component: RecipeShow
        },
        {
            path: '/recipe/name/:name',
            name:'recipeSearch',
            component: Search
        },
        {
            path:'/CreateRecipe',
            name:'CreateRecipe',
            component: CreateRecipe2
        },
        {
            path: '/products',
            name:'products',
            component: products
        },
        {
            path: '/change/:id',
            name:'change',
            component: Changes
        },
    ]
})