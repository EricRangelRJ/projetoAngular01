import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  //atributo
  endpoint = "http://localhost:8080/api/fornecedores";

  //injeção de dependência (@Autowired)
  constructor(private httpClient: HttpClient) { }

  //método para chamar o serviço POST (cadastro de fornecedor)
  post(fornecedor: any) {

    const params = new HttpParams()
      .set('nome', fornecedor.nome)
      .set('cnpj', fornecedor.cnpj);

    return this.httpClient.post
(this.endpoint, params, { responseType: 'text' })
  }

  //método para chamar o serviço PUT (edição de fornecedor)
  put(fornecedor: any) {

    const params = new HttpParams()
      .set('idFornecedor', fornecedor.idFornecedor)
      .set('nome', fornecedor.nome);

    return this.httpClient.put
(this.endpoint, params, { responseType: 'text' })
  }

  //método para chamar o serviço DELETE (exclusão de fornecedor)
  delete(idFornecedor: number) {
    return this.httpClient.delete
(this.endpoint + "/" + idFornecedor, { responseType: 'text' })
  }

  //método para chamar o serviço GET (consulta de fornecedores)
  get() {
    return this.httpClient.get(this.endpoint);
  }

  //Método para chamar o serviço GET por ID
  getById(idFornecedor : number){
    return this.httpClient.get(this.endpoint + "/" + idFornecedor)
  }
}
