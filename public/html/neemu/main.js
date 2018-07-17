var scrolling = false;
var direcao = 0;

function PureSlider(atributos) {

    this.erro = function (codigoErro) {

        switch (codigoErro) {
            case 1:
                throw 'Defina o ID do elemento container do slider';
            default:
                throw 'Erro desconhecido';       
        }
    };

    atributos.id === undefined ? this.erro(1) : this.id = atributos.id;
    atributos.itensPagina === undefined ? this.itensPagina = 5 : this.itensPagina = atributos.itensPagina;
    atributos.tempo === undefined ? this.tempo = 2 : this.tempo = atributos.tempo;

    this.iniciar = function () {

        var pureSliderContainer = document.getElementById(this.id);
        var pureSliderItems = pureSliderContainer.getElementsByClassName('pure-slider-item');
    }

}

function iniciarScrollHorizontal(novaDirecao) {

    // 1: Direita; -1: Esquerda

    direcao = novaDirecao;
    scrolling = true;

    var pureSliderNavigation = document.getElementById('pure-slider-navigation');

    setInterval(function () {

        if (scrolling === true) pureSliderNavigation.scrollTo(pureSliderNavigation.scrollLeft + (direcao * 1), 0);
        else return;

    }, 20);
}

function pararScrollHorizontal() {

    scrolling = false;
}