import { redirect } from 'next/dist/server/api-utils';
import { trpc } from '../utils/trpc';

export default function Login(username: string, password: string) {

    if (username === null || password === null) {
        return
    } else {
        const loginUser = trpc.login.login.useQuery({
          username: username as string,
          password: password as string,
        });
    }

}
