/*
Deixe os Creditos to de olho. ๐คจ๐ง

Meu canal: [

Nome: JG-Bots
Link: https://youtube.com/channel/UC6Nvd3QgM0j1_ebNF4OC84g

]

Se Pegar os cmd deixe os creditos pq os comandos sao meus se for mandar o bot mande o link do canal!
*/

// ๐๐ฎ๐ ๐ฎ๐ฆ๐๐ฌ ๐๐ฎ๐ง๐๐จ๐๐ฌ

const {
default: makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, downloadAndSaveMediaMessage, prepareWAMessageMedia, MediaType, generateWAMessageFromContent, WAMessageStatus,AuthenticationState, GroupMetadata,initInMemoryKeyStore, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage,ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime,	Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, delay, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent } = require('@adiwajshing/baileys');

// ๐๐ฎ๐ง๐๐ญ๐ข๐จ๐ง

const fs = require('fs');
const os = require('os');
const chalk = require('chalk');
const yts = require('yt-search');
const crypto = require('crypto');
const util = require('util');
const clui = require('clui')
const { Spinner } = clui
const axios = require('axios');
const P = require('pino') 
const Pino = require('pino')
const encodeUrl = require('encodeurl');
const linkfy = require('linkifyjs');
const request = require('request');
const cheerio = require('cheerio');
const ms = require('ms')
const FileType = require('file-type')
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const googleImage = require('g-i-s');
const googleIt = require('google-it');
const moment = require('moment-timezone');
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const speed = require('performance-now');

// ๐๐ซ๐ช๐ฎ๐ข๐ฏ๐จ๐ฌ ๐๐ข๐

const { color } = require("./funรงรตes/color")
const { lermais } = require("./lib/lermais.js")
const { fetchJson } = require("./funรงรตes/fetcher")

const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))
const logosss = JSON.parse(fs.readFileSync('./logo/logos.json'))

logo = logosss.logo
prefix = setting.prefix
nomeDono = setting.nomeDono
nomeBot = setting.nomeBot
numeroDono = setting.numeroDono

// ๐๐ฎ๐ญ๐ซ๐๐ฌ ๐๐ฎ๐ง๐๐จ๐๐ฌ

const { banner, banner2, getGroupAdmins, getBuffer, getExtension, getRandom, upload, log } = require("./funรงรตes/functions")
const { MsgsDeEspera } = require('./funรงรตes/wait.js');
var aguarde = MsgsDeEspera[Math.floor(Math.random() * MsgsDeEspera.length)]

// ๐๐ฎ๐ง๐๐๐จ ๐๐ ๐๐๐ญ๐ ๐ ๐๐จ๐ซ๐

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss') 
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))}

// ๐๐ข๐ง๐  ๐๐จ ๐๐จ๐ญ

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

// ๐๐จ๐ง๐๐๐ฑ๐๐จ ๐๐จ ๐๐จ๐ญ

const { 
makeInMemoryStore, 
fetchLatestBaileysVersion
} = require('@adiwajshing/baileys');
const store = makeInMemoryStore({ })

// ๐๐ซ๐๐จ๐๐

const { state, saveState } = useSingleFileAuthState("./qrcode.json")

// ๐๐จ๐ง๐ฌ๐จ๐ฅ๐ / ๐๐๐ซ๐ฆ๐ฎ๐ฑ

async function startBot () {
console.log(banner.string)
console.log(banner2.string)
const client = makeWASocket({
logger: Pino({ level: "silent" }),printQRInTerminal: true,auth: state})
client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexรฃo fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect)
if(shouldReconnect) {
startBot()}
} else if(connection === "open") {
console.log(color("Ola seu Bot esta Conectado!\n","cyan"))
}})

// ๐๐๐ฅ๐ค๐จ๐ฆ๐

