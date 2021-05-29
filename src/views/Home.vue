<template>
  <div class="container">
    <button onClick="trocarMenu('registerForm')">Dados da organização</button>
    <button>Informações adicionais da organização</button>
    <button>Dados do representante legal</button>
    <button>Dados do administrador e do responsável técnico</button>
    <button>Dados para envio da nota fiscal e boleto</button>
    <RegisterForm v-show="formularioAtivo='registerForm'" />
  </div>
</template>

<script>
  import RegisterForm from '../components/RegisterForm.vue'

  export default {
      name: 'Home',
      data() {
        return {
          formularioAtivo: 'registerForm',
        }
      },
    components: {
      RegisterForm,
    },
    methods: {
      trocarMenu(valor) {
        this.formularioAtivo = valor
      }
    }
  }
</script>

<style>

</style>