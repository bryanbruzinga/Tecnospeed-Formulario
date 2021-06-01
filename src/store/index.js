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
      linguagens: "",
      outrasLinguagens: "",
      ramoAtividade: "",
      estadosCliente: "",
      formasComercioERP: "",
      outrasFormasComercioERP: "",
      principaisClientes: "",
      quantidadeClientes: "",
      numeroFuncionarios: "",
      nomeRepresentante: "",
      cpfRepresentante: "",
      emailRepresentante: "",
      dataNascimentoRepresentante: "",
      telefoneRepresentante: "",
      nomeAdmin: "",
      emailAdmin: "",
      senhaAdmin: "",
      telefoneAdmin: "",
      usarDadosAdmin: false,
      nomeTecnico: "",
      emailTecnico: "",
      senhaTecnico: "",
      telefoneTecnico: "",
      vencimento: "",
      usarDadosAdminComoResponsavelFinanceiro: false,
      nomeResponsavelFinanceiro: "",
      emailResponsavelFinanceiro: "",
      senhaResponsavelFinanceiro: "",
      celularResponsavelFinanceiro: "",
    },
  },
  mutations: {
    UPDATE_FORMFIELDS(state, payload) {
      state.formFields = Object.assign(state.formFields, payload);
    },
  },
});
