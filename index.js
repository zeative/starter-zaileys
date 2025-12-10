import { Client } from "zaileys";

const wa = new Client({
  authType: "pairing",
  phoneNumber: 6287833764462,
});

wa.on("messages", async (ctx) => {
  if (ctx.text == "ping") {
    await wa.send(ctx.roomId, "Pong! 🏓");
  }
});
