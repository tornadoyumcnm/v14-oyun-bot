const Discord = require('discord.js');
const config = require('../../config');
const Canvas = require('canvas');

module.exports = {
    name: 'youtube',
    aliases: ['yutup', 'yt'],

    async execute(client, message, args) {

        const backgroundUrl = 'https://media.discordapp.net/attachments/1246584994328215634/1246614837635715112/dsgsdggsdsdgsdg-min.png?ex=665d080a&is=665bb68a&hm=2e05bfaa91a20bcdbba144a3dd50b1097aed507d6e80fd53a6199f0ca69ba1b2&=&format=png&quality=lossless&width=1123&height=632'; // Bu URL'yi kendi arkaplan resminizin URL'si ile değiştirin

        const canvas = Canvas.createCanvas(1920, 1080);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage(backgroundUrl);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.font = '120px sans-serif';

        ctx.fillStyle = '#ffffff';

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 4;

        const text = `${client.user.username}`;
        const textWidth = ctx.measureText(text).width;

        ctx.fillText(text, (canvas.width - textWidth) / 2, canvas.height / 5);

        ctx.fillText(`OYNA`, (canvas.width - textWidth) / 2, canvas.height / 2.2);

        ctx.fillText(`AYARLAR`, (canvas.width - textWidth) / 2.2, canvas.height / 1.2);

        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), { name: 'backgroundtext.png' });

        await message.channel.send({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.other.renk)
                    .setDescription(`### Yenilenmiş Sistemli Youtube ✨`)
                    .setFooter({ text: `${message.author.username} tarafından istendi.`, iconURL: message.author.avatarURL({ dynamic: true }) })
                    .setTimestamp()
                    .setImage('attachment://backgroundtext.png')
            ],
            components: [
                new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId('oyna')
                    .setLabel("Oyna")
                    .setEmoji('🎯')
                    .setStyle(Discord.ButtonStyle.Secondary),
                    new Discord.ButtonBuilder()
                    .setCustomId('ayarlar')
                    .setLabel("Ayarlar")
                    .setEmoji('🎎')
                    .setStyle(Discord.ButtonStyle.Secondary)
                )
            ],
            files: [attachment]
        });
    },
};
