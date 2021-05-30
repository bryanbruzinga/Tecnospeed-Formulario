<template>
  <form>
    <div>
      <h2>Administrador da área restrita</h2>
      <FormulateInput
        type="text"
        label="Nome Completo *"
        name="nomeAdmin"
        validation="required|min:3"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Nome deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput
        type="email"
        label="Email *"
        validation="required|min:3|email"
        name="emailAdmin"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Email inválido.',
        }"
      />

      <FormulateInput
        type="password"
        label="Senha *"
        validation="required|min:6"
        name="senhaAdmin"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min:
            'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
        }"
      />

      <FormulateInput
        type="password"
        label="Confirme a senha *"
        validation="required|min:6"
        name="senhaAdmin"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min:
            'Senha deve conter ao menos 6 letras, números ou caracteres especiais.',
        }"
      />

      <FormulateInput
        type="text"
        label="Telefone *"
        placeholder="(00) 0000-0000"
        validation="required|min:8|number"
        name="telefoneAdmin"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Telefone inválido.',
          number: 'Somente números',
        }"
      />
    </div>

    <div>
      <h2>Técnico responsável pelo uso das soluções na organização.</h2>

      <FormulateInput
        type="checkbox"
        name="usarDadosAdmin"
        :options="[
          'Desejo usar os dados do administrador para preencher estes campos.',
        ]"
      />

      <FormulateInput
        type="text"
        label="Nome Completo *"
        name="nomeTecnico"
        validation="required|min:3"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Nome deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput
        type="email"
        label="Email *"
        validation="required|min:3|email"
        name="emailTecnico"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Email deve conter ao menos 3 letras.',
        }"
      />

      <FormulateInput
        type="password"
        label="Senha *"
        validation="required|min:6"
        name="senhaTecnico"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min:
            'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
        }"
      />

      <FormulateInput
        type="password"
        label="Confirme a senha *"
        validation="required|min:6"
        name="senhaTecnico"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min:
            'Senha deve conter ao menos 6 letras, números ou caractéres especiais.',
        }"
      />

      <FormulateInput
        type="text"
        label="Telefone *"
        placeholder="(00) 0000-0000"
        validation="required|min:8|number"
        name="telefoneTecnico"
        :validation-messages="{
          required: 'Campo obrigatório.',
          min: 'Telefone inválido.',
          number: 'Somente números',
        }"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "FourthStep",
};
</script>

<style></style>
