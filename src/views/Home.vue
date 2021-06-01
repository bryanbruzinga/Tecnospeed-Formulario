<template>
  <form-wizard
    stepSize="xs"
    shape="circle"
    nextButtonText="Próximo"
    backButtonText="Voltar"
    finishButtonText="Finalizar"
    color="var(--primary-color)"
    @on-complete="onComplete"
  >
    <tab-content
      title="Dados da organização"
      :before-change="() => validateStep('firstStep')"
    >
      <FirstStep ref="firstStep" />
    </tab-content>

    <tab-content
      title="Informações adicionais da organização"
      :before-change="() => validateStep('secondStep')"
    >
      <SecondStep ref="secondStep" />
    </tab-content>

    <tab-content
      title="Dados do representante legal"
      :before-change="() => validateStep('thirdStep')"
    >
      <ThirdStep ref="thirdStep" />
    </tab-content>

    <tab-content
      title="Dados do administrador e do responsável técnico"
      :before-change="() => validateStep('fourthStep')"
    >
      <FourthStep ref="fourthStep" />
    </tab-content>

    <tab-content
      title="Dados para envio da nota fiscal e boleto"
      :before-change="() => validateStep('fifthStep')"
    >
      <FifthStep ref="fifthStep" />
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
      var refToValidate = this.$refs[step];
      refToValidate.$v.form.$touch();
      const isValid = !refToValidate.$v.form.$invalid;
      return isValid;
    },
    onComplete() {
      alert("Formulário finalizado");
    },
  },
};
</script>

<style></style>
