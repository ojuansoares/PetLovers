import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public id: number
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: string
    private horaCadastro: string
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(dataCadastro: string, horaCadastro: string, nome: string, nomeSocial: string, cpf: CPF, id: number) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.id = id
        this.rgs = []
        this.dataCadastro = dataCadastro
        this.horaCadastro = horaCadastro
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
        
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getNome(): string {
        return this.nome
    }
    public get getNomeSocial(): string {
        return this.nomeSocial
    }
    public get getId(): number {
        return this.id;
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): string {
        return this.dataCadastro
    }
    public get getHoraCadastro(): string {
        return this.horaCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public get totalQuantidadeConsumida(): number {
        return this.produtosConsumidos.length + this.servicosConsumidos.length;
    }
    public get valorTotalConsumido(): number {
        let totalProdutos = this.produtosConsumidos.reduce((total, produto) => total + Number(produto.getValor), 0);
        let totalServicos = this.servicosConsumidos.reduce((total, servico) => total + Number(servico.getValor), 0);
        return totalProdutos + totalServicos;
    }
    public get produtosMaisConsumidos(): { [nome: string]: number } {
        let contadorProdutos: { [nome: string]: number } = {};
        this.produtosConsumidos.forEach(produto => {
            if (contadorProdutos[produto.getNome]) {
                contadorProdutos[produto.getNome]++;
            } else {
                contadorProdutos[produto.getNome] = 1;
            }
        });
        return contadorProdutos;
    }
    public get servicosMaisConsumidos(): { [nome: string]: number } {
        let contadorServicos: { [nome: string]: number } = {};
        this.servicosConsumidos.forEach(servico => {
            if (contadorServicos[servico.getNome]) {
                contadorServicos[servico.getNome]++;
            } else {
                contadorServicos[servico.getNome] = 1;
            }
        });
        return contadorServicos;
    }
    public addRG(rg: RG): void {
        this.rgs.push(rg);
    }
    public addTelefone(telefone: Telefone): void {
        this.telefones.push(telefone);
    }
    public addPet(pet: Pet): void {
        this.pets.push(pet);
    }
    public addProdutoConsumido(produto: Produto): void {
        this.produtosConsumidos.push(produto);
    }
    
    public addServicoConsumido(servico: Servico): void {
        this.servicosConsumidos.push(servico);
    }

    setNome(novoNome: string) {
        this.nome = novoNome;
    }
    setNomeSocial(novoNomeSocial: string) {
        this.nomeSocial = novoNomeSocial;
    }
    setCpf(novoCpf: CPF) {
        this.cpf = novoCpf;
    }
    setId(novoId: number) {
        this.id = novoId;
    }
    setRgs(novosRgs: Array<RG>) {
        this.rgs = novosRgs;
    }
    setTelefone(novoTelefone: Array<Telefone>) {
        this.telefones = novoTelefone;
    }
    
}