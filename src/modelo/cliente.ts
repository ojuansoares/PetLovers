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
    public addRG(rg: RG): void {
        this.rgs.push(rg);
    }
    public addTelefone(telefone: Telefone): void {
        this.telefones.push(telefone);
    }
    public addPet(pet: Pet): void {
        this.pets.push(pet);
    }
}