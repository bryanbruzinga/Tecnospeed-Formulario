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
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

:root {
  --primary-font: "Open Sans", sans-serif;
  --primary-color: #13a9e1;
  --secondary-color: #0f76b8;
  --text: #4f5c6a;
  --textHover: #212529;
}

h2 {
  font-family: var(--primary-font);
  text-align: center;
}
</style>
