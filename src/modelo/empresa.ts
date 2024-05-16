import Cliente from "./cliente"
import Pet from "./pet"
import Produto from "./produto"
import Servico from "./servico"
import Historico from "./historico"

export default class Empresa{
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private historico: Array<Historico>
    constructor(){
        this.clientes = []
        this.pets = []
        this.produtos = []
        this.servicos = []
        this.historico = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getPets(){
        return this.pets
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getHistorico(){
        return this.historico
    }
}