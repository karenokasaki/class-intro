// Definindo a classe PedraPapelTesoura
class PedraPapelTesoura {
   constructor(jogador1Name, jogador2Name) {
      this.jogador1Name = jogador1Name; // Nome do Jogador 1
      this.jogador2Name = jogador2Name; // Nome do Jogador
      this.jogador1Pontos = 0; // Pontos do Jogador 1
      this.jogador2Pontos = 0; // Pontos do Jogador 2
      this.opcoes = ["pedra", "papel", "tesoura"]; // Opções disponíveis
   }

   // Método para jogar uma rodada
   jogar(jogada1, jogada2) {
      if (!this.opcoes.includes(jogada1) || !this.opcoes.includes(jogada2)) {
         return "Jogada inválida! Escreva uma opção válida: pedra, papel ou tesoura.";
      }

      if (jogada1 === jogada2) {
         return "Empate!";
      }

      if (
         (jogada1 === "pedra" && jogada2 === "tesoura") ||
         (jogada1 === "tesoura" && jogada2 === "papel") ||
         (jogada1 === "papel" && jogada2 === "pedra")
      ) {
         this.jogador1Pontos++;
         return `${this.jogador1Name} vence a rodada!`;
      } else {
         this.jogador2Pontos++;
         return `${this.jogador2Name} vence a rodada!`;
      }
   }

   // Método para exibir a pontuação atual
   mostrarPontuacao() {
      return `Pontuação - ${this.jogador1Name}: ${this.jogador1Pontos}, ${this.jogador2Name}: ${this.jogador2Pontos}`;
   }

   // Método para resetar o jogo
   resetar() {
      this.jogador1Pontos = 0;
      this.jogador2Pontos = 0;
      return "O jogo foi resetado.";
   }
}

// Instanciando um objeto da classe PedraPapelTesoura
const jogo = new PedraPapelTesoura("Karen", "Dany");

// Simulando algumas jogadas
console.log(jogo.jogar("pedra", "tesoura")); // Jogador 1 vence a rodada!
console.log(jogo.jogar("pedra", "papel")); // Jogador 1 vence a rodada!
console.log(jogo.jogar("tesoura", "papel")); // Jogador 1 vence a rodada!

// Mostrando a pontuação atual
console.log(jogo.mostrarPontuacao()); // Pontuação - Jogador 1: 3, Jogador 2: 0

// Resetando o jogo
console.log(jogo.resetar()); // O jogo foi resetado.
console.log(jogo.mostrarPontuacao()); // Pontuação - Jogador 1: 0, Jogador 2: 0

/* Pontos importantes a se perceber aqui
O estado do jogo estáo guardados nas propriedades do objeto "jogo" que é uma instância da classe PedraPapelTesoura
O método jogar é responsável por alterar o estado do jogo
O método mostrarPontuacao é responsável por mostrar o estado do jogo
O método resetar é responsável por resetar o estado do jogo
O this é uma palavra reservada que se refere ao objeto que está sendo criado ex: this.jogador1Name = jogo.jogador1Name;
*/
