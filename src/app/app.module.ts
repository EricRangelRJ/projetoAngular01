import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';
import { CadastroFornecedoresComponent } from './cadastro-fornecedores/cadastro-fornecedores.component';
import { ConsultaFornecedoresComponent } from './consulta-fornecedores/consulta-fornecedores.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';

//importando as bilbiotecas para mapeamento de rotas
import { Routes, RouterModule } from '@angular/router';

//importando a biblioteca para consumo de APIs
import { HttpClientModule } from '@angular/common/http';

//importando a biblioteca para desenvolvimento de formularios
import { FormsModule, ReactiveFormsModule } 
from '@angular/forms';

//mapear as rotas (URLs) para cada componente (página) do projeto
const routes : Routes = [
  { path : 'painel-principal', component : PainelPrincipalComponent },
  { path : 'cadastro-fornecedores', component : CadastroFornecedoresComponent },
  { path : 'consulta-fornecedores', component : ConsultaFornecedoresComponent },
  { path : 'cadastro-produtos', component : CadastroProdutosComponent },
  { path : 'consulta-produtos', component : ConsultaProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PainelPrincipalComponent,
    CadastroFornecedoresComponent,
    ConsultaFornecedoresComponent,
    CadastroProdutosComponent,
    ConsultaProdutosComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(routes), 
//registrando as rotas mapeadas para o projeto
    HttpClientModule, //registrando a biblioteca para consumo de APIs
  FormsModule, ReactiveFormsModule 
//registrando a biblioteca de formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

