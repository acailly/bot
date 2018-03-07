# BOT

# C'est quoi ?

BOT est une interface en ligne de commande permettant de lancer des commandes de nature diverse.

L'ajout de commande est possible en copiant simplement le code d'une commande dans le répertoire `commands`.

# Getting started

## Pré-requis

Installer Git : https://git-scm.com/downloads

Installer node : https://github.com/coreybutler/nvm-windows

Installer Yarn : https://yarnpkg.com/lang/en/docs/install/

## Premier lancement

Clonez ce repository : `git clone git@bitbucket.org:acailly/bot.git`

Allez dans le dossier `bot` : `cd bot`

Exécutez yarn pour récupérer les dépendances : `yarn`

Lancez le bot pour vérifier que ca marche : `yarn start`

Une fois le bot démarré, tapez `help` pour afficher la liste des commandes disponibles.

Pour l'instant aucune commande n'est disponible.

## Ajout d'une commande

Créer un dossier `commands`

Allez dans ce dossier : `cd commands`

Récupérer le code de la commande `say` : `git clone git@bitbucket.org:acailly/command-say.git`

Revenez dans le dossier parent : `cd ..`

Lancez le bot pour vérifier que ca marche : `yarn start`

Une fois le bot démarré, tapez `help` pour afficher la liste des commandes disponibles.

La commande `say` est apparue.

Tapez `say hello` pour que le bot réponde `hello`

# Configuration

Certaines commandes ont besoin d'être configurées.

Pour cela, créer un fichier `config.yaml` à côté de ce README et reportez vous à la documentation de chaque commande pour le remplir.

# Commandes

Les commandes disponibles sont :

* `say` : fait dire quelque chose au bot (https://github.com/acailly/bot-say)
* `epguides` : récupère les infos des séries TV (https://github.com/acailly/bot-epguides)
* `github-trends` : liste les projets tendance sur github (https://github.com/acailly/bot-github-trends)
* `remove-proxy` : supprime le proxy ! (https://github.com/acailly/bot-remove-proxy)
* `schedule` : Planifie l'exécution de commandes (https://github.com/acailly/bot-schedule)
