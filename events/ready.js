const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json')
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  
  client.user.setActivity(`//help pour les commandes du bot`, {type: "LISTENING"});
  

};
