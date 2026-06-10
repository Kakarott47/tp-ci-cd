# Starter : a vous de jouer

Ce dossier est votre point de depart pour les quatre TP du Jour 2.
L'application (`app/`) est **deja ecrite et fonctionnelle** : votre travail
consiste a construire l'outillage DevOps autour d'elle.

## Verifier que l'application fonctionne

Avant de commencer, assurez-vous que tout est en place :

```bash
cd app
npm install
npm test
```

Les tests doivent passer. Vous pouvez aussi lancer l'API :

```bash
npm start
curl http://localhost:3000/health
```

## Fichiers a completer, TP par TP

Chaque fichier ci-dessous contient des commentaires `TODO` qui decrivent
precisement ce que vous devez ecrire.

| TP  | Fichier(s) a completer                        | Objectif                                        |
|-----|-----------------------------------------------|-------------------------------------------------|
| TP1 | `.github/workflows/ci.yml`                    | Pipeline CI GitHub Actions (build + tests)      |
| TP1 | `.gitlab-ci.yml`                              | Variante GitLab CI                              |
| TP1 | `Jenkinsfile`                                 | Variante Jenkins (pipeline declaratif)         |
| TP2 | `deploy.sh`                                   | Script de deploiement idempotent avec rollback |
| TP3 | `Dockerfile`                                  | Conteneuriser l'application                     |
| TP4 | `docker-compose.yml`                          | Orchestrer l'application + PostgreSQL          |

## Commandes utiles

```bash
# TP1 : tester localement avant de pousser
cd app && npm ci && npm test

# TP2 : rendre le script executable puis le lancer
chmod +x deploy.sh
./deploy.sh

# TP3 : construire et lancer l'image
docker build -t inf236-tp-app .
docker run -p 3000:3000 inf236-tp-app

# TP4 : lancer la stack complete
docker compose up --build
```

Bon courage. En cas de blocage, relisez les commentaires `TODO` :
ils contiennent des indices.
