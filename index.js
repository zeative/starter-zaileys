import { Client } from "zaileys";

const wa = new Client({
  authType: "qr",

  fakeReply: {
    provider: "chatgpt",
  },

  citation: {
    authors: async () => {
      // const api = await fetch...

      // support lid
      return [62000000, 120000000];
    },
  },
});

wa.use(async (ctx, next) => {
  if (ctx.messages.isSpam) {
    await wa.send(ctx.messages.roomId, "Don't spam!");
    return;
  }

  await next();
});

wa.on("messages", async (ctx) => {
  const isAuthor = await ctx.citation.authors();

  if (isAuthor) {
    await wa.send(ctx.roomId, "You are author!");
    return;
  }

  if (ctx.text == "hello") {
    await wa.send(ctx.roomId, "Hello!");
  }
});
