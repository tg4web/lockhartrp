export default function LoginMenu() {
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
          id="userField"
          className="m-1 rounded-sm"
          placeholder="Username"
          type="text"
        />
        <input
          id="passField"
          className="m-1 rounded-sm"
          placeholder="Password"
          type="password"
        />
        <button
          className="m-2 p-1 w-20 hover:bg-slate-600 rounded-sm bg-slate-700 text-zinc-200"
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
}
