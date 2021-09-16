interface IEndereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

const Endereco: IEndereco = {
  rua: "São Sebastião",
  numero: 51,
  bairro: "Centro",
  cidade: "Barra Mansa",
};

console.log(Endereco);
