module.exports = {
  name: "getroles",
  execute(msg) {
    const args = msg.content.split(" ").slice(1);
    var roles = args.join(" ");
    if (!roles) msg.reply('Write the roles. If you don\'t know what is the roles, type \'!getroles help\'.');
    switch(roles) {
      case 'help' :
        msg.channel.send('```roles : basic | intermediate | advanced | delete || You type !getroles (rolename)```')
        break;
      case 'basic' :
        msg.member.roles.add("1009659511717494854");
        msg.reply("설정 완료!");
        break;
      case 'intermediate' :
        msg.member.roles.add('1011077927925989426');
        msg.reply("설정 완료!");
        break;
      case 'advanced' :
        msg.member.roles.add('1011079971088896191');
        msg.reply("설정 완료!");
        break;
      case 'delete' :
        //msg.member.roles.delete(reason='just');
        //delete 함수가 없다고 뜬다. 공식문서로 가자
        break;
    }
  },
};
