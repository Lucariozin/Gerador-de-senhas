export default class Gerador {
    constructor(config) {
        this.quantidade = Number(config.quantidade);
        this.numeros = config.numeros;
        this.maiusculas = config.maiusculas;
        this.minusculas = config.minusculas;
        this.simbolos = config.simbolos;
    }

    gerar() {
        let caracteres = [];
        let passworld = '';

        if (this.numeros) caracteres.push(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
        if (this.maiusculas) caracteres.push(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
        if (this.simbolos) caracteres.push(['!', '@', '#', '$', '&', '*', '%']);
        if (this.minusculas) caracteres.push(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);

        while (passworld.length !== this.quantidade) {
            for (let conjunto of caracteres) {
                if (passworld.length === this.quantidade) break;

                passworld += conjunto[Gerador.rand(conjunto.length)];
            }
        }
        
        return passworld;
    }

    static rand(max) {
        return Math.floor(Math.random() * (max - 0) + 0);
    }
}
