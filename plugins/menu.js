import { definePlugins } from "zaileys";

export default definePlugins(
  async (wa, ctx) => {
    await wa.button(ctx.messages.roomId, {
      text: "Choose menu features:",
      replied: ctx.messages.message(),
      buttons: {
        type: "simple",
        footer: "Zaileys Library",
        data: [
          { id: "sticker", text: "Make Sticker" },
          { id: "image", text: "Make Image" },
          { id: "video", text: "Make Video" },
          { id: "voice", text: "Make Voice" },
        ],
      },
    });
  },
  {
    matcher: [".menu"],
    metadata: {
      name: "Menu features!",
      more: "anythings...",
    },
  }
);
