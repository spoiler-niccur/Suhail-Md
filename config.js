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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_55_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgOSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3SFJvNDQxa0plS0RlN3o2UVBROVFWWDZOcUJDRUNHdTVreDh4S1hKbE9rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOck1PR2lTb1EtYUMyTzlmbmpyZS1RXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4MGEyM2I2LTM2NTMtNDdhZi1hZTJhLThkNDczNzMzYTBlOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICA3NCxcbiAgICAgIDE0MyxcbiAgICAgIDIsXG4gICAgICAyLFxuICAgICAgMTk3LFxuICAgICAgMTExLFxuICAgICAgNSxcbiAgICAgIDE1MyxcbiAgICAgIDk1LFxuICAgICAgMTIsXG4gICAgICA5OCxcbiAgICAgIDE5NSxcbiAgICAgIDEwOCxcbiAgICAgIDE3OCxcbiAgICAgIDIwNCxcbiAgICAgIDE3OCxcbiAgICAgIDIzOCxcbiAgICAgIDIxLFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgNDgsXG4gICAgICAxODgsXG4gICAgICAxMjQsXG4gICAgICAyMjAsXG4gICAgICAyNTMsXG4gICAgICAxMDMsXG4gICAgICA1MyxcbiAgICAgIDkxLFxuICAgICAgOSxcbiAgICAgIDU1LFxuICAgICAgMTAxLFxuICAgICAgOTcsXG4gICAgICAxMTIsXG4gICAgICAxMjAsXG4gICAgICA1NSxcbiAgICAgIDE4MyxcbiAgICAgIDMwLFxuICAgICAgODEsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUY5UTNMRUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NTU5MDkzNjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDc1NDkzMTQ5MDk2MDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbXQxYXdERUo3QnpyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxrQy81djRDaWZseFh4eUZCU0JmRDJmWHJ2K3krcUtiWTVoN2Zma2d3RjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUks0UXFNWFhUaGxtRkR0RHFFbDF3c3Z0NUdHbURuRlBoNXRIVi9aQUhIWTcwYjFFeWJST0YvWnhOZzZ0K1lLMTFTYkE4WE9BZ0EzMWZoMkhnZ0ZrQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFJoUkw4bzkrRUxpNGtweXpWa2ZzeERIOUVjMVBxa0FET3dQTitwWnhUMU5RQ1JBN0tVTDFjVkV4MVdiZXdPelh5SVNuclJVQWEwa1RpUWVHZUNoQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NTkwOTM2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk1MDk0NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
