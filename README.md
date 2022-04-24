# HappieBot 😊
A discord bot that keeps you happy by sharing memes, jokes and quotes.

## <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" width="32" height="32"> Getting Started
To get a local copy up and running follow these simple steps.
### Prerequisites
In order to get a copy of the project you will require you to have Node.js (v14+) and the NPM package manager installed. If you don't have it, you can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/) which also installs the NPM package manager by default.
### Installation
- Open the terminal in the folder in which you wish to clone the repository and enter the following command:
``` 
git clone https://github.com/prasoonsoni/HappieBot.git
cd HappieBot
```
- Install all the NPM packages:
```
npm i
```
- Create a discord server and bot to the server.
- In order to run the bot
```
node deploy-command.js
node index.js
```

> **Note that you will have to add your own `.env` and `config.json` file at the root directory and add your own environment variables and config variables for the project to build.**

- Following are the contents of `.env` file.
```
DISCORD_TOKEN=your-discord-token-goes-here
```
- Following are the contents of `config.json` file.
```json
{
    "token":"your-token-goes-here",
    "clientId":"your-client-id-goes-here",
    "guildId":"your-guild-id-goes-here"
}
```

## <img src="https://hpe-developer-portal.s3.amazonaws.com/uploads/media/2020/3/git-icon-1788c-1590702885345.png" width=32 height=32> Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project. [(Refer the get started instructions)](#-getting-started)
2. Create your Feature Branch. (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes. (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch. (`git push origin feature/AmazingFeature`)
5. Open a Pull Request.
