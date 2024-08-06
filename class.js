//Start class lesson
//OOP -> Object Oriented Programming
//Uma classe nada mais é do que um molde para criar objetos com características e comportamentos semelhantes.

// Vamos fazer uma comparação com algo que poderia ser várias variáveis e funções soltas.
// Exemplo: um carro | Vamos criar um carro com as propriedades e métodos que ele teria.

// Variáveis -> Características
// Cor
// Modelo
// Marca
// Velocidade máxima

// Funções -> Métodos
// ligar
// desligar
// acelerar
// freiar

// Primeiro o exemplo em variáveis e funções
let car1 = {
   cor: "Vermelho",
   modelo: "Fusca",
   marca: "Volkswagen",
   velocidadeMaxima: 80,
};

let car2 = {
   cor: "Preto",
   modelo: "Civic",
   marca: "Honda",
   velocidadeMaxima: 180,
};

function ligar(modelo) {
   console.log(`O ${modelo} ligou`);
}

function desligar(modelo) {
   console.log(`O ${modelo} desligou`);
}
// O que podemos ver é que temos várias variáveis e funções soltas, e se tivermos que criar mais carros, teríamos que criar mais variáveis e funções.
console.log("Carro 1 criado sem classe -->", car1);
console.log(desligar(car1.modelo)); //perceba que passamos o modelo do carro como parâmetro

// Agora vamos fazer o mesmo exemplo, mas com classes
// Para criar uma classe, usamos a palavra reservada class
// O nome da classe sempre começa com letra maiúscula
// A classe é um molde para criar objetos

class Carro {
   // O método constructor é um método especial que é chamado no momento que o objeto é criado
   // O construtor é um método que recebe os parâmetros que queremos passar para o objeto
   // O construtor é um método que inicializa as propriedades do objeto
   // Os parâmetros que passamos para o construtor são os valores que queremos passar para as propriedades do objeto no momento da criação
   constructor(cor, modelo, marca, velocidadeMaxima) {
      // a cor do carro é igual a cor que passamos como parâmetro
      this.cor = cor;
      this.modelo = modelo;
      this.marca = marca;
      this.velocidadeMaxima = velocidadeMaxima;
      //O que é this? O this é uma palavra reservada que se refere ao objeto que está sendo criado
   }

   // Métodos são funções que estão dentro de uma classe
   ligar() {
      console.log(`O ${this.modelo} ligou`);
   }

   desligar() {
      console.log(`O ${this.modelo} desligou`);
   }

   allInfo() {
      console.log(
         `O ${this.modelo} é da marca ${this.marca} e tem a cor ${this.cor}`
      );
   }
}

// Para criar um objeto a partir de uma classe, usamos a palavra reservada new
// new -> cria um novo objeto
// Carro -> nome da classe
// () -> chamamos o construtor da classe
// Passamos os valores que queremos passar para as propriedades do objeto
let carro1 = new Carro("Vermelho", "Fusca", "Volkswagen", 80);
let carro2 = new Carro("Preto", "Civic", "Honda", 180);
console.log("Carro 1 criado pela classe -->", carro1);
console.log("Carro 2 criado pela classe -->", carro2);

//acessando propriedades -> perceba que acessamos as propriedades do objeto com o ponto como se fosse um objeto normal
console.log("Caracteristica cor do carro1", carro1.cor);
console.log("Caracteristica cor do carro2", carro2.cor);

//acessando métodos -> perceba que acessamos os métodos do objeto com o ponto como se fosse um objeto normal
carro1.ligar(); //perceba que não passamos o modelo do carro como parâmetro porque o this já sabe que é o carro1 que estamos nos referindo
carro2.ligar(); // O carro 2 é o que está sendo referenciado, porque o método ligar está sendo chamado a partir do carro2 (por isso ele sabe que o modelo é Civic)
carro1.allInfo();
carro2.allInfo();

/* 
Pontos importantes para se perceber: 
1- A classe é um molde para criar objetos
2- O construtor é um método especial que inicializa as propriedades do objeto
3- O this é uma palavra reservada que se refere ao objeto que está sendo criado
4- Métodos são funções que estão dentro de uma classe
5- Para criar um objeto a partir de uma classe, usamos a palavra reservada new
6- Acessamos as propriedades e métodos do objeto com o ponto como se fosse um objeto normal
7- O nome da classe sempre começa com letra maiúscula
*/

// EXERCÍCIO: Crie um novo carro com a cor Azul, modelo Uno, marca Fiat e velocidade máxima 120 e dê um console.log nele e chame todos os métodos dele. //
// EXERCÍCIO: Crie um novo carro com a cor Branco, modelo Gol, marca Volkswagen e velocidade máxima 100 e dê um console.log nele e chame todos os métodos dele. //

// Vamos para um exemplo um pouco mais palpável e prático: Calculadora

// Vamos criar uma calculadora com as operações de soma, subtração, multiplicação e divisão
// Primeiro vamos fazer o exemplo sem classe

let valor1 = 10;
let valor2 = 5;

function soma(valor1, valor2) {
   return valor1 + valor2;
}

function subtracao(valor1, valor2) {
   return valor1 - valor2;
}

function multiplicacao(valor1, valor2) {
   return valor1 * valor2;
}

function divisao(valor1, valor2) {
   return valor1 / valor2;
}

console.log("Soma sem classe -->", soma(valor1, valor2));
console.log("Subtração sem classe -->", subtracao(valor1, valor2));
console.log("Multiplicação sem classe -->", multiplicacao(valor1, valor2));

// Agora vamos fazer o mesmo exemplo, mas com classes
class Calculadora {
   constructor(valor1, valor2) {
      this.valor1 = valor1;
      this.valor2 = valor2;
   }

   soma() {
      return this.valor1 + this.valor2;
   }

   subtracao() {
      return this.valor1 - this.valor2;
   }

   multiplicacao() {
      return this.valor1 * this.valor2;
   }

   divisao() {
      return this.valor1 / this.valor2;
   }
}

let calculadora1 = new Calculadora(10, 5);
console.log("Soma com classe -->", calculadora1.soma());
console.log("Subtração com classe -->", calculadora1.subtracao());
console.log("Multiplicação com classe -->", calculadora1.multiplicacao());
console.log("Divisão com classe -->", calculadora1.divisao());

//Exercicio bonus: Altera a classe da Calculadora para que ela guarde o valor do resultado da última operação realizada. //
//Exercicio bonus: Adicione um método que zere o valor do ultimo resultado resultado. //

