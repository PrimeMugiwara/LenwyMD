const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://chat.whatsapp.com/Idgq0vOKDsQD9cL59RZCf1'
global.ig = '-'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = 'Fake01@gmail.com'
global.region = 'Indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Kamiya ft. Villain'
global.domain = '-'
global.apikey2 = '' // Isi Apikey Pltc Lu
global.capikey2 = ''
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.owner = ['6283829102407']

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.botname = 'Lenwy'
global.packname = 'Lenwy'
global.author = `YouTube: Mugiwara Editz\nBot: 0838-2910-2407`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Lenwy'
global.sp = '⭔'
global.anticall = true

global.mess = {
    success: 'Selesai 🫡',
    admin: '☘️ Fitur Khusus Admin Group !',
    botAdmin: '☘️ Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '🎁 Fitur Khusus Owner !',
    group: '☘️ Fitur Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '☘️ Fitur Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '☘️ Fitur Khusus Pengguna Nomor Bot !',
    wait: '☘️ Dalam Proses !',
    endLimit: '☘️ Limit kamu Habis, Limit Akan Direset Setiap Jam 12 !\n\n☘️ *Premium Cuma 5K Permanen* 😋',
    error: '☘️ Kayaknya Ada Error Nih ',
    prem: '☘️ Fitur Khusus Premium!\n\n☘️ Beli Premium Cuma 5K Permanen',
}

global.limitawal = {
    premium: 9999999999 ,
    free: 50
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})