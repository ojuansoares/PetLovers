import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import CPF from "../modelo/cpf";
import Historico from "../modelo/historico";

export function adicionarDadosPadrao(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>, pets: Array<Pet>, historico: Array<Historico>) {

    let pet1 = new Pet(1, "Rex", "Labrador", "Male", "Dog", 1);
    pets.push(pet1);
    let pet2 = new Pet(2, "Bella", "Siamese", "Female", "Cat", 2);
    pets.push(pet2);
    let pet3 = new Pet(3, "Max", "Bulldog", "Male", "Dog", 3);
    pets.push(pet3);
    let pet4 = new Pet(4, "Lucy", "Persian", "Female", "Cat", 4);
    pets.push(pet4);
    let pet5 = new Pet(5, "Charlie", "Poodle", "Male", "Dog", 5);
    pets.push(pet5);
    let pet6 = new Pet(6, "Molly", "Maine Coon", "Female", "Cat", 6);
    pets.push(pet6);
    let pet7 = new Pet(7, "Rocky", "German Shepherd", "Male", "Dog", 7);
    pets.push(pet7);
    let pet8 = new Pet(8, "Lily", "Ragdoll", "Female", "Cat", 8);
    pets.push(pet8);
    let pet9 = new Pet(9, "Jack", "Beagle", "Male", "Dog", 9);
    pets.push(pet9);
    let pet10 = new Pet(10, "Chloe", "Bengal", "Female", "Cat", 10);
    pets.push(pet10);
    let pet11 = new Pet(11, "Duke", "Golden Retriever", "Male", "Dog", 11);
    pets.push(pet11);
    let pet12 = new Pet(12, "Sophie", "Sphynx", "Female", "Cat", 12);
    pets.push(pet12);

    let produto1 = new Produto(1, "Ração para Cães", "Ração de alta qualidade para cães", "10.00");
    produtos.push(produto1);
    let servico1 = new Servico(1, "Tosa", "Tosa para todos os tipos de cães", "20.00");
    servicos.push(servico1);
    let produto2 = new Produto(2, "Ossinho", "Ossinho para cães mastigarem", "20.00");
    produtos.push(produto2);
    let servico2 = new Servico(2, "Banho", "Banho para todos os tipos de cães", "40.00");
    servicos.push(servico2);
    let produto3 = new Produto(3, "Brinquedo para Gatos", "Brinquedo divertido para gatos", "30.00");
    produtos.push(produto3);
    let servico3 = new Servico(3, "Corte de Unhas", "Corte de unhas para cães e gatos", "60.00");
    servicos.push(servico3);
    let produto4 = new Produto(4, "Shampoo para Cães", "Shampoo suave para cães", "40.00");
    produtos.push(produto4);
    let servico4 = new Servico(4, "Escovação de Pelo", "Escovação de pelo para cães e gatos", "80.00");
    servicos.push(servico4);
    let produto5 = new Produto(5, "Coleira", "Coleira confortável para cães", "50.00");
    produtos.push(produto5);
    let servico5 = new Servico(5, "Limpeza de Orelhas", "Limpeza de orelhas para cães e gatos", "100.00");
    servicos.push(servico5);
    let produto6 = new Produto(6, "Cama para Gatos", "Cama confortável para gatos", "60.00");
    produtos.push(produto6);
    let servico6 = new Servico(6, "Limpeza de Dentes", "Limpeza de dentes para cães e gatos", "120.00");
    servicos.push(servico6);
    let produto7 = new Produto(7, "Ração para Gatos", "Ração de alta qualidade para gatos", "70.00");
    produtos.push(produto7);
    let servico7 = new Servico(7, "Vacinação", "Serviço de vacinação para cães e gatos", "140.00");
    servicos.push(servico7);
    let produto8 = new Produto(8, "Caixa de Areia", "Caixa de areia para gatos", "80.00");
    produtos.push(produto8);
    let servico8 = new Servico(8, "Adestramento", "Serviço de adestramento para cães", "160.00");
    servicos.push(servico8);
    let produto9 = new Produto(9, "Bolinha", "Bolinha para cães brincarem", "90.00");
    produtos.push(produto9);
    let servico9 = new Servico(9, "Passeio", "Serviço de passeio para cães", "180.00");
    servicos.push(servico9);
    let produto10 = new Produto(10, "Arranhador para Gatos", "Arranhador para gatos afiarem as unhas", "100.00");
    produtos.push(produto10);
    let servico10 = new Servico(10, "Hospedagem", "Serviço de hospedagem para cães e gatos", "200.00");
    servicos.push(servico10);
    let produto11 = new Produto(11, "Comedouro", "Comedouro para cães e gatos", "110.00");
    produtos.push(produto11);
    let servico11 = new Servico(11, "Transporte", "Serviço de transporte para cães e gatos", "220.00");
    servicos.push(servico11);
    let produto12 = new Produto(12, "Bebedouro", "Bebedouro para cães e gatos", "120.00");
    produtos.push(produto12);
    let servico12 = new Servico(12, "Consulta Veterinária", "Consulta veterinária para cães e gatos", "240.00");
    servicos.push(servico12);

    let cliente1 = new Cliente("01/01/2022", "10:00", "Cliente1", "Cliente1 Social", new CPF("12345678901", new Date()), 1);
    cliente1.addRG(new RG("RG123456", new Date("2022-12-02")));
    cliente1.addTelefone(new Telefone("11", "123456789"));
    cliente1.addProdutoConsumido(produtos[0]);
    cliente1.addServicoConsumido(servicos[0]);
    cliente1.addPet(pets[0]);
    clientes.push(cliente1);

    let cliente2 = new Cliente("02/01/2022", "11:00", "Cliente2", "Cliente2 Social", new CPF("23456789012", new Date()), 2);
    cliente2.addRG(new RG("RG234567", new Date()));
    cliente2.addTelefone(new Telefone("22", "234567890"));
    cliente2.addProdutoConsumido(produtos[1]);
    cliente2.addServicoConsumido(servicos[1]);
    cliente2.addPet(pets[1]);
    clientes.push(cliente2);

    let cliente3 = new Cliente("03/01/2022", "11:00", "Juan", "Juanzinho", new CPF("34567890123", new Date()), 3);
    cliente3.addRG(new RG("RG345678", new Date()));
    cliente3.addTelefone(new Telefone("33", "345678901"));
    cliente3.addProdutoConsumido(produtos[2]);
    cliente3.addServicoConsumido(servicos[2]);
    cliente3.addPet(pets[2]);
    clientes.push(cliente3);

    let cliente4 = new Cliente("04/01/2022", "11:00", "Maria", "Mariinha", new CPF("45678901234", new Date()), 4);
    cliente4.addRG(new RG("RG456789", new Date()));
    cliente4.addTelefone(new Telefone("44", "456789012"));
    cliente4.addProdutoConsumido(produtos[3]);
    cliente4.addServicoConsumido(servicos[3]);
    cliente4.addPet(pets[3]);
    clientes.push(cliente4);

    let cliente5 = new Cliente("05/01/2022", "11:00", "Pedro", "Pedrinho", new CPF("56789012345", new Date()), 5);
    cliente5.addRG(new RG("RG567890", new Date()));
    cliente5.addTelefone(new Telefone("55", "567890123"));
    cliente5.addProdutoConsumido(produtos[4]);
    cliente5.addServicoConsumido(servicos[4]);
    cliente5.addPet(pets[4]);
    clientes.push(cliente5);

    let cliente6 = new Cliente("06/01/2022", "11:00", "Ana", "Aninha", new CPF("67890123456", new Date()), 6);
    cliente6.addRG(new RG("RG678901", new Date()));
    cliente6.addTelefone(new Telefone("66", "678901234"));
    cliente6.addProdutoConsumido(produtos[5]);
    cliente6.addServicoConsumido(servicos[5]);
    cliente6.addPet(pets[5]);
    clientes.push(cliente6);

    let cliente7 = new Cliente("07/01/2022", "11:00", "Lucas", "Lucasinho", new CPF("78901234567", new Date()), 7);
    cliente7.addRG(new RG("RG789012", new Date()));
    cliente7.addTelefone(new Telefone("77", "789012345"));
    cliente7.addProdutoConsumido(produtos[6]);
    cliente7.addServicoConsumido(servicos[6]);
    cliente7.addPet(pets[6]);
    clientes.push(cliente7);
    
    let cliente8 = new Cliente("08/01/2022", "11:00", "Julia", "Julinha", new CPF("89012345678", new Date()), 8);
    cliente8.addRG(new RG("RG890123", new Date()));
    cliente8.addTelefone(new Telefone("88", "890123456"));
    cliente8.addProdutoConsumido(produtos[7]);
    cliente8.addServicoConsumido(servicos[7]);
    cliente8.addPet(pets[7]);
    clientes.push(cliente8);
    
    let cliente9 = new Cliente("09/01/2022", "11:00", "Gabriel", "Gabrielzinho", new CPF("90123456789", new Date()), 9);
    cliente9.addRG(new RG("RG901234", new Date()));
    cliente9.addTelefone(new Telefone("99", "901234567"));
    cliente9.addProdutoConsumido(produtos[8]);
    cliente9.addServicoConsumido(servicos[8]);
    cliente9.addPet(pets[8]);
    clientes.push(cliente9);
    
    let cliente10 = new Cliente("10/01/2022", "11:00", "Luisa", "Luisinha", new CPF("01234567890", new Date()), 10);
    cliente10.addRG(new RG("RG012345", new Date()));
    cliente10.addTelefone(new Telefone("100", "012345678"));
    cliente10.addProdutoConsumido(produtos[9]);
    cliente10.addServicoConsumido(servicos[9]);
    cliente10.addPet(pets[9]);
    clientes.push(cliente10);
    
    let cliente11 = new Cliente("11/01/2022", "11:00", "Rafael", "Rafaelzinho", new CPF("12345678901", new Date()), 11);
    cliente11.addRG(new RG("RG123456", new Date()));
    cliente11.addTelefone(new Telefone("111", "123456789"));
    cliente11.addProdutoConsumido(produtos[10]);
    cliente11.addServicoConsumido(servicos[10]);
    cliente11.addPet(pets[10]);
    clientes.push(cliente11);

    let cliente12 = new Cliente("12/01/2022", "11:00", "Carlos", "Carlitos", new CPF("12345678901", new Date()), 12);
    cliente12.addRG(new RG("RG123456", new Date()));
    cliente12.addTelefone(new Telefone("122", "123456789"));
    cliente12.addProdutoConsumido(produtos[11]);
    cliente12.addServicoConsumido(servicos[11]);
    cliente12.addPet(pets[11]);
    clientes.push(cliente12);

    let historico1 = new Historico(1, clientes[0].getNome, produtos[0].getNome, pets[0].getNome, produtos[0].getValor, "01/01/2022", "10:00");
    historico.push(historico1);
    let historico2 = new Historico(2, clientes[1].getNome, produtos[1].getNome, pets[1].getNome, produtos[1].getValor, "02/01/2022", "11:00");
    historico.push(historico2);
    let historico3 = new Historico(3, clientes[2].getNome, produtos[2].getNome, pets[2].getNome, produtos[2].getValor, "03/01/2022", "12:00");
    historico.push(historico3);
    let historico4 = new Historico(4, clientes[3].getNome, produtos[3].getNome, pets[3].getNome, produtos[3].getValor, "04/01/2022", "13:00");
    historico.push(historico4);
    let historico5 = new Historico(5, clientes[4].getNome, produtos[4].getNome, pets[4].getNome, produtos[4].getValor, "05/01/2022", "14:00");
    historico.push(historico5);
    let historico6 = new Historico(6, clientes[5].getNome, produtos[5].getNome, pets[5].getNome, produtos[5].getValor, "06/01/2022", "15:00");
    historico.push(historico6);
    let historico7 = new Historico(7, clientes[6].getNome, produtos[6].getNome, pets[6].getNome, produtos[6].getValor, "07/01/2022", "16:00");
    historico.push(historico7);
    let historico8 = new Historico(8, clientes[7].getNome, produtos[7].getNome, pets[7].getNome, produtos[7].getValor, "08/01/2022", "17:00");
    historico.push(historico8);
    let historico9 = new Historico(9, clientes[8].getNome, produtos[8].getNome, pets[8].getNome, produtos[8].getValor, "09/01/2022", "18:00");
    historico.push(historico9);
    let historico10 = new Historico(10, clientes[9].getNome, produtos[9].getNome, pets[9].getNome, produtos[9].getValor, "10/01/2022", "19:00");
    historico.push(historico10);
    let historico11 = new Historico(11, clientes[10].getNome, produtos[10].getNome, pets[10].getNome, produtos[10].getValor, "11/01/2022", "20:00");
    historico.push(historico11);
    let historico12 = new Historico(12, clientes[11].getNome, produtos[11].getNome, pets[11].getNome, produtos[11].getValor, "12/01/2022", "21:00");
    historico.push(historico12);

}

let clientes: Array<Cliente> = [];
let produtos: Array<Produto> = [];
let servicos: Array<Servico> = [];
let pets: Array<Pet> = [];
let historico: Array<Historico> = [];

adicionarDadosPadrao(clientes, produtos, servicos, pets, historico);