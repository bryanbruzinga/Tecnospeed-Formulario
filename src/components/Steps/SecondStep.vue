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
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="text"
        placeholder="Separe as linguagens por vírgula. Ex: Go, Lua, .NET"
        name="outrasLinguagens"
      />

      <FormulateInput
        type="checkbox"
        label="Ramo de atividade *"
        name="ramoAtividade"
        :options="['Varejo', 'Industria', 'Comércio', 'Transporte', 'Serviço']"
        validation="required"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="checkbox"
        label="Estado onde possui clientes *"
        name="estadosDosClientes"
        :options="['Todos']"
        validation="required"
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
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput type="text" name="outrasFormasComercioERP" />

      <FormulateInput
        type="text"
        label="Principais clientes"
        name="principaisClientes"
      />

      <FormulateInput
        type="number"
        label="Quantidade de clientes *"
        name="quantidadeClientes"
        validation="required"
        :validation-messages="{
          required: 'Campo obrigatório.',
        }"
      />

      <FormulateInput
        type="number"
        label="Número de funcionários *"
        name="numeroFuncionarios"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "secondStep",
};
</script>

<style>
.wizard-header {
  display: none;
}
</style>
