/*
Deixe os Creditos to de olho. 🤨🧐

Meu canal: [

Nome: JG-Bots
Link: https://youtube.com/channel/UC6Nvd3QgM0j1_ebNF4OC84g

]

Se Pegar os cmd deixe os creditos pq os comandos sao meus se for mandar o bot mande o link do canal!
*/

// 𝐀𝐮𝐠𝐮𝐦𝐚𝐬 𝐅𝐮𝐧𝐜𝐨𝐞𝐬

const {
default: makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, downloadAndSaveMediaMessage, prepareWAMessageMedia, MediaType, generateWAMessageFromContent, WAMessageStatus,AuthenticationState, GroupMetadata,initInMemoryKeyStore, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage,ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime,	Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, delay, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent } = require('@adiwajshing/baileys');

// 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧

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

// 𝐀𝐫𝐪𝐮𝐢𝐯𝐨𝐬 𝐋𝐢𝐛

const { color } = require("./funções/color")
const { lermais } = require("./lib/lermais.js")
const { fetchJson } = require("./funções/fetcher")

const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))
const logosss = JSON.parse(fs.readFileSync('./logo/logos.json'))

logo = logosss.logo
prefix = setting.prefix
nomeDono = setting.nomeDono
nomeBot = setting.nomeBot
numeroDono = setting.numeroDono

// 𝐎𝐮𝐭𝐫𝐚𝐬 𝐅𝐮𝐧𝐜𝐨𝐞𝐬

const { banner, banner2, getGroupAdmins, getBuffer, getExtension, getRandom, upload, log } = require("./funções/functions")
const { MsgsDeEspera } = require('./funções/wait.js');
var aguarde = MsgsDeEspera[Math.floor(Math.random() * MsgsDeEspera.length)]

// 𝐅𝐮𝐧𝐜𝐚𝐨 𝐅𝐞 𝐃𝐚𝐭𝐚 𝐞 𝐇𝐨𝐫𝐚

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss') 
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))}

// 𝐏𝐢𝐧𝐠 𝐃𝐨 𝐁𝐨𝐭

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

// 𝐂𝐨𝐧𝐞𝐜𝐱𝐚𝐨 𝐃𝐨 𝐁𝐨𝐭

const { 
makeInMemoryStore, 
fetchLatestBaileysVersion
} = require('@adiwajshing/baileys');
const store = makeInMemoryStore({ })

// 𝐐𝐫𝐜𝐨𝐝𝐞

const { state, saveState } = useSingleFileAuthState("./qrcode.json")

// 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 / 𝐓𝐞𝐫𝐦𝐮𝐱

async function startBot () {
console.log(banner.string)
console.log(banner2.string)
const client = makeWASocket({
logger: Pino({ level: "silent" }),printQRInTerminal: true,auth: state})
client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect)
if(shouldReconnect) {
startBot()}
} else if(connection === "open") {
console.log(color("Ola seu Bot esta Conectado!\n","cyan"))
}})

// 𝐖𝐞𝐥𝐤𝐨𝐦𝐞

client.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await client.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {

memb = metadata.participants.length

if (anu.action == 'add') {
num = anu.participants[0]
client.sendMessage(anu.id, { image: {url: `${logo}`}, caption: `𝐎𝐥𝐚 @${num.split('@')[0]}\n❤Bem♤vindo(a) 𝘢𝘰 𝘨𝘳𝘶𝘱𝘰 :\n*${metadata.subject}*\n𝙰𝙾 𝙴𝙽𝚃𝚁𝙰𝚁 𝙽𝙾 𝙶𝚁𝚄𝙿𝙾 𝚂𝙴 𝙰𝙿𝚁𝙴𝚂𝙴𝙽𝚃𝙴 𝙲𝙾𝙼:\n\n❀⃪ᰰ᳝␥🍃꧇۪𝘍𝘖𝘛𝘖£•𓏲꫶ׄ💋⿻᭄\n❀⃪ᰰ᳝␥🍃꧇۪𝐍❍𝐌𝐄•𓏲꫶ׄ✒️⿻᭄\n❀⃪ᰰ᳝␥🍃꧇۪𝐈𝐃∆𝐃𝐄•𓏲꫶ׄ📅⿻᭄\n❀⃪ᰰ᳝␥🍃꧇۪𝐂𝐈𝐃∆𝐃𝐄•𓏲꫶ׄ🏠⿻᭄\n\nᵒᵇˢᵉʳᵛᵃᶜ̧ᵃ̃ᵒ🚸: ⁿᵃᵒ ᵉ ᵒᵇʳⁱᵍᵃᵗᵒ́ʳⁱᵒ`})
} else if (anu.action == 'remove') {
client.sendMessage(anu.id, { image: {url: `${logo}`}, caption: `🐶✑ Ol∆ Galer∆ do Grp:\n*${metadata.subject}*\n\nMembro: @${num.split('@')[0]}\n\nSaiu do Grp ou foi Banido.`})
}}
} catch (err) {
console.log(err)
}})

