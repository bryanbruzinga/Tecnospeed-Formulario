<template>
  <form action="">
    <div class="container">
      <FormulateInput
        type="radio"
        :options="{ pessoa: 'Jurídica' }"
        label="Pessoa *"
        name="pessoa"
        validation="required"
        v-model="pessoa"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="text"
        label="Razão social *"
        name="razaoSocial"
        v-model="razaoSocial"
        validation="required|min:3"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Campo deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput
        type="text"
        label="Nome fantasia *"
        name="nomeFantasia"
        validation="required|min:3"
        v-model="nomeFantasia"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Campo deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput
        type="text"
        label="CNPJ *"
        name="cnpj"
        validation="required|min:14|number"
        v-model="cnpj"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Campo deve conter ao menos 14 números.',
          number: 'Somente números',
        }"
      />

      <FormulateInput
        type="text"
        label="Inscrição estadual *"
        name="inscricaoEstadual"
        validation="required|min:3"
        :disabled="isento"
        v-model="inscricaoEstadual"
        validation-name="Inscrição Estadual"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Campo deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput type="checkbox" label="Isento" v-model="isento" />

      <FormulateInput
        type="text"
        label="Telefone *"
        name="telefone"
        validation="required|min:10|number"
        v-model="telefone"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Telefone Inválido.',
          number: 'Somente números',
        }"
      />

      <FormulateInput
        type="radio"
        :options="{
          empresaSoftware: 'Empresa de Software',
          representanteSoftware: 'Integrador / Representante de Software',
          empresaOutroRamo: 'Empresa de outro ramo',
        }"
        label="Tipo empresa"
        name="tipoEmpresa"
        validation="required"
        v-model="tipoEmpresa"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="text"
        label="CEP *"
        name="cep"
        validation="required|min:8|number"
        @keyup="preencherCep"
        v-model="cep"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Cep inválido.',
          number: 'Somente números',
        }"
      />
      <span>{{ erroCep }}</span>

      <FormulateInput
        type="text"
        label="Endereço *"
        name="endereco"
        validation="required|min:3"
        v-model="endereco"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Endereço inválido.',
        }"
      />

      <FormulateInput
        type="text"
        label="Número *"
        name="numero"
        validation="required"
        v-model="numero"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="text"
        label="Complemento"
        name="complemento"
        v-model="complemento"
      />

      <FormulateInput
        type="text"
        label="Bairro *"
        name="bairro"
        validation="required|min:3"
        v-model="bairro"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Bairro inválido.',
        }"
      />

      <FormulateInput
        type="select"
        label="Estado *"
        name="estado"
        validation="required"
        :options="estados.map((value) => ({ label: value, value }))"
        v-model="estado"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="text"
        label="Cidade *"
        name="cidade"
        validation="required|min:3"
        v-model="cidade"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Cidade inválida.',
        }"
      />
    </div>
  </form>
</template>

<script>
import { getCep, getStates } from "@/services.js";
import { mapFields } from "@/helpers.js";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "firstStep",
  data() {
    return {
      estados: [],
      cidades: [],
      erroCep: "",
    };
  },
  validations: {
    pessoa: { required },
    razaoSocial: { required, minLength: minLength(3) },
    nomeFantasia: { required, minLength: minLength(3) },
    cnpj: { required, minLength: minLength(10) },
    inscricaoEstadual: { required, minLength: minLength(3) },
    telefone: { required, minLength: minLength(8) },
    tipoEmpresa: { required },
    cep: { required, minLength: minLength(8) },
    endereco: { required, minLength: minLength(3) },
    numero: { required },
    bairro: { required, minLength: minLength(3) },
    estado: { required },
    cidade: { required, minLength: minLength(3) },
    form: [
      "pessoa",
      "razaoSocial",
      "nomeFantasia",
      "cnpj",
      "inscricaoEstadual",
      "telefone",
      "tipoEmpresa",
      "cep",
      "endereco",
      "numero",
      "bairro",
      "estado",
      "cidade",
    ],
  },
  computed: {
    ...mapFields({
      fields: [
        "pessoa",
        "razaoSocial",
        "nomeFantasia",
        "cnpj",
        "inscricaoEstadual",
        "isento",
        "telefone",
        "tipoEmpresa",
        "cep",
        "endereco",
        "numero",
        "complemento",
        "bairro",
        "estado",
        "cidade",
      ],
      base: "formFields",
      mutation: "UPDATE_FORMFIELDS",
    }),
  },

  methods: {
    puxarEstados() {
      try {
        getStates().then((r) =>
          r.data.map((item) => {
            this.estados.push(item.sigla);
            this.estados.sort();
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        try {
          getCep(cep).then((response) => {
            this.endereco = response.data.logradouro;
            this.bairro = response.data.bairro;
            this.estado = response.data.uf;
            this.cidade = response.data.localidade;
          });
        } catch (error) {
          this.erroCep = "Cep não encontrado";
        }
      }
    },
  },
  mounted() {
    this.puxarEstados();
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
