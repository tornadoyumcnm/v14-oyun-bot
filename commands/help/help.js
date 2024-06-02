const Discord = require('discord.js');
const config = require('../../config');

module.exports = {
name: 'help',
aliases: ['yardım', 'h'],

async execute(client, message, args) {

    const helpMessage = await message.channel.send({
        embeds: [
            new Discord.EmbedBuilder()
            .setColor(config.other.renk)
            .setAuthor({ name: `${config.bot.isim} Yardım Menüsü` })
            .setDescription(`🆕 **|** Bot daha yeni olduğu için hata olursa [discord sunucusuna](${config.other.sunucu}) gelip göstermeyi unutmayın.`)
            .addFields({ name: `❔ Nasıl oynarım?`, value: `> \`${config.bot.prefix}youtube\` komutunu kullanarak oyunu başlatın\n> \`${config.bot.prefix}streamer\` komutunu kullanarak oyunu başlatın` })
            .setFooter({ text: `${message.author.username} tarafından istendi.`, iconURL: message.author.avatarURL({ dynamic: true }) })
            .setTimestamp()
        ],
        components: [
            new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                .setCustomId('komutlar')
                .setLabel("Komutlar")
                .setEmoji('📑')
                .setStyle(Discord.ButtonStyle.Secondary)
            )
        ]
    });

    setTimeout(async () => {
        const disabledRow = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                .setCustomId('komutlar')
                .setLabel("Komutlar")
                .setEmoji('📑')
                .setStyle(Discord.ButtonStyle.Secondary)
                .setDisabled(true)
            );

        await helpMessage.edit({
            components: [disabledRow],
            content: `❗ **Komutlar** adlı button kapatıldı.`
        });
    }, 60000);

},
};