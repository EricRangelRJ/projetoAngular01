import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../services/fornecedores.service';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  //atributos
  fornecedores = [
    {
      idFornecedor: 0,
      nome: '',
      cnpj: ''
    }
  ];

  categorias = [];



  //inicialização por injeção de dependencia (@Autowired)
  constructor(
    private fornecedoresService: FornecedoresService,
    private categoriasService: CategoriasService
  ) { }

  //evento executado quando o componente é carregado (aberto)
  ngOnInit(): void {

    //executando uma chamada HTTP GET para a API..
    //consultar fornecedores
    this.fornecedoresService.get()
      .subscribe(
        (data) => {
          this.fornecedores = (data as any[]);
        },
        (e) => {
          console.log(e);
        }
      );

    //executando uma chamada HTTP GET para a API..
    //consultar categorias
    this.categoriasService.get()
      .subscribe(
        (data) => {
          this.categorias = (data as []);
        },
        (e) => {
          console.log(e);
        }
      );
  }

  //função para realizar o cadastro do produto
  //executada no evento SUBMIT do formulário
  cadastrarProduto(formCadastro: any): void {
    console.log(formCadastro.form.value);
  }

}
