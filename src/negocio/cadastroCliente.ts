import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let dataAtual = new Date();
        let diaAtual = dataAtual.getDate()
        let mesAtual = dataAtual.getMonth() + 1
        let anoAtual = dataAtual.getFullYear();
        console.log(`\nInício do cadastro do cliente`);

        let nome: string;
        do {
            nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
            if (nome === '' || /\d/.test(nome) || /[^a-zA-Z\s]/.test(nome)) {
                console.log("Nome inválido. Por favor, insira um nome válido.");
            }
        } while (nome === '' || /\d/.test(nome) || /[^a-zA-Z\s]/.test(nome));

        let nomeSocial: string;
        do {
            nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
            if (nomeSocial === '' || /\d/.test(nomeSocial) || /[^a-zA-Z\s]/.test(nomeSocial)) {
                console.log("Nome inválido. Por favor, insira um nome válido.");
            }
        } while (nomeSocial === '' || /\d/.test(nomeSocial) || /[^a-zA-Z\s]/.test(nomeSocial));

        // CPF

        let valor: string;
        let cpfExistente: boolean;
        do {
            valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
            if (valor.length !== 11 || !/^\d+$/.test(valor)) {
                console.log("CPF inválido. Por favor, insira um CPF com 11 dígitos e apenas números.");
            }
            cpfExistente = this.clientes.some(cliente => cliente.getCpf.getValor === valor);
            if (cpfExistente) {
                console.log("CPF já cadastrado");
            }
        } while (valor.length !== 11 || !/^\d+$/.test(valor) || cpfExistente);
        let dia = 0, mes = 0, ano = 0;
        do {
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            if (partesData.length !== 3 || partesData[2].length !== 4 || partesData[0].length < 1 || partesData[0].length > 2 || partesData[1].length < 1 || partesData[1].length > 2 || isNaN(Number(partesData[0])) || isNaN(Number(partesData[1])) || isNaN(Number(partesData[2]))) {
                console.log("Data inválida. Por favor, insira uma data válida.");
                continue;
            }
            ano = new Number(partesData[2].valueOf()).valueOf()
            mes = new Number(partesData[1].valueOf()).valueOf()
            dia = new Number(partesData[0].valueOf()).valueOf()
            if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || (dia > diaAtual && mes > mesAtual && ano > anoAtual) || (dia > diaAtual && mes > mesAtual && ano == anoAtual) || (dia > diaAtual && mes == mesAtual && ano == anoAtual) ||(mes > mesAtual && ano == anoAtual) || ano > anoAtual) {
                console.log("Data inválida. Por favor, insira uma data válida.");
            }
        } while (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || (dia > diaAtual && mes > mesAtual && ano > anoAtual) || (dia > diaAtual && mes > mesAtual && ano == anoAtual) || (dia > diaAtual && mes == mesAtual && ano == anoAtual) ||(mes > mesAtual && ano == anoAtual) || ano > anoAtual);
        mes = mes - 1
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let id = Number(this.clientes.length + 1)
        let dataCadastro = dataAtual.toLocaleDateString();
        let horaCadastro = dataAtual.toLocaleTimeString();
        let cliente = new Cliente(dataCadastro, horaCadastro, nome, nomeSocial, cpf, id);

        // RG

        let execucao = true
        while (execucao) {
            let quantidadeRGs: number;
            do {
                quantidadeRGs = this.entrada.receberNumero(`Quantos RGs deseja adicionar?: `)
                if (quantidadeRGs < 1 || !/^\d+$/.test(String(quantidadeRGs))) {
                    console.log("Operação não entendida :(");
                }
            } while (quantidadeRGs < 1 || !/^\d+$/.test(String(quantidadeRGs)))
            let rgsAdicionados: RG[] = [];
            for (let i = 0; i < quantidadeRGs; i++) {
                let valorrg: string;
                let rgExistente: boolean;
                do {
                    valorrg = this.entrada.receberTexto(`Por favor informe o número do RG ${i+1}: `);
                    if (valorrg.length < 6 || valorrg.length > 11 || !/^[a-zA-Z0-9]+$/.test(valorrg)) {
                        console.log("RG inválido. Por favor, insira um RG com até 11 dígitos, usando números e letras.");
                    }
                    rgExistente = this.clientes.some(cliente => cliente.getRgs.some(rg => rg.getValor === valorrg));
                    if (rgExistente || rgsAdicionados.some(rg => rg.getValor === valorrg)) {
                        console.log("RG já cadastrado");
                    }
                } while (valorrg.length < 6 || valorrg.length > 11 || !/^[a-zA-Z0-9]+$/.test(valorrg) || rgExistente || rgsAdicionados.some(rg => rg.getValor === valorrg));

                let diarg = 0, mesrg = 0, anorg = 0;
                do {
                    let datarg = this.entrada.receberTexto(`Por favor informe a data de emissão do ${i+1}º RG, no padrão dd/mm/yyyy: `);
                    let partesDatarg = datarg.split('/')
                    if (partesDatarg.length !== 3 || partesDatarg[2].length !== 4 || partesDatarg[0].length < 1 || partesDatarg[0].length > 2 || partesDatarg[1].length < 1 || partesDatarg[1].length > 2 || isNaN(Number(partesDatarg[0])) || isNaN(Number(partesDatarg[1])) || isNaN(Number(partesDatarg[2]))) {
                        console.log("Data inválida. Por favor, insira uma data válida.");
                        continue;
                    }
                    anorg = new Number(partesDatarg[2].valueOf()).valueOf()
                    mesrg = new Number(partesDatarg[1].valueOf()).valueOf()
                    diarg = new Number(partesDatarg[0].valueOf()).valueOf()
                    if (diarg < 1 || diarg > 31 || mesrg < 1 || mesrg > 12 || anorg < 1900 || (diarg > diaAtual && mesrg > mesAtual && anorg > anoAtual) || (diarg > diaAtual && mesrg > mesAtual && anorg == anoAtual) || (diarg > diaAtual && mesrg == mesAtual && anorg == anoAtual) ||(mesrg > mesAtual && anorg == anoAtual) || anorg > anoAtual) {
                        console.log("Data inválida. Por favor, insira uma data válida.")
                    }
                } while (diarg < 1 || diarg > 31 || mesrg < 1 || mesrg > 12 || anorg < 1900 || (diarg > diaAtual && mesrg > mesAtual && anorg > anoAtual) || (diarg > diaAtual && mesrg > mesAtual && anorg == anoAtual) || (diarg > diaAtual && mesrg == mesAtual && anorg == anoAtual) ||(mesrg > mesAtual && anorg == anoAtual) || anorg > anoAtual)
                    
                mesrg = mesrg -1
                let dataEmissaorg = new Date(anorg, mesrg, diarg)
                let rgs = new RG(valorrg, dataEmissaorg);
                rgsAdicionados.push(rgs);
                cliente.addRG(rgs)
            }
            execucao = false
            break;
        }
        

        // Telefone

        let execucao2 = true
        while (execucao2) {
            let quantidadeTelefones: number;
            do {
                quantidadeTelefones = this.entrada.receberNumero(`Quantos Telefones deseja adicionar?: `)
                if (quantidadeTelefones < 1 || !/^\d+$/.test(String(quantidadeTelefones))) {
                    console.log("Operação não entendida :(");
                }
            } while (quantidadeTelefones < 1 || !/^\d+$/.test(String(quantidadeTelefones)))
            let telefonesAdicionados: Telefone[] = [];
            for (let i = 0; i < quantidadeTelefones; i++) {
                let numero: string;
                let numeroExistente: boolean;
                let ddd: string;
                do {
                    do {
                        ddd = this.entrada.receberTexto(`Por favor informe o DDD do Telefone ${i+1}: `);
                        if (ddd.length !== 2 || !/^\d+$/.test(ddd)) {
                            console.log("DDD inválido. Por favor, insira um DDD com 2 dígitos e somente números.");
                        }
                    } while (ddd.length !== 2 || !/^\d+$/.test(ddd));

                    numero = this.entrada.receberTexto(`Por favor informe o número do Telefone ${i+1}: `);
                    if (numero.length !== 8 && numero.length !== 9 || !/^\d+$/.test(numero)) {
                        console.log("Número de telefone inválido. Por favor, insira um número com 8 ou 9 dígitos e somente números.");
                    }
                    numeroExistente = this.clientes.some(cliente => cliente.getTelefones.some(telefone => telefone.getDdd === ddd && telefone.getNumero === numero));
                    if (numeroExistente|| telefonesAdicionados.some(telefone => telefone.getDdd === ddd && telefone.getNumero === numero)) {
                        console.log("Telefone já cadastrado");
                    }
                } while (numero.length !== 8 && numero.length !== 9 || !/^\d+$/.test(numero) || numeroExistente || telefonesAdicionados.some(telefone => telefone.getDdd === ddd && telefone.getNumero === numero));
                
                let telefone = new Telefone(ddd, numero);
                telefonesAdicionados.push(telefone);
                cliente.addTelefone(telefone)
            }
            execucao2 = false
            break;
        }
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}