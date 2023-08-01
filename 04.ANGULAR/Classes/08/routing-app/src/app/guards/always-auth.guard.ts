import { CanActivateFn } from '@angular/router';

export const alwaysAuthGuard: CanActivateFn = (route, state) => {
  console.log('AlwaysAuthGuard');

  /*
      Ir as cookies e verificar se o utilizador está autenticado
      Se estiver autenticado, devolve true
      Se não estiver autenticado, devolve false

      Realizar o pedido ao servidor para verificar se o utilizador está autenticado
      Se estiver autenticado, devolve true
      Se não estiver autenticado, devolve false

      Redirecionar para a página de login
      Se o utilizador nao estiver autenticado
  */

  return true;


};
