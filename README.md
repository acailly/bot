# BOT

# What is it ?

It is a simple CLI for running commands.

To add a command, you just have to copy its code in the `commands` folder.

# Getting started

## Prerequisite

Install Git : https://git-scm.com/downloads

Install Node : https://github.com/coreybutler/nvm-windows

Install Yarn : https://yarnpkg.com/lang/en/docs/install/

## First run

Clone this repo : `git clone git@github.com:acailly/bot.git`

Got to folder `bot` : `cd bot`

Run Yarn to download dependencies : `yarn`

Run the bot to check it works : `yarn start`

Once the bot started, type `help` to show available commands.

For the moment no command is available.

## Add a command - easy way

Run the bot and type the command `add https://insert_the_command_repo_url`

## Add a command - normal way

Create the folder `commands`

Go in this folder : `cd commands`

Clone the code of the `say` command : `git clone git@github.com:acailly/bot-say.git`

Go back in the parent folder : `cd ..`

Run the bot to check it works : `yarn start`

Once the bot started, type `help` to show available commands.

The command `say` has appeared \o/.

Type `say hello` and the bot say `hello`

# Configuration

Some commands needs parameters.

To set these parameters, create a file named `config.yaml` in the same folder of the `LICENSE` file.

See each command documentation to know what to write in this file.

# Commands

Available commands are:

* `say` : Make the bot say something (https://github.com/acailly/bot-say)
* `epguides` : Ask the bot about your favorite TV show (https://github.com/acailly/bot-epguides)
* `github-trends` : Ask the bot about trending projects on github (https://github.com/acailly/bot-github-trends)
* `remove-proxy` : Remove the proxy! (https://github.com/acailly/bot-remove-proxy)
* `schedule` : Schedule commands (https://github.com/acailly/bot-schedule)
* `slack-links` : Retrieve links posted on slack in the channel you are in (https://github.com/acailly/bot-slack-links)
* `bitbucket` : List open pull requests on BitBucket (https://github.com/acailly/bot-bitbucket)
* `jenkins` : Monitor Jenkins jobs (https://github.com/acailly/bot-jenkins)
* `bitcoin` : Get bitcoin price (https://github.com/acailly/bot-bitcoin)
* `pomodoro` : Start a pomodoro (https://github.com/acailly/bot-pomodoro)
* `default-browser` : Change the default browser (https://github.com/acailly/bot-default-browser)

If you create some interesting command, please tell me or make a PR ;-)
