import axios from "axios";
import { API_BASE_URL, API_KEY, PER_PAGE_DEFAULT } from "../config";

export async function fetchPhotosAlbum(params = {}) {
  // o parâmetro recebe como default um objeto vazio
  return axios.get(API_BASE_URL, {
    params: {
      per_page: PER_PAGE_DEFAULT,
      ...params, // aqui entra os parametros da url: page, per_page e query para a busca
    },
    headers: {
      Authorization: `${API_KEY}`, // autorização da api
    },
  });
}
