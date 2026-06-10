#!/usr/bin/env bash
#
# Script de deploiement idempotent (TP2) - SQUELETTE A COMPLETER.
#
# Objectif : ecrire un script bash robuste qui :
#   1. sauvegarde l'etat courant de l'application (backup) ;
#   2. installe les dependances (build) ;
#   3. redemarre l'application (restart) ;
#   4. verifie sa sante via la route /health (health check) ;
#   5. revient automatiquement a l'etat precedent en cas d'echec (rollback).
#
# Idempotence attendue : relancer le script plusieurs fois doit donner
# le meme resultat, sans effet de bord.
#
# Completez les sections marquees TODO.

# TODO 1 : activer les options de robustesse de bash.
#   Indice : set -euo pipefail
#     -e         : arret a la premiere erreur
#     -u         : erreur sur variable non definie
#     -o pipefail : propagation des erreurs dans les pipes

# -----------------------------------------------------------------------------
# Configuration
# -----------------------------------------------------------------------------

# TODO 2 : definir les variables de configuration, par exemple :
#   - SCRIPT_DIR  : dossier contenant ce script
#   - APP_DIR     : dossier de l'application (app/)
#   - BACKUP_DIR  : dossier des sauvegardes
#   - PORT        : port de l'application (defaut 3000)
#   - HEALTH_URL  : http://localhost:${PORT}/health
#   - PID_FILE    : fichier stockant le PID du serveur

# -----------------------------------------------------------------------------
# Fonctions
# -----------------------------------------------------------------------------

# TODO 3 : ecrire une fonction rollback() qui restaure la derniere sauvegarde,
#          puis l'associer au signal ERR avec "trap rollback ERR".

# TODO 4 : ecrire la fonction backup()
#          (creer le dossier de sauvegarde et copier app/).

# TODO 5 : ecrire la fonction build()
#          (se placer dans app/ et lancer "npm ci").

# TODO 6 : ecrire la fonction restart()
#          (arreter l'ancien processus puis demarrer "node server.js").

# TODO 7 : ecrire la fonction health_check()
#          (interroger HEALTH_URL plusieurs fois avec curl, echouer apres N essais).

# -----------------------------------------------------------------------------
# Programme principal
# -----------------------------------------------------------------------------

# TODO 8 : enchainer backup, build, restart, health_check dans l'ordre.

echo "TODO : implementer le script de deploiement."