client.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await client.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {

memb = metadata.participants.length

if (anu.action == 'add') {
num = anu.participants[0]
client.sendMessage(anu.id, { image: {url: `${logo}`}, caption: `๐๐ฅ๐ @${num.split('@')[0]}\nโคBemโคvindo(a) ๐ข๐ฐ ๐จ๐ณ๐ถ๐ฑ๐ฐ :\n*${metadata.subject}*\n๐ฐ๐พ ๐ด๐ฝ๐๐๐ฐ๐ ๐ฝ๐พ ๐ถ๐๐๐ฟ๐พ ๐๐ด ๐ฐ๐ฟ๐๐ด๐๐ด๐ฝ๐๐ด ๐ฒ๐พ๐ผ:\n\nโโชแฐฐแณโฅ๐๊ง?ช๐๐๐๐ยฃโข๐ฒ๊ซถื๐โฟปแญ\nโโชแฐฐแณโฅ๐๊ง?ช๐โ๐๐โข๐ฒ๊ซถืโ๏ธโฟปแญ\nโโชแฐฐแณโฅ๐๊ง?ช๐๐โ๐๐โข๐ฒ๊ซถื๐โฟปแญ\nโโชแฐฐแณโฅ๐๊ง?ช๐๐๐โ๐๐โข๐ฒ๊ซถื๐ โฟปแญ\n\nแตแตหขแตสณแตแตแถฬงแตฬแต๐ธ: โฟแตแต แต แตแตสณโฑแตแตแตแตฬสณโฑแต`})
} else if (anu.action == 'remove') {
client.sendMessage(anu.id, { image: {url: `${logo}`}, caption: `๐ถโ Olโ Galerโ do Grp:\n*${metadata.subject}*\n\nMembro: @${num.split('@')[0]}\n\nSaiu do Grp ou foi Banido.`})
}}
} catch (err) {
console.log(err)
}})

// ๐๐ข๐ง๐ ๐ฎ๐๐ ๐๐ง ๐๐จ ๐๐จ๐ญ

client.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
await client.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id])
if (!info.key.participant) info.key.participant = info.key.remoteJid
info.key.participant = info.key.participant.replace(/:[0-9]+/gi, "")
if (!info.message) return
const from = info.key.remoteJid
const type = Object.keys(info.message).find((key) => !['senderKeyDistributionMessage', 'messageContextInfo'].includes(key))

// ๐ฐ๐ป๐๐พ ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด๐ ๐ณ๐พ ๐ฑ๐พ๐

const body = (type === 'conversation' &&
info.message.conversation.startsWith(prefix)) ?
info.message.conversation: (type == 'imageMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'videoMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'extendedTextMessage') &&
info.message[type].text.startsWith(prefix) ?
info.message[type].text: (type == 'listResponseMessage') &&
info.message[type].singleSelectReply.selectedRowId ?
info.message.listResponseMessage.singleSelectReply.selectedRowId: (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId: (type === 'messageContextInfo') ?
info.message[type].singleSelectReply.selectedRowId: (type == 'client.sendMessageButtonMessage') &&
info.message[type].selectedButtonId ?
info.message[type].selectedButtonId: (type == 'stickerMessage') && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')): ""
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === "conversation" && info.message.conversation) ? info.message.conversation : (type == "imageMessage") && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == "videoMessage") && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == "extendedTextMessage") && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ""

// ๐๐ฎ๐ญ๐ซ๐๐ฌ ๐๐ฎ๐ง๐๐จ๐๐ฌ

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {i.isAdmin ? admins.push(i.jid):''}
return admins}
const itsMe = m.sender == client.user.id ? true : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.m || quoted).mimetype || ''

const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})}

// ๐๐ข๐ง๐ ๐ฎ๐๐ ๐๐ง ๐๐ ๐๐ซ๐ฎ๐ฉ๐จ

    client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { info })
        return buffer
    }

const botNumber = client.user.jid
const isGroup = info.key.remoteJid.endsWith("@g.us")
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await client.groupMetadata(from) : ""
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const groupName = isGroup ? groupMetadata.subject : ""
const pushname = info.pushName ? info.pushName : ""

const content = JSON.stringify(info.message)

const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

// ๐๐๐ฆ๐ฌ๐๐ ๐๐ฆ๐ฌ ๐๐ซ๐จ๐ ๐๐ฆ๐๐๐๐ฌ

