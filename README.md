# Gestion de tâches

Application de gestion de tâches développée avec Vue 3, Vite et Tauri 2.

Cette application permet de créer, consulter, rechercher, filtrer, terminer et supprimer des tâches à partir d'une interface simple et moderne.

## Fonctionnalités

- Affichage de la liste des tâches
- Ajout d'une nouvelle tâche
- Consultation des détails d'une tâche
- Modification du statut d'une tâche
- Suppression d'une tâche
- Recherche par titre ou description
- Filtrage des tâches par statut
- Tableau de bord avec statistiques
- Messages de confirmation
- Interface responsive
- Application desktop avec Tauri 2

## Technologies utilisées

- Vue 3
- Vue Router
- Vite
- JavaScript
- CSS
- Tauri 2
- Rust
- Git
- GitHub

## Structure du projet

```text
gestion-taches/
├── src/
│   ├── components/
│   │   └── TacheCard.vue
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── services/
│   │   └── tachesService.js
│   │
│   ├── views/
│   │   ├── AccueilView.vue
│   │   ├── NouvelleTacheView.vue
│   │   ├── TacheDetailView.vue
│   │   └── TachesView.vue
│   │
│   ├── App.vue
│   ├── main.js
│   └── style.css
│
├── src-tauri/
├── package.json
├── vite.config.js
└── README.md
```

## Installation

Installer les dépendances :

```bash
npm install
```

## Lancer la version Web

```bash
npm run dev
```

L'application est ensuite accessible avec le serveur de développement Vite.

## Lancer la version Desktop

Tauri et Rust doivent être installés.

```bash
npx tauri dev
```

Cette commande démarre le frontend Vue et ouvre l'application dans une fenêtre desktop Tauri.

## Construire le projet

Pour créer le build du frontend :

```bash
npm run build
```

Pour construire l'application desktop :

```bash
npx tauri build
```

## Architecture

L'application est organisée en plusieurs parties :

- **components** : composants Vue réutilisables.
- **views** : différentes pages de l'application.
- **router** : gestion de la navigation avec Vue Router.
- **services** : logique de gestion des tâches.
- **src-tauri** : configuration et code de l'application desktop Tauri.

## Auteurs

Projet réalisé par :

- Nerkesly Duvers
- Abé Tchombé, Bruno Dimitri

## Projet scolaire

Application réalisée dans le cadre d'un projet scolaire de développement frontend.
