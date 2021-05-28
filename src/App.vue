<template>
  <div id="app">
    <RegisterForm />
  </div>
</template>

<script>
  import RegisterForm from './components/RegisterForm.vue'

  export default {
    components: {
      RegisterForm
    }
  }
</script>

<style>

#app {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
