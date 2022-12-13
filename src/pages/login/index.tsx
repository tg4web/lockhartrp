import { useEffect, useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  async function loginUser() {
    const user = username;
    const pass = password;

    if (user === '' || pass === '') {
      return;
    }

    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    });
  }

  useEffect(() => {
    const loginMenuWrapper = document.getElementById('loginMenuWrapper');
    const loginMenu = document.getElementById('loginMenu');
    const loginMenuButton = document.getElementById('loginButton');
    const userField = document.getElementById('userField');
    const passField = document.getElementById('passField');

    if (showLogin) {
      loginMenuWrapper?.classList.remove('hidden');
      return;
    }
    loginMenuWrapper?.classList.add('hidden');

    window.addEventListener('mouseup', (e) => {
      if (!loginMenu?.contains(e.target as Node)) {
        setShowLogin(false);
      }
      return;
    });

    userField?.addEventListener('input', (e) => {
      setUsername((e.target as HTMLInputElement).value);
      return;
    });

    passField?.addEventListener('input', (e) => {
      setPassword((e.target as HTMLInputElement).value);
      return;
    });

    loginMenuButton?.addEventListener('click', () => {
      setShowLogin(!showLogin);
      return;
    });

    if (showLogin) {
      loginMenuWrapper?.classList.remove('hidden');
      return;
    }
    return;
  });
  return;
}
