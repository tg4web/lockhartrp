import { useRef } from 'react';
import { trpc } from '../../../utils/trpc';
import Auth from '../../../pages/Auth';

export default function LoginMenu() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function getLoginFormData() {
    const username: string | undefined = usernameRef.current?.value;
    const password: string | undefined = passwordRef.current?.value;

    submitLoginFormInfo(username, password);
    return;
  }

  async function submitLoginFormInfo(
    username: string | undefined,
    password: string | undefined
  ) {
    let response = await Auth(username, password);
    if (response === true) {
      return trpc.login.login.useQuery({
        username: username as string,
        password: password as string,
      });
    } else {
      console.log('Auth failed');
    }
    return;
  }

  return (
    <div
      id="loginMenuWrapper"
      className="fixed top-0 left-0 flex justify-center items-center bg-slate-700 bg-opacity-50 w-full h-full"
    >
      <div
        id="loginMenu"
        className="flex flex-col w-96 h-72 justify-center items-center rounded-lg text-slate-700 bg-zinc-200"
      >
        <h1 className="text-3xl">Welcome back</h1>
        <p className="text-xs mb-2">Please enter your details.</p>
        <input
          ref={usernameRef}
          id="userField"
          className="m-1 rounded-sm"
          placeholder="Username"
          type="text"
        />
        <input
          ref={passwordRef}
          id="passField"
          className="m-1 rounded-sm"
          placeholder="Password"
          type="text"
        />
        <button
          onClick={getLoginFormData}
          id="loginSubmitButton"
          className="m-2 p-1 w-20 hover:bg-slate-600 rounded-sm bg-slate-700 text-zinc-200"
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
}
