<template>
  <form>
    <FormulateInput
      type="radio"
      :options="{ pessoa: 'Jurídica' }"
      label="Pessoa"
      name="pessoa"
      v-model="pessoa"
    />

    <FormulateInput
      type="text"
      label="Razão social *"
      name="razaoSocial"
      validation="required|min:3"
      v-model="razaoSocial"
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
      validation="min:3"
      v-model="complemento"
      :validation-messages="{
        min: 'Campo deve conter ao menos 3 letras.',
      }"
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
      :change="puxarCidades(estado)"
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
  </form>
</template>

<script>
import { getCep, getStates, getCities } from "@/services.js";
import { mapFields } from "@/helpers.js";

export default {
  name: "firstStep",
  data() {
    return {
      estados: [],
      cidades: [],
    };
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
      getStates().then((r) =>
        r.data.map((item) => {
          this.estados.push(item.sigla);
          this.estados.sort();
        })
      );
    },
    puxarCidades(estado) {
      getCities(estado).then((r) =>
        r.data.map((item) => {
          this.cidades.push(item.nome);
          this.cidades.sort();
        })
      );
    },
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep?.length === 8) {
        getCep(cep).then((response) => {
          this.endereco = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });
      }
    },
  },
  mounted() {
    this.puxarEstados();
  },
};
</script>

<style></style>
