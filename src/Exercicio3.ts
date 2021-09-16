class Fatura {
  constructor(
    private _numeros: number,
    private _descricao: string,
    private _QuantidadeComprada: number,
    private _preco: number
  ) {}

  // GETs
  get getQuantidadeComprada() {
    return this._QuantidadeComprada;
  }

  get getPreco() {
    return this._preco;
  }

  // Método ValorDaFatura
  public ValorDaFatura(QuantidadeComprada: number, preco: number): number {
    return QuantidadeComprada * preco;
  }
}

// Instanciando
const Compra = new Fatura(129328, "Celular", 2, 1500);
console.log(
  Compra.ValorDaFatura(Compra.getQuantidadeComprada, Compra.getPreco)
);
