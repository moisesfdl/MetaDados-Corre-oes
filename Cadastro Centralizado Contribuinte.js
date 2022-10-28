function NotaFiscalEletronica(){
    const cadastro = function(){
        var Contribuinte = `\tEmpresa MetaDados&Correçoes\tCnpj: 35.669.326/0001-90\n\t`
        +`Nome Moises Ferreira de lima\tRg: 27.950.938-8\n\tIdentificaçao\n\t`
        +`CNPJ-8: 35.669.326\n\tMOISES FERREIRA DE LIMA 27555115832\n\t`
        +`Relaçao de Contribuintes\t\t\t\t\tData Documento: 12/01/2022\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|UF\t|CNPJ\t\t   |IE\t\t|TipoIE\t   |SituaçaoIE|SituaçaoCNPJ\t|UF Endereço|\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`| SP-35 |35.669.326/0001-90|125076039112|IE Normail|Habilitado|Sem Restrinçao\t|\tSP  |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|\t\t\tIdentificaçao do Contribuinte\t\t\t\t\t    |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|\tNome da Empresa: MOISES FERREIRA DE LIMA 27555115832\t\t\t\t    |\n\t`
        +`|\tUF : SP-35\t\t\t\t\t\t\t\t\t    |\n\t|\tCNPJ: 35.669.326/0001-90\t\t\t\t\t\t\t    |\n\t`
        +`|\tSituaçao CNPJ: Sem Restrinçao\t\t\t\t\t\t\t\t  |\n\t|\tIncriçao Estadual(IE): 125076039112\t\t\t\t\t\t\t  |\n\t`
        +`|\tSituaçao IE: Habilitado\t\t\t\t\t\t\t\t    |\n\t|\tTipo IE: IE Normal\t\t\t\t\t\t\t\t    |\n\t`
        +`|\tCNAE Principal: 5819100\t\t\t\t\t\t\t\t\t  |\n\t|\tData Situaçao na UF: 01/12/2019\t\t\t\t\t\t\t\t  |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|\tDados do Contribuinte\t\t\t\t\t\t\t\t\t  |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|\tNome Fantasia: METADADOS&CORREÇOES\t\t\t\t\t\t\t  |\n\t`
        +`|\tData Inicio Atividade: 01/12/2019\t\t\t\t\t\t\t  |\n\t|\tData Fim Atividade: Indeterminado\t\t\t\t\t\t\t  |\n\t`
        +`|\tRegime de Tributaçao: SIMEI\t\t\t\t\t\t\t\t  |\n\t|\tInformaçao da IE como Destinatario: Obrigatoria\t\t\t\t\t\t  |\n\t`
        +`|\tPorte da Empresa: Media\t\t\t\t\t\t\t\t\t  |\n\t|\tCNAE Principal: 5819100\t\t\t\t\t\t\t\t\t  |\n\t`
        +`|\tCredito Presumido: Sim\t\t\tValor: R$1M\t\t\t\t    |\n\t|\tTipo Produtor: Designer Grafic\t\t\t\t\t\t\t\t  |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|\tDados de Endereço\t\t\t\t\t\t\t\t    |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|\tMunicipio IBGE: 3549904 - Sao Jose Dos Campos\t\t\t\t\t    |\n\t|\tUF de Localizaçao: SP\t\t\t\t\t\t\t\t    |\n\t`
        +`|\tLogradouro: Rua Paturi\t\t\t\t\t\t\t\t    |\n\t|\tNro: 230\t\t\t\t\t\t\t\t\t    |\n\t`
        +`|\tComplemento: \t\t\t\t\t\t\t\t\t    |\n\t|\tBairro: BUQUIRINHA II\t\t\t\t\t\t\t\t    |\n\t`
        +`|\tCEP: 12214563\t\t\t\t\t\t\t\t\t    |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t`
        +`|\tLink: https://dfe-portal.svrs.rs.gov.br/Nfe/Ccc\t\t\t\t\t    |\n\t`
        +`|-------------------------------------------------------------------------------------------|\n\t` 
        if (Contribuinte) {
            this.Contribuinte
        }
        return Contribuinte
    }
    console.log(cadastro())
}
NotaFiscalEletronica()
