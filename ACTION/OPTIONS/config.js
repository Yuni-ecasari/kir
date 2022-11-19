/*
Thanks To
Pembuat Base ( Irfan )
Pengembang Script Bot ( KirBotz )

Jangan Hapus Thanks To Di Atas
*/

const fs = require("fs")
const { color } = require("../../ACTION/STORAGE/ACC/color")
const chalk = require('chalk')

global.gopayno = "0813-3378-2061" //Jika Tidak Punya Jangan Ganti Tar Error
global.danano = "0813-3378-2061" //Jika Tidak Punya Jangan Ganti Tar Error
global.shopeepayno = "0813-3378-2061" //Jika Tidak Punya Jangan Ganti Tar Error
global.nomerOwner = "6281333782061" //Bebas ganti 
global.namaOwner = "𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖" //Bebas ganti
global.namaBot = "𝐹𝑒𝑙𝑖𝑥-𝑀𝐷" //Bebas ganti asal jangan pake font
global.copyright = "© 𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 𝙁𝙚𝙡𝙞𝙭-𝙈𝘿" //Bebas ganti
global.creAtor = "6281333782061@s.whatsapp.net" //Jangan Ganti Tar Error
global.wm = "Jika ingin chat owner:\nWA: +62 813-3378-2061\nFB: Itz Kirito Kun\nIG: @mhmdfjralfarizi_\nTele: @ItzSadnessKun" // Jangan Ganti Ini Thanks To
global.autoJoin = true
global.publik = true
global.simi = false
global.docType = "pdf"
global.Ttk = "```"
global.tdksopan = ["bang","Bang","bng","bg","Bng","Bg","Woi","woi","p","P","Pe","pe"]
global.sendbot = ["felix","Felix","felixbotz","Felixbotz","FelixBotz","lix","Lix","bot","Bot"]
global.codeInvite = "BTAHKRz8qSeGiMnym1Xc38"
global.thumb = fs.readFileSync(`./ACTION/IMAGE/thumb.png`)
global.qris = fs.readFileSync(`./ACTION/IMAGE/qris.jpg`)
require("../../ACTION/STORAGE/ACC/tiktok")
require("../../ACTION/STORAGE/ACC/jadibot")
require("../../ACTION/STORAGE/ACC/removebg")
require("../../ACTION/STORAGE/ACC/ffstalk")
require("../../ACTION/STORAGE/ACC/mlstalk")
require("../../ACTION/STORAGE/ACC/githubstalk")
require("../../ACTION/STORAGE/ACC/igstalk")
require("../../ACTION/STORAGE/ACC/npmstalk")
require("../../ACTION/STORAGE/ACC/savefrom")
require("../../ACTION/STORAGE/ACC/styletext")
require("../../ACTION/STORAGE/ACC/upload")
require("../../ACTION/STORAGE/ACC/photooxy")
require("../../ACTION/STORAGE/ACC/ephoto")
require("../../ACTION/STORAGE/ACC/cerpen")
require("../../ACTION/STORAGE/ACC/gdrive")
require("../../ACTION/STORAGE/ACC/santedgc")
require("../../ACTION/STORAGE/ACC/santedpc")
require("../../ACTION/STORAGE/ACC/vn")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})