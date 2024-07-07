const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_20_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICA2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZDE0Y0t1QUFJak16dkdkb2FueWlzbGV4eWtKNkx5UmNsYks4N04zZUZJWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzQ4NDQ4MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBFODlCRDhGNjEyQkE0MUFCRTUxOTE3QzQxOTY4REU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM1NDg0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3NDg0NDgwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTIyRTUxNzE4MTREOTM4RUY1NUY3Q0M5Mzc2NDZDQzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzU0ODQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRWQjFveXpPU0QyMEJKS0QxVndyMVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTMxYzgxZTEtYjAxMC00YjkwLThiZjMtYmIxNzIwZDNiNDQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDEzNyxcbiAgICAgIDYyLFxuICAgICAgMjA0LFxuICAgICAgMTEzLFxuICAgICAgMjM2LFxuICAgICAgMjMwLFxuICAgICAgMTIwLFxuICAgICAgMTQ3LFxuICAgICAgOTksXG4gICAgICA2MSxcbiAgICAgIDI5LFxuICAgICAgMTkzLFxuICAgICAgMTg2LFxuICAgICAgMTA4LFxuICAgICAgNTAsXG4gICAgICAxMTIsXG4gICAgICAzMCxcbiAgICAgIDEzNCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDE3MixcbiAgICAgIDk1LFxuICAgICAgMjA4LFxuICAgICAgMyxcbiAgICAgIDIyNSxcbiAgICAgIDEyNSxcbiAgICAgIDE0NixcbiAgICAgIDUzLFxuICAgICAgMTczLFxuICAgICAgNzQsXG4gICAgICA0MCxcbiAgICAgIDMzLFxuICAgICAgNzIsXG4gICAgICAyMzksXG4gICAgICAyNDksXG4gICAgICAxMDAsXG4gICAgICA3NSxcbiAgICAgIDI0MyxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdRUFdZRkJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzQ4NDQ4MDA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjIwNDk4NDU1MzA4MjM6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLilKPwnZClyZvOscam8J2XpyDilKPwnZClzrHwnZeW8J2QismbxqYgPDMg6LyqIOKfruK4meKfryDwn4e18J+HsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092S3gvSUdFSk9RcXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZDJzTVlKOXJIRXFpTDd5ZGhxZ2t3VlJuVE9tQVdlZGdiTXpQUi9tTG1IZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKdEZRaGNOakxBd0xLRmZoQ3NBKzVKUW1Gd1FQODFpMGtneGJaMnV1RlpvL1FLNEZaUVVYVkRHY1RlSDBWQXZ2dVNDa1ZmOGlVbjUxanIyd0Mwb3BEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxVzI3eVJsWHZJMHRaUU8xVmZFeXdCby9STUU5UmlSVTlHWHp6Y0x6TDBsYVlkRmdrQnNEd3ZUYzRtQ1ZnbTZpMGFWQkJjeUtsU0o5a25MMHZsNmtndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzQ4NDQ4MDA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNTQ4MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKS1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpLUS5qc29uIjogIntcImtleURhdGFcIjpcIm1FWnUzcHRtZ0k5a3RRWnJCTUtVSXpPYmxoRGlrTHVScmZHYjcrVUtSY0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1MDg2MDkwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
