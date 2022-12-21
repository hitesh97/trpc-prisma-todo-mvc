import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { Context } from './context';

const trpcContext = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = trpcContext.router;
export const baseProcedure = trpcContext.procedure;
export const tContext = trpcContext;

