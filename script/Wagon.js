// ## Wagon
// Uma `Wagon` (Carroça) também tem algumas propriedades:
// - uma `capacity` (capacidade) (número), que deve ser fornecida como parâmetro para o
//   construtor, determina a quantidade máxima de passageiros que cabe na carroça.
// - uma lista de `passageiros` (array) que inicialmente está vazia.

// **O pricipal objetivo do Cocheiro (Piloto da carroça) é monitorar os assentos e
//  estado de saúde de todos os viajantes para que ele possa decidir seguir viagem
//   ou manter a quarentena**.

// Para monitorar seus assentos e seus viajantes, o cocheiro poderá:

// - getAvailableSeatCount: Retorna o número de assentos vazios, determinado pela 
// capacidade que foi estipulada quando a carroça foi criada comparado com o número
//  de passageiros a bordo no momento.

// - join: Adicione um viajante à carroça se tiver espaço. Se a carroça já estiver cheia, 
// não o adicione.

// - shouldQuarantine: Retorna true se houver pelo menos uma pessoa não saudável na carroça. 
// Retorna false se não houver.

// - totalFood: Retorna o número total de comida de todos os ocupantes da carroça.

class Wagon {
    constructor (capacity) {
        this.wagonCapacity = capacity;
        this.passengerList = [];
    }

    getAvailableSeatCount () {
        let occupied = this.passengerList.length;
        let availableSeat = this.wagonCapacity - occupied;
        return availableSeat;
    }

    join (newTraveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengerList.push(newTraveler);
        } 
        return this.passengerList;
    }

    shouldQuarantine () {
        let travelers = this.passengerList.length;
            for (let seat = 0; seat < travelers; seat++) {
                this.passengerList[seat].isHealthy = false;
            }
        return true;
    }

    totalFood () {
        let travelersFood = 0; //recebe soma do total de food
            for (let i = 0; i < this.travelers; i++) {
                this.travelersFood += this.travelers[i].qtFood; 
            }
        return travelersFood;
    }
}