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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_12_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJES0NYelFYQ0ZHYXRyQzhFMXdvTC9UdEtjei9oczNKdFgvNFVGK1JudTVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0c040YWdQNFR5Nlk4OW1pdHdMZkhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhNTNjZDA3LWQ0NmItNGFjZi05ZTRlLWNjYWQwZWUzMGQxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDIyMyxcbiAgICAgIDMwLFxuICAgICAgMTAzLFxuICAgICAgMjAxLFxuICAgICAgMjA1LFxuICAgICAgMjI4LFxuICAgICAgMTI4LFxuICAgICAgMTM0LFxuICAgICAgMzUsXG4gICAgICA0NixcbiAgICAgIDY2LFxuICAgICAgMTcwLFxuICAgICAgNyxcbiAgICAgIDE5MSxcbiAgICAgIDEzNCxcbiAgICAgIDMwLFxuICAgICAgMjQ2LFxuICAgICAgMTUwLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDM5LFxuICAgICAgMTk1LFxuICAgICAgMTAwLFxuICAgICAgMjMxLFxuICAgICAgMjA3LFxuICAgICAgMTI1LFxuICAgICAgMTI3LFxuICAgICAgMzYsXG4gICAgICAyMDAsXG4gICAgICAzNSxcbiAgICAgIDIyNCxcbiAgICAgIDEzNCxcbiAgICAgIDI4LFxuICAgICAgMTY5LFxuICAgICAgOTIsXG4gICAgICAyMTEsXG4gICAgICAxOTksXG4gICAgICA2NCxcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2TjRSRDZDMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NTkwOTM2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NzU0OTMxNDkwOTYwOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ordDFhd0RFSVhVMnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGtDLzV2NENpZmx4WHh5RkJTQmZEMmZYcnYreStxS2JZNWg3ZmZrZ3dGND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrNEVWeGVsUWhaNWNLcmt0YUNwZmFkQytTaWc4dnhkRHRya0JJOFJSeXpRMmFsT0pGUlhNYW5DYWdob2tQNTB4ZzM0OGpMRUFIRUdHaDN5L3lwOWpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWbzgzczdrZzF0NkhjL3l1T2VHU3p3bG1XVW1Iai9EOTZBSy90R204K0V3ZFloTzNYN1E0L0FiUWUvdFNwajY5Qkp1cFlFL2FsN0hIb0pGVStENXJEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU1OTA5MzY6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTQ5OTYyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
