export default class Produto {
    private nome: string;
    private descricao: string;
    private valor: string;
    private id: number;

    constructor(id: number, nome: string, descricao: string, valor: string) {
        this.nome = nome;
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }

    public get getId() {
        return this.id
    }
    public get getNome() {
        return this.nome
    }
    public get getDescricao() {
        return this.descricao
    }
    public get getValor() {
        return this.valor
    }

    setNome(novoNome: string) {
        this.nome = novoNome;
    }
    setDescricao(novaDescricao: string) {
        this.descricao = novaDescricao;
    }
    setValor(novoValor: string) {
        this.valor = novoValor;
    }
}