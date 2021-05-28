import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formFields: {
      pessoa: "",
      razaoSocial: "",
      nomeFantasia: "",
      cnpj: "",
      inscricaoEstadual: "",
      isento: false,
      telefone: "",
      tipoEmpresa: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      estado: "",
      cidade: "",
    },
  },
  mutations: {
    UPDATE_FORMFIELDS(state, payload) {
      state.formFields = Object.assign(state.formFields, payload);
    },
  },
  actions: {},
  modules: {},
});
