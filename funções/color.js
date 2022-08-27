/*
Deixe os Creditos to de olho. 🤨🧐
*/

const chalk = require("chalk")

const color = (text, color) => {
return !color ? chalk.blueBright(text) : chalk.keyword(color)(text)}

module.exports = { color }