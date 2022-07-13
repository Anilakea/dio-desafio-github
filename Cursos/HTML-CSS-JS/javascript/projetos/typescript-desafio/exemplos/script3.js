var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Professora"] = 0] = "Professora";
    Profissoes[Profissoes["M\u00E9dico"] = 1] = "M\u00E9dico";
    Profissoes[Profissoes["Mec\u00E2nico"] = 2] = "Mec\u00E2nico";
    Profissoes[Profissoes["Programador"] = 3] = "Programador";
    Profissoes[Profissoes["Webdesigner"] = 4] = "Webdesigner";
    Profissoes[Profissoes["Engenheiro"] = 5] = "Engenheiro";
})(Profissoes || (Profissoes = {}));
;
;
var Carlos = {
    nome: 'Carlos',
    idade: 24,
    profissao: Profissoes.Webdesigner,
    possuiCarro: true
};
;
var Vanessa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissoes.Professora,
    possuiCarro: true,
    aptidoes: ['Licenciatura', 'Liderança']
};
function listar(list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        console.log('- ' + item);
    }
    ;
}
;
