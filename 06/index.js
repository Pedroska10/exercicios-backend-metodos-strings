const celular = 7199918888;

function formataCelular(numero) {
  let celular;

  if (numero.length === 8) {
    celular = `9 ${numero.slice(0, 4)}-${numero.slice(4)}`;
    console.log(celular);
  } else if (numero.length === 9) {
    celular = `${numero.slice(0, 1)} ${numero.slice(1, 5)}-${numero.slice(5)}`;
    console.log(celular);
  } else if (numero.length === 10) {
    celular = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)}-${numero.slice(
      6
    )}`;
    console.log(celular);
  } else if (numero.length === 11) {
    celular = `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(
      3,
      7
    )}-${numero.slice(7)}`;
    console.log(celular);
  } else {
    console.log("número inválido");
  }
}

formataCelular(celular.toString());
