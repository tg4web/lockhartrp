export default async function Auth(
  username: HTMLInputElement,
  password: HTMLInputElement
) {
  if (username === null || password === null) {
    return;
  }

  const fetchLogin = async () => {
    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    return;
  };

  try {
    fetchLogin();
    console.log('Authenticated!');
    return;
  } catch (error) {
    console.log('Unable to authenticate:' + error);
    return;
  }
}
