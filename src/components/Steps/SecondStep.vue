<template>
  <div>
    <h2>
      Preencha os dados abaixo para entendermos mais sobre a sua organização.
    </h2>

    <form action="">
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
        validation="required"
        v-model="linguagens"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

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
        :options="['Varejo', 'Industria', 'Comércio', 'Transporte', 'Serviço']"
        validation="required"
        v-model="ramoAtividade"
        :validation-messages="{ required: 'Campo obrigatório.' }"
      />

      <FormulateInput
        type="checkbox"
        label="Estado onde possui clientes *"
        name="estadosDosClientes"
        :options="['Todos']"
        validation="required"
        v-model="estadosCliente"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="checkbox"
        label="Formas comercialização ERP *"
        name="formasComercioERP"
        :options="['Locação', 'Vendas', 'Uso Interno', 'Outro', 'Nenhuma']"
        validation="required"
        v-model="formasComercioERP"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

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
        validation="required|number"
        v-model="quantidadeClientes"
        :validation-messages="{
          required: 'Campo obrigatório.',
          number: 'Somente números',
        }"
      />

      <FormulateInput
        type="number"
        label="Número de funcionários *"
        name="numeroFuncionarios"
        v-model="numeroFuncionarios"
        validation="number"
        :validation-messages="{ number: 'Somente números' }"
      />
    </form>
  </div>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  name: "secondStep",
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

<style>
.wizard-header {
  display: none;
}
</style>
