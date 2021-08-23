// ## Traveler

// Um Traveler (viajante) tem algumas propriedades:  

// - um name (nome) (string) que deve ser fornecido como parâmetro para o construtor. 
// - uma quantidade de food (comida) (númerico) com valor inicial 1. 
// - uma propriedade isHealthy (está saudável)(booleano) que indica se ele está doente 
// com valor inicial true.  

// **O principal objetivo do Traveler é racionar seus mantimentos através de caçadas e
//  refeições para que ele não fique doente durante sua viagem**.

// Para racionar seus mantimentos, o Traveler poderá:

// - hunt(Caçar): Quando o Traveler sair para caçar, a quantidade de comida deve
//   aumentar em 2.
// - eat(Comer): Quando o Traveler tentar comer, caso a quantidade de comida 
//   for maior que 0, então o Traveler perde 1 comida, e continua saudável. 
// Caso a quantidade for 0, então o Traveler não consegue comer e fica doente.


class Traveler {
    constructor (name) {
        this.name = name;
        this.qtFood = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.qtFood += 2;
        return this.qtFood; 
    }

    eat() {
        if (this.qtFood > 0) {
            this.qtFood--;
        }
        if (this.qtFood === 0) {
            this.isHealthy = false;
        }
    }
}
