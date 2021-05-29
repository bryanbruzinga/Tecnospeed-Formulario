<template>
  <form-wizard
    nextButtonText="Próximo"
    backButtonText="Voltar"
    finishButtonText="Finalizar"
    color="#13A9E1"
  >
    <tab-content title="Dados da organização" icon="ti-user">
      <FirstStep />
    </tab-content>

    <tab-content title="Informações adicionais da organização">
      <secondStep />
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
import secondStep from "../components/Steps/SecondStep.vue";
import ThirdStep from "../components/Steps/ThirdStep.vue";
import FourthStep from "../components/Steps/FourthStep.vue";
import FifthStep from "../components/Steps/FifthStep.vue";

export default {
  name: "home",
  components: {
    FirstStep,
    secondStep,
    ThirdStep,
    FourthStep,
    FifthStep,
  },
};
</script>

<style>
.wizard-tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
