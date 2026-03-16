import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {

    private _peso: number;

    constructor(id: number, nome: string, preco: number, peso: number) {

        super(id, nome, preco);
        this._peso = peso;
    }

    public get peso(): number {
        return this._peso;
    }



    public set peso(peso: number) {
        this._peso = peso;
    }

    public visualizar(): void {
        console.log("\nDados do Produto Físico");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Peso: ${this._peso} kg`);
    }

}