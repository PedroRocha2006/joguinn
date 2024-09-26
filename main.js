class Character {
    constructor(name) {
        this.name = name;
        this.life = 100;
        this.strength = 10;
        this.resources = 0;
    }

    displayStatus() {
        console.log(`Status de ${this.name}:`);
        console.log(`Vida: ${this.life}`);
        console.log(`Força: ${this.strength}`);
        console.log(`Recursos: ${this.resources}`);
    }

    takeDamage(amount) {
        this.life -= amount;
        console.log(`${this.name} sofreu ${amount} de dano.`);
    }

    gainResources(amount) {
        this.resources += amount;
        console.log(`${this.name} ganhou ${amount} recursos.`);
    }

    isAlive() {
        return this.life > 0;
    }
}

let player;
let rounds = 5;

function start() {
    player = new Character("Heroi");
    console.log("O jogo começou!");

    for (let i = 0; i < rounds; i++) {
        if (!player.isAlive()) {
            console.log(`${player.name} não sobreviveu! Fim do jogo.`);
            break;
        }

        player.displayStatus();
        playRound(i + 1);
    }

    if (player.isAlive()) {
        console.log(`${player.name} venceu! Parabéns!`);
    }
}

function playRound(roundNumber) {
    console.log(`Rodada ${roundNumber}:`);
    
    const challenge = Math.floor(Math.random() * 2);
    const resourceGain = Math.floor(Math.random() * 20);

    if (challenge === 0) {
        const damage = Math.floor(Math.random() * 30);
        player.takeDamage(damage);
    } else {
        player.gainResources(resourceGain);
    }

    console.log("");
}
