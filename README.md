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
struct Rede
{
	int Facebook;
	int twitter;
	int Linkedin;
	int Playstation;
	int xbox;
	Rede(){
		cout<<"Moises ferreira de lima\tRg: 27.950.938-8\n\tMinha Rede Social \n\tFacebook\n\tLinkedin\n\tTwitter -> @moisesfdl\n\t";
	}
};
struct Cartorio
{
	int certidoes;
	Cartorio(){
		cout<<"Emissao de certidoes e protesto pelo CENPROT\n\t";
	}
};
struct Renda
{
	int ctps;
	int FolhaSalario;
	Renda(){
		cout<<"Folha Salario R$6250 por mes\n\t";
	}
};
struct eSocial
{
	int Nis;
	int FGTS;
 	eSocial(){
		 cout<<"Pagamento do Nis e FGTS\n\t";
	 }
};
struct Bank
{
	int Bradesco;
	int Agencia;
	int Conta;
	Bank(){
		cout<<"Banco de receber o salario\n\tBradesco\n\tAgencia: 0225\n\tConta: 0040054-8\n\t";
	}
};
struct ImpostoRenda
{
	int IRPF;
	float ImpostoDas;
	ImpostoRenda(){
		cout<<"Declaraçao da empresa na Receita Federal\n\t";
	}
};
struct Negocio
{
	int NomeFantasia;
	int RazaoSocial;
	int Socio;
	Negocio(){
		cout<<"\tEmpresa MetaDados&Correçoes\n\t";
		cout<<"\tEmpresa S/socio ou nao tem socio\n\t";
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
		cout<<"\tAutonomo\n\tTrabalho Formal de Negocio Proprio\n\tAssessoria Juridica Pessoal\n\t";
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
struct Resouce
{
	int PremioFacebook;
	int PremioLccGoogle;
	int PremioMicrosift;
	int PremioWorldBank;
	int ResouceBankOfAmerica;
	int EXP;
	int Gemas;
	int FundoEdge;
	int FundoInvestimentos;
	int HomerBrokers;
	Resouce(){
		cout<<"Propriedade de recurso titular\n\t";
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
struct ContaBil
{
	int Prolabore;
	ContaBil(){
		cout<<"Prolabore -> Declaraçao de renda Anul\n\t";
	}
};
struct Fazenda
{
	int Cadin;
	Fazenda(){
		cout<<"Cadin ->Cadastro de credito devedor no setor publico \n\tEu nao devo nada no setor publico \n\t"
		<<"e o governo nao entregou minha renda variavel \n\t";
	}
};
struct cambio
{
	int remessa;
	int venda;
	cambio(){
		cout<<"Melhor Cambio\n\tMoises ferreira de lima\tRg: 27.950.938-8\n\t"
		<<"Uma vez por semana ,peço remessa on line de cambio. \n\tPra credito direto em conta \n\tE vendo USD pra receber em Delivery \n\t";
	}
};
void local();
void Titular();
void MetaDadosCorrecoes();
void area();
void desenvolvimento();
void GanhoEmpenho();
void Patrimonio();void Receita();
void InstitutoNacionalSeguroSocial();
void Bradesco();void ContadorId();
void Cadin();void MelhorCambio();
void CENPROT();void Social();
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
		cout<<"]\n\tNao Permito Indicaçao de sociedade ->[";
		Empresa.Socio = 'Empresa Individual s/ socio ou nao tem socio';
		cout<<sizeof(&Empresa.Socio);
		cout<<"]\n\t";
		local();Titular();
		area();Receita();
		InstitutoNacionalSeguroSocial();
		ContadorId();CENPROT();
	}   
	Cadin();	
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
	   	  MelhorCambio();Social();
	   	   Patrimonio();Bradesco();CENPROT();
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
		cout<<"Projeto Produto ->[";
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
void GanhoEmpenho(){
	Renda Salario;
	if(MetaDadosCorrecoes)
	{
		cout<<"Folha Salario ->[";
		Salario.FolhaSalario = 'R$6250';
		cout<<sizeof(&Salario.FolhaSalario);
		cout<<"]\n\tCtps ->[";
		Salario.ctps = '77646/0150';
		cout<<sizeof(&Salario.ctps);
		cout<<"]\n\t";
	}
}
void Patrimonio(){
	Resouce Patrimonio;
	if(MetaDadosCorrecoes)
	{
		cout<<"Premio Facebook ->[";
		Patrimonio.PremioFacebook;
		cout<<sizeof(&Patrimonio.PremioFacebook);
		cout<<"]\n\tPremio LCC-Google ->[";
		Patrimonio.PremioLccGoogle;
		cout<<sizeof(&Patrimonio.PremioLccGoogle);
		cout<<"]\n\tPremio Microsoft ->[";
		Patrimonio.PremioMicrosift;
		cout<<sizeof(&Patrimonio.PremioMicrosift);
		cout<<"]\n\tPremio WorldBank Payment ->[";
		Patrimonio.PremioWorldBank;
		cout<<sizeof(&Patrimonio.PremioWorldBank);
		cout<<"]\n\tRecurso bankofamerica ->[";
		Patrimonio.ResouceBankOfAmerica;
		cout<<sizeof(&Patrimonio.ResouceBankOfAmerica);
		cout<<"]\n\tRecurso Cripto EXP ->[";
		Patrimonio.EXP = '5M';
		cout<<sizeof(&Patrimonio.EXP);
		cout<<"]\n\tRecurso Cripto Gemas ->[";
		Patrimonio.Gemas = '200K';
		cout<<sizeof(&Patrimonio.Gemas);
		cout<<"]\n\tRecurso Fundo Edge ->[";
		Patrimonio.FundoEdge = '12M USD';
		cout<<sizeof(&Patrimonio.FundoEdge);
		cout<<"]\n\tRecurso Fundo Investimentos ->[";
		Patrimonio.FundoInvestimentos = '8M';
		cout<<sizeof(&Patrimonio.FundoInvestimentos);
		cout<<"]\n\tRecurso Homer Brokers ->[";
		Patrimonio.HomerBrokers;
		cout<<sizeof(&Patrimonio.HomerBrokers);
		cout<<"]\n\t";
	}
}
void Receita(){
	ImpostoRenda Receita;
	if(MetaDadosCorrecoes)
	{
		cout<<"Declaraçao Imposto ->[";
		Receita.IRPF;
		cout<<sizeof(Receita.IRPF);
		cout<<"]\n\tImposta a pagar [";
		Receita.ImpostoDas = '100 x1 por mes';
		cout<<sizeof(&Receita.ImpostoDas);
		cout<<"]\n\t";
	}
}
void InstitutoNacionalSeguroSocial(){
	eSocial INSS;
	if(MetaDadosCorrecoes)
	{
		cout<<"NIS: 125.41632.83-7 ->[";
		INSS.Nis = '100 x1 por mes';
		cout<<sizeof(&INSS.Nis);
		cout<<"]\n\tFGTS OF CTPS 77646/0150 ->[";
		INSS.FGTS = '301,25 x1 por mes';
		cout<<sizeof(&INSS.FGTS);
		cout<<"]\n\t";
	}
}
void Bradesco(){
	Bank Bradesco;
	if(MetaDadosCorrecoes)
	{
		cout<<"Bradesco ->[";
		Bradesco.Bradesco;
		Bradesco.Agencia = '0225';
		cout<<sizeof(&Bradesco.Agencia);
		cout<<"]\n\tConta ->[";
		Bradesco.Conta = '0040054-8';
		cout<<sizeof(&Bradesco.Conta);
		cout<<"]\n\t";
	}
	GanhoEmpenho();
}
void ContadorId(){
	ContaBil Contabilidade;
	if(MetaDadosCorrecoes)
	{
		cout<<"Prolabore ->[";
		Contabilidade.Prolabore = '20000/12 - 0.05% x1 por mes';
		cout<<sizeof(&Contabilidade.Prolabore);
		cout<<"]\n\t";
	}
}
void Cadin(){
	Fazenda Gov;
	if(MetaDadosCorrecoes)
	{
		cout<<"Cadatro Cadin ->[";
		Gov.Cadin = 'Eu nao devo nada pra orgao ou entidade do Estado ou Nacional';
		cout<<sizeof(&Gov.Cadin);
		cout<<"]\n\t";
	}
}
void MelhorCambio(){
	cambio melhorcambio;
	if(MetaDadosCorrecoes)
	{
		cout<<"Remessa cambio ->[";
		melhorcambio.remessa;
		cout<<sizeof(&melhorcambio.remessa);
		cout<<"]\n\tVenda USD ->[";
		melhorcambio.venda;
		cout<<sizeof(&melhorcambio.venda);
		cout<<"]\n\t";
	}
}
void CENPROT(){
	Cartorio CENPROT;
	if(MetaDadosCorrecoes)
	{
		cout<<"Cartorio Protesto ->[";
		CENPROT.certidoes;
		cout<<sizeof(&CENPROT.certidoes);
		cout<<"]\n\t";
	}
}
void Social(){
	Rede Social;
	if(MetaDadosCorrecoes)
	{
		cout<<"Meu Facebook ->[";
		Social.Facebook = 'moises ferreira de lima';
		cout<<sizeof(&Social.Facebook);
		cout<<"]\n\tMeu Twitter ->[";
		Social.twitter = 'moisesfdl';
		cout<<sizeof(Social.twitter);
		cout<<"]\n\tMeu Linkedin ->[";
		Social.Linkedin;
		cout<<sizeof(&Social.Linkedin);
		cout<<"]\n\tPlaystation ->[";
		Social.Playstation;
		cout<<sizeof(&Social.Playstation);
		cout<<"]\n\tXbox ->[";
		Social.xbox;
		cout<<sizeof(&Social.xbox);
		cout<<"]\n\t";
	}
}