mess = {
wait: `๐๐จ๐ถ๐ข๐ณ๐ฅ๐ฆ ๐๐ฎ ๐๐ฐ๐ฎ๐ฆ๐ฏ๐ต๐ฐ...`,
admin: `๐๐ฐ๐ฎ๐ข๐ฏ๐ฅ๐ฐ๐ด ๐๐ฐ ๐๐ข๐ณ๐ข ๐๐ฅ๐ฎ๐ช๐ฏ๐ด...`,
Badmin: `๐๐ข๐ณ๐ข ๐ฏ๐ข๐ฐ ๐ด๐ฐ๐ถ ๐๐ฅ๐ฎ ๐๐ฐ๐ฎ๐ฐ ๐ท๐ฐ๐ถ ๐ฆ๐น๐ฆ๐ค๐ถ๐ต๐ข๐ณ?`,
rg: `๐๐ณ๐ฆ๐ฅ๐ช๐ด๐ข ๐ฅ๐ฆ ๐ณ๐ฆ๐จ๐ช๐ด๐ต๐ณ๐ฐ!\n\n๐๐ช๐จ๐ช๐ต๐ฆ: ๐๐ฐ๐จ๐ช๐ฏ`,
group: `๐๐ด๐ด๐ฆ ๐ค๐ฐ๐ฎ๐ข๐ฏ๐ฅ๐ฐ ๐ด๐ฐ ๐ง๐ถ๐ค๐ช๐ฐ๐ฏ๐ข ๐ฆ๐ฎ ๐จ๐ณ๐ถ๐ฑ๐ฐ!`,
client: `๐๐ด๐ด๐ฐ ๐ฆ ๐ด๐ฐ ๐ฑ๐ณ๐ฐ ๐ฎ๐ฆ๐ถ ๐ฅ๐ฐ๐ฏ๐ฐ!`
}

// ๐๐ฆ๐ฏ๐ข๐๐ซ ๐๐ข๐๐ฌ

const enviargif = (videoDir, caption) => {
client.sendMessage(from, {
video: fs.readFileSync(videoDir),
caption: caption,
gifPlayback: true
})
}

// ๐๐ง๐ฏ๐ข๐๐ซ ๐๐ฆ๐๐ ๐๐ง๐ฌ

const enviarimg = (imageDir, caption) => {
client.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

// ๐๐ง๐ฏ๐ข๐๐ซ ๐๐ข๐ ๐ฎ๐ซ๐ข๐ง๐ก๐๐ฌ

const enviarfig = async (figu, tag) => {
bla = fs.readFileSync(figu)
client.sendMessage(from, {sticker: bla}, {quoted: info})
}

// ENVIAR BOTรO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTรO DE TEMPLATE
const sendBvidT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
video: {url: img1},
gifPlayback: true,
caption: text1,
footer: desc1,
templateButtons: but,
}
client.sendMessage(id, templateMessage, {quoted: vr})
}

// PRA ENVIAR BOTรO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
client.sendMessage(id, templateMessage, {quoted: vr})
}

// ๐๐ง๐ฏ๐ข๐๐ซ ๐๐ฆ๐๐ ๐๐ฆ ๐๐จ๐ฆ ๐๐ฎ๐ญ๐๐จ

const enviarImgB = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessage, {quoted: vr})
}

// ๐๐ง๐ฏ๐ข๐๐ซ ๐๐๐ฑ๐ญ๐จ ๐๐จ๐ฆ ๐๐ฎ๐ญ๐๐จ

const enviartextB = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
buttons: but,
footer: desc1,
headerType: 4
}
client.sendMessage(id, buttonMessage, {quoted: vr})
}

