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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hakim-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745590936";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_12_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMixcbiAgICAgICAgODksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSbVJINE1DL1hOME14cXpCSTZtQmZTUGl6cmpSQkhOdk5Fd2taQTJybWY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkclVvOTdYVVJqQ21WdFlRYzVvWXpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImMzYzlmZWYzLTZhODEtNGZhMS05NDA3LTZjYWQ1NWQwMTRiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxMTQsXG4gICAgICAxNjQsXG4gICAgICAyMzEsXG4gICAgICAyMTIsXG4gICAgICAxMDMsXG4gICAgICA4LFxuICAgICAgNDgsXG4gICAgICAyMDcsXG4gICAgICAxMSxcbiAgICAgIDQwLFxuICAgICAgMTQ3LFxuICAgICAgMjM3LFxuICAgICAgMTk5LFxuICAgICAgMTcyLFxuICAgICAgMjIwLFxuICAgICAgMTAwLFxuICAgICAgNyxcbiAgICAgIDIyOCxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMjE3LFxuICAgICAgNzAsXG4gICAgICAyMTIsXG4gICAgICA1MyxcbiAgICAgIDYzLFxuICAgICAgMjQ2LFxuICAgICAgMTMxLFxuICAgICAgMjQsXG4gICAgICAxNzcsXG4gICAgICAyMjMsXG4gICAgICAyNDAsXG4gICAgICA4NSxcbiAgICAgIDEwOCxcbiAgICAgIDIwNSxcbiAgICAgIDE0MixcbiAgICAgIDIyOSxcbiAgICAgIDI0MyxcbiAgICAgIDE0MCxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEU0FMN0xWS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NTkwOTM2OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NzU0OTMxNDkwOTYwOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDdDFhd0RFSmVNMjdRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGtDLzV2NENpZmx4WHh5RkJTQmZEMmZYcnYreStxS2JZNWg3ZmZrZ3dGND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrcFl6ZGdQU2tPaC81Q2QxeGlNTHpPblh5OXdIcnRRRFk2TEpPTjJVaUwza0NtZmZzSG1NNnBKWTAyQllsNy94R2NsRUM0Qm45eW5MOVl5SmhwaitDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuUDFuQ2t2MktMZ3c3RWx1UHdOa2lVVEQzMURmL0huTmlIeW5MNTNFZmZoZjhIMHFuNCszQWhoVjQyMHVuQmJUT1NEUi9jY0tsbjRycnpGem01M0lpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU1OTA5MzY6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTU3MTQ2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HakimBot",
  ownername:process.env.OWNER_NAME|| "Hakim",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
