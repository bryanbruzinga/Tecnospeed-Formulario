<template>
  <form>
    <div>
      <h2>Administrador da área restrita</h2>
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
        label="Telefone *"
        placeholder="(00) 0000-0000"
        validation="required"
        name="telefoneAdmin"
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
        validation="required"
      />

      <FormulateInput
        type="email"
        label="Email *"
        validation="required"
        name="emailTecnico"
      />

      <FormulateInput
        type="password"
        label="Senha *"
        validation="required"
        name="senhaTecnico"
      />

      <FormulateInput
        type="password"
        label="Confirme a senha *"
        validation="required"
        name="senhaTecnico"
      />

      <FormulateInput
        type="text"
        label="Telefone *"
        placeholder="(00) 0000-0000"
        validation="required"
        name="telefoneTecnico"
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
