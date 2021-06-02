<template>
  <div class="List">
    <ModuleView v-for="(Module, index) in ModuleList.data" :key="index" v-bind:Module="Module"/>
<!--    <ModuleEdit v-for="(Module, index) in ModuleList.data" :key="index" v-bind:Module="Module"/>-->
  </div>
</template>

<script>
import db from './db';
import ModuleView from "./ModuleView";
// import ModuleView from "./ModuleEdit";

export default {
  name: "ModuleList",
  data() {
    return {
      ModuleList: []
    };
  },
  async mounted() {
    this.ModuleList = await db.Get("module/list?", [[]]);
  },
  components: {
    ModuleView
  }
};
</script>

<style scoped>

</style>