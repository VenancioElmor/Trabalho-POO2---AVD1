    class Pessoas {
        constructor(
            private _nome: string,
            private _sexo: string,
            private _idade: number,
        ) {}
    

    get getNome() {
        return this._nome
    }

    get getSexo() {
        return this._sexo
    }

    get getIdade() {
        return this._idade
    }

    set setNome(nome: string) {
        // Condicional
        if(nome === "") {
            throw new Error("Nome Inválido")
        }
         this._nome = nome // Parâmetro recebido 
    }

    set setSexo(sexo: string) {
        // Condicional 
        if(sexo !== "masculino" && sexo !== "feminino") // Se for diferente de Masculino e Feminino.  
            throw new Error("Informação Inválida")
         this._sexo = sexo  // Parâmetro recebido 
    }

    set setIdade(idade: number) {
        // Condicional
        if(idade === 0)
            throw new Error ("Idade Inválida.")
         this._idade = idade    // Parâmetro recebido 
    }

    // Método Para Verificar se a Pessoa é Maior de Idade. 
    public VerificarIdade() :void {         // Void = Quando o Método não recebe nenhum retorno. 
        if (this._idade >= 18)
        console.log("Maior de Idade !!!")
        else console.log("Menor de Idade !!!")
    }
}

// Instanciando uma nova classe (Venancio)
const Venancio = new Pessoas("Venâncio", "Masculino", 25) 

// Verificando o Nome
try {
    Venancio.setNome = "Pedro";  // Recebendo nome
    console.log(Venancio.getNome)
} catch (error) {
    console.log(error.message);
}

// Verificando o Sexo 
try {
    Venancio.setSexo = "feminino";
    console.log(Venancio.getSexo)
} catch (error) {
    console.log(error.message);
}

// Verificando idade
try {
    Venancio.setIdade = 0;
    console.log(Venancio.getIdade)
    // Método para verificar idade. 
    Venancio.VerificarIdade();
} catch (error) {
    console.log(error.message)
}
