import { definePlugins } from "zaileys";

export default definePlugins(
  async (wa, ctx) => {
    await wa.button(ctx.messages.roomId, {
      text: "Interactive menu:",
      replied: ctx.messages.message(),
      buttons: {
        type: "interactive",
        footer: "Footer text",
        data: [
          { type: "quick_reply", id: "reply1", text: "Quick Reply" },
          { type: "cta_url", text: "Visit Website", url: "https://github.com/zeative/zaileys" },
          { type: "cta_copy", id: "copy1", text: "Copy Code", copy: "Z4!L3Y5" },
          { type: "cta_call", text: "Call Us", phoneNumber: "+6281234567890" },
        ],
      },
    });
  },
  {
    matcher: [".interactive"],
    metadata: {
      name: "Interactive features!",
      more: "anythings...",
    },
  }
);
