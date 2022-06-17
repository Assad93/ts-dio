enum Profissao {
  Desenvolvedor,
  Atleta,
  Astronauta,
  Professor,
}

enum Materia {
  Portugues,
  Matematica,
  Quimica,
  Fisica,
  Biologia,
  Ingles,
  Historia,
  Geografia,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

interface Estudante extends Pessoa {
  materias: Materia[];
}

const pessoa1: Pessoa = {
  nome: "samir",
  idade: 28,
  profissao: Profissao.Desenvolvedor,
};

const pessoa2: Estudante = {
  nome: "Poca",
  idade: 21,
  materias: [Materia.Biologia, Materia.Quimica, Materia.Geografia],
};

console.log(pessoa1);
console.log(pessoa2);