const menu = `
${lermais}
โโผโพโผโพโผโพโผโพโผโพโผโพโผโ
โฝ
โ ใข ${nomeBot}
โฟ
โโผโพโผโพโผโพโผโพโผโพโผโพโ
โ ใข Bot Em Versao Beta!
โโผโพโผโพโผโพโผโพโผโพโผโพโ
โ
โโผโพโผโพโผโพโผโพโ
โโผโพโผโพโผโพโผโพโฉโผโพโผโ
โ ใข MENUS DO BOT
โ โผโพโผโพโผโพโผโพโผโพโผโพโ
โฟ
โฝ${prefix}Menulist
โฟ${prefix}Menugrup
โฝ
โโผโพโผโพโผโพโผโพโ
โโผโพโผโพโผโพโผโพโฉโผโพโผโ
โ ใข PESQUISAR/BAIXAR
โ โผโพโผโพโผโพโผโพโผโพโผโพโ
โฟ
โฝ${prefix}Play
โฟ${prefix}Ytsearch
โฝ
โโผโพโผโพโผโพโผโพโ
โโผโพโผโพโผโพโผโพโฉโผโพโผโ
โ ใข STICKERS
โ โผโพโผโพโผโพโผโพโผโพโผโพโ
โฝ
โฟ${prefix}Sticker
โฝ${prefix}Fsticker
โฟ${prefix}Toimg
โฝ
โโผโพโผโพโผโพโผโพโ
โโผโพโผโพโผโพโผโพโฉโผโพโผโ
โ ใข JOGOS
โ โผโพโผโพโผโพโผโพโผโพโผโพโ
โฟ
โ${prefix}Ppt
โฝ
โโผโพโผโพโผโพโผโพโ
โโผโพโผโพโผโพโผโพโฉโผโพโผโ
โ ใข OUTROS/CMDS
โ โผโพโผโพโผโพโผโพโผโพโผโพโ
โฟ
โฝ${prefix}Dono
โฟ${prefix}Ping
โฝ${prefix}Imgpralink
โโผโพโผโพโผโพโผโพโผโพโผโพโ
`

const menugrup = `
${lermais}
โโผโพโผโพโผโพโผโพโผโพโผโพโผโ
โฝ
โ ใข ${nomeBot}
โฟ
โโผโพโผโพโผโพโผโพโผโพโผโพโ
โ ใข Bot Em Versao Beta!
โโผโพโผโพโผโพโผโพโผโพโผโพโ
โ
โโผโพโผโพโผโพโผโพโ
โโผโพโผโพโผโพโผโพโฉโผโพโผโ
โโกMENU DE GRUPOSโก
โ โผโพโผโพโผโพโผโพโผโพโผโพโ
โฟ
โฝ${prefix}Link
โฟ${prefix}Nomegp
โฝ${prefix}Descricao
โโผโพโผโพโผโพโผโพโผโพโผโพโ
`

// ๐๐จ๐ง๐ฌ๐ญ๐ฌ ๐ข๐ฌ๐๐ฎ๐จ๐ญ๐๐

const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

// ๐๐๐ฅ๐จ๐ฌ ๐ ๐๐๐ซ๐ข๐๐ข๐๐๐๐จ๐ฌ ๐๐จ ๐๐จ๐ญ

const selo3 = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 0,status: 4, thumbnail: fs.readFileSync(`./logo/verificado.png`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}

