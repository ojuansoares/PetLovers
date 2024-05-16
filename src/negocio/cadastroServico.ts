import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro{
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`Iniciando o cadastro de um Serviço`);

        let id = Number(this.servicos.length + 1)

        let nome: string;
        let nomeExistente: boolean;
        do {
            nome = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `);
            if (nome === '' || /\d/.test(nome) || /[^a-zA-Z\s]/.test(nome)) {
                console.log("Nome inválido. Por favor, insira um nome válido.");
            }
            nomeExistente = this.servicos.some(servico => servico.getNome === nome);
            if (nomeExistente) {
                console.log("Já existe um serviço com este nome. Por favor, insira um nome diferente.");
            }
        } while (nome === '' || /\d/.test(nome) || /[^a-zA-Z\s]/.test(nome) || nomeExistente);

        let descricao: string;
        do {
            descricao = this.entrada.receberTexto(`Por favor informe a descrição do serviço: `);
            if (descricao === '' || /\d/.test(descricao) || /[^a-zA-Z\s]/.test(descricao)) {
                console.log("Descrição inválida. Por favor, insira uma descrição válida.");
            }
        } while (descricao === '' || /\d/.test(descricao) || /[^a-zA-Z\s]/.test(descricao));

        let valor: string;
        do {
            valor = this.entrada.receberTexto(`Digite o valor do serviço: `);
            if (!/^\d+,\d{2}$/.test(valor)) {
                console.log("Valor inválido. Por favor, insira um valor válido (ex: 20,99).");
            }
        } while (!/^\d+,\d{2}$/.test(valor));
        valor = valor.replace(',', '.');

        let servico = new Servico(id, nome, descricao, valor);
        this.servicos.push(servico);
    }
}