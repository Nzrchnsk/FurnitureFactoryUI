<template>
  <div class="EditModule">
    <input type="text" v-model="Module.name"/>
    <input type="number" v-model="Module.price"/>
    <input type="hidden" v-model="Module.image"/>
    <button click="Save()">Сохранить</button>
  </div>
</template>

<script>
import db from './db'

export default {
  name: "ModuleEdit",
  data() {
    return {
      Module: {
        id: 0,
        name: "",
        image: "",
        price: 0
      }
    };
  },
  methods: {
    Save: async function () {
      const data = db.Put("module?", this.Module)
    }
  }
}
</script>

<style scoped>

</style>