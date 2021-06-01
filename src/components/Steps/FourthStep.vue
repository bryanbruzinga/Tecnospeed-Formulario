<template>
  <form>
    <div>
      <div class="container">
        <h2>Administrador da área restrita</h2>
        <FormulateInput
          type="text"
          label="Nome Completo *"
          name="nomeAdmin"
          v-model="nomeAdmin"
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
          name="emailAdmin"
          v-model="emailAdmin"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min: 'Email inválido.',
          }"
        />

        <FormulateInput
          type="password"
          label="Senha *"
          validation="required|min:6"
          name="senhaAdmin"
          v-model="senhaAdmin"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min:
              'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
          }"
        />

        <FormulateInput
          type="password"
          label="Confirme a senha *"
          validation="required|min:6"
          name="senhaAdmin"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min:
              'Senha deve conter ao menos 6 letras, números ou caracteres especiais.',
          }"
        />

        <FormulateInput
          type="text"
          label="Telefone *"
          placeholder="(00) 0000-0000"
          validation="required|min:8|number"
          name="telefoneAdmin"
          v-model="telefoneAdmin"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min: 'Telefone inválido.',
            number: 'Somente números',
          }"
        />
      </div>

      <div class="container">
        <h2>Técnico responsável pelo uso das soluções na organização.</h2>

        <FormulateInput
          type="checkbox"
          name="usarDadosAdmin"
          label="Desejo usar os dados do administrador para preencher estes campos."
          v-model="usarDadosAdmin"
          @change="populateTechnicianFields"
        />

        <FormulateInput
          type="text"
          label="Nome Completo *"
          name="nomeTecnico"
          validation="required|min:3"
          v-model="nomeTecnico"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min: 'Nome deve conter ao menos 3 letras.',
          }"
        />

        <FormulateInput
          type="email"
          label="Email *"
          validation="required|min:3|email"
          name="emailTecnico"
          v-model="emailTecnico"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min: 'Email deve conter ao menos 3 letras.',
          }"
        />

        <FormulateInput
          type="password"
          label="Senha *"
          validation="required|min:6"
          name="senhaTecnico"
          v-model="senhaTecnico"
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
          name="senhaTecnico"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min:
              'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
          }"
        />

        <FormulateInput
          type="text"
          label="Telefone *"
          placeholder="(00) 0000-0000"
          validation="required|min:8|number"
          name="telefoneTecnico"
          v-model="telefoneTecnico"
          :validation-messages="{
            required: 'Campo obrigatório.',
            min: 'Telefone inválido.',
            number: 'Somente números',
          }"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "FourthStep",
  validations: {
    nomeAdmin: { required, minLength: minLength(3) },
    emailAdmin: { required, minLength: minLength(3), email },
    senhaAdmin: { required, minLength: minLength(6) },
    telefoneAdmin: { required, minLength: minLength(3) },
    nomeTecnico: { required, minLength: minLength(3) },
    emailTecnico: { required, minLength: minLength(3), email },
    senhaTecnico: { required, minLength: minLength(6) },
    telefoneTecnico: { required, minLength: minLength(3) },
    form: [
      "nomeAdmin",
      "emailAdmin",
      "senhaAdmin",
      "telefoneAdmin",
      "nomeTecnico",
      "emailTecnico",
      "senhaTecnico",
      "telefoneTecnico",
    ],
  },
  computed: {
    ...mapFields({
      fields: [
        "nomeAdmin",
        "emailAdmin",
        "senhaAdmin",
        "telefoneAdmin",
        "usarDadosAdmin",
        "nomeTecnico",
        "emailTecnico",
        "senhaTecnico",
        "telefoneTecnico",
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
