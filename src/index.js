import './assets/css/style.css';
import Gerador from './modules/Gerador';


const buttonGera = document.querySelector('.gerar');

buttonGera.addEventListener('click', () => {
    const pagina = new Pagina();
    const valido = pagina.validar();

    if (valido) {
        const config = pagina.criarConfig();
        const gerador = new Gerador(config);

        const passworld = gerador.gerar();
        pagina.exibirPassworld(passworld);
    }
});

class Pagina {
    constructor() {
        this.display = document.querySelector('.display');
        this.quantidade = document.querySelector('.quantidade').value;
        this.numeros = document.querySelector('.numeros').checked;
        this.maiusculas = document.querySelector('.maiusculas').checked;
        this.minusculas = document.querySelector('.minusculas').checked;
        this.simbolos = document.querySelector('.simbolos').checked;
    }

    exibirPassworld(passworld) {
        this.display.value = passworld;
        this.display.style.color = 'green';
    }

    criarConfig() {
        return {
            quantidade: this.quantidade,
            numeros: this.numeros,
            maiusculas: this.maiusculas,
            minusculas: this.minusculas,
            simbolos: this.simbolos
        }
    }

    validar() {
        let valido = true;

        if (String(Number(this.quantidade)) === 'NaN' || !this.quantidade || this.quantidade > 20 || this.quantidade < 1) {
            valido = false;
            this.exibirErro('Quantidade inválida.');
        }

        if (!this.numeros && !this.maiusculas && !this.minusculas && !this.simbolos) {
            valido = false;
            this.exibirErro('Selecione um caractér.');
        }

        return valido;
    }

    exibirErro(msg) {
        this.display.value = msg;
        this.display.style.color = 'red';
    }
}
