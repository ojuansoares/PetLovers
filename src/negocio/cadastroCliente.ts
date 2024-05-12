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
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

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
        let dia, mes, ano;
        do {
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            ano = new Number(partesData[2].valueOf()).valueOf()
            mes = new Number(partesData[1].valueOf()).valueOf()
            dia = new Number(partesData[0].valueOf()).valueOf()
            if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > 2024) {
                console.log("Data inválida. Por favor, insira uma data válida.");
            }
        } while (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > 2024);
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let id = Number(this.clientes.length + 1)
        let cliente = new Cliente(nome, nomeSocial, cpf, id);

        // RG

        let execucao = true
        while (execucao) {
            let opcaoRG = this.entrada.receberNumero(`Deseja adicionar quantos RGs (1 ou 2)?: `)

            switch (opcaoRG) {
                case 1:
                    let valorrg: string;
                    let rgExistente: boolean;
                    do {
                        valorrg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                        if (valorrg.length !== 9 || !/^\d+$/.test(valorrg)) {
                            console.log("RG inválido. Por favor, insira um RG com 9 dígitos e somente números.");
                        }
                        rgExistente = this.clientes.some(cliente => cliente.getRgs.some(rg => rg.getValor === valorrg));
                        if (rgExistente) {
                            console.log("RG já cadastrado");
                        }
                    } while (valorrg.length !== 9 || !/^\d+$/.test(valorrg) || rgExistente);
                    let diarg, mesrg, anorg;
                    do {
                        let datarg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                        let partesDatarg = datarg.split('/')
                        anorg = new Number(partesDatarg[2].valueOf()).valueOf()
                        mesrg = new Number(partesDatarg[1].valueOf()).valueOf()
                        diarg = new Number(partesDatarg[0].valueOf()).valueOf()
                        if (diarg < 1 || diarg > 31 || mesrg < 1 || mesrg > 12 || anorg < 1900 || anorg > 2024) {
                            console.log("Data inválida. Por favor, insira uma data válida.");
                        }
                    } while (diarg < 1 || diarg > 31 || mesrg < 1 || mesrg > 12 || anorg < 1900 || anorg > 2024);
                    let dataEmissaorg = new Date(anorg, mesrg, diarg)
                    let rgs = new RG(valorrg, dataEmissaorg);
                    cliente.addRG(rgs)
                    execucao = false
                    break;

                case 2:
                    let valorrg1: string = '';
                    for (let i = 0; i < 2; i++) {
                        let valorrg: string;
                        let rgExistente: boolean;
                        do {
                            valorrg = this.entrada.receberTexto(`Por favor informe o número do ${i+1}º RG: `);
                            if (valorrg.length !== 9 || !/^\d+$/.test(valorrg)) {
                                console.log("RG inválido. Por favor, insira um RG com 9 dígitos e somente números.");
                            }
                            if ( i === 1 && valorrg === valorrg1) {
                                console.log("O segundo RG não pode ser igual ao primeiro.");
                            }
                            rgExistente = this.clientes.some(cliente => cliente.getRgs.some(rg => rg.getValor === valorrg));
                            if (rgExistente) {
                                console.log("RG já cadastrado");
                            }
                        } while (valorrg.length !== 9 || !/^\d+$/.test(valorrg) || (i === 1 && valorrg === valorrg1) || rgExistente);
                    
                    if (i === 0) {    
                        valorrg1 = valorrg;
                    }

                    let diarg, mesrg, anorg;
                    do {
                        let datarg = this.entrada.receberTexto(`Por favor informe a data de emissão do ${i+1}º RG, no padrão dd/mm/yyyy: `);
                        let partesDatarg = datarg.split('/')
                        anorg = new Number(partesDatarg[2].valueOf()).valueOf()
                        mesrg = new Number(partesDatarg[1].valueOf()).valueOf()
                        diarg = new Number(partesDatarg[0].valueOf()).valueOf()
                        if (diarg < 1 || diarg > 31 || mesrg < 1 || mesrg > 12 || anorg < 1900 || anorg > 2024) {
                            console.log("Data inválida. Por favor, insira uma data válida.");
                        }
                    } while (diarg < 1 || diarg > 31 || mesrg < 1 || mesrg > 12 || anorg < 1900 || anorg > 2024);

                      
                    let dataEmissaorg = new Date(anorg, mesrg, diarg)
                    let rgs = new RG(valorrg, dataEmissaorg);
                    cliente.addRG(rgs)
                    }
                    execucao = false
                    break;
                    default: console.log(`Operação não entendida :(`) 
            }
        }

        // Telefone

        let execucao2 = true
        while (execucao2) {
            let opcaoTel = this.entrada.receberNumero(`Deseja adicionar quantos Telefones (1 ou 2)?: `)
            switch (opcaoTel) {

                case 1:
                    let ddd;
                    do {
                        ddd = this.entrada.receberTexto(`Por favor informe o DDD do Telefone: `);
                        if (ddd.length !== 2 || !/^\d+$/.test(ddd)) {
                            console.log("DDD inválido. Por favor, insira um DDD com 2 dígitos e somente números.");
                        }
                    } while (ddd.length !== 2 || !/^\d+$/.test(ddd));
                    let numero: string;
                    let numeroExistente: boolean;
                    do {
                        numero = this.entrada.receberTexto(`Por favor informe o número do Telefone: `);
                        if (numero.length !== 8 && numero.length !== 9 || !/^\d+$/.test(numero)) {
                            console.log("Telefone inválido. Por favor, insira um Telefone com 8 ou 9 dígitos e somente números.");
                        }   
                        numeroExistente = this.clientes.some(cliente => cliente.getTelefones.some(telefone => telefone.getNumero === numero));
                        if (numeroExistente) {
                            console.log("Telefone já cadastrado");
                        }
                    } while (numero.length !== 8 && numero.length !== 9 || !/^\d+$/.test(numero) || numeroExistente);
                    let telefone = new Telefone(ddd, numero);
                    cliente.addTelefone(telefone)
                    execucao2 = false
                    break;

                case 2:
                    let numero1: string = '';
                    for (let i = 0; i < 2; i++) {
                        let ddd;
                        do {
                            ddd = this.entrada.receberTexto(`Por favor informe o DDD do ${i+1}º Telefone: `);
                            if (ddd.length !== 2 || !/^\d+$/.test(ddd)) {
                                console.log("DDD inválido. Por favor, insira um DDD com 2 dígitos e somente números.");
                            }
                        } while (ddd.length !== 2 || !/^\d+$/.test(ddd));
                        let numero: string;
                        let numeroExistente: boolean;
                        do {
                            numero = this.entrada.receberTexto(`Por favor informe o ${i+1}º número do Telefone: `);
                            if (numero.length !== 8 && numero.length !== 9 || !/^\d+$/.test(numero)) {
                                console.log("Telefone inválido. Por favor, insira um Telefone com 8 ou 9 dígitos e somente números.");
                            }
                            if ( i === 1 && numero === numero1) {
                                console.log("O segundo Telefone não pode ser igual ao primeiro.");
                            }
                            numeroExistente = this.clientes.some(cliente => cliente.getTelefones.some(telefone => telefone.getNumero === numero));
                            if (numeroExistente) {
                                console.log("Telefone já cadastrado");
                            }
                        } while (numero.length !== 8 && numero.length !== 9 || !/^\d+$/.test(numero) || numeroExistente || (i === 1 && numero === numero1));
                        
                        if (i === 0) {    
                            numero1 = numero;
                        }

                        let telefone = new Telefone(ddd, numero);
                        cliente.addTelefone(telefone)
                        }
                        execucao2 = false
                        break;
                default:
                    console.log(`Operação não entendida :(`) 
            }
        }

        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}