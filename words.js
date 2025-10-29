const words = [
  { word: "morango", clue: "Fruta vermelha" },
  { word: "gato", clue: "felino" },
  { word: "borboleta", clue: "inseto voador" },
  { word: "lobo", clue: "Animal, canino" },
  { word: "foice", clue: "Instrumento de trabalho braçal" },
  { word: "Baixo", clue: "Instrumento musical com cordas" },
  { word: "dado", clue: "Usado em jogos de RPG" },
  { word: "cavalo", clue: "Animal grande usado em esportes" },
  { word: "barco", clue: "Embarcação no mar" },
  { word: "avião", clue: "11 de setembro" },
  { word: "amazônia", clue: "Área mais conhecida no Brasil." },
  { word: "homer", clue: "Figura mais conhecida nos desenhos" },
  { word: "nasa", clue: "Precisa estudar o brasileiro" },
  { word: "açai", clue: "Doce gelado" },
  { word: "hospital", clue: "lugar de tratamento" },
  { word: "praia", clue: "lugar para férias" },
  { word: "homosapiens", clue: "Evolução humana" },
  { word: "paleolitico", clue: "Fogo" },
  { word: "Alemanha", clue: "1945" },
  { word: "minas gerais", clue: "cesio 137" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
