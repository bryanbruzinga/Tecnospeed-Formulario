<template>
  <form-wizard
    stepSize="xs"
    shape="square"
    nextButtonText="Próximo"
    backButtonText="Voltar"
    finishButtonText="Finalizar"
    color="var(--primary-color)"
    @on-validate="mergePartialModels"
  >
    <tab-content title="Dados da organização">
      <FirstStep ref="step1" :before-change="() => validateStep('step1')" />
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
    validate() {
      this.$v.form.$touch();
      const isValid = !this.$v.form.$invalid;
      this.$emit("on-validate", this.$data, isValid);
      return isValid;
    },
    validateStep(step) {
      if (this.$refs[step].$store.formFields.$invalid === true) {
        return false;
      }
    },
  },
};
</script>

<style></style>
