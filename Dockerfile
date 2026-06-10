# Dockerfile de l'application (TP3) - SQUELETTE A COMPLETER.
#
# Objectif : conteneuriser l'API Node.js.
#   - partir d'une image legere node:20-alpine ;
#   - installer les dependances ;
#   - copier le code source ;
#   - exposer le port 3000 ;
#   - definir la commande de demarrage.
#
# Bonus recommande : construction multi-etapes (une etape pour les
# dependances, une etape finale legere).
#
# Completez les sections marquees TODO.

# TODO 1 : choisir l'image de base.
#   Indice : FROM node:20-alpine

# TODO 2 : definir le repertoire de travail.
#   Indice : WORKDIR /app

# TODO 3 : copier package.json et package-lock.json puis installer
#          les dependances (profitez du cache Docker).
#   Indice : COPY app/package*.json ./   puis   RUN npm ci --omit=dev

# TODO 4 : copier le reste du code source de l'application.
#   Indice : COPY app/ ./

# TODO 5 : documenter le port expose.
#   Indice : EXPOSE 3000

# TODO 6 : definir la commande de demarrage du conteneur.
#   Indice : CMD ["node", "server.js"]
