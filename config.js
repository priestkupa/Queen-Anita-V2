//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "BMK FaST";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUltQ3Q2QTJESThqcUhwbktnY3lQYmhydTQ5a3dXNW16aEJDYUk2MTlGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGhoZnlVSUU2a0FXQlVyQlNvMUYwU3U0T3hpN0JXNzZPYkNIalJjY3BIQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTTUwOG95VVJ6VHNGQzJjNUY3Qkg5dWxQK1RIc25TNnhBaDNXbXd0RUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWEliUzg2K0FyVWxUWlYvOWJaOGtlS3dKZ3UzK2xVUnRXMktkQjJtZ1dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOS1h3cXB5MFJZTjB4ODUrTERod2F4UFpESGgzeDBxSjJtSDdSV3c1Rk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9kRDRGcEFmSWU0UG44K21QcjcvbzIydGxxQytDOWRvOXNjVjhtSFJDQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZGL3RqZitXSzVGMnJYQWw4cm5pdmxPUDgwRVU3Qjl6M2VpQWV3bHlXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHdKamRMYTlJamZ6bytyNGk0N2lVVTVaL3N2clBlcmxremxvL01ERktHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl4RER1bnpVakw0VEhhWVZkQ1JCbW5ZRDBQc01pN3JNeERBc1Z6RkZKaUhNRXdzY3Z0WVJFcVd3d3c4SXI4cEFQUnFTY1V2dy8vckh1ZEtPU0lxb2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiI5QU1QL01ZeHNFTXI2RTdaM0pGbUwzaDRCOGVJSkU5cW9ST0tDVk5VRHhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQMEw4al84TVNrYV9fczdtdkw0MFF3IiwicGhvbmVJZCI6IjE4NzRiZDI4LWM0ZmMtNDk2Yi1hYzA5LTNhZWZkMjY3MjVmMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSGlwMC9zenhJRW0wQTM4U0JGcmw3eDB3VFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NjWXdMMG5HcFdMQUdMeGZIOEJDbWFIYm1BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlM5MVhTVFQxIiwibWUiOnsiaWQiOiIyNjM3ODY5OTcxMDg6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXIgTWFyYWlyZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzZ2aDBBUWhkSGt0d1lZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZUJ5UmtrVmx2R0FIcG1IaVhwakdwaUpyMTdCQzQ1S2duMjJYWWRJSkFVbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2YxVHNoaGJ4S2RVaW16ZXhpVGp2VXFQaFl5RVgrT2JxemFFTFhYRjZmenVrUmJKUWR0dlY2dytRaGJFUUNSUFZsNk1TVzRKcTlabHVHOFZxQ3FMREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJZT3M0SlZhTEpBbERqN0dvR0JMaW9PRDQrZWdqY1NwdzVCMFpYNHJsSTUwNExNaGNuRnpXdWhBRmFSNFdjMGJNbXNiRlhqRUJMTEV5dVFvS3JuOGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg2OTk3MTA4OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhnY2taSkZaYnhnQjZaaDRsNll4cVlpYTlld1F1T1NvSjl0bDJIU0NRRksifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2MDQ4ODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2MvIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "BMK ",
  ownername: process.env.OWNER_NAME || "bmkl",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
