import { definePlugins } from "zaileys";

export default definePlugins(
  async (wa, ctx) => {
    await wa.button(ctx.messages.roomId, {
      text: "Choose group features:",
      replied: ctx.messages.message(),
      buttons: {
        type: "simple",
        footer: "Zaileys Library",
        data: [{ id: "metadata", text: "Group Metadata" }],
      },
    });
  },
  {
    matcher: [".group"],
    metadata: {
      name: "Group features!",
      more: "anythings...",
    },
  }
);
