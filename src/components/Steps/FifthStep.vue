<template>
  <form>
    <div>
      <h2>Dados do responsável financeiro</h2>
      <FormulateInput
        type="radio"
        :options="{ 10: '10', 15: '15', 20: '20', 25: '25', 30: '30' }"
        label="Dia preferencial para vencimento"
        name="vencimento"
        validation="required"
        v-model="vencimento"
      />

      <FormulateInput
        type="checkbox"
        name="usarDadosAdmin"
        v-model="usarDadosAdmin"
        :options="[
          'Desejo usar os dados do administrador para preencher estes campos.',
        ]"
      />

      <FormulateInput
        type="text"
        label="Nome Completo *"
        name="nomeAdmin"
        validation="required"
      />

      <FormulateInput
        type="email"
        label="Email *"
        validation="required"
        name="emailAdmin"
      />

      <FormulateInput
        type="password"
        label="Senha *"
        validation="required"
        name="senhaAdmin"
      />

      <FormulateInput
        type="password"
        label="Confirme a senha *"
        validation="required"
        name="senhaAdmin"
      />

      <FormulateInput
        type="text"
        label="Celular *"
        placeholder="(00) 0000-0000"
        validation="required"
        name="celular"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "fifthStep",
};
</script>

<style></style>
