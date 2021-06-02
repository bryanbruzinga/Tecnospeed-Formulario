<template>
  <form>
    <div class="container">
      <FormulateInput
        type="text"
        label="Nome completo *"
        validation="min:3"
        name="nomeRepresentante"
        v-model="nomeRepresentante"
        :validation-messages="{
          min: 'Nome deve conter ao menos 3 letras.',
        }"
      />
      <span
        class="help-block"
        v-if="$v.nomeRepresentante.$error && !$v.nomeRepresentante.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="CPF *"
        validation="min:10|number"
        name="cpfRepresentante"
        v-model="cpfRepresentante"
        :validation-messages="{
          min: 'CPF inválido.',
          number: 'Somente números.',
        }"
      />
      <span
        class="help-block"
        v-if="$v.cpfRepresentante.$error && !$v.cpfRepresentante.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="email"
        label="Email *"
        validation="^email"
        name="emailRepresentante"
        v-model="emailRepresentante"
        :validation-messages="{
          email: 'Não é um email válido.',
        }"
      />
      <span
        class="help-block"
        v-if="$v.emailRepresentante.$error && !$v.emailRepresentante.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="date"
        label="Data de nascimento *"
        name="dataNascimentoRepresentante"
        v-model="dataNascimentoRepresentante"
      />
      <span
        class="help-block"
        v-if="
          $v.dataNascimentoRepresentante.$error &&
            !$v.dataNascimentoRepresentante.required
        "
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="Telefone *"
        validation="min:8|number"
        name="telefoneRepresentante"
        v-model="telefoneRepresentante"
        :validation-messages="{
          min: 'Telefone inválido.',
          number: 'Somente números.',
        }"
      />
      <span
        class="help-block"
        v-if="
          $v.telefoneRepresentante.$error && !$v.telefoneRepresentante.required
        "
        >Campo obrigatório</span
      >
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "thirdStep",
  validations: {
    nomeRepresentante: { required, minLength: minLength(3) },
    cpfRepresentante: { required, minLength: minLength(10) },
    emailRepresentante: { required, minLength: minLength(3), email },
    dataNascimentoRepresentante: { required },
    telefoneRepresentante: { required, minLength: minLength(3) },
    form: [
      "nomeRepresentante",
      "cpfRepresentante",
      "emailRepresentante",
      "dataNascimentoRepresentante",
      "telefoneRepresentante",
    ],
  },
  computed: {
    ...mapFields({
      fields: [
        "nomeRepresentante",
        "cpfRepresentante",
        "emailRepresentante",
        "dataNascimentoRepresentante",
        "telefoneRepresentante",
      ],
      base: "formFields",
      mutation: "UPDATE_FORMFIELDS",
    }),
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
}
</style>
