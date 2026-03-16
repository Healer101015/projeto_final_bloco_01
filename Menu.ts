import * as readlineSync from 'readline-sync';

import { ProdutoController } from "./src/controller/ProdutoController";
import { ProdutoFisico } from "./src/model/ProdutoFisico";

const produtos = new ProdutoController();

let opcao: number;

while (true) {

    console.log("\n**************************************");
    console.log("        ECOMMERCE DO JOÃO             ");
    console.log("**************************************");
    console.log("1 - Cadastrar Produto");
    console.log("2 - Listar Produtos");
    console.log("3 - Buscar Produto por ID");
    console.log("4 - Atualizar Produto");
    console.log("5 - Deletar Produto");
    console.log("6 - Sair");
    console.log("**************************************");

    opcao = readlineSync.questionInt("Entre com a opcao desejada: ");

    if (opcao === 6) {
        console.log("\nSistema encerrado!");
        process.exit(0);
    }

    switch (opcao) {

        case 1:

            let nome = readlineSync.question("\nNome do produto: ");
            let preco = readlineSync.questionFloat("Preco: ");
            let peso = readlineSync.questionFloat("Peso: ");

            produtos.cadastrar(
                new ProdutoFisico(produtos.gerarId(), nome, preco, peso)
            );

            break;

        case 2:

            produtos.listarTodos();

            break;

        case 3:

            let idBusca = readlineSync.questionInt("\nDigite o ID do produto: ");
            produtos.buscarPorId(idBusca);

            break;

        case 4:

            let idAtualizar = readlineSync.questionInt("\nID do produto: ");
            let nomeNovo = readlineSync.question("Novo nome: ");
            let precoNovo = readlineSync.questionFloat("Novo preco: ");
            let pesoNovo = readlineSync.questionFloat("Novo peso: ");

            produtos.atualizar(
                new ProdutoFisico(idAtualizar, nomeNovo, precoNovo, pesoNovo)
            );

            break;

        case 5:

            let idDeletar = readlineSync.questionInt("\nID do produto: ");
            produtos.deletar(idDeletar);

            break;

        default:
            console.log("\nOpcao invalida!");

    }

}