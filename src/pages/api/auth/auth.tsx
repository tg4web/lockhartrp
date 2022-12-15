export default async function Auth(
  username: string | null | undefined,
  password: string | null | undefined
) {
  if (username === null || password === null) {
    return;
  }
  console.log(username, password);
  try {
    // trpc.register.register.useQuery({
    //   username: stringedUsername,
    //   password: stringedPassword,
    // });
    console.log('Authenticating...' + username + password);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
