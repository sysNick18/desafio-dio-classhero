class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack(ataque) {
        if (this.tipo === "mago") {
            console.log(`O ${this.tipo} atacou usando ${ataque}!`);
        } else if (this.tipo === "guerreiro") {
            console.log(`O ${this.tipo} atacou usando ${ataque}!`);
        } else if (this.tipo === "monge") {
            console.log(`O ${this.tipo} atacou usando ${ataque}!`);
        } else if (this.tipo === "ninja") {
            console.log(`O ${this.tipo} atacou usando ${ataque}!`)
        } else {
            console.log("Não atacou!");
        }
    }
}

let heroMago = new Hero("Relic", "62", "mago");
heroMago.attack("magia");

let heroGuerreiro = new Hero("Rodger", "52", "guerreiro");
heroGuerreiro.attack("espada");

let heroMonge = new Hero("Martius", "102", "monge");
heroMonge.attack("artes marciais");

let heroNinja = new Hero("Chase", "32", "ninja");
heroNinja.attack("shuriken");