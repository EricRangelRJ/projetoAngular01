import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../services/fornecedores.service';

@Component({
  selector: 'app-cadastro-fornecedores',
  templateUrl: './cadastro-fornecedores.component.html',
  styleUrls: ['./cadastro-fornecedores.component.css']
})
export class CadastroFornecedoresComponent implements OnInit {

  //atributos (campos)
  mensagemSucesso = '';
  mensagemErro = '';

  //inicialização por meio de injeção de dependencia (@AutoWired)
  constructor(private fornecedoresService: FornecedoresService) { }

  ngOnInit(): void {
  }

  //função executada no SUBMIT do formulário
  cadastrarFornecedor(formCadastro: any): void {

    //limpar o conteudo das mensagens
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    //executando uma chamada POST para a API
    this.fornecedoresService.post(formCadastro.form.value)
      .subscribe(
        (data) => { //retorno de sucesso da API
          this.mensagemSucesso = data;
          //limpar os campos do formulario
          formCadastro.form.reset();
        },
        (e) => { //retorno de erro da API
          this.mensagemErro = e.error;
        }
      );
  }

}

