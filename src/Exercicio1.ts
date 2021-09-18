class Pessoas {
  constructor(
    private _nome: string,
    private _sexo: string,
    private _idade: number
  ) {}

  get getNome() {
    return this._nome;
  }

  get getSexo() {
    return this._sexo;
  }

  get getIdade() {
    return this._idade;
  }

  set setNome(nome: string) {
    // Condicional
    if (nome === "") {
      throw new Error("Nome Inválido");
    }
    this._nome = nome; // Parâmetro recebido
  }

  set setSexo(sexo: string) {
    // Condicional
    if (sexo !== "masculino" && sexo !== "feminino")
      // Se for diferente de Masculino e Feminino.
      throw new Error("Informação Inválida");
    this._sexo = sexo; // Parâmetro recebido
  }

  set setIdade(idade: number) {
    // Condicional
    if (idade === 0) throw new Error("Idade Inválida.");
    this._idade = idade; // Parâmetro recebido
  }

  // Método Para Verificar se a Pessoa é Maior de Idade ou Menor de idade.
  public VerificarIdade(): void {
    // Void = Quando o Método não recebe nenhum retorno.
    if (this._idade >= 18) console.log("Pessoa Maior de Idade !!!");
    else console.log("Pessoa Menor de Idade !!!");
  }
}

// Instanciando uma nova classe (Venancio)
const NovaPessoa = new Pessoas("Venâncio", "Masculino", 25);

// Verificando o Nome
try {
  NovaPessoa.setNome = "Marcos"; // Recebendo nome
  console.log(`O nome é: ${NovaPessoa.getNome}`);
} catch (error) {
  console.log(error.message);
}

// Verificando o Sexo
try {
  NovaPessoa.setSexo = "";
  console.log(`O gênero é: ${NovaPessoa.getSexo}`);
} catch (error) {
  console.log(error.message);
}

// Verificando idade
try {
  NovaPessoa.setIdade = 17;
  console.log(`A idade é de: ${NovaPessoa.getIdade} anos`);

  // Método para verificar se é maior de idade ou menor de idade.
  NovaPessoa.VerificarIdade();
} catch (error) {
  console.log(error.message);
}
