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
          validation="min:3"
          :validation-messages="{
            min: 'Nome deve conter ao menos 3 letras.',
          }"
        />
        <span
          class="help-block"
          v-if="$v.nomeAdmin.$error && !$v.nomeAdmin.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="email"
          label="Email *"
          validation="min:3|email"
          name="emailAdmin"
          v-model="emailAdmin"
          :validation-messages="{
            min: 'Email inválido.',
          }"
        />
        <span
          class="help-block"
          v-if="$v.emailAdmin.$error && !$v.emailAdmin.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="password"
          label="Senha *"
          validation="min:6"
          name="senhaAdmin"
          v-model="senhaAdmin"
          :validation-messages="{
            min:
              'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
          }"
        />
        <span
          class="help-block"
          v-if="$v.senhaAdmin.$error && !$v.senhaAdmin.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="password"
          label="Confirme a senha *"
          validation="min:6"
          name="confirmarSenhaAdmin"
          v-model="confirmarSenhaAdmin"
          :validation-messages="{
            min:
              'Senha deve conter ao menos 6 letras, números ou caracteres especiais.',
          }"
        />
        <span
          class="help-block"
          v-if="
            $v.confirmarSenhaAdmin.$error && !$v.confirmarSenhaAdmin.required
          "
          >Campo obrigatório</span
        >

        <FormulateInput
          type="text"
          label="Telefone *"
          placeholder="(00) 0000-0000"
          validation="min:8|number"
          name="telefoneAdmin"
          v-model="telefoneAdmin"
          :validation-messages="{
            min: 'Telefone inválido.',
            number: 'Somente números',
          }"
        />
        <span
          class="help-block"
          v-if="$v.telefoneAdmin.$error && !$v.telefoneAdmin.required"
          >Campo obrigatório</span
        >
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
          validation="min:3"
          v-model="nomeTecnico"
          :validation-messages="{
            min: 'Nome deve conter ao menos 3 letras.',
          }"
        />
        <span
          class="help-block"
          v-if="$v.nomeTecnico.$error && !$v.nomeTecnico.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="email"
          label="Email *"
          validation="min:3|email"
          name="emailTecnico"
          v-model="emailTecnico"
          :validation-messages="{
            min: 'Email deve conter ao menos 3 letras.',
          }"
        />
        <span
          class="help-block"
          v-if="$v.emailTecnico.$error && !$v.emailTecnico.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="password"
          label="Senha *"
          validation="min:6"
          name="senhaTecnico"
          v-model="senhaTecnico"
          :validation-messages="{
            min:
              'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
          }"
        />
        <span
          class="help-block"
          v-if="$v.senhaTecnico.$error && !$v.senhaTecnico.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="password"
          label="Confirme a senha *"
          validation="min:6"
          name="confirmarSenhaTecnico"
          v-model="confirmarSenhaTecnico"
          :validation-messages="{
            min:
              'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
          }"
        />
        <span
          class="help-block"
          v-if="
            $v.confirmarSenhaTecnico.$error &&
              !$v.confirmarSenhaTecnico.required
          "
          >Campo obrigatório</span
        >

        <FormulateInput
          type="text"
          label="Telefone *"
          placeholder="(00) 0000-0000"
          validation="min:8|number"
          name="telefoneTecnico"
          v-model="telefoneTecnico"
          :validation-messages="{
            min: 'Telefone inválido.',
            number: 'Somente números',
          }"
        />
        <span
          class="help-block"
          v-if="$v.telefoneTecnico.$error && !$v.telefoneTecnico.required"
          >Campo obrigatório</span
        >
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
    confirmarSenhaAdmin: { required, minLength: minLength(6) },
    telefoneAdmin: { required, minLength: minLength(3) },
    nomeTecnico: { required, minLength: minLength(3) },
    emailTecnico: { required, minLength: minLength(3), email },
    senhaTecnico: { required, minLength: minLength(6) },
    confirmarSenhaTecnico: { required, minLength: minLength(6) },
    telefoneTecnico: { required, minLength: minLength(3) },
    form: [
      "nomeAdmin",
      "emailAdmin",
      "senhaAdmin",
      "confirmarSenhaAdmin",
      "telefoneAdmin",
      "nomeTecnico",
      "emailTecnico",
      "senhaTecnico",
      "confirmarSenhaTecnico",
      "telefoneTecnico",
    ],
  },
  computed: {
    ...mapFields({
      fields: [
        "nomeAdmin",
        "emailAdmin",
        "senhaAdmin",
        "confirmarSenhaAdmin",
        "telefoneAdmin",
        "usarDadosAdmin",
        "nomeTecnico",
        "emailTecnico",
        "senhaTecnico",
        "confirmarSenhaTecnico",
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
        this.confirmarSenhaTecnico = this.confirmarSenhaAdmin;
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
