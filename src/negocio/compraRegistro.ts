import Historico from "../modelo/historico";
import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Pet from "../modelo/pet";

export default class RegistroCompra {
    private historicos: Array<Historico>;
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(historicos: Array<Historico>, clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.historicos = historicos;
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public registrar(): void {
        let existeSeP: boolean = true;
        if (this.produtos.length === 0 && this.servicos.length === 0) {
            existeSeP = false;
            console.log("Não há produtos nem serviços disponíveis no momento.\n");
        }
        if (existeSeP) {
        console.log(`Iniciando o registro de uma compra`);
        let comprador: Cliente | undefined;
        let idComprador: number;
        let execucao2 = true
        while (execucao2) {
        let idCompradorInput = this.entrada.receberTexto(`Por favor informe o ID do comprador: `);
        idComprador = Number(idCompradorInput);
        comprador = this.clientes.find(cliente => cliente.getId === idComprador);
        if (comprador) {
            let recebeCompra: number;
            let tipoCompra: string = '';
            let itens: any;
            let execucao = true
            while (execucao) {
                console.log(`\n1 - Serviço`);
                console.log(`2 - Produto`);
                recebeCompra = Number(this.entrada.receberTexto(`Digite 1 ou 2 para o tipo de compra que deseja realizar: `));
                switch(recebeCompra) {
                    case 1:
                        if (this.servicos.length === 0) {
                            console.log("Não há serviços disponíveis no momento.");
                            break;
                        }
                        console.log("Você selecionou serviço.");
                        itens = this.servicos;
                        tipoCompra = 'servico'
                        execucao = false;
                        break;
                    case 2:
                        if (this.produtos.length === 0) {
                            console.log("Não há produtos disponíveis no momento.");
                            break;
                        }
                        console.log("Você selecionou produto.");
                        itens = this.produtos;
                        tipoCompra = 'produto'
                        execucao = false;
                        break;
                    default:
                        console.log(`Tipo de compra inválido. \n`);
                        break;
                }
            }

            for (let i = 0; i < itens.length; i++) {
                console.log(`ID: ${itens[i].getId}, Nome: ${itens[i].getNome}, Valor: ${itens[i].getValor}`);
            }

            let idItem: number;
            let item: Produto | Servico | undefined;
            do {
                let idItemInput = this.entrada.receberTexto(`Por favor informe o ID do ${tipoCompra} que deseja comprar: `);
                idItem = Number(idItemInput);
                if (isNaN(idItem) || idItemInput.trim() === '') {
                    console.log(`ID do ${tipoCompra} inválido. Por favor, insira um número.\n`);
                    continue;
                }
                item = itens.find((item: Produto | Servico) => item.getId === idItem);
                if (!item) {
                    console.log(`${tipoCompra.charAt(0).toUpperCase() + tipoCompra.slice(1)} com ID ${idItem} não foi encontrado.\n`)
                }
            } while (!item)

            let pet: Pet | undefined;
            if (comprador.getPets.length > 0) {
                let idPet: number;
                let petObj: Pet | undefined;
                do {
                    let idPetInput = this.entrada.receberTexto(`Por favor informe o ID do pet para o qual a compra é direcionada: `);
                    idPet = Number(idPetInput);
                    if (isNaN(idPet) || idPetInput.trim() === '') {
                        console.log(`ID do pet inválido. Por favor, insira um número.\n`);
                        continue;
                    }
                    petObj = comprador.getPets.find(pet => pet.getId === idPet);
                    if (!petObj) {
                        console.log(`Pet com ID ${idPet} não foi encontrado.\n`);
                    } else {
                        pet = petObj;
                    }
                } while (!pet && comprador.getPets.length > 0)
            }

            let id = this.historicos.length + 1

            let dataAtual = new Date();
            let data = dataAtual.toLocaleDateString();
            let hora = dataAtual.toLocaleTimeString();
            
            let historico = new Historico(id, comprador, item.getNome, pet, item.getValor, data, hora, tipoCompra);
            this.historicos.push(historico);

            if (item instanceof Produto) {
                comprador.addProdutoConsumido(item);
            } else if (item instanceof Servico) {
                comprador.addServicoConsumido(item);
            }

            console.log(`Compra registrada com sucesso.\n`);
            execucao2 = false;

        } else {
            console.log(`Comprador com ID ${idComprador} não foi encontrado.\n`);
            execucao2 = false
        }

        }
    }
}}