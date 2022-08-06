const fetch = require("node-fetch");

module.exports = async function(...args){
let emo = args.map(tr => 'u'+tr.codePointAt(0).toString(16))
let linktod = `https://www.gstatic.com/android/keyboard/emojikitchen/20201001/${emo[0]}/${emo[0]}_${emo[1]}.png`
let baf = await fetch(linktod, { headers:{'x-v':1} })
if (baf.status !== 200) throw `Internal Server Error!`
return baf.buffer()
}