import { userRegister } from "~/common/schemas/users";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  register: publicProcedure.input(userRegister).mutation(({ input }) => {
    console.log(input);
  }),
});
