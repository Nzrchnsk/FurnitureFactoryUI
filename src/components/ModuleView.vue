<template>
  <div class="module">
    <div class="container">
      <div class="row">
        <div class="col-md-3">{{ Module.id }}</div>
        <div class="col-md-3">{{ Module.name }}</div>
        <div class="col-md-3">{{ Module.price }}</div>
        <div class="col-md-3">
          <img v-if="Module.image == null" src="http://placehold.it/200x200">
          <img v-if="Module.image != null" src="{{Module.image}}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleView",
  props: {
    Module: {}
  }
}
</script>

<style scoped>

</style>