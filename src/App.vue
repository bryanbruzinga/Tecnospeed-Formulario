<template>
  <div id="app">
    <HeaderMenu />
    <h1>Ficha Cadastral</h1>
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

h1,
h2 {
  font-family: var(--primary-font);
  text-align: center;
  margin: 1rem 0;
  color: var(--text);
}

form {
  padding: 1rem;
  border: 1px solid #ccc;
  width: 50vw;
}

form .formulate-input {
  margin-bottom: 0.875rem;
}

.formulate-input-element input:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.wizard-tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vue-form-wizard {
  width: 50vw;
  margin: 0 auto;
}

.vue-form-wizard .wizard-card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.vue-form-wizard .clearfix:after {
  display: none;
}

@media (max-width: 840px) {
  form {
    width: 90vw;
  }
  .vue-form-wizard {
    width: 90vw;
  }
}
</style>
