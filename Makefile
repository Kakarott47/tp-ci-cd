# Makefile - raccourcis pour les TP du Jour 2 (INF236 - Métier DevOps)
#
# Usage : `make <cible>` depuis ce dossier.
# Tapez simplement `make` ou `make help` pour la liste des cibles.
#
# L'application Node.js se trouve dans le sous-dossier app/.
# Les fichiers d'outillage (Dockerfile, docker-compose.yml, deploy.sh)
# sont à la racine de ce dossier.

APP_DIR    := app
IMAGE_NAME := inf236-tp-app
PORT       := 3000

# La cible par défaut affiche l'aide.
.DEFAULT_GOAL := help

.PHONY: help install test coverage start docker-build docker-run up down logs deploy clean

help: ## Affiche cette aide
	@echo "Cibles disponibles :"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

# --- TP1 : intégration continue (build + tests) ---
install: ## Installe les dépendances de l'application
	cd $(APP_DIR) && npm install

test: ## Lance la suite de tests (Jest)
	cd $(APP_DIR) && npm test

coverage: ## Lance les tests avec rapport de couverture
	cd $(APP_DIR) && npm run test:coverage

start: ## Démarre l'application en local (port 3000)
	cd $(APP_DIR) && npm start

# --- TP2 : déploiement ---
deploy: ## Exécute le script de déploiement (TP2)
	./deploy.sh

# --- TP3 : conteneur Docker ---
docker-build: ## Construit l'image Docker (TP3)
	docker build -t $(IMAGE_NAME) .

docker-run: ## Lance un conteneur à partir de l'image (TP3)
	docker run --rm -p $(PORT):$(PORT) $(IMAGE_NAME)

# --- TP4 : stack multi-conteneurs ---
up: ## Démarre la stack app + base de données (TP4)
	docker compose up -d --build

down: ## Arrête et supprime la stack (TP4)
	docker compose down

logs: ## Affiche les logs de la stack en continu (TP4)
	docker compose logs -f

# --- Entretien ---
clean: ## Supprime node_modules et les rapports de couverture
	rm -rf $(APP_DIR)/node_modules $(APP_DIR)/coverage
