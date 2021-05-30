<template>
  <form action="">
    <FormulateInput
      type="text"
      label="Nome completo *"
      validation="required|min:3"
      name="nome"
      :validation-messages="{
        required: 'Campo obrigatório.',
        min: 'Nome deve conter ao menos 3 letras.',
      }"
    />

    <FormulateInput
      type="text"
      label="CPF *"
      validation="required|min:10|number"
      name="cpf"
      :validation-messages="{
        required: 'Campo obrigatório.',
        min: 'CPF inválido.',
        number: 'Somente números',
      }"
    />

    <FormulateInput
      type="email"
      label="Email *"
      validation="^required|min:7|email"
      name="email"
      :validation-messages="{
        required: 'Campo obrigatório.',
        min: 'Email inválido.',
      }"
    />

    <FormulateInput
      type="date"
      label="Data de nascimento *"
      validation="required|date"
      name="dataNascimento"
      :validation-messages="{
        required: 'Campo obrigatório.',
      }"
    />

    <FormulateInput
      type="text"
      label="Telefone *"
      validation="required|min:8|number"
      name="telefone"
      :validation-messages="{
        required: 'Campo obrigatório.',
        min: 'Telefone inválido.',
        number: 'Somente números',
      }"
    />
  </form>
</template>

<script>
export default {
  name: "thirdStep",
};
</script>

<style></style>
