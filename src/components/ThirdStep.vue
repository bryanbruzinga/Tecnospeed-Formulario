<template>
  <form action="">
    <FormulateInput
      type="text"
      label="Nome completo *"
      validation="required"
      name="nome"
    />

    <FormulateInput
      type="text"
      label="CPF *"
      validation="required"
      name="cpf"
    />

    <FormulateInput
      type="email"
      label="Email *"
      validation="required"
      name="email"
    />

    <FormulateInput
      type="date"
      label="Data de nascimento *"
      validation="required"
      name="dataNascimento"
    />

    <FormulateInput
      type="text"
      label="Telefone *"
      validation="required"
      name="telefone"
    />
  </form>
</template>

<script>
export default {
  name: "thirdStep",
};
</script>

<style></style>
