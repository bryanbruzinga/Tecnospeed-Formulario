import axios from "axios";

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

export function getStates() {
  return axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );
}

export function getCities(uf) {
  return axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`
  );
}

export function validateCNPJ(cnpj) {
  return axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
}
