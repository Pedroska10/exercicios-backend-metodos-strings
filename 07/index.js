const validarEmail = (email) => {
  let emailValido = true;

  if (email.indexOf("@") < 0) {
    emailValido = false;
  } else if (email.indexOf(".") < 0) {
    emailValido = false;
  } else if (email.indexOf(".") === 0) {
    emailValido = false;
  } else if (email.lastIndexOf(".") === email.length - 1) {
    emailValido = false;
  }

  if (emailValido) {
    console.log("email válido");
  } else {
    console.log("email inválido");
  }
};

validarEmail("jose@cubos.academy");
validarEmail("jose@cubos.academy.br");
validarEmail("jose.messias@cubos.academy");
validarEmail("jose.messias@cubos.io");
validarEmail("jose@cubos");
validarEmail("jose.messias@cubos");
validarEmail("jose.messias@.");
validarEmail("jose.@cubos");
validarEmail(".@");
validarEmail("@.");
validarEmail("jose.messias@cubos.");
validarEmail(".messias@cubos.");
validarEmail(".messias@cubos");
