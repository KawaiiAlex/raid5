
const config = require('../../config.json');
const Discord = require("discord.js")
exports.run = (client, message, args) => {

    try {

  function getpollinfo() {

      if(message.channel.type != "text") return message.reply("No.");

      //if(message.guild.roles.find("name", "startPollPerm")) { //Check if role is in the guild
      //if(!message.member.roles.exists("name", "startPollPerm")) return message.channel.send("You do not have permission to start a poll!") //Check if the author has the role
      //}

      //console.log(message.member.roles.get("name", "Creator"));
      var timeasd;

      var pollstuff;

      var timeresultkek;

      var isTimed = true;

      requestStop = false;


      
      message.channel.send("De quoi va parler du sondage ?");

      const filter = m => m.author.id === message.author.id;

      message.channel.awaitMessages(filter, { max: 1, time: 5000000, errors: ['time'] })
       .then(collected => {
       pollstuff = collected.map(u => u.content).toString()})


      message.channel.awaitMessages(filter, { max: 1, time: 5000000, errors: ['time'] }).then(collected => {

      message.channel.send("Combien de temp va durer le sondage ?")}).then(collected => {


      message.channel.awaitMessages(filter, { max: 1, time: 5000000, errors: ['time'] }).then(collected => {

      timeresultkek = collected.map(u => u.content).toString()}).then(collected => { //Content of time

      var str = timeresultkek;
      var m = str.search(/m/i)
      var h = str.search(/h/i)
      var s = str.search(/s/i)
      var d = str.search(/d/i)

      //variablessss
      var fixedvaluesec;
      var fixedvalueh;
      var fixedvaluem;
      var fixedvalued;
      var reelfixedvaluekeksec;
      var reelfixedvaluekekh;
      var reelfixedvaluekekm;
      var reelfixedvaluekekd;

      if(timeresultkek == "0") {
          isTimed = false;
      }

      if(d != "-1" && isTimed == true) { //edited kek

          fixedvalued = timeresultkek.replace("d", "");

          reelfixedvaluekekd = fixedvalued * 86400000; //1 day


      message.channel.send(pollstuff).then(messageToReact => {
        
       var idk = messageToReact.react("👍").catch(err => message.channel.send((err))).then(msg => { //todo: custom emojis?!



          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👍',
               { time: reelfixedvaluekekd } //todo: make custom time? already did o3o
           );
           collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
           collector.on('end', collected => {

               var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

               console.log("Collected " + realnumberrr + " votes for thumbs up");

               if(realnumberrr >= "10000000") { //thumbs up

                   message.channel.send("Resultats:");
                   message.channel.send("Oui: " + realnumberrr);

               }
               message.channel.send("Resultats:");
               message.channel.send("Oui: " + realnumberrr);

           })
       }).then(collected => {

       var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

          fixedvalued = timeresultkek.replace("d", "");

          reelfixedvaluekekd = fixedvalued * 86400000; //1 day

          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👎',
               { time: reelfixedvaluekekd } //todo: make custom time? already did o3o
           );

           collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




           collector.on('end', collected => {

               var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

               console.log("Collected " + realnumberrrr + " votes for thumbs down");


               message.channel.send("Non: " + realnumberrrr);

           })
       })
      })
       }).catch(err => console.log((err)));
      }

      if(m != "-1" && isTimed == true) { //edited kek
          console.log("got minutes");

          fixedvaluem = timeresultkek.replace("m", "");

          reelfixedvaluekekm = fixedvaluem * 60000;

          console.log("Created a poll with a time of " + reelfixedvaluekekm + " minutes!");


      message.channel.send(pollstuff).then(messageToReact => {

       var idk = messageToReact.react("👍").catch(err => message.channel.send((err))).then(msg => { //todo: custom emojis?!



          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👍',
               { time: reelfixedvaluekekm } //todo: make custom time? already did o3o
           );
           collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
           collector.on('end', collected => {

               var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

               console.log("Collected " + realnumberrr + " votes for thumbs up");

               if(realnumberrr >= config.rvotes) { //thumbs up

                   message.channel.send("Resultats:");
                   message.channel.send("𝑶𝒖𝒊: " + realnumberrr);

               }
               message.channel.send("Resultats:");
               message.channel.send("Oui: " + realnumberrr);

           })
       }).then(collected => {

       var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

          fixedvaluem = timeresultkek.replace("m", "");

          reelfixedvaluekekm = fixedvaluem * 60000;

          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👎',
               { time: reelfixedvaluekekm } //todo: make custom time? already did o3o
           );

           collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




           collector.on('end', collected => {

               var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

               console.log("Collected " + realnumberrrr + " votes for thumbs down");


               message.channel.send("𝑵𝒐𝒏: " + realnumberrrr);

           })
       })
      })
       }).catch(err => console.log((err)));
      }
      else if(h != "-1" && isTimed == true) {

          //console.log("got hours");

          fixedvalueh = timeresultkek.replace("h", "");

          reelfixedvaluekekh = fixedvalueh * 3600000;

          console.log("Created a poll with a time of " + reelfixedvaluekekh + " minutes!");


      message.channel.send(pollstuff).then(messageToReact => {

       var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!



          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👍',
               { time: reelfixedvaluekekh } //todo: make custom time? already did o3o
           );
           collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
           collector.on('end', collected => {

               var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

               console.log("Collected " + realnumberrr + " votes for thumbs up");

               //if(realnumberrr >= config.rvotes) { //thumbs up

                   message.channel.send("Resultats:");
                   message.channel.send("Oui: " + realnumberrr);

               //}
               message.channel.send("Resultats:");
               message.channel.send("Oui: " + realnumberrr);

           })
       }).then(collected => {

       var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

          fixedvalueh = timeresultkek.replace("h", "");

          reelfixedvaluekekh = fixedvalueh * 3600000;

          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👎',
               { time: reelfixedvaluekekh } //todo: make custom time? already did o3o
           );

           collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




           collector.on('end', collected => {

               var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

               console.log("Collected " + realnumberrrr + " votes for thumbs down");


               message.channel.send("Non: " + realnumberrrr);

           })
       })
      })
       }).catch(err => console.log((err)));
      }








      else if(s != "-1" && isTimed == true) { //original lOLE

          //console.log("got seconds");

          fixedvaluesec = timeresultkek.replace("s", "");

          reelfixedvaluekeksec = fixedvaluesec * 1000;

          console.log("Created a poll with a time of " + reelfixedvaluekeksec + " minutes!");

      message.channel.send(pollstuff).then(messageToReact => {

       var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!



          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👍',
               { time: reelfixedvaluekeksec } //todo: make custom time? already did o3o
           );
           collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
           collector.on('end', collected => {

               var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

               console.log("Collected " + realnumberrr + " votes for thumbs up");

               if(realnumberrr >= config.rvotes) { //thumbs up

                   message.channel.send("Resultats:");
                   message.channel.send("Oui: " + realnumberrr);

               }
               message.channel.send("Resultats:");
               message.channel.send("Oui: " + realnumberrr);

           })
       }).then(collected => {

       var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

          fixedvaluesec = timeresultkek.replace("s", "");

          reelfixedvaluekeksec = fixedvaluesec * 1000;

          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👎',
               { time: reelfixedvaluekeksec } //todo: make custom time? already did o3o
           );

           collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




           collector.on('end', collected => {

               var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

               console.log("Collected " + realnumberrrr + " votes for thumbs down");


               message.channel.send("Non: " + realnumberrrr);

           })
       })
      })
       }).catch(err => console.log((err)));
      }



      //untimed stuff kek

      if(isTimed == false) { //original lOLE

      console.log("Poll created WITHOUT any time!");

      message.channel.send(pollstuff).then(messageToReact => {

       var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!



          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👍',
               { } //todo: make custom time? already did o3o
           );
           collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));

           //checkIfrequestStop();


           //check if stop is called lol
           function checkIfrequestStoplol(callback) {
              if(requestStop == true) {
                  collector.stop();
                  //console.log("Collector stopped!");
                  clearInterval(intervalID);
              } else {
                  //console.log("Still running :U");
              }
          }

           if(requestStop == false) {
           var intervalID = setInterval(checkIfrequestStoplol, 1000);
           //console.log("ok");
           }


           collector.on('end', collected => {

               var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

               console.log("Collected " + realnumberrr + " votes for thumbs up");

               message.channel.send("Resultats:");
               message.channel.send("Oui: " + realnumberrr);

           })
       }).then(collected => {

       var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

          const collector = messageToReact.createReactionCollector(
               (reaction) => reaction.emoji.name === '👎',
               { } //todo: make custom time? already did o3o
           );

           collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));


           function checkIfrequestStoplol2(callback) {
              if(requestStop == true) {
                  collector.stop();
                  //console.log("Collector stopped!");
                  clearInterval(intervalID2);
              } else {
                  //console.log("Still running");
              }
          }

           if(requestStop == false) {
           var intervalID2 = setInterval(checkIfrequestStoplol2, 3000);
           //console.log("ok");
           }


           collector.on('end', collected => {

               var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

               console.log("Collected " + realnumberrrr + " votes for thumbs down");


               message.channel.send("Non: " + realnumberrrr);

           })
       })
      })
       }).catch(err => console.log((err)));
      }



      else if (m == "-1" && d == "-1" && s == "-1" && h == "-1") {

          message.reply(":x: **|** Format invalide. Utilise `s`, `m`, `h` ou `d`!")
      }



  //ignore these vv

  }).catch(err => console.log((err)));
  }).catch(err => console.log((err)));
  }


  function startVote() {

      message.channel.send(pollstuff).then(messageToReact => {

      var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!

          const collector = messageToReact.createReactionCollector(
              (reaction) => reaction.emoji.name === '👍',
              { time: 5000 } //todo: make custom time?
          );
          collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
          collector.on('end', collected => {

              var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

              console.log("Collected " + realnumberrr + " votes pour oui");

              if(realnumberrr >= config.rvotes) { //thumbs up

                  message.channel.send("Resultats:");
                  message.channel.send("Oui: " + realnumberrr);

              }
              message.channel.send("Resultats:");
              message.channel.send("Oui: " + realnumberrr);

          })
      })

      var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

          const collector = messageToReact.createReactionCollector(
              (reaction) => reaction.emoji.name === '👎',
              { time: 5000 } //todo: make custom time?
          );
          collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));
          collector.on('end', collected => {

              var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

              console.log("Collected " + realnumberrrr + " votes for thumbs down");

              if(realnumberrrr >= config.rvotes) { //thumbs up
                  //message.channel.send("Success! Got required votes!");
                  message.channel.send("Non: " + realnumberrrr);
              }

              message.channel.send("Non: " + realnumberrrr);

              message.channel.fetchMessages({limit: 5}) .then(messages => {
              messages.filter(author => {

              console.log("got messages!");
              message.channel.send("got msgs");
              //console.log(messages);
          })
      })
              //message.channel.send("Results:\nYes: " + realnumberrr + "\nNo: " + realnumberrrr);

          })
      })



      //message.channel.send("Results:\nYes: " + realnumberrr + "\nNo: " + realnumberrrr);
      });
  }





     message.channel.send(getpollinfo())
      //startVote();

    } catch(err) {
        console.error(err)
        return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste')
      };


  } //finish command

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'pollc',
    description: 'Faîtes des sondages avec pour réponses ``oui`` ou ``non``',
    usage: 'pollc\nEnsuite vous aurez juste a suivre les étapes\n**Faîtes bien attention**, pour le temp il faut mettre une durée (ex: 1s/m/h/d)'
  };
