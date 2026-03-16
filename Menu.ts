import * as readlineSync from 'readline-sync';
let opcao: number;

while (true) {

    console.log('**************************');
    console.log('Ecommerce do João');
    console.log('*****************************');
    console.log('1 Cadastrar produto');
    console.log('2  Listar produtos');
    console.log('3  Buscar produto');
    console.log('4  atualizar produto');
    console.log('5  deletar produto');
    console.log('6  sair');
    console.log('*******************************');

    opcao = readlineSync.questionInt("entre com a opcao desejada: ");

    if (opcao === 6) {
        console.log("sistema encerrado")
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            console.log("cadastrar produto");
            break;

        case 2:
            console.log("listar produtos");
            break;

        case 3:
            console.log("buscar produto");
            break;


        case 4:
            console.log("atualizar produto");
            break;

        case 5:
            console.log("deletar produto");
            break;


        default:
            console.log("opção inválida");

    }




}
