import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const prisma = new PrismaClient();

export const appRouter = router({
  login: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .query(({ input }) => {
      const { username, password } = input;

      return {
        greeting: `hello`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
