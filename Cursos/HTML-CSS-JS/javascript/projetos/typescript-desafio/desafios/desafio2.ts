enum Jobs {
    Atriz,
    Padeiro,
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: Jobs
}

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Jobs.Atriz
};
let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Jobs.Padeiro
}
let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Jobs.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Jobs.Padeiro
}