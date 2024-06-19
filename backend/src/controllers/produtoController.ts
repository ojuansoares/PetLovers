import { Request, Response } from "express";
import Produto from "../modelo/produto";

export default class ProdutoController {
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
    }

    public listarProdutos(req: Request, res: Response) {
        res.json(this.produtos);
    }

    public cadastrarProduto(req: Request, res: Response): void {
        try {
            const { nome, descricao, valor } = req.body.dados;
            const id = this.produtos.length + 1;
            const novoProduto = new Produto(id, nome, descricao, valor);
            this.produtos.push(novoProduto);
            res.status(201).json(novoProduto);
        } catch (error) {
            res.send(error);
        }
    }

    public atualizarProduto(req: Request, res: Response): void {
        try {
            const dados = req.body.dados;
            const id: number = req.body.id;

            let indiceProduto = this.produtos.findIndex(produto => produto.getId === id);
            let produtoAlvo = this.produtos[indiceProduto];
            if (produtoAlvo) {
                // Atualização dos dados
                produtoAlvo.setNome = dados.nome;
                produtoAlvo.setDescricao = dados.descricao;
                produtoAlvo.setValor = dados.valor;
                res.send(`Produto atualizado com sucesso`);
            } else {
                res.send(`Produto não encontrado`);
            }
        } catch (error) {
            res.send(error);
        }
    }

    public removerProduto(req: Request, res: Response): void {
        try {
            const id: number = req.body.id;
            let indiceProduto = this.produtos.findIndex(produto => produto.getId === id);

            this.produtos.splice(indiceProduto, 1);
            res.send('Produto removido com sucesso');
        } catch (error) {
            res.send(error);
        }
    }

    public consultarProduto(req: Request, res: Response) {
        const id = req.params.id;

        const produtoAlvo = this.produtos.find(produto => produto.getId === Number(id));
        if (produtoAlvo) {
            const produto = {
                id: produtoAlvo.getId,
                nome: produtoAlvo.getNome,
                descricao: produtoAlvo.getDescricao,
                valor: produtoAlvo.getValor
            };

            res.send(produto);
        } else {
            res.send('Não foram encontrados produtos com esse código');
        }
    }
}