const selo4 = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${nomeBot}`,"title": "hmm" }}}
  
  const selo2 = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;LZ MODS,;;;\nFN:LZ MODS,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': {url: `${logo}`},sendEphemeral: true}}}

// ๐๐จ๐ฆ๐๐ง๐๐จ ๐๐จ ๐๐ซ๐ข๐ฏ๐๐๐จ

if (!isGroup && isCmd) console.log(
color('โญโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','white'),'\nโ\nโ',
color('ใ USUARIO ใ: ','yellow'),color(pushname,'white'),'\nโ\nโ',
color('ใ MENSAGEN ใ: ','green'),color(budy,'white'),'\nโ\nโ',
color('ใ PRIVADO ใ','red'),'\nโ\nโฐโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ\n')

// ๐๐๐ง๐ฌ๐๐ ๐๐ง ๐๐จ ๐๐ซ๐ข๐ฏ๐๐๐จ

if (!isCmd && !isGroup) console.log(
color('โญโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','white'),'\nโ\nโ',
color('ใ USUARIO ใ: ','yellow'),color(pushname,'white'),'\nโ\nโ',
color('ใ COMANDO ใ: ','green'),color(comando,'white'),'\nโ\nโ',
color('ใ PRIVADO ใ','red'),'\nโ\nโฐโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ\n')

// ๐๐จ๐ฆ๐๐ง๐๐จ ๐๐ฆ ๐๐ซ๐ฎ๐ฉ๐จ

if (isCmd && isGroup) console.log(
color('โญโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','white'),'\nโ\nโ',
color('ใ USUARIO ใ: ','yellow'),color(pushname,'white'),'\nโ\nโ',
color('ใ COMANDO ใ: ','green'),color(comando,'white'),'\nโ\nโ',
color('ใ GRUPO ใ','yellow'),color(groupName,'white'),'\nโ\nโฐโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ\n')

// ๐๐๐ง๐ฌ๐๐ ๐๐ง ๐๐ฆ ๐๐ซ๐ฎ๐ฉ๐จ

if (!isCmd && isGroup) console.log(
color('โญโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','white'),'\nโ\nโ',
color('ใ USUARIO ใ: ','yellow'),color(pushname,'white'),'\nโ\nโ',
color('ใ MENSAGEN ใ: ','green'),color(budy,'white'),'\nโ\nโ',
color('ใ GRUPO ใ','yellow'),color(groupName,'white'),'\nโ\nโฐโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ\n')

/*
๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐๐จ๐ฆ๐๐ซ๐ฌ๐ ๐๐ช๐ฎ๐ข ๐ฌ๐ข ๐ฏ๐ข๐ซ๐ ๐ ๐๐๐ฌ๐ ๐ฏ๐ ๐ฃ๐ ๐ญ๐๐ฆ ๐จ ๐ซ๐๐ฌ๐ญ๐จ ๐ ๐๐จ๐ฆ ๐ญ๐ข๐ ๐จ.
*/

switch(comando) {

case 'st': //ฦฯษฑฮฑษณิฯ ฯาฝฮนฦฯ ฯฯษพ : JG-Bots
case 'sticker':
case 's':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
enviar(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${ran}`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
enviar(aguarde) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${ran}`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Enviar imagem / vรญdeo / gif com legenda \n${prefix}sticker (duraรงรฃo do adesivo de vรญdeo de 1 a 9 segundos)`)
}
break

