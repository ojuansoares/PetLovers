import Servico from "../modelo/servico";
import Entrada from "../io/entrada"
import Atualizacao from "./atualizacao"

export default class AtualizacaoServico extends Atualizacao {
    private servicos: Array<Servico>;
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\nInício da alteração do serviço`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do serviço que deseja atualizar: `));
        let servicoIndex = this.servicos.findIndex(servico => servico.getId === id);
        if (servicoIndex !== -1) {
            let servico = this.servicos[servicoIndex];
            let novoNome: string;
            let nomeExistente: boolean;
            do {
                novoNome = this.entrada.receberTexto(`Informe o novo nome do serviço (deixe em branco para não atualizar): `);
                if (novoNome === '') {
                    break;
                }
                if (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome))) {
                    console.log("Nome inválido. Por favor, insira um nome válido.");
                }
                nomeExistente = this.servicos.some(servico => servico.getNome === novoNome);
                if (nomeExistente) {
                    console.log("Já existe um serviço com este nome. Por favor, insira um nome diferente.");
                }
            } while (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome) || nomeExistente));
            if (novoNome !== '') {
                servico.setNome(novoNome);
            }

            let novaDescricao: string;
            do {
                novaDescricao = this.entrada.receberTexto(`Informe a nova descrição do serviço (deixe em branco para não atualizar): `);
                if (novaDescricao === '') {
                    break;
                }
                if (novaDescricao !== '' && (/[^a-zA-Z\s]/.test(novaDescricao))) {
                    console.log("Descrição inválida. Por favor, insira uma descrição válida.");
                }
            } while (novaDescricao !== '' && (/[^a-zA-Z\s]/.test(novaDescricao)));
            if (novaDescricao !== '') {
                servico.setDescricao(novaDescricao);
            }

            let novoValor: string;
            do {
                novoValor = this.entrada.receberTexto(`Digite o valor do serviço: `);
                if (novoValor === '') {
                    break;
                }
                if (!/^\d+,\d{2}$/.test(novoValor)) {
                    console.log("Valor inválido. Por favor, insira um valor válido (ex: 20,99).");
                }
            } while (novoValor !== '' && !/^\d+,\d{2}$/.test(novoValor));
            if (novoValor !== '') {
                novoValor = novoValor.replace(',', '.');
                servico.setValor(novoValor);
            }

            console.log(`Serviço com ID ${id} foi atualizado com sucesso.\n`);
        } else {
            console.log(`Serviço com ID ${id} não foi encontrado.\n`);
        }
    }
}