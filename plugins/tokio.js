let handler = async m => m.reply(`
ā *Tokio :* a whatsapp bot\n\nš *URL :* https://github.com/itsajaygaur/tokio-wabot
`.trim()) // repository
handler.help = ['tokio/repo']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
