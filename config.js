const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_40_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJObnRPb0hzQVRzeklyejZxa0tLWFlDRHJnaUM5K29SYURTT2JydEJmTGZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3NDg0NDgwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTlFRDhFMjU5OTQ4Rjk3QkI0Mzc0RjA3RkIwMjE3MERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzM0NDQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjc0ODQ0ODAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5Njc0RDc4MTE3QjhCNEZDQkIwMjczN0VBQkZCNTgwN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMzQ0NDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVlhTcDJ3eGNSS1M3TThZZy1yV3RMZ1wiLFxuICBcInBob25lSWRcIjogXCIyOTdiNWRlOS0zMjFiLTQzMjQtODY2Mi01YTc0Nzk4OTgxZTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMzIsXG4gICAgICAyMjYsXG4gICAgICAyMzgsXG4gICAgICAyMDgsXG4gICAgICA0NSxcbiAgICAgIDQ1LFxuICAgICAgMTI2LFxuICAgICAgMzcsXG4gICAgICAyOCxcbiAgICAgIDIyOCxcbiAgICAgIDE4NSxcbiAgICAgIDkwLFxuICAgICAgOTgsXG4gICAgICAxNzcsXG4gICAgICAxNzEsXG4gICAgICAyMDQsXG4gICAgICA1MyxcbiAgICAgIDI1NCxcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgNCxcbiAgICAgIDI0OCxcbiAgICAgIDEwOCxcbiAgICAgIDMxLFxuICAgICAgODksXG4gICAgICA2MixcbiAgICAgIDMwLFxuICAgICAgMTM2LFxuICAgICAgOCxcbiAgICAgIDEyNyxcbiAgICAgIDExNyxcbiAgICAgIDI1LFxuICAgICAgNTAsXG4gICAgICAxMzYsXG4gICAgICAyNSxcbiAgICAgIDE0MyxcbiAgICAgIDI1MixcbiAgICAgIDEzNSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3JLeC9JR0VPYndxTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkMnNNWUo5ckhFcWlMN3lkaHFna3dWUm5UT21BV2VkZ2JNelBSL21MbUhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZqTEg5ZnZTWUZqNVkweE1KNEFLd2NJTitRd2FBK3lWMFVONjNKZ0FDL2tXOFhYSlN3NzF5c04zdWpzbXVTcHBxT2JTOTBITGlTaVFKcHNMaVBVTkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInB6Z0hHdE1nUkMyZmhtRTNyZVI5dFJIVTN0MUdmaTJGcVNPWmtIdFpCMkdzSEw2RHJwZm8rYjl6QU5iUEhMNURoTXp3N3dzWlB5N2NTTUU4Ty9HemdRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc0ODQ0ODAwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyMDQ5ODQ1NTMwODIzOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pSj8J2QpcmbzrHGpvCdl6cg4pSj8J2Qpc6x8J2XlvCdkIrJm8amIDwzIOi8qiDin67iuJnin68g8J+HtfCfh7BcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3NDg0NDgwMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMzNDQ0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpLUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSktQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2l6YVpKcG5VaWNPQjVQcWZYWVhVQ2ZDN1c0WHVYR2FSR2d3YXlVVncwST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUwODYwOTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMzM0NDI5NDg2XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
