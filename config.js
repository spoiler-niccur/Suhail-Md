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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_03_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4eGxJZ01nWk01dHlSWGJYQlNqQXludXJrMlhEcG0wV1BlelAxcWFQTHA4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyTERuaWFjcVRzQ3VDRnE2VHYtWnFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3NjIzYjBkLTliNDktNDA1Ni1hZGRhLTcxNDk1Mzc5MTMyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDI0NixcbiAgICAgIDE3MyxcbiAgICAgIDE0MyxcbiAgICAgIDgzLFxuICAgICAgMjIsXG4gICAgICAxNDAsXG4gICAgICA4MyxcbiAgICAgIDIxNSxcbiAgICAgIDI0MSxcbiAgICAgIDk1LFxuICAgICAgMzQsXG4gICAgICAyMTUsXG4gICAgICAxMzEsXG4gICAgICAxNTUsXG4gICAgICAxOTUsXG4gICAgICAxNDMsXG4gICAgICA4LFxuICAgICAgODQsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDc0LFxuICAgICAgMjM2LFxuICAgICAgMTE5LFxuICAgICAgMjMsXG4gICAgICAxNjYsXG4gICAgICAyNCxcbiAgICAgIDE4MSxcbiAgICAgIDI1NCxcbiAgICAgIDkwLFxuICAgICAgMjgsXG4gICAgICAxNCxcbiAgICAgIDYzLFxuICAgICAgMjAyLFxuICAgICAgMTM4LFxuICAgICAgMzAsXG4gICAgICAyMjIsXG4gICAgICAyMDgsXG4gICAgICAxMDQsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFVFhDSlQ2RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NTkwOTM2OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NzU0OTMxNDkwOTYwOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p1dDFhd0RFSXI5enJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGtDLzV2NENpZmx4WHh5RkJTQmZEMmZYcnYreStxS2JZNWg3ZmZrZ3dGND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDNk9QZExkRHFQK21NU3J2WmtSVU1RRkwwaXJLeTN3S1ZSWk1TYjBFa2VKdWxYUUdlOG5qTzRPU0MrTWxQQXF4Yk9Ja3RtVndrSCtHVDc3ai9xaUVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzNUh5a3U0MGUxbEx0eWN3dDNuam9uOTAvWGoxTWcxTURrVWo5UTJENHg0aGpQOUVQV3RwaDFQV09OV1o5dmZYUE9TcHVjaGU2ZTM5QjFkcUZSZ0ZEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU1OTA5MzY6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTU4NjA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0FnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1eHBySUhVdWx0WHlpdFlBcVBrcVlXcjJyM2NUOUN1cHd2Q05VM1ZTc084PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5ODk3OTQ4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NDU1Mjk0Nzc0XCJ9Igp9"  // PUT your SESSION_ID 


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
