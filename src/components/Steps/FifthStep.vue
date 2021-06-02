<template>
  <form>
    <div class="container">
      <h2>Dados do responsável financeiro</h2>
      <FormulateInput
        type="radio"
        :options="{ 10: '10', 15: '15', 20: '20', 25: '25', 30: '30' }"
        label="Dia preferencial para vencimento"
        name="vencimento"
        v-model="vencimento"
      />
      <span
        class="help-block"
        v-if="$v.vencimento.$error && !$v.vencimento.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="checkbox"
        name="usarDadosAdminComoResponsavelFinanceiro"
        v-model="usarDadosAdminComoResponsavelFinanceiro"
        label="Desejo usar os dados do administrador para preencher estes campos."
        @change="populateFinancialResponsibleData"
      />

      <FormulateInput
        type="text"
        label="Nome Completo *"
        name="nomeResponsavelFinanceiro"
        v-model="nomeResponsavelFinanceiro"
        validation="min:3"
        :validation-messages="{
          min: 'Nome deve conter ao menos 3 letras.',
        }"
      />
      <span
        class="help-block"
        v-if="
          $v.nomeResponsavelFinanceiro.$error &&
            !$v.nomeResponsavelFinanceiro.required
        "
        >Campo obrigatório</span
      >

      <FormulateInput
        type="email"
        label="Email *"
        validation="min:3|email"
        name="emailResponsavelFinanceiro"
        v-model="emailResponsavelFinanceiro"
        :validation-messages="{
          min: 'Email deve conter ao menos 3 letras.',
          email: 'Entre com um email válido.',
        }"
      />
      <span
        class="help-block"
        v-if="
          $v.emailResponsavelFinanceiro.$error &&
            !$v.emailResponsavelFinanceiro.required
        "
        >Campo obrigatório</span
      >

      <FormulateInput
        type="password"
        label="Senha *"
        validation="min:6"
        name="senhaResponsavelFinanceiro"
        v-model="senhaResponsavelFinanceiro"
        :validation-messages="{
          min:
            'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
        }"
      />
      <span
        class="help-block"
        v-if="
          $v.senhaResponsavelFinanceiro.$error &&
            !$v.senhaResponsavelFinanceiro.required
        "
        >Campo obrigatório</span
      >

      <FormulateInput
        type="password"
        label="Confirme a senha *"
        validation="min:6"
        name="senhaAdmin"
        v-model="confirmarSenhaResponsavelFinanceiro"
        :validation-messages="{
          min:
            'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
        }"
      />
      <span
        class="help-block"
        v-if="
          $v.confirmarSenhaResponsavelFinanceiro.$error &&
            !$v.confirmarSenhaResponsavelFinanceiro.required
        "
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="Celular *"
        placeholder="(00) 0000-0000"
        validation="min:8|number"
        name="celularResponsavelFinanceiro"
        v-model="celularResponsavelFinanceiro"
        :validation-messages="{
          min: 'Celular inválido.',
          number: 'Somente números.',
        }"
      />
      <span
        class="help-block"
        v-if="
          $v.celularResponsavelFinanceiro.$error &&
            !$v.celularResponsavelFinanceiro.required
        "
        >Campo obrigatório</span
      >
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "fifthStep",
  validations: {
    vencimento: { required },
    nomeResponsavelFinanceiro: { required, minLength: minLength(3) },
    emailResponsavelFinanceiro: { required, minLength: minLength(3), email },
    senhaResponsavelFinanceiro: { required, minLength: minLength(6) },
    confirmarSenhaResponsavelFinanceiro: {
      required,
      minLength: minLength(6),
      sameAs: sameAs("senhaResponsavelFinanceiro"),
    },
    celularResponsavelFinanceiro: { required, minLength: minLength(3) },
    form: [
      "vencimento",
      "usarDadosAdminComoResponsavelFinanceiro",
      "nomeResponsavelFinanceiro",
      "emailResponsavelFinanceiro",
      "senhaResponsavelFinanceiro",
      "confirmarSenhaResponsavelFinanceiro",
      "celularResponsavelFinanceiro",
    ],
  },
  computed: {
    ...mapFields({
      fields: [
        "vencimento",
        "usarDadosAdminComoResponsavelFinanceiro",
        "nomeResponsavelFinanceiro",
        "emailResponsavelFinanceiro",
        "senhaResponsavelFinanceiro",
        "confirmarSenhaResponsavelFinanceiro",
        "celularResponsavelFinanceiro",
      ],
      base: "formFields",
      mutation: "UPDATE_FORMFIELDS",
    }),
  },
  methods: {
    populateFinancialResponsibleData() {
      if (this.usarDadosAdminComoResponsavelFinanceiro) {
        this.nomeResponsavelFinanceiro = this.$store.state.formFields.nomeAdmin;
        this.emailResponsavelFinanceiro = this.$store.state.formFields.emailAdmin;
        this.senhaResponsavelFinanceiro = this.$store.state.formFields.senhaAdmin;
        this.confirmarSenhaResponsavelFinanceiro = this.$store.state.formFields.confirmarSenhaAdmin;
        this.celularResponsavelFinanceiro = this.$store.state.formFields.telefoneAdmin;
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
