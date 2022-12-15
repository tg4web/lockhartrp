import { router } from '../trpc';

// Define the routers

import { appRouter as loginRouter } from './login';
import { appRouter as registerRouter } from './register';

export const appRouter = router({
  login: loginRouter,
  register: registerRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;