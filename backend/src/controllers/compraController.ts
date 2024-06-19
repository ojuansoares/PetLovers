import { Request, Response } from "express";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Compra from "../modelo/compra";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";

export default class CompraController {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarCompra(req: Request, res: Response) {
        res.json(this.empresa.getCompras);
    }

    public realizarCompra(req: Request, res: Response) {
        try {
            const { cpfCliente, tipoCompra, idItem, idPet } = req.body;
            const clienteAlvo = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (!clienteAlvo) {
                console.error('Cliente não encontrado');
                return res.status(404).send('Cliente não encontrado');
            }

            let petAlvo: Pet | null | undefined = null;
            if (idPet) {
                petAlvo = clienteAlvo.getPet(idPet);
                if (petAlvo === undefined) {
                    petAlvo = null;
                }
                if (!petAlvo) {
                    console.error('Pet não encontrado');
                    return res.status(404).send('Pet não encontrado');
                }
            }

            let itemComprado;
            let valor: string;
            if (tipoCompra === "produto") {
                itemComprado = this.empresa.getProdutos.find(produto => produto.getId === idItem);
                if (!itemComprado) {
                    console.error('Produto não encontrado');
                    return res.status(404).send('Produto não encontrado');
                }
                valor = (itemComprado as Produto).getValor.toString();
                itemComprado = (itemComprado as Produto).clone(); // Clonando produto
            } else if (tipoCompra === "servico") {
                itemComprado = this.empresa.getServicos.find(servico => servico.getId === idItem);
                if (!itemComprado) {
                    console.error('Serviço não encontrado');
                    return res.status(404).send('Serviço não encontrado');
                }
                valor = (itemComprado as Servico).getValor.toString();
                itemComprado = (itemComprado as Servico).clone(); // Clonando serviço

                if (!petAlvo) {
                    console.error('Pet obrigatório para serviços');
                    return res.status(400).send('Pet obrigatório para serviços');
                }
            } else {
                console.error('Tipo de compra inválido');
                return res.status(400).send('Tipo de compra inválido');
            }

            const novaCompra = new Compra(
                clienteAlvo.nome,
                clienteAlvo.getCpf.getValor,
                tipoCompra,
                itemComprado,
                petAlvo,
                valor,
                new Date()
            );
            this.empresa.getCompras.push(novaCompra);

            if (tipoCompra === "produto") {
                clienteAlvo.adicionarProdutoConsumido(itemComprado as Produto);
            } else if (tipoCompra === "servico") {
                clienteAlvo.adicionarServicoConsumido(itemComprado as Servico);
            }

            res.send("Compra realizada com sucesso");

        } catch (error) {
            console.error("Erro ao realizar compra:", error);
            res.status(500).send("Erro ao realizar compra");
        }
    }
}
