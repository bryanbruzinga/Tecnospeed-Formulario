<template>
  <form-wizard>
    <tab-content title="Dados da organização">
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
  </form-wizard>
</template>

<script>
import FirstStep from "../components/FirstStep.vue";
import secondStep from "../components/SecondStep.vue";
import ThirdStep from "../components/ThirdStep.vue";
import FourthStep from "../components/FourthStep.vue";

export default {
  name: "home",
  components: {
    FirstStep,
    secondStep,
    ThirdStep,
    FourthStep,
  },
};
</script>

<style></style>