// 𝐋𝐢𝐧𝐠𝐮𝐚𝐠𝐞𝐧 𝐃𝐨 𝐁𝐨𝐭

client.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
await client.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id])
if (!info.key.participant) info.key.participant = info.key.remoteJid
info.key.participant = info.key.participant.replace(/:[0-9]+/gi, "")
if (!info.message) return
const from = info.key.remoteJid
const type = Object.keys(info.message).find((key) => !['senderKeyDistributionMessage', 'messageContextInfo'].includes(key))

// 🄰🄻🅃🄾 🅁🄴🅂🄿🄾🄽🄳🄴🅁 🄳🄾 🄱🄾🅃

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

// 𝐎𝐮𝐭𝐫𝐚𝐬 𝐅𝐮𝐧𝐜𝐨𝐞𝐬

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

// 𝐋𝐢𝐧𝐠𝐮𝐚𝐠𝐞𝐧 𝐃𝐞 𝐆𝐫𝐮𝐩𝐨

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

// 𝐌𝐞𝐦𝐬𝐚𝐠𝐞𝐦𝐬 𝐏𝐫𝐨𝐠𝐚𝐦𝐚𝐝𝐚𝐬

mess = {
wait: `𝘈𝘨𝘶𝘢𝘳𝘥𝘦 𝘜𝘮 𝘔𝘰𝘮𝘦𝘯𝘵𝘰...`,
admin: `𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘚𝘰 𝘗𝘢𝘳𝘢 𝘈𝘥𝘮𝘪𝘯𝘴...`,
Badmin: `𝘊𝘢𝘳𝘢 𝘯𝘢𝘰 𝘴𝘰𝘶 𝘈𝘥𝘮 𝘊𝘰𝘮𝘰 𝘷𝘰𝘶 𝘦𝘹𝘦𝘤𝘶𝘵𝘢𝘳?`,
rg: `𝘗𝘳𝘦𝘥𝘪𝘴𝘢 𝘥𝘦 𝘳𝘦𝘨𝘪𝘴𝘵𝘳𝘰!\n\n𝘋𝘪𝘨𝘪𝘵𝘦: 𝘓𝘰𝘨𝘪𝘯`,
group: `𝘌𝘴𝘴𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰 𝘧𝘶𝘤𝘪𝘰𝘯𝘢 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰!`,
client: `𝘐𝘴𝘴𝘰 𝘦 𝘴𝘰 𝘱𝘳𝘰 𝘮𝘦𝘶 𝘥𝘰𝘯𝘰!`
}

// 𝐄𝐦𝐯𝐢𝐚𝐫 𝐆𝐢𝐟𝐬

const enviargif = (videoDir, caption) => {
client.sendMessage(from, {
video: fs.readFileSync(videoDir),
caption: caption,
gifPlayback: true
})
}

// 𝐄𝐧𝐯𝐢𝐚𝐫 𝐈𝐦𝐚𝐠𝐞𝐧𝐬

const enviarimg = (imageDir, caption) => {
client.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

// 𝐄𝐧𝐯𝐢𝐚𝐫 𝐅𝐢𝐠𝐮𝐫𝐢𝐧𝐡𝐚𝐬

const enviarfig = async (figu, tag) => {
bla = fs.readFileSync(figu)
client.sendMessage(from, {sticker: bla}, {quoted: info})
}

// ENVIAR BOTÃO COM IMAGEM
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

// PRA ENVIAR BOTÃO DE TEMPLATE
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

// PRA ENVIAR BOTÃO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
client.sendMessage(id, templateMessage, {quoted: vr})
}

// 𝐄𝐧𝐯𝐢𝐚𝐫 𝐈𝐦𝐚𝐠𝐞𝐦 𝐂𝐨𝐦 𝐁𝐮𝐭𝐚𝐨

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

