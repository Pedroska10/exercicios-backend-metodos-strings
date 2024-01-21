const nome = "Gu ido Cerqueira";

const geradorNickname = (nome) => {
  const nomes = nome.trim().toLowerCase().split(" ");
  let nomeSemEspaco = "";

  for (const item of nomes) {
    nomeSemEspaco += item;
  }

  const nickname = nomeSemEspaco.slice(0, 12);

  console.log(`@${nickname}`);
};

geradorNickname(nome);
