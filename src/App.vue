<template>
  <div id="app">
    <HeaderMenu />
    <router-view />
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";

export default {
  components: {
    HeaderMenu,
  },
};
</script>

<style>
:root {
  --primary-font: "Open Sans", sans-serif;
  --primary-color: #13a9e1;
}
</style>