// 𝐄𝐧𝐯𝐢𝐚𝐫 𝐓𝐞𝐱𝐭𝐨 𝐂𝐨𝐦 𝐁𝐮𝐭𝐚𝐨

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
┏╼╾╼╾╼╾╼╾╼╾╼╾╼┓
╽
╠〢 ${nomeBot}
╿
┗╼╾╼╾╼╾╼╾╼╾╼╾┓
╠〢 Bot Em Versao Beta!
┏╼╾╼╾╼╾╼╾╼╾╼╾┛
│
┗╼╾╼╾╼╾╼╾┓
┏╼╾╼╾╼╾╼╾╩╼╾╼┓
╠〢 MENUS DO BOT
╠╼╾╼╾╼╾╼╾╼╾╼╾┛
╿
╽${prefix}Menulist
╿${prefix}Menugrup
╽
┗╼╾╼╾╼╾╼╾┓
┏╼╾╼╾╼╾╼╾╩╼╾╼┓
╠〢 PESQUISAR/BAIXAR
╠╼╾╼╾╼╾╼╾╼╾╼╾┛
╿
╽${prefix}Play
╿${prefix}Ytsearch
╽
┗╼╾╼╾╼╾╼╾┓
┏╼╾╼╾╼╾╼╾╩╼╾╼┓
╠〢 STICKERS
╠╼╾╼╾╼╾╼╾╼╾╼╾┛
╽
╿${prefix}Sticker
╽${prefix}Fsticker
╿${prefix}Toimg
╽
┗╼╾╼╾╼╾╼╾┓
┏╼╾╼╾╼╾╼╾╩╼╾╼┓
╠〢 JOGOS
╠╼╾╼╾╼╾╼╾╼╾╼╾┛
╿
│${prefix}Ppt
╽
┗╼╾╼╾╼╾╼╾┓
┏╼╾╼╾╼╾╼╾╩╼╾╼┓
╠〢 OUTROS/CMDS
╠╼╾╼╾╼╾╼╾╼╾╼╾┛
╿
╽${prefix}Dono
╿${prefix}Ping
╽${prefix}Imgpralink
┗╼╾╼╾╼╾╼╾╼╾╼╾┛
`

const menugrup = `
${lermais}
┏╼╾╼╾╼╾╼╾╼╾╼╾╼┓
╽
╠〢 ${nomeBot}
╿
┗╼╾╼╾╼╾╼╾╼╾╼╾┓
╠〢 Bot Em Versao Beta!
┏╼╾╼╾╼╾╼╾╼╾╼╾┛
│
┗╼╾╼╾╼╾╼╾┓
┏╼╾╼╾╼╾╼╾╩╼╾╼┓
│⚡MENU DE GRUPOS⚡
╠╼╾╼╾╼╾╼╾╼╾╼╾┛
╿
╽${prefix}Link
╿${prefix}Nomegp
╽${prefix}Descricao
┗╼╾╼╾╼╾╼╾╼╾╼╾┛
`

// 𝐂𝐨𝐧𝐬𝐭𝐬 𝐢𝐬𝐐𝐮𝐨𝐭𝐞𝐝

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

// 𝐒𝐞𝐥𝐨𝐬 𝐄 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐨𝐬 𝐃𝐨 𝐁𝐨𝐭

const selo3 = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 0,status: 4, thumbnail: fs.readFileSync(`./logo/verificado.png`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}

const selo4 = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${nomeBot}`,"title": "hmm" }}}
  
  const selo2 = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;LZ MODS,;;;\nFN:LZ MODS,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': {url: `${logo}`},sendEphemeral: true}}}

// 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐍𝐨 𝐏𝐫𝐢𝐯𝐚𝐝𝐨

if (!isGroup && isCmd) console.log(
color('╭──────────────────────────────────','white'),'\n│\n│',
color('〔 USUARIO 〕: ','yellow'),color(pushname,'white'),'\n│\n│',
color('〔 MENSAGEN 〕: ','green'),color(budy,'white'),'\n│\n│',
color('〔 PRIVADO 〕','red'),'\n│\n╰──────────────────────────────────\n')

// 𝐌𝐞𝐧𝐬𝐚𝐠𝐞𝐧 𝐍𝐨 𝐏𝐫𝐢𝐯𝐚𝐝𝐨

if (!isCmd && !isGroup) console.log(
color('╭──────────────────────────────────','white'),'\n│\n│',
color('〔 USUARIO 〕: ','yellow'),color(pushname,'white'),'\n│\n│',
color('〔 COMANDO 〕: ','green'),color(comando,'white'),'\n│\n│',
color('〔 PRIVADO 〕','red'),'\n│\n╰──────────────────────────────────\n')

// 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐄𝐦 𝐆𝐫𝐮𝐩𝐨