case 'f': //ฦฯษฑฮฑษณิฯ ฯาฝฮนฦฯ ฯฯษพ : JG-Bots
case 'fstiker': 
case 'fsticker':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
enviar(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
enviar(aguarde) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Enviar imagem / vรญdeo / gif com legenda \n${prefix}sticker (duraรงรฃo do adesivo de vรญdeo de 1 a 9 segundos)`)
}
break

case 'ppt':
if (args.length < 1) return enviar(`Vocรช deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(`Vocรช deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitรณria do jogador"
}
if (vit == "derrota") {
var tes = "A vitรณria รฉ do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
enviar(`${nomeBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitรณria do jogador") {
enviar(pph)
}
break

case 'imgpralink':    
try {
if (isQuotedImage) {
enviar(aguarde)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM","m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, "image")
res = await upload(owgi)
client.sendMessage(from, {text: res})
} else {
enviar("[โ๏ธ] Marque uma imagem")
}
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'menu':
sendBimgT(from, `${logo}`, menu, "Leia com Atenรงรฃo...",
[
{index: 3, quickReplyButton: {displayText: '๐ฅ๐๐๐๐ ๐๐ ๐๐๐๐๐๐ฅ', id: `${prefix}menugrup`}},
{index: 4, quickReplyButton: {displayText: '๐ฅ๐๐๐๐ ๐๐ ๐๐๐๐๐๐ฅ', id: `${prefix}menulist`}},
], selo)
break

case 'teste':
sendBimgT(from, `${logo}`, menu, "Leia com Atenรงรฃo...",
[
{index: 1, urlButton: {displayText: '๐ฅ๐๐๐๐๐๐๐ ๐๐๐๐ฅ', url: 'https://wa.me/558592895989'}},

{index: 2, urlButton: {displayText: '๐ฅ๐๐๐๐๐ ๐๐๐๐๐๐๐๐ฅ', url: 'https://chat.whatsapp.com/IVkjgmqmYcu1Xnqab4aNfP'}},

{index: 3, quickReplyButton: {displayText: '๐๐๐๐ ๐๐ ๐๐๐๐๐', id: `${prefix}menugrup`}},

{index: 4, quickReplyButton: {displayText: '๐๐๐๐ ๐๐ ๐๐๐๐๐', id: `${prefix}menulist`}},

], info)
break

case 'menugrup':
case 'menudegrupo':
case 'menudeadm':
case 'menuadm':
case 'grup':
case 'grupo':
sendBimgT(from, `${logo}`, menugrup, "Leia com Atenรงรฃo...",
[

{index: 3, quickReplyButton: {displayText: '๐๐๐๐ ๐๐๐๐๐๐๐๐๐', id: `${prefix}menu`}},

{index: 4, quickReplyButton: {displayText: '๐๐๐๐ ๐๐ ๐๐๐๐๐', id: `${prefix}menulist`}},
], info)
break

case 'dono':
enviar(`${nomeDono}:\nwa.me/${numeroDono}`)
break

case 'ytsearch':
case 'play':
if (args.length < 1) return enviar(`Exemplo:\n${prefix + comando} Faded`)
let Ytsearchh = [];
const data = await yts(q);
let anu = data.videos[Math.floor(Math.random() * data.videos.length)]
for(let a of data.all) {
Ytsearchh.push({
title: a.title, description: `๐ผ๐๐ฟ๐๐: ${a.author.name}\n[โฑ๏ธ]DURAรรO: ${a.duration}`, rowId: `${prefix}ytmp3 ${anu.url}}`
},{
title: a.title, description: `๐๐๐ฟ๐๐: ${a.author.name}\n[โฑ๏ธ]DURAรรO: ${a.duration}`, rowId: `${prefix}ytmp4 ${anu.url}`
})
}
const buttonYtsearch = {

title: `[โ] ๐ฃ๐๐ฆ๐ค๐จ๐๐ฆ๐: ${q} [โ]`,
description: "Clique e Escolha Uma Opรงรฃo\n",
footerText: `${nomeBot}`,
buttonText: 'ESCOLHA AQUI',
listType: 'SINGLE_SELECT',
sections: [

{ title: `Musicas Com A Pesquisa ${q}`,  rows: Ytsearchh },

]}
const templateListYtsearch = generateWAMessageFromContent(from, proto.Message.fromObject({ "listMessage": buttonYtsearch }), {});
client.relayMessage(from, templateListYtsearch.message, { messageId: templateListYtsearch.key.id });
break

case 'ytmp3':
case 'ytaudio': {
let { yta } = require('./funรงรตes/yta')
if (!q) return enviar(`Example : ${prefix + comando} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(q, quality)
enviar(aguarde)
client.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mp4'}, {quoted: info})
}
break

case 'ytmp4':
case 'ytvideo': {
let { ytv } = require('./funรงรตes/yta')
if (!q) return enviar(`Example : ${prefix + comando} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(q, quality)
enviar(aguarde)
client.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, {quoted: info})
}
break

case 'menulist':
const button2 = {

title: `๐๐๐๐ ๐๐ ๐๐๐๐๐`,
description: `โคOla Aqui esta o menu principalโค\nโคdono: wa.me/${numeroDono}\n\nโฉLista dos menus Abaixoโฉ`,
footer: `${nomeBot}`,
buttonText: 'Click Aqui',
listType: 'SINGLE_SELECT',
sections: [
{ title: "โฉ๐๐ข๐ฌ๐ญ๐ ๐๐จ๐ฌ ๐๐๐ง๐ฎ๐ฌ ๐๐๐๐ข๐ฑ๐จโฉ", rows: [ {title: 'ใ ๐๐๐ง๐ฎ ๐๐ซ๐ข๐ง๐๐ข๐ฉ๐๐ฅ ใ๏ธ', "rowId": `${prefix}menu` }, {title: 'ใ ๐๐๐ง๐ฎ ๐๐ ๐๐ซ๐ฎ๐ฉ๐จ๐ฌ ใ๏ธ', "rowId": `${prefix}menugrup` },
]},
{ title: "โฉ๐๐ฎ๐ฌ๐ข๐๐๐ฌ ๐๐ฆ ๐๐โฉ", rows: [
{title: "ใ ๐๐๐๐๐ ใ", rowId: ".ytmp3 https://youtu.be/dQwJvsIjixM"},
{title: "ใ ๐๐๐๐๐ง๐ฌ ใ", rowId: ".ytmp3 https://youtu.be/RBIQyEpQAl8"},
{title: "ใ ๐๐ฌ'๐ฌ ๐๐จ๐ฎ ใ", rowId: ".ytmp3 https://youtu.be/fDq2yWBiD0M"},  ]},
{ title: "โฉ๐๐ฎ๐ฌ๐ข๐๐๐ฌโฉ", rows: [
{ title: "ใ ๐๐๐ง๐๐ ๐๐ฒ๐๐ซ๐ฌ ใ", rowId: ".ytmp3 https://youtu.be/-iwYHk_SwNA"},]},
]}
const templateList2 = generateWAMessageFromContent(from, proto.Message.fromObject({ "listMessage": button2 }), {});
client.relayMessage(from, templateList2.message, { messageId: templateList2.key.id });
break

case 'toimg':
if (!isQuotedSticker) return enviar('โ adesivo de resposta um โ')
enviar(aguarde)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
client.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
enviar('ERROR!!')
})
break

