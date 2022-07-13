var Jobs;
(function (Jobs) {
    Jobs[Jobs["Atriz"] = 0] = "Atriz";
    Jobs[Jobs["Padeiro"] = 1] = "Padeiro";
})(Jobs || (Jobs = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Jobs.Atriz
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Jobs.Padeiro
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Jobs.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Jobs.Padeiro
};