if (isCmd && isGroup) console.log(
color('╭──────────────────────────────────','white'),'\n│\n│',
color('〔 USUARIO 〕: ','yellow'),color(pushname,'white'),'\n│\n│',
color('〔 COMANDO 〕: ','green'),color(comando,'white'),'\n│\n│',
color('〔 GRUPO 〕','yellow'),color(groupName,'white'),'\n│\n╰──────────────────────────────────\n')

// 𝐌𝐞𝐧𝐬𝐚𝐠𝐞𝐧 𝐄𝐦 𝐆𝐫𝐮𝐩𝐨

if (!isCmd && isGroup) console.log(
color('╭──────────────────────────────────','white'),'\n│\n│',
color('〔 USUARIO 〕: ','yellow'),color(pushname,'white'),'\n│\n│',
color('〔 MENSAGEN 〕: ','green'),color(budy,'white'),'\n│\n│',
color('〔 GRUPO 〕','yellow'),color(groupName,'white'),'\n│\n╰──────────────────────────────────\n')

/*
𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐂𝐨𝐦𝐞𝐫𝐬𝐚 𝐀𝐪𝐮𝐢 𝐬𝐢 𝐯𝐢𝐫𝐚 𝐚 𝐛𝐚𝐬𝐞 𝐯𝐜 𝐣𝐚 𝐭𝐞𝐦 𝐨 𝐫𝐞𝐬𝐭𝐨 𝐞 𝐜𝐨𝐦 𝐭𝐢𝐠𝐨.
*/

switch(comando) {

case 'st': //ƈσɱαɳԃσ ϝҽιƚσ ρσɾ : JG-Bots
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
enviar(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break

case 'f': //ƈσɱαɳԃσ ϝҽιƚσ ρσɾ : JG-Bots
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
enviar(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break

case 'ppt':
if (args.length < 1) return enviar(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
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
return enviar(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
enviar(`${nomeBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
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
enviar("[❗️] Marque uma imagem")
}
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'menu':
sendBimgT(from, `${logo}`, menu, "Leia com Atenção...",
[
{index: 3, quickReplyButton: {displayText: '🥂𝘔𝘌𝘕𝘜 𝘋𝘌 𝘎𝘙𝘜𝘗𝘖🔥', id: `${prefix}menugrup`}},
{index: 4, quickReplyButton: {displayText: '🥂𝘔𝘌𝘕𝘜 𝘌𝘔 𝘓𝘐𝘚𝘛𝘈🔥', id: `${prefix}menulist`}},
], selo)
break

case 'teste':
sendBimgT(from, `${logo}`, menu, "Leia com Atenção...",
[
{index: 1, urlButton: {displayText: '🔥𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐁𝐎𝐓🔥', url: 'https://wa.me/558592895989'}},

{index: 2, urlButton: {displayText: '🔥𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋🔥', url: 'https://chat.whatsapp.com/IVkjgmqmYcu1Xnqab4aNfP'}},

{index: 3, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎', id: `${prefix}menugrup`}},

{index: 4, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔 𝐄𝐌 𝐋𝐈𝐒𝐓𝐀', id: `${prefix}menulist`}},

], info)
break

case 'menugrup':
case 'menudegrupo':
case 'menudeadm':
case 'menuadm':
case 'grup':
case 'grupo':
sendBimgT(from, `${logo}`, menugrup, "Leia com Atenção...",
[

{index: 3, quickReplyButton: {displayText: '𝘔𝘌𝘕𝘜 𝘗𝘙𝘐𝘕𝘊𝘐𝘗𝘈𝘓', id: `${prefix}menu`}},

{index: 4, quickReplyButton: {displayText: '𝘔𝘌𝘕𝘜 𝘌𝘔 𝘓𝘐𝘚𝘛𝘈', id: `${prefix}menulist`}},
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
title: a.title, description: `𝘼𝙐𝘿𝙄𝙊: ${a.author.name}\n[⏱️]DURAÇÃO: ${a.duration}`, rowId: `${prefix}ytmp3 ${anu.url}}`
},{
title: a.title, description: `𝙑𝙄𝘿𝙀𝙊: ${a.author.name}\n[⏱️]DURAÇÃO: ${a.duration}`, rowId: `${prefix}ytmp4 ${anu.url}`
})
}
const buttonYtsearch = {

title: `[❗] 𝗣𝗘𝗦𝗤𝗨𝗜𝗦𝗔: ${q} [❗]`,
description: "Clique e Escolha Uma Opção\n",
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
let { yta } = require('./funções/yta')
if (!q) return enviar(`Example : ${prefix + comando} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(q, quality)
enviar(aguarde)
client.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mp4'}, {quoted: info})
}
break

case 'ytmp4':
case 'ytvideo': {
let { ytv } = require('./funções/yta')
if (!q) return enviar(`Example : ${prefix + comando} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(q, quality)
enviar(aguarde)
client.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, {quoted: info})
}
break

case 'menulist':
const button2 = {

title: `𝐌𝐄𝐍𝐔 𝐄𝐌 𝐋𝐈𝐒𝐓𝐀`,
description: `♤Ola Aqui esta o menu principal♤\n♤dono: wa.me/${numeroDono}\n\n⇩Lista dos menus Abaixo⇩`,
footer: `${nomeBot}`,
buttonText: 'Click Aqui',
listType: 'SINGLE_SELECT',
sections: [
{ title: "⇩𝐋𝐢𝐬𝐭𝐚 𝐃𝐨𝐬 𝐌𝐞𝐧𝐮𝐬 𝐀𝐛𝐚𝐢𝐱𝐨⇩", rows: [ {title: '「 𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥 」︎', "rowId": `${prefix}menu` }, {title: '「 𝐌𝐞𝐧𝐮 𝐃𝐞 𝐆𝐫𝐮𝐩𝐨𝐬 」︎', "rowId": `${prefix}menugrup` },
]},
{ title: "⇩𝐌𝐮𝐬𝐢𝐜𝐚𝐬 𝐄𝐦 𝟖𝐃⇩", rows: [
{title: "「 𝐅𝐚𝐝𝐞𝐝 」", rowId: ".ytmp3 https://youtu.be/dQwJvsIjixM"},
{title: "「 𝐎𝐜𝐞𝐚𝐧𝐬 」", rowId: ".ytmp3 https://youtu.be/RBIQyEpQAl8"},
{title: "「 𝐈𝐬'𝐬 𝐘𝐨𝐮 」", rowId: ".ytmp3 https://youtu.be/fDq2yWBiD0M"},  ]},
{ title: "⇩𝐌𝐮𝐬𝐢𝐜𝐚𝐬⇩", rows: [
{ title: "「 𝐏𝐚𝐧𝐝𝐚 𝐄𝐲𝐞𝐫𝐬 」", rowId: ".ytmp3 https://youtu.be/-iwYHk_SwNA"},]},
]}
const templateList2 = generateWAMessageFromContent(from, proto.Message.fromObject({ "listMessage": button2 }), {});
client.relayMessage(from, templateList2.message, { messageId: templateList2.key.id });
break

case 'toimg':
if (!isQuotedSticker) return enviar('❌ adesivo de resposta um ❌')
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
enviar(`┌───────────────┐\n│ Velocidade Do Bot + Informações \n│ \n│ Velocidade : ${latensi.toFixed(4)}\n│ \n┌─────────────┐\n│ Tempo Ativo : \n│ [ ${kyun(uptime)} ] \n└───────────\n│ \n│ Solicitou Comando : ${pushname}\n│ \n└─────────〔 ${hora} 〕`)
break

// 𝘼𝘿𝙄𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎

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
if(!q) return enviar('Qual a descrição?')
ninja.groupUpdateDescription(from,`${q}`)
enviar("Nova Descrição!")
break

/*
𝐎𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐚𝐜𝐚𝐛𝐚𝐫𝐚𝐨 𝐚𝐪𝐮𝐢
*/

default:

/*
𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐒𝐞𝐦 𝐏𝐫𝐞𝐟𝐢𝐱𝐨 𝐂𝐨𝐦𝐞𝐫𝐬𝐚 𝐀𝐪𝐮𝐢
*/



/*
𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐒𝐞𝐦 𝐏𝐫𝐞𝐟𝐢𝐱𝐨 𝐓𝐞𝐫𝐦𝐢𝐧𝐚 𝐀𝐪𝐮𝐢
*/

/*
𝐅𝐢𝐦 𝐝𝐞 𝐭𝐨𝐝𝐨 𝐨 𝐛𝐨𝐭 𝐧𝐮𝐦𝐜𝐚 𝐚𝐩𝐚𝐠𝐞 𝐨 𝐪𝐮𝐞 𝐞𝐬𝐭𝐚 𝐚𝐛𝐚𝐢𝐱𝐨 𝐚 𝐦𝐞𝐧𝐨𝐬 𝐪𝐮𝐞 𝐬𝐚𝐢𝐛𝐚 𝐦𝐞𝐜𝐡𝐞𝐫 𝐦𝐮𝐢𝐭𝐨 𝐛𝐞𝐦 𝐧𝐨 𝐛𝐨𝐭!
*/

}} catch (e) {
console.log(e)}})}
startBot ()