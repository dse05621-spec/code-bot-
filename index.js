const {
    Client,
    GatewayIntentBits,
    Partials
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember
    ]
});

client.once("ready", () => {
    console.log("========================================");
    console.log("         DISCORD BOT ONLINE");
    console.log("========================================");
    console.log(`Bot     : ${client.user.tag}`);
    console.log(`ID      : ${client.user.id}`);
    console.log(`Servers : ${client.guilds.cache.size}`);
    console.log(`Node.js : ${process.version}`);
    console.log("Status  : ONLINE");
    console.log("========================================");
});

client.on("error", (error) => {
    console.error("[CLIENT ERROR]", error);
});

process.on("unhandledRejection", (error) => {
    console.error("[UNHANDLED REJECTION]", error);
});

process.on("uncaughtException", (error) => {
    console.error("[UNCAUGHT EXCEPTION]", error);
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error("ERROR: DISCORD_TOKEN is not configured.");
    process.exit(1);
}

console.log("Connecting to Discord...");

client.login(token)
    .then(() => {
        console.log("Discord authentication successful.");
    })
    .catch((error) => {
        console.error("Discord authentication failed:", error);
        process.exit(1);
    });
