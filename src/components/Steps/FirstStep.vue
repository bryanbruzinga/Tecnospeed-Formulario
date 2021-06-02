<template>
  <form action="">
    <div class="container">
      <FormulateInput
        type="radio"
        :options="{ pessoa: 'Jurídica' }"
        label="Pessoa *"
        name="pessoa"
        v-model="pessoa"
      />
      <span class="help-block" v-if="$v.pessoa.$error && !$v.pessoa.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="Razão social *"
        name="razaoSocial"
        v-model="razaoSocial"
        validation="min:3"
        :validation-messages="{
          min: 'Campo deve conter ao menos 3 letras.',
        }"
      />
      <span
        class="help-block"
        v-if="$v.razaoSocial.$error && !$v.razaoSocial.required"
        >Campo obrigatório.</span
      >

      <FormulateInput
        type="text"
        label="Nome fantasia *"
        name="nomeFantasia"
        validation="min:3"
        v-model="nomeFantasia"
        :validation-messages="{
          min: 'Campo deve conter ao menos 3 letras.',
        }"
      />
      <span
        class="help-block"
        v-if="$v.nomeFantasia.$error && !$v.nomeFantasia.required"
        >Campo obrigatório.</span
      >

      <FormulateInput
        type="text"
        label="CNPJ *"
        name="cnpj"
        validation="min:14|number"
        v-model="cnpj"
        :validation-messages="{
          min: 'Campo deve conter ao menos 14 números.',
          number: 'Somente números',
        }"
      />
      <span
        class="help-block"
        v-if="
          $v.cnpj.$error && $v.nomeFantasia.$error && !$v.nomeFantasia.required
        "
        >Campo requerido</span
      >

      <FormulateInput
        type="text"
        label="Inscrição estadual *"
        name="inscricaoEstadual"
        validation="min:3"
        :disabled="isento"
        v-model="inscricaoEstadual"
        validation-name="Inscrição Estadual"
        :validation-messages="{
          min: 'Campo deve conter ao menos 3 letras.',
        }"
      />
      <span
        class="help-block"
        v-if="$v.inscricaoEstadual.$error && !$v.inscricaoEstadual.required"
        >Campo obrigatório</span
      >

      <FormulateInput type="checkbox" label="Isento" v-model="isento" />

      <FormulateInput
        type="text"
        label="Telefone *"
        name="telefone"
        validation="min:8|number"
        v-model="telefone"
        :validation-messages="{
          min: 'Telefone Inválido.',
          number: 'Somente números',
        }"
      />
      <span
        class="help-block"
        v-if="$v.telefone.$error && !$v.telefone.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="radio"
        :options="{
          empresaSoftware: 'Empresa de Software',
          representanteSoftware: 'Integrador / Representante de Software',
          empresaOutroRamo: 'Empresa de outro ramo',
        }"
        label="Tipo empresa"
        name="tipoEmpresa"
        v-model="tipoEmpresa"
      />
      <span
        class="help-block"
        v-if="$v.tipoEmpresa.$error && !$v.tipoEmpresa.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="CEP *"
        name="cep"
        validation="min:8|number"
        @keyup="preencherCep"
        v-model="cep"
        :validation-messages="{
          min: 'Cep inválido.',
          number: 'Somente números',
        }"
      />
      <span class="help-block" v-if="$v.cep.$error && !$v.cep.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="Endereço *"
        name="endereco"
        validation="min:3"
        v-model="endereco"
        :validation-messages="{
          min: 'Endereço inválido.',
        }"
      />
      <span
        class="help-block"
        v-if="$v.endereco.$error && !$v.endereco.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="Número *"
        name="numero"
        v-model="numero"
      />
      <span class="help-block" v-if="$v.numero.$error && !$v.numero.required"
        >Campo obrigatório</span
      >

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
        validation="min:3"
        v-model="bairro"
        :validation-messages="{
          min: 'Bairro inválido.',
        }"
      />
      <span class="help-block" v-if="$v.bairro.$error && !$v.bairro.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="select"
        label="Estado *"
        name="estado"
        :options="estados.map((value) => ({ label: value, value }))"
        v-model="estado"
      />
      <span class="help-block" v-if="$v.estado.$error && !$v.estado.required"
        >Campo obrigatório</span
      >

      <FormulateInput
        type="text"
        label="Cidade *"
        name="cidade"
        validation="min:3"
        v-model="cidade"
        :validation-messages="{
          min: 'Cidade inválida.',
        }"
      />
      <span class="help-block" v-if="$v.cidade.$error && !$v.cidade.required"
        >Campo obrigatório</span
      >
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
    inscricaoEstadual: {
      required,
      minLength: minLength(3),
    },
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
