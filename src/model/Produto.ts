export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _preco: number;

    constructor(id: number, nome: string, preco: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get preco(): number {
        return this._preco;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public abstract visualizar(): void;

}