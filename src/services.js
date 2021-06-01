import axios from "axios";

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

export function getStates() {
  return axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );
}
