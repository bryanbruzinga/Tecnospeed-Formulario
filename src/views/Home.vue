<template>
  <form-wizard
    stepSize="xs"
    shape="square"
    nextButtonText="Próximo"
    backButtonText="Voltar"
    finishButtonText="Finalizar"
    color="var(--primary-color)"
  >
    <tab-content
      title="Dados da organização"
      :before-change="() => validateStep('firstStep')"
    >
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
  methods: {
    validateStep(step) {
      if (this.$refs[step].$v.formFields.$invalid === true) {
        return false;
      }
    },
  },
};
</script>

<style>
form {
  padding: 1rem;
  border: 1px solid #ccc;
  width: 50vw;
}

form .formulate-input {
  margin-bottom: 0.875rem;
}

.wizard-tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vue-form-wizard {
  width: 50vw;
  margin: 0 auto;
}

.wizard-card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
