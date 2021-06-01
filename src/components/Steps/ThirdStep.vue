<template>
  <form>
    <div class="container">
      <FormulateInput
        type="text"
        label="Nome completo *"
        validation="required|min:3"
        name="nomeRepresentante"
        v-model="nomeRepresentante"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Nome deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput
        type="text"
        label="CPF *"
        validation="required|min:10|number"
        name="cpfRepresentante"
        v-model="cpfRepresentante"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'CPF inválido.',
          number: 'Somente números.',
        }"
      />

      <FormulateInput
        type="email"
        label="Email *"
        validation="^required|email"
        name="emailRepresentante"
        v-model="emailRepresentante"
        :validation-messages="{
          required: 'Campo obrigatório.',
          email: 'Não é um email válido.',
        }"
      />

      <FormulateInput
        type="date"
        label="Data de nascimento *"
        validation="required|date"
        name="dataNascimentoRepresentante"
        v-model="dataNascimentoRepresentante"
        :validation-messages="{
          required: 'Campo obrigatório.',
          date: 'Data inválida.',
        }"
      />

      <FormulateInput
        type="text"
        label="Telefone *"
        validation="required|min:8|number"
        name="telefoneRepresentante"
        v-model="telefoneRepresentante"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Telefone inválido.',
          number: 'Somente números.',
        }"
      />
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
