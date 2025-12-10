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
  const buttonId = ctx.media?.selectedId;

  if (isAuthor) {
    await wa.send(ctx.roomId, "You are author!");
    return;
  }

  if (ctx.text == ".help") {
    const plugins = wa.plugins.getPluginsInfo();

    let text = "Available Menu!\n";

    for (let i = 0; i < plugins.length; i++) {
      text += `${i + 1}. \`${plugins[i].matcher[0]}\` ${plugins[i].metadata.name}\n`;
    }

    text += "\n\n> https://github.com/zeative/starter-zaileys";

    await wa.send(ctx.roomId, {
      text,
      replied: ctx.message(),
      banner: {
        thumbnailUrl: "https://github.com/zeative.png",
        sourceUrl: "https://github.com/zeative/zaileys",
        title: "Zaileys Library",
        body: "Simplified WhatsApp Node.js TypeScript/JavaScript API",
      },
    });
  }

  // Menu Features

  if (buttonId == "sticker") {
    await wa.send(ctx.roomId, {
      sticker: "https://github.com/zeative/zeative/raw/refs/heads/main/assets/pentol.mp4",
      replied: ctx.message(),
    });
  }

  if (buttonId == "image") {
    await wa.send(ctx.roomId, {
      image: "https://github.com/zeative.png",
      replied: ctx.message(),
    });
  }

  if (buttonId == "video") {
    await wa.send(ctx.roomId, {
      video: "https://github.com/zeative/zeative/raw/refs/heads/main/assets/pentol.mp4",
      replied: ctx.message(),
    });
  }

  if (buttonId == "voice") {
    await wa.send(ctx.roomId, {
      audio: "https://github.com/zeative/zeative/raw/refs/heads/main/assets/vine-boom.mp3",
      ptt: true,
      replied: ctx.message(),
    });
  }

  // Group Features

  if (buttonId == "metadata") {
    if (!ctx.isGroup) return await wa.send(ctx.roomId, "This feature only for group!");

    const metadata = await wa.group.metadata(ctx.roomId);
    delete metadata.participants;

    await wa.send(ctx.roomId, {
      text: JSON.stringify(metadata, null, 2),
      replied: ctx.message(),
    });
  }
});