case 'pingg':
case 'ping':
const varping = speed();
const ping = speed() - varping
const timestamp = speed();
uptime = process.uptime()
const latensi = speed() - timestamp
uptime = process.uptime()
enviar(`โโโโโโโโโโโโโโโโโ\nโ Velocidade Do Bot + Informaรงรตes \nโ \nโ Velocidade : ${latensi.toFixed(4)}\nโ \nโโโโโโโโโโโโโโโ\nโ Tempo Ativo : \nโ [ ${kyun(uptime)} ] \nโโโโโโโโโโโโ\nโ \nโ Solicitou Comando : ${pushname}\nโ \nโโโโโโโโโโใ ${hora} ใ`)
break

// ๐ผ๐ฟ๐๐๐๐๐๐๐๐๐ผ๐ฟ๐๐๐๐

case 'link': //Bot tem que ser adm!!
const linkzin = await client.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkzin)
break

case 'nomegp': //Bot tem que ser adm!!
if(!q) return enviar('Qual o nome do gp?')
ninja.groupUpdateSubject(from,`${q}`)
enviar("Novo Nome!")
break

case 'descricao': //Bot tem que ser adm!!
if(!q) return enviar('Qual a descriรงรฃo?')
ninja.groupUpdateDescription(from,`${q}`)
enviar("Nova Descriรงรฃo!")
break

/*
๐๐ฌ ๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐๐๐๐๐๐ซ๐๐จ ๐๐ช๐ฎ๐ข
*/

default:

/*
๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐๐๐ฆ ๐๐ซ๐๐๐ข๐ฑ๐จ ๐๐จ๐ฆ๐๐ซ๐ฌ๐ ๐๐ช๐ฎ๐ข
*/



/*
๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐๐๐ฆ ๐๐ซ๐๐๐ข๐ฑ๐จ ๐๐๐ซ๐ฆ๐ข๐ง๐ ๐๐ช๐ฎ๐ข
*/

/*
๐๐ข๐ฆ ๐๐ ๐ญ๐จ๐๐จ ๐จ ๐๐จ๐ญ ๐ง๐ฎ๐ฆ๐๐ ๐๐ฉ๐๐ ๐ ๐จ ๐ช๐ฎ๐ ๐๐ฌ๐ญ๐ ๐๐๐๐ข๐ฑ๐จ ๐ ๐ฆ๐๐ง๐จ๐ฌ ๐ช๐ฎ๐ ๐ฌ๐๐ข๐๐ ๐ฆ๐๐๐ก๐๐ซ ๐ฆ๐ฎ๐ข๐ญ๐จ ๐๐๐ฆ ๐ง๐จ ๐๐จ๐ญ!
*/

}} catch (e) {
console.log(e)}})}
startBot ()