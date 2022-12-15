import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const prisma = new PrismaClient();

export const appRouter = router({
  register: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .query(({ input }) => {
      const { username, password } = input;

      async function main(username: string, password: string) {
        const user = prisma.userProfile.create({
          data: {
            username: username,
            password: password,
          },
        });
      }
      return {
        greeting: `hello ${user.data.username}}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
