import { cleanJid, definePlugins } from "zaileys";

export default definePlugins(
  async (wa, ctx) => {
    await wa.reaction(ctx.messages.message(), "👍");
    await wa.send(ctx.messages.roomId, `Hello @${cleanJid(ctx.messages.senderLid)} from plugin!`);
  },
  {
    matcher: [".hello"],
    metadata: {
      name: "Hello features!",
      more: "anythings...",
    },
  }
);
