let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

atletas.forEach(function (atleta) {
  let total = 0;
  atleta.notas.forEach(function (n) {
    total = total + n;
  });
  let media = total / atleta.notas.length;
  console.log("Atleta: " + atleta.nome);
  console.log("Notas Obtidas: " + atleta.notas);
  console.log("Média Válida: " + media);
  console.log("");
});
