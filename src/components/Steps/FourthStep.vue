<template>
  <form>
    <div>
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
        v-model="senhaAConfirmarAdmin1"
        @blur="checkPassword"
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
        v-model="senhaAConfirmarAdmin2"
        @blur="checkPassword"
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

    <div>
      <h2>Técnico responsável pelo uso das soluções na organização.</h2>

      <FormulateInput
        type="checkbox"
        name="usarDadosAdmin"
        label="Desejo usar os dados do administrador para preencher estes campos."
        v-model="usarDadosAdmin"
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
        v-model="senhaAConfirmarTecnico1"
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
        name="senhaTecnico"
        v-model="senhaAConfirmarTecnico2"
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
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  name: "FourthStep",
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
    checkPassword(senha1, senha2) {
      if (senha1 === senha2) {
        this.senhaAdmin = senha1;
      }
    },
  },
};
</script>

<style></style>
