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
    />

    <FormulateInput
      type="text"
      label="Nome fantasia *"
      name="nomeFantasia"
      validation="required|min:3"
      v-model="nomeFantasia"
    />

    <FormulateInput
      type="text"
      label="CNPJ *"
      name="cnpj"
      validation="required|min:14"
      v-model="cnpj"
    />

    <FormulateInput
      type="text"
      label="Inscrição estadual *"
      name="inscricaoEstadual"
      validation="required|min:3"
      v-model="inscricaoEstadual"
    />

    <FormulateInput type="checkbox" label="Isento" v-model="isento" />

    <FormulateInput
      type="text"
      label="Telefone *"
      name="telefone"
      validation="required|min:10"
      v-model="telefone"
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
    />

    <FormulateInput
      type="text"
      label="CEP *"
      name="cep"
      validation="required|min:8"
      @keyup="preencherCep"
      v-model="cep"
    />

    <FormulateInput
      type="text"
      label="Endereço *"
      name="endereco"
      validation="required|min:3"
      v-model="endereco"
    />

    <FormulateInput
      type="text"
      label="Número *"
      name="numero"
      validation="required"
      v-model="numero"
    />

    <FormulateInput
      type="text"
      label="Complemento"
      name="complemento"
      validation="min:3"
      v-model="complemento"
    />

    <FormulateInput
      type="text"
      label="Bairro *"
      name="bairro"
      validation="required|min:3"
      v-model="bairro"
    />

    <FormulateInput
      type="select"
      label="Estado *"
      name="estado"
      validation="required"
      :change="puxarCidades(estado)"
      :options="estados.map((value) => ({ label: value, value }))"
      v-model="estado"
    />

    <FormulateInput
      type="text"
      label="Cidade *"
      name="cidade"
      validation="required|min:3"
      v-model="cidade"
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

<style>
form {
  border: 1px solid #ccc;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formulate-input {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.formulate-input-wrapper {
  display: flex;
}

.formulate-input-wrapper label {
  margin-right: 1rem;
  justify-self: flex-start;
}
</style>
