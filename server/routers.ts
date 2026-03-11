import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createAsycudaRequest, getAsycudaRequests, getAsycudaRequestById, updateAsycudaRequestStatus } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  asycuda: router({
    submitRequest: publicProcedure
      .input(z.object({
        fullName: z.string(),
        companyName: z.string().optional(),
        phone: z.string(),
        email: z.string(),
        serviceType: z.string(),
        productName: z.string(),
        hsCode: z.string(),
        countryOfOrigin: z.string(),
        goodsValue: z.string(),
        productDescription: z.string(),
        notes: z.string().optional(),
        attachments: z.array(z.object({
          name: z.string(),
          url: z.string(),
          key: z.string(),
          mimeType: z.string(),
          size: z.number(),
        })).optional(),
      }))
      .mutation(async ({ input }) => {
        return await createAsycudaRequest(input);
      }),
    
    getRequests: publicProcedure.query(async () => {
      return await getAsycudaRequests();
    }),
    
    getRequestById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getAsycudaRequestById(input);
      }),
    
    updateStatus: publicProcedure
      .input(z.object({
        id: z.number(),
        status: z.string(),
      }))
      .mutation(async ({ input }) => {
        return await updateAsycudaRequestStatus(input.id, input.status);
      }),
  }),
});

export type AppRouter = typeof appRouter;
