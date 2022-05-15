<template>
  <div class="form">
    <form action="#" id="form" class="form_body">
      <h1 class="form_title">Продукт</h1>

      <div class="form_item">
        <label for="formName" class="form_label">Название продукта</label>
        <input id="formName" type="text" class="form_input" v-model="name">
      </div>
      <div class="form_item">
        <label for="formProtein" class="form_label">Белки, г</label>
        <input id="formProtein" type="number" class="form_input" v-model="proteins">
      </div>
      <div class="form_item">
        <label for="formFats" class="form_label">Жиры, г</label>
        <input id="formFats" type="number" class="form_input" v-model="fats">
      </div>
      <div class="form_item">
        <label for="formCarbohydrates" class="form_label">Углеводы, г</label>
        <input id="formCarbohydrates" type="number" class="form_input" v-model="carbonydrates">
      </div>
      <div class="form_item">
        <label for="formCalories" class="form_label">Калории, ккал</label>
        <input id="formCalories" type="number" class="form_input" v-model="calories">
      </div>
      <div class="button_block">
        <input type="button" value="Сохранить" class="form_button"  @click="save"/>
      </div>
      <AppAlert :alert="alert" @close="alert=null"></AppAlert>
    </form>

  </div>
</template>

<script>
import Vue from "vue";
import AppAlert from "@/components/AppAlert";

export default {
  name: "ProductForm",
  props: ['products', 'productAtr'],
  data: function () {
    return {
      name: '',
      calories: '',
      proteins: '',
      fats: '',
      carbonydrates: '',
      id: 0,
      formData: null,
      alert: null,
    }
  },
  watch: {
    productAtr: function (newVal) {
      this.name = newVal.name ,
          this.calories = newVal.calories ,
          this.proteins = newVal.proteins ,
          this.fats = newVal.fats ,
          this.carbonydrates = newVal.carbonydrates,
          this.id = newVal.id
    }
  },
  methods: {
    getIndex(list, id) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
          return i;
        }
      }
      return -1;
    },
    save: function () {
      /* eslint-disable */
      var productApi = Vue.resource('http://localhost:8080/product');
      var product = {
        id: this.id,
        name: this.name,
        calories: this.calories,
        proteins: this.proteins,
        fats: this.fats,
        carbonydrates: this.carbonydrates
      };
          if (this.id != 0) {
            try {
              console.log('putmet')
              var url='http://localhost:8080/product/'+this.id
              this.$http.put(url, product).then(response => {
                this.products[this.getIndex(this.products, this.id)] = response.body
                console.log(this.products)
              },error => {
                    console.log(error.body)
                    this.alert = {
                      type: 'danger',
                      title: 'Error: '+error.body.status,
                      text: error.body.message
                    }
                  }

              );
            }catch (e) {
              this.alert = {
                type: 'danger',
                title: 'Error',
                text: e.message
              }
            }
          } else {
            console.log('save')
            try{
            productApi.save({}, product).then(result =>{
                result.json().then(data => {
                  console.log(data)
                  this.name = ''
                  this.calories = '',
                      this.proteins = '',
                      this.fats = '',
                      this.carbonydrates = ''
                })},
                error => {
              console.log(error.body)
                  this.alert = {
                    type: 'danger',
                    title: 'Error: '+error.body.status,
                    text: error.body.message
                  }
                }
            )
            }
            catch (e) {
              console.log(e)
              this.alert = {
                type: 'danger',
                title: 'Error',
                text: e.message
              }
            }

          }





     /* window.location.reload()*/
    }
  },
  components: {AppAlert}
}
</script>

<style scoped>
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
  background-color: #ffffff;
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