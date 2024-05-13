export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private id: number
    private idDono: number

    constructor(id: number, nome: string, raca: string, genero: string, tipo: string, idDono: number) {
        this.nome = nome
        this.id = id
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.idDono = idDono
    }

    public get getId(){return this.id}
    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getIdDono(){return this.idDono}

    setNome(novoNome: string) {
        this.nome = novoNome;
    }
    setRaca(novaRaca: string) {
        this.raca = novaRaca;
    }
    setGenero(novoGenero: string) {
        this.genero = novoGenero;
    }
    setTipo(novoTipo: string) { 
        this.tipo = novoTipo;
    }
    setIdDono(novoIdDono: number) {
        this.idDono = novoIdDono;
    }

}