export default async function Auth(
  username?: string | null | undefined,
  password?: string | null | undefined
) {
  try {
    if (username === null || password === null) {
      throw new Error('Username or password is empty');
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
