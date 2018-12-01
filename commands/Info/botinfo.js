const Discord = require('discord.js');
const moment = require ("moment")
var os = require('os');
exports.run = (client, message) => {

  try{

  let ms = client.uptime;
  let cd = 24 * 60 * 60 * 1000; // Calc days
  let ch = 60 * 60 * 1000; // Calc hours
  let cm = 60 * 1000; // Calc minutes
  let cs = 1000; // Calc seconds
  let days = Math.floor(ms / cd);
  let dms = days * cd; // Days, in ms
  let hours = Math.floor((ms - dms) / ch);
  let hms = hours * ch; // Hours, in ms
  let minutes = Math.floor((ms - dms - hms) / cm);
  let mms = minutes * cm; // Minutes, in ms
  let seconds = Math.round((ms - dms - hms - mms) / cs);
  if (seconds === 60) {
     minutes++; // Increase by 1
     seconds = 0;
  }
  if (minutes === 60) {
     hours++; // Inc by 1
     minutes = 0;
  }
  if (hours === 24) {
     days++; // Increase by 1
     hours = 0;
  }
  let dateStrings = [];

  if (days === 1) {
     dateStrings.push('**1** jour');
  } else if (days > 1) {
     dateStrings.push('**' + String(days) + '** jours');
  }

  if (hours === 1) {
     dateStrings.push('**1** heure' );
  } else if (hours > 1) {
     dateStrings.push('**' + String(hours) + '** heures');
  }

  if (minutes === 1) {
     dateStrings.push('**1** minute');
  } else if (minutes > 1) {
     dateStrings.push('**' + String(minutes) + '** minutes');
  }

  if (seconds === 1) {
     dateStrings.push('**1** seconde');
  } else if (seconds > 1) {
     dateStrings.push('**' + String(seconds) + '** secondes');
  }

  let dateString = '';
  for (let i = 0; i < dateStrings.length - 1; i++) {
     dateString += dateStrings[i];
     dateString += ', ';
  }
  if (dateStrings.length >= 2) {
     dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
     dateString += 'et ';
  }

  dateString += dateStrings[dateStrings.length - 1];
      let bicon = client.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setTitle("Information sur le bot")
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setThumbnail(bicon)
      .addField("Nom du bot", client.user.username, false)  
      .addField ("ID du bot ", client.user.id,false )
      .addField("Bot créé le",`${moment.utc(client.user.createdAt).format("D/M/Y, HH:mm:ss")}`, false )
      .addField ('Utilisation mémoire' , `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB`, false)
      .addField('Le bot est allumé depuis :', dateString, false )
      .addField ('Librairie', 'Discord.js', false)
      .addField ("Serveurs", client.guilds.size, false)
      .addField ("Utilisateurs", client.users.size, false)
  	  .addField ("Langage", "JavaScript", false)
      .addField("Ajouter mon bot", "Tu peux ajouter mon bot en cliquant [ici](https://discordapp.com/api/oauth2/authorize?client_id=518468199835107340&permissions=8&scope=bot)", false)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(botembed);
} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
};
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bi'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botinfo',
    description: 'Vous donne les infos du bot.',
    usage: 'botinfo'
  };
