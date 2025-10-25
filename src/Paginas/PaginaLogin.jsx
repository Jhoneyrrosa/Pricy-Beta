import React from 'react';

// Este é um componente de função básico do React.
function Login() {
  return (
    <div>
      <h1>Página de Login</h1>
      {/* Você pode adicionar seu formulário de login aqui */}
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;