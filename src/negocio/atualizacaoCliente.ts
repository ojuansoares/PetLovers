import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada"
import Atualizacao from "./atualizacao"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nInício da atualização do cliente");

        let dataAtual = new Date();
        let diaAtual = dataAtual.getDate()
        let mesAtual = dataAtual.getMonth() + 1
        let anoAtual = dataAtual.getFullYear();
    
        let id = Number(this.entrada.receberTexto("Por favor, informe o ID do cliente que deseja atualizar: "));
        let clienteIndex = this.clientes.findIndex(cliente => cliente.getId === id);
    
        if (clienteIndex !== -1) {
            let cliente = this.clientes[clienteIndex];

            let novoNome: string;
            do {
                novoNome = this.entrada.receberTexto(`Informe o novo nome do cliente (deixe em branco para não atualizar): `);
                if (novoNome === '') {
                    break;
                }
                if (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome))) {
                    console.log("Nome inválido. Por favor, insira um nome válido.");
                }
            } while (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome)));
            if (novoNome !== '') {
                cliente.setNome(novoNome);
            }
    
            let novoNomeSocial: string;
            do {
                novoNomeSocial = this.entrada.receberTexto(`Informe o novo nome social do cliente (deixe em branco para não atualizar): `);
                if (novoNomeSocial === '') {
                    break;
                }
                if (novoNomeSocial !== '' && (/\d/.test(novoNomeSocial) || /[^a-zA-Z\s]/.test(novoNomeSocial))) {
                    console.log("Nome social inválido. Por favor, insira um nome social válido.");
                }
            } while (novoNomeSocial !== '' && (/\d/.test(novoNomeSocial) || /[^a-zA-Z\s]/.test(novoNomeSocial)));
            if (novoNomeSocial !== '') {
                cliente.setNomeSocial(novoNomeSocial);
            }

            let sair = false;

                do {
                    let novoCPF: string;
                    let cpfExistente: boolean;
                    do {
                        novoCPF = this.entrada.receberTexto(`Informe o novo CPF do cliente (deixe em branco para não atualizar): `);
                        if (novoCPF === '') {
                            sair = true;
                            break;
                        }
                        if (novoCPF.length !== 11 || !/^\d+$/.test(novoCPF)) {
                            console.log("CPF inválido. Por favor, insira um CPF com 11 dígitos e apenas números.");
                        }
                        cpfExistente = this.clientes.some(cliente => cliente.getCpf.getValor === novoCPF);
                        if (cpfExistente) {
                            console.log("CPF já cadastrado");
                        }
                    } while (novoCPF.length !== 11 || !/^\d+$/.test(novoCPF) || cpfExistente);
                    let dia = 0, mes = 0, ano = 0;
                    if (sair) {	
                        break; 
                    }
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
                    let cpf = new CPF(novoCPF, dataEmissao);
                    cliente.setCpf(cpf);
                    break;
                } while (true);
    
            // Atualização de RGs
            let rgs = cliente.getRgs;
            let execucao = true;

            while (execucao) {
                rgs.forEach((rg, index) => {
                    console.log(`Índice: ${index + 1}, RG: ${rg.getValor}`);
                });

                let indiceRG: number;
                do {
                    let indiceRGInput: string = this.entrada.receberTexto(`Informe o índice do RG que deseja atualizar (deixe em branco para sair): `);
                    indiceRG = Number(indiceRGInput) - 1;
                    if (indiceRGInput === '') {
                        execucao = false;
                        break;
                    } else if (isNaN(indiceRG) || indiceRG < 0 || indiceRG >= rgs.length) {
                        console.log("Índice inválido. Por favor, insira um índice válido.");
                    }
                } while (isNaN(indiceRG) || indiceRG < 0 || indiceRG >= rgs.length);

                if (!execucao) {
                    break;
                }

                // Solicitação RG e Validação
                let valorrg: string;
                let rgExistente: boolean;
                do {
                    valorrg = this.entrada.receberTexto(`Por favor informe o novo número do RG: `);
                    if (valorrg.length < 6 || valorrg.length > 11 || !/^[a-zA-Z0-9]+$/.test(valorrg)) {
                        console.log("RG inválido. Por favor, insira um RG com até 11 dígitos, usando números e letras.");
                    }
                    rgExistente = this.clientes.some(cliente => cliente.getRgs.some(rg => rg.getValor === valorrg));
                    if (rgExistente) {
                        console.log("RG já cadastrado");
                    }
                } while (valorrg.length < 6 || valorrg.length > 11 || !/^[a-zA-Z0-9]+$/.test(valorrg) || rgExistente);

                let diarg = 0, mesrg = 0, anorg = 0;
                do {
                    let datarg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
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
                let dataEmissaorg = new Date(anorg, mesrg, diarg);
                let novoRG = new RG(valorrg, dataEmissaorg);
                rgs[indiceRG] = novoRG;

                execucao = false;
                break;
            }
    
            // Atualização Telefone
            let execucao2 = true;
            let telefones = cliente.getTelefones;
            while (execucao2) {
                telefones.forEach((telefone, index) => {
                    console.log(`Índice: ${index + 1}, Telefone: (${telefone.getDdd}) ${telefone.getNumero}`);
                });

                let indiceTelefone: number;
                do {
                    let indiceTelefoneInput: string = this.entrada.receberTexto(`Informe o índice do telefone que deseja atualizar (deixe em branco para sair): `);
                    indiceTelefone = Number(indiceTelefoneInput) - 1;
                    if (indiceTelefoneInput === '') {
                        execucao2 = false;
                        break;
                    } else if (isNaN(indiceTelefone) || indiceTelefone < 0 || indiceTelefone >= telefones.length) {
                        console.log("Índice inválido. Por favor, insira um índice válido.");
                    }
                } while (isNaN(indiceTelefone) || indiceTelefone < 0 || indiceTelefone >= telefones.length);

                if (!execucao2) {
                    break;
                }

                let novoDDD: string;
                let novoNumeroTelefone: string;
                let numeroExistente: boolean;
                do {
                    do {
                        novoDDD = this.entrada.receberTexto(`Por favor informe o novo DDD do Telefone: `);
                        if (novoDDD.length !== 2 || !/^\d+$/.test(novoDDD)) {
                            console.log("DDD inválido. Por favor, insira um DDD com 2 dígitos e somente números.");
                        }
                    } while (novoDDD.length !== 2 || !/^\d+$/.test(novoDDD));

                    novoNumeroTelefone = this.entrada.receberTexto(`Por favor informe o novo número do Telefone: `);
                    if (novoNumeroTelefone.length !== 8 && novoNumeroTelefone.length !== 9 || !/^\d+$/.test(novoNumeroTelefone)) {
                        console.log("Número de telefone inválido. Por favor, insira um número com 8 ou 9 dígitos e somente números.");
                    }
                    numeroExistente = this.clientes.some(cliente => cliente.getTelefones.some(telefone => telefone.getDdd === novoDDD && telefone.getNumero === novoNumeroTelefone));
                    if (numeroExistente) {
                        console.log("Telefone já cadastrado");
                    }
                } while (novoNumeroTelefone.length !== 8 && novoNumeroTelefone.length !== 9 || !/^\d+$/.test(novoNumeroTelefone) || numeroExistente);

                let novoTelefone = new Telefone(novoDDD, novoNumeroTelefone);
                telefones[indiceTelefone] = novoTelefone;

                execucao2 = false;
                break;
            }
            console.log("\nCliente atualizado com sucesso!\n");
    
        } else {
            console.log(`Nenhum cliente foi encontrado com o ID ${id}.\n`);
        }
    }
}