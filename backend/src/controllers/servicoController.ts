import { Request, Response } from "express";
import Servico from "../modelo/servico";

export default class ServicoController {
    private servicos: Array<Servico>;

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
    }

    public listarServicos(req: Request, res: Response) {
        res.json(this.servicos);
    }

    public cadastrarServico(req: Request, res: Response): void {
        try {
            const { nome, descricao, valor } = req.body.dados;
            const id = this.servicos.length + 1;
            const novoServico = new Servico(id, nome, descricao, valor);
            this.servicos.push(novoServico);
            res.status(201).json(novoServico);
        } catch (error) {
            res.send(error);
        }
    }

    public atualizarServico(req: Request, res: Response): void {
        try {
            const dados = req.body.dados;
            const id: number = req.body.id;

            let indiceServico = this.servicos.findIndex(servico => servico.getId === id);
            let servicoAlvo = this.servicos[indiceServico];
            if (servicoAlvo) {
                // Atualização dos dados
                servicoAlvo.setNome = dados.nome;
                servicoAlvo.setDescricao = dados.descricao;
                servicoAlvo.setValor = dados.valor;
                res.send(`Serviço atualizado com sucesso`);
            } else {
                res.send(`Serviço não encontrado`);
            }
        } catch (error) {
            res.send(error);
        }
    }

    public removerServico(req: Request, res: Response): void {
        try {
            const id: number = req.body.id;
            let indiceServico = this.servicos.findIndex(servico => servico.getId === id);

            this.servicos.splice(indiceServico, 1);
            res.send('Serviço removido com sucesso');
        } catch (error) {
            res.send(error);
        }
    }

    public consultarServico(req: Request, res: Response) {
        const id = req.params.id;

        const servicoAlvo = this.servicos.find(servico => servico.getId === Number(id));
        if (servicoAlvo) {
            const servico = {
                id: servicoAlvo.getId,
                nome: servicoAlvo.getNome,
                descricao: servicoAlvo.getDescricao,
                valor: servicoAlvo.getValor
            };

            res.send(servico);
        } else {
            res.send('Não foram encontrados serviços com esse código');
        }
    }
}