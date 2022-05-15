<template>
  <!--  <div class="list_text">
    <i>({{product.id}})</i>
    {{product.name}}
    {{product.calories}}
    {{product.proteins}}
    {{product.fats}}
    {{product.carbonydrates}}</div>-->
  <li class="list_item">
    <div class="list_text"><span class="list_name">{{product.name}}</span>{{product.proteins}} гр - белки, {{product.fats}} гр - жиры, {{product.carbonydrates}} гр - углеводы, {{product.calories}} ккал</div>
    <div class="button_block">
      <input class="btn" type="button" value="Изменить" @click="edit"/>
      <input class="btn" type="button" value="Удалить" @click="del"/>
    </div>
  </li>
</template>

<script>


import Vue from "vue";

export default {
  props: ['product', 'editMethod', 'products'],
  name: "ProductRow",
  methods: {
    edit: function () {
      /* eslint-disable */
      this.editMethod(this.product)
    },
    del: function (id) {
      var productApi = Vue.resource('http://localhost:8080/product{/id}');
      productApi.remove({id: this.product.id}).then(result => {
        if (result.ok) {
          this.products.splice(this.products.indexOf(this.product), 1)
        }
      })
    }
  }
}
</script>

<style scoped>
.list {
  margin: 40px 0px 0px 0px;
}
.list_item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  max-width: 100%;
  margin: 0px 0px 20px 0px;
}
.list_text {
  margin: 0px 30px 0px 0px;
  width: 600px;
  font-weight: 300;
}
.list_name {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: #6da1c9;
  margin: 0px 15px 0px 0px;
}
.btn {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  background-color: #fff;
  color: #6da1c9;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  border: none;
  border: 2px solid #6da1c9;
  border-radius: 20px;
  cursor: pointer;
}
</style>