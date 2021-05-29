<template>
  <form-wizard
    stepSize="xs"
    shape="square"
    nextButtonText="Próximo"
    backButtonText="Voltar"
    finishButtonText="Finalizar"
    color="var(--primary-color)"
  >
    <tab-content title="Dados da organização">
      <FirstStep />
    </tab-content>

    <tab-content title="Informações adicionais da organização">
      <SecondStep />
    </tab-content>

    <tab-content title="Dados do representante legal">
      <ThirdStep />
    </tab-content>

    <tab-content title="Dados do administrador e do responsável técnico">
      <FourthStep />
    </tab-content>

    <tab-content title="Dados para envio da nota fiscal e boleto">
      <FifthStep />
    </tab-content>
  </form-wizard>
</template>

<script>
import FirstStep from "../components/Steps/FirstStep.vue";
import SecondStep from "../components/Steps/SecondStep.vue";
import ThirdStep from "../components/Steps/ThirdStep.vue";
import FourthStep from "../components/Steps/FourthStep.vue";
import FifthStep from "../components/Steps/FifthStep.vue";

export default {
  name: "home",
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    FifthStep,
  },
};
</script>

<style>
form {
  padding: 1rem 0;
}
.wizard-tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
