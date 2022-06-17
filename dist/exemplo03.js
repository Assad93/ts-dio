"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Atleta"] = 1] = "Atleta";
    Profissao[Profissao["Astronauta"] = 2] = "Astronauta";
    Profissao[Profissao["Professor"] = 3] = "Professor";
})(Profissao || (Profissao = {}));
var Materia;
(function (Materia) {
    Materia[Materia["Portugues"] = 0] = "Portugues";
    Materia[Materia["Matematica"] = 1] = "Matematica";
    Materia[Materia["Quimica"] = 2] = "Quimica";
    Materia[Materia["Fisica"] = 3] = "Fisica";
    Materia[Materia["Biologia"] = 4] = "Biologia";
    Materia[Materia["Ingles"] = 5] = "Ingles";
    Materia[Materia["Historia"] = 6] = "Historia";
    Materia[Materia["Geografia"] = 7] = "Geografia";
})(Materia || (Materia = {}));
const pessoa1 = {
    nome: "samir",
    idade: 28,
    profissao: Profissao.Desenvolvedor,
};
const pessoa2 = {
    nome: "Poca",
    idade: 21,
    materias: [Materia.Biologia, Materia.Quimica, Materia.Geografia],
};
console.log(pessoa1);
console.log(pessoa2);
