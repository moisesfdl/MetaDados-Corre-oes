# MetaDados-Corre-oes
Empresa


#include <iostream>
#include <tchar.h>
#include <iomanip>
#define redesin
using namespace std;
struct Property
{
	int nome;
	int Rg;
	int Cnpj;
	int TituloDeEleitor;
	int NIS;
	int Celular;
	int Email;
	Property(){
		cout<<"\tTitular Individual\n\t";
	}
};
struct Negocio
{
	int NomeFantasia;
	int RazaoSocial;
	Negocio(){
		cout<<"\tEmpresa MetaDados&Correçoes\n\t";
	}
};
struct Empenho
{
	int Steam;
	int Investidor;
	int Correction;
	int Programador;
	int DesenvolvedorGame;
	int MineratorCripto;
	int Live;
	Empenho(){
		cout<<"\tAutonomo\n\tTrabalho Formal de Negocio Proprio\n\t";
	}
};
struct Project1
{
	int produto;
	int Orcamento;
	Project1(){
		cout<<"\tImprimir Desenho em Camisa \n\tE introduzir a Marca MD&C no Mercado\n\t";
		cout<<"\tOrçamento Do Projeto\n\tProduto Camisa\n\tAluguel ou compra de Imovel pra negocio \n\tValor R$2.000.000,00 p/+\n\t"
		<<"Maquinario mas Materia Prima do Produto e teste de tecido \n\tValor R$1.000.000 ate chegar no produto final pra venda \n\t"
		<<"e depois de tudo tem a Logistica e a burocracia de documentaçao \n\t";
	}
};
struct Project2
{
	int Produto;
	Project2(){
		cout<<"Oferta\n\tPoemas Escritos Blog \n\tLink = https://metadadoscorrecao.blogspot.com/\n\t";
	}
};
struct Project3
{
	int PropostaStruct;
	Project3(){
		cout<<"\tCom a Empresa em andamento pretendo \n\tGerar um analises de estatisticas na are de \n\tInfra estrutura junto ao estado\n\t"
		<<"E emplementar o projeto e se aprovado dar andamento\n\t";
	}
};
struct location
{
	int Rua;
	int Numero;
	int Bairro;
	int Cidade;
	int Estado;
	int Pais;
	int Cep;
	location(){
		cout<<"\tEndereço Comercial\n\t";
	}
};
void local();
void Titular();
void MetaDadosCorrecoes();
void area();
void desenvolvimento();
int main(int argc, char** argv)
{
	_tsetlocale;
	int *ptr;
	int cnpj = '35.669.326/0001-90';
	MetaDadosCorrecoes();
	*ptr = cnpj;
	int &Ref = *ptr;
	return cnpj;
}
void MetaDadosCorrecoes(){
	Negocio Empresa;
	if(MetaDadosCorrecoes)
	{
		cout<<"Nome Fantasia ->[";
		Empresa.NomeFantasia = 'MetaDados&Correçoes';
		cout<<sizeof(&Empresa.NomeFantasia);
		cout<<"]\n\tRazao Social ->[";
		Empresa.RazaoSocial = 'moises ferreira de lima 27555115832';
		cout<<sizeof(&Empresa.RazaoSocial);
		cout<<"]\n\t";
		local();Titular();
		area();
	}   	
}
void Titular(){
	   Property Titular;
	   if(MetaDadosCorrecoes)
	   {
	   		cout<<"\tProprietario:";
		   Titular.nome = 'moises ferreira de lima';
		   cout<<"\n\tRg Proprietario ->[";
		   Titular.Rg = '27.950.938-8';
	   	   cout<<sizeof(&Titular.Rg);
	   	   cout<<"]\n\tCnpj Proprietario[";
	   	   Titular.Cnpj = '35.669.326/0001-90';
	  	   cout<<sizeof(&Titular.Cnpj);
		   cout<<"]\n\tTitulo de eleitor Proprietario ->[";
		   Titular.TituloDeEleitor = '239832530116';
		   cout<<sizeof(&Titular.TituloDeEleitor);
	   	   cout<<"]\n\tNIS Proprietario ->[";
		   Titular.NIS = '125.41632.83-7';
	   	   cout<<sizeof(&Titular.NIS);
	   	  cout<<"]\n\tCelular Proprietario ->[";
		  Titular.Celular = '12996497466';
	   	   cout<<sizeof(&Titular.Celular);
		   	cout<<"]\n\tEmail Proprietario ->[";
  		   Titular.Email = 'moisesfdl_pbt@hotmail.com.br'||'moisesprobabilidade@gmail.com';
		   cout<<sizeof(&Titular.Email);
	   	   cout<<"]\n\t";
	   }
}
void local(){
	location address;
	if(MetaDadosCorrecoes)
	{
		cout<<"Endereço ->[";
		address.Rua = 'Paturi';
		address.Numero = '230';
		address.Bairro = 'Buquirinha2';
		address.Cidade = 'Sao Jose Dos Campos';
		address.Estado = 'Sao Paulo';
		address.Pais = 'Brasil';
		address.Cep = '12214563';
		cout<<sizeof(&address);
		cout<<"]\n\t";
	}
}
void area(){
	Empenho Area;
	if(MetaDadosCorrecoes)
	{
		cout<<"Plataforma de jogos Originais ->[";
		Area.Steam = 'moisesfdl';
		cout<<sizeof(&Area.Steam);
		cout<<"]\n\tInvestidor Ibovespa Tws ->[";
		Area.Investidor = 'moises081';		
		cout<<sizeof(&Area.Investidor);
		cout<<"]\n\tPlataforma Tws ->[";
		Area.Correction = 'tws';		
		cout<<sizeof(&Area.Correction);
		cout<<"]\n\tProgramador e estudo avançado de programaçao ->[";
		Area.Programador = 'java script , C++, Node.js, Shell script';		
		cout<<sizeof(&Area.Programador);
		cout<<"]\n\tDesenvolvedor Games ->[";
		Area.DesenvolvedorGame;
		cout<<sizeof(&Area.DesenvolvedorGame);
		cout<<"]\n\tMinerador Cripto Coin ->[";		
		Area.MineratorCripto = 'EXP, XP, GEMAS, CoinPlus, DYMON';
		cout<<sizeof(&Area.MineratorCripto);
		cout<<"]\n\tLive ->[";
		Area.Live = 'moisesfdl';
		cout<<sizeof(&Area.Live);
		cout<<"]\n\t";	
		desenvolvimento();	
	}
}
void desenvolvimento(){
	Project1 Produto1;
	Project2 Produto2;
	Project3 Produto3;
	if(MetaDadosCorrecoes)
	{
		cout<<"\tProjeto Produto ->[";
		Produto1.produto = 'Desenho em camisa';
		cout<<sizeof(&Produto1.produto);
		cout<<"]\n\tOrçamento Produto ->[";
		Produto1.Orcamento;
		cout<<sizeof(&Produto1.Orcamento);
		cout<<"]\n\t";
	}
	if(MetaDadosCorrecoes)
	{
		cout<<"Proposta Oferta ->[";
		Produto2.Produto = 'poesias';
		cout<<sizeof(&Produto2.Produto);
		cout<<"]\n\t";
	}
	if(MetaDadosCorrecoes)
	{
		cout<<"Proposta Struct ->[";
		Produto3.PropostaStruct;
		cout<<sizeof(&Produto3.PropostaStruct);
		cout<<"]\n\t";
		
	}
} 
