<div align="center">
  <img alt="Starter Kit for Zaileys Library" src="https://socialify.git.ci/zeative/starter-zaileys/image?custom_description=Starter+Kit+for+Zaileys+Library+github.com%2Fzeative%2Fzaileys&custom_language=TypeScript&description=1&font=Inter&language=1&pattern=Charlie+Brown&theme=Auto">

  <h1 align="center">Starter Kit for Zaileys Library</h1>

<a href="https://github.com/zeative/starter-zaileys"><img src="https://img.shields.io/github/license/zeative/starter-zaileys" alt="GitHub License"></a>
<a href="https://discord.gg/SfnWWYUe"><img alt="Discord" src="https://img.shields.io/discord/1105833273415962654?logo=discord&label=discord"></a>
<a href="https://github.com/zeative/starter-zaileys"><img src="https://img.shields.io/github/stars/zeative/starter-zaileys" alt="GitHub Stars"></a>
<a href="https://github.com/zeative/starter-zaileys"><img src="https://img.shields.io/github/forks/zeative/starter-zaileys" alt="GitHub Forks"></a>
<a href="https://github.com/zeative/starter-zaileys"><img src="https://img.shields.io/github/watchers/zeative/starter-zaileys" alt="GitHub Watchers"></a>

</div>

<br />

> **Starter kit for Zaileys Library** - Simplified WhatsApp Node.js TypeScript/JavaScript API.

## 🚀 Overview

`starter-zaileys` is a robust and ready-to-use template for building WhatsApp automation bots using the [Zaileys](https://github.com/zeative/starter-zaileys) library. It comes pre-configured with essential features, best practices, and a modular structure to help you kickstart your project immediately.

## 🛠️ Prerequisites

- **Node.js**: Version 20 or higher.
- **npm** or **pnpm**: Package manager.

## 📦 Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/zeative/starter-zaileys.git
    cd starter-zaileys
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

## 🚀 Usage

### Development

Run the bot in development mode with hot-reloading:

```bash
npm run dev
```

### Production

Start the bot in production mode:

```bash
npm start
```

## 💡 Code Example

Here's a quick look at how to initialize the client and handle messages:

```javascript
import { Client } from "zaileys";

const wa = new Client({
  authType: "qr",

  fakeReply: {
    provider: "chatgpt",
  },
});

// Middleware to prevent spam
wa.use(async (ctx, next) => {
  if (ctx.messages.isSpam) {
    return await wa.send(ctx.messages.roomId, "Don't spam!");
  }
  await next();
});

// Handle incoming messages
wa.on("messages", async (ctx) => {
  if (ctx.text === ".ping") {
    await wa.send(ctx.roomId, "Pong!");
  }
});
```

## 📸 Command Previews

Here are some examples of what the bot outputs look like:

### `.help`

![.help](/assets/help.jpeg)

### `.menu`

![.menu](/assets/menu.jpeg)

### `.interactive`

![.interactive](/assets/interactive.jpeg)

## 🎯 Issues & Feedback

**If you encounter any problems or have feature requests, please open an [issue](https://github.com/zeative/starter-zaileys/issues)**

- [Buy me coffee ☕](https://saweria.co/zaadevofc)
- [Ko-Fi](https://ko-fi.com/zaadevofc)
- [Trakteer](https://trakteer.id/zaadevofc)
- ⭐ Star the repo on GitHub

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](https://github.com/zeative/starter-zaileys/blob/main/LICENSE) for details.
