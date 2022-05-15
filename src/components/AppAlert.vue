<template>
  <div class="button_block_alert" v-if="alert" :class="alert.type">
<!--    <h1 class="alert_warn">{{ alert.title }}</h1>-->
    <h1 class="alert_warn">Ошибка: "{{ alert.text }}"</h1>
    <input type="button" class="form_button" :class="alert.type" @click="$emit('close')" value="Закрыть"/>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props: ['alert'],
  emits:['close']
}
</script>
<style scoped>
.form_button.danger{
  background-color: #ff858b;
}
.alert_warn {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 130%;
  margin: 10px 0;
}
</style>