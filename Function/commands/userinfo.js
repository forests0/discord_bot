const discord = require("discord.js")

module.exports = {
    name : 'userinfo',
    execute(msg) {
        const user = msg.mentions.members.first()
        if(!user) msg.reply('유저를 멘션해주세요!')
        const createdAt = user.user.createdAt
        const embed = new discord.MessageEmbed()
        .setTitle(`${user.user.tag}님의 정보`)
        .setColor("26ff67")
        .setThumbnail(user.user.avatarURL())
        if(!user.user.avatarURL()) embed.setThumbnail(user.user.defalut.avatarURL)
        embed.addFields(
            { name: "아이디 : ", value: user.user.id},
            { name: "가입날짜 : ", value: `${createdAt.getFullYear()}년 ${createdAt.getMonth()}월 
                ${createdAt.getDay()}일 ${createdAt.getHours()}시 ${createdAt.getMinutes()}분`}
        )
        msg.channel.send(embed);
    }
}

//현재 해본 결과 자기 자신의 userinfo만 뜨는 것으로 판별남. 가입날짜에 권한이 필요한가?