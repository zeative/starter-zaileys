<dd align="center">

<img alt="Starter Kit for Zaileys Library Simplified WhatsApp Node.js" src="https://github.com/zeative/zeative/blob/main/libraries/zaileys/zaileys-clean.png?raw=true" width="140">

<h1 align="center">Starter Kit for Zaileys Library <br /> Simplified WhatsApp Node.js</h1>

<br>

<div align="center">
  <a href="https://www.npmjs.com/package/zaileys"><img src="https://img.shields.io/npm/v/zaileys.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/zaileys"><img src="https://img.shields.io/npm/dw/zaileys?label=npm&color=%23CB3837" alt="NPM Downloads"></a>
  <a href="https://github.com/zeative/zaileys/releases"><img src="https://img.shields.io/npm/dt/zaileys" alt="NPM Downloads"></a>
  <a href="https://github.com/zeative/zaileys"><img src="https://img.shields.io/github/languages/code-size/zeative/zaileys" alt="GitHub Code Size"></a>
  <a href="https://github.com/zeative/zaileys"><img src="https://img.shields.io/badge/TypeScript-5.0%2B-blue?style=flat-square&logo=typescript" alt="TypeScript"></a>
</div>

<div align="center">
  <a href="https://github.com/zeative/zaileys"><img src="https://img.shields.io/github/license/zeative/zaileys" alt="GitHub License"></a>
  <a href="https://discord.gg/SfnWWYUe"><img alt="Discord" src="https://img.shields.io/discord/1105833273415962654?logo=discord&label=discord&link=https%3A%2F%2Fgithub.com%2Fzeative%2Fzaileys"></a>
  <a href="https://github.com/zeative/zaileys"><img src="https://img.shields.io/github/stars/zeative/zaileys" alt="GitHub Stars"></a>
  <a href="https://github.com/zeative/zaileys"><img src="https://img.shields.io/github/forks/zeative/zaileys" alt="GitHub Forks"></a>
  <a href="https://github.com/zeative/zaileys"><img src="https://img.shields.io/github/watchers/zeative/zaileys" alt="GitHub Watchers"></a>
  <a href="https://deepwiki.com/zeative/zaileys"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</div>

<br>

<dl align="center">
  <dd>
    <b>starter-zaileys</b> is a robust and ready-to-use template for building WhatsApp automation bots using the <a href="https://github.com/zeative/zaileys">Zaileys library</a>. It comes pre-configured with essential features, best practices, and a modular structure to help you kickstart your project immediately.
  </dd>
</dl>

<br>

<dd align="center">
  <a href="https://discord.gg/SfnWWYUe"><img alt="Discord" src="https://discord.com/api/guilds/1105833273415962654/widget.png?style=banner2"></a>
</dd>

<br>

---

## 🚀 Overview

> Zaileys solves the complexity of managing raw WhatsApp socket connections by providing a high-level, opinionated API. It is built for developers who need to create bots, customer support agents, or automated notification systems without getting bogged down in protocol details.

Targeting **Node.js** and **TypeScript** developers, Zaileys integrates essential features like rate limiting, session management, and input validation out of the box.

### 🤖 [Official Zaileys Library](https://github.com/zeative/zaileys)

## 📦 Installation

Clone the repository, install and running it.

```bash
$ git clone https://github.com/zeative/starter-zaileys.git
$ cd starter-zaileys

$ npm install
$ npm start
```

## ⚡ Quick Start

Here is a minimal example to get your bot running with QR code authentication:

```typescript
import { Client } from "zaileys";
// or
const { Client } = require("zaileys");

const wa = new Client({
  // dynamic session you can change
  session: "zaileys", // default

  // qr code
  authType: "qr",

  // pairing code
  authType: "pairing",
  phoneNumber: 6280000000,

  // if you want to disable built-in ffmpeg
  // disableFFmpeg: true,
});

wa.on("messages", async (ctx) => {
  if (ctx.text == "ping") {
    await wa.send(ctx.roomId, "Pong! 🏓");
  }
});
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create new branch: `git checkout -b feature/my-feature`.
3.  Commit your changes: `git commit -m 'Add some feature'`.
4.  Push to the branch: `git push origin feature/my-feature`.
5.  Open Pull Request.

## 🎯 Issues & Feedback

**If you encounter any problems or have feature requests, please open an [issue](https://github.com/zeative/zaileys/issues)**

- [Buy me coffee ☕](https://saweria.co/zaadevofc)
- [Ko-Fi](https://ko-fi.com/zaadevofc)
- [Trakteer](https://trakteer.id/zaadevofc)
- ⭐ Star the repo on GitHub

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](https://github.com/zeative/zaileys/blob/main/LICENSE) for details.

<div align="left">
  <p>
    <img alt="Starter Kit for Zaileys Library Simplified WhatsApp Node.js" src="https://github.com/zeative/zeative/blob/main/libraries/zaileys/zaileys-clean.png?raw=true" width="28" align="center">
    Copyright © 2025 zaadevofc. All rights reserved.
  </p>
</div>
