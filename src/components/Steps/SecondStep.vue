<template>
  <div>
    <h2>
      Preencha os dados abaixo para entendermos mais sobre a sua organização.
    </h2>

    <form action="">
      <div class="container">
        <FormulateInput
          type="checkbox"
          label="Linguagens de Programação *"
          :options="[
            'Delphi',
            'Visual Basic',
            'C#',
            'PHP',
            'Java',
            'Outras',
            'Nenhuma',
          ]"
          name="linguagensProgramacao"
          v-model="linguagens"
        />
        <span
          class="help-block"
          v-if="$v.linguagens.$error && !$v.linguagens.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="text"
          placeholder="Separe as linguagens por vírgula. Ex: Go, Lua, .NET"
          name="outrasLinguagens"
          v-model="outrasLinguagens"
          :disabled="linguagens.includes('Outras') ? false : true"
        />

        <FormulateInput
          type="checkbox"
          label="Ramo de atividade *"
          name="ramoAtividade"
          :options="[
            'Varejo',
            'Industria',
            'Comércio',
            'Transporte',
            'Serviço',
          ]"
          v-model="ramoAtividade"
        />
        <span
          class="help-block"
          v-if="$v.ramoAtividade.$error && !$v.ramoAtividade.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="checkbox"
          label="Estado onde possui clientes *"
          name="estadosCliente"
          :options="estados.map((value) => ({ label: value, value }))"
          v-model="estadosCliente"
        />
        <span
          class="help-block"
          v-if="$v.estadosCliente.$error && !$v.estadosCliente.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="checkbox"
          label="Formas comercialização ERP *"
          name="formasComercioERP"
          :options="['Locação', 'Vendas', 'Uso Interno', 'Outro', 'Nenhuma']"
          v-model="formasComercioERP"
        />
        <span
          class="help-block"
          v-if="$v.formasComercioERP.$error && !$v.formasComercioERP.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="text"
          name="outrasFormasComercioERP"
          v-model="outrasFormasComercioERP"
          :disabled="formasComercioERP.includes('Outro') ? false : true"
        />

        <FormulateInput
          type="text"
          label="Principais clientes"
          name="principaisClientes"
          v-model="principaisClientes"
        />

        <FormulateInput
          type="number"
          label="Quantidade de clientes *"
          name="quantidadeClientes"
          validation="number"
          v-model="quantidadeClientes"
          :validation-messages="{
            number: 'Somente números',
          }"
        />
        <span
          class="help-block"
          v-if="$v.quantidadeClientes.$error && !$v.quantidadeClientes.required"
          >Campo obrigatório</span
        >

        <FormulateInput
          type="number"
          label="Número de funcionários"
          name="numeroFuncionarios"
          v-model="numeroFuncionarios"
          validation="number"
          :validation-messages="{ number: 'Somente números' }"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { required } from "vuelidate/lib/validators";

export default {
  name: "secondStep",
  data() {
    return {
      estados: [
        "Todos",
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
    };
  },
  validations: {
    linguagens: { required },
    ramoAtividade: { required },
    estadosCliente: { required },
    formasComercioERP: { required },
    quantidadeClientes: { required },
    form: [
      "linguagens",
      "ramoAtividade",
      "estadosCliente",
      "formasComercioERP",
      "quantidadeClientes",
    ],
  },
  computed: {
    ...mapFields({
      fields: [
        "linguagens",
        "outrasLinguagens",
        "ramoAtividade",
        "estadosCliente",
        "formasComercioERP",
        "outrasFormasComercioERP",
        "principaisClientes",
        "quantidadeClientes",
        "numeroFuncionarios",
      ],
      base: "formFields",
      mutation: "UPDATE_FORMFIELDS",
    }),
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
