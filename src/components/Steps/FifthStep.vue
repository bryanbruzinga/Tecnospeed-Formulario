<template>
  <form>
    <div class="container">
      <h2>Dados do responsável financeiro</h2>
      <FormulateInput
        type="radio"
        :options="{ 10: '10', 15: '15', 20: '20', 25: '25', 30: '30' }"
        label="Dia preferencial para vencimento"
        name="vencimento"
        validation="required"
        v-model="vencimento"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="checkbox"
        name="usarDadosAdmin"
        v-model="usarDadosAdmin"
        label="Desejo usar os dados do administrador para preencher estes campos."
      />

      <FormulateInput
        type="text"
        label="Nome Completo *"
        name="nomeResponsavelFinanceiro"
        v-model="nomeResponsavelFinanceiro"
        validation="required|min:3"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Nome deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput
        type="email"
        label="Email *"
        validation="required|min:3|email"
        name="emailResponsavelFinanceiro"
        v-model="emailResponsavelFinanceiro"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Email deve conter ao menos 3 letras.',
          email: 'Entre com um email válido.',
        }"
      />

      <FormulateInput
        type="password"
        label="Senha *"
        validation="required|min:6"
        name="senhaResponsavelFinanceiro"
        v-model="senhaResponsavelFinanceiro"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min:
            'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
        }"
      />

      <FormulateInput
        type="password"
        label="Confirme a senha *"
        validation="required"
        name="senhaAdmin|min:6"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min:
            'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
        }"
      />

      <FormulateInput
        type="text"
        label="Celular *"
        placeholder="(00) 0000-0000"
        validation="required|min:8|number"
        name="celularResponsavelFinanceiro"
        v-model="celularResponsavelFinanceiro"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Celular inválido.',
          number: 'Somente números.',
        }"
      />
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  name: "fifthStep",
  data() {
    return {
      senhaAConfirmarTecnico2: "",
      senhaAConfirmarTecnico1: "",
      senhaAConfirmarAdmin2: "",
      senhaAConfirmarAdmin1: "",
    };
  },
  computed: {
    ...mapFields({
      fields: [
        "vencimento",
        "usarDadosAdmin",
        "nomeResponsavelFinanceiro",
        "emailResponsavelFinanceiro",
        "senhaResponsavelFinanceiro",
        "celularResponsavelFinanceiro",
      ],
      base: "formFields",
      mutation: "UPDATE_FORMFIELDS",
    }),
  },
  methods: {
    populateTechnicianFields() {
      if (this.usarDadosAdmin) {
        this.nomeTecnico = this.nomeAdmin;
        this.emailTecnico = this.emailAdmin;
        this.senhaTecnico = this.senhaAdmin;
        this.telefoneTecnico = this.telefoneAdmin;
      }
    },
    checkPassword(senha1, senha2) {
      if (senha1 === senha2) {
        this.senhaAdmin = senha1;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
