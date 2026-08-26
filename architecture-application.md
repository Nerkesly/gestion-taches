# Architecture de l'application

## 1. Présentation

Gestion de tâches est une application développée avec Vue 3, Vite et Tauri 2.

L'application permet à un utilisateur de consulter, ajouter, rechercher, filtrer, terminer et supprimer des tâches. Elle peut être utilisée dans le navigateur ainsi que sous forme d'application desktop avec Tauri.

## 2. Structure de l'application

L'application est organisée de la façon suivante :

### `src/components`

Contient les composants Vue réutilisables.

- `TacheCard.vue` : affiche les informations d'une tâche et permet d'effectuer certaines actions sur celle-ci.

### `src/views`

Contient les différentes pages de l'application.

- `AccueilView.vue` : affiche le tableau de bord et les statistiques des tâches.
- `TachesView.vue` : affiche la liste des tâches, la recherche et les filtres.
- `NouvelleTacheView.vue` : permet de créer une nouvelle tâche.
- `TacheDetailView.vue` : affiche les informations détaillées d'une tâche.

### `src/router`

Contient la configuration de Vue Router.

- `index.js` : définit les routes permettant de naviguer entre les différentes pages.

### `src/services`

Contient la logique de gestion des données.

- `tachesService.js` : permet d'obtenir, ajouter, terminer et supprimer les tâches.

### `src-tauri`

Contient la configuration et le code nécessaires pour exécuter l'application Vue comme une application desktop avec Tauri 2.

## 3. Navigation

Vue Router assure la navigation entre les différentes vues de l'application.

Les principales pages sont :

- Accueil
- Mes tâches
- Nouvelle tâche
- Détails d'une tâche

## 4. Gestion des tâches

Les données des tâches sont gérées par `tachesService.js`.

Les vues utilisent ce service pour effectuer les opérations nécessaires sur les tâches. Cette organisation permet de séparer la logique de gestion des données de l'interface utilisateur.

## 5. Composants

Le composant `TacheCard.vue` est utilisé dans la liste des tâches afin d'éviter de répéter le même code pour chaque tâche.

Il reçoit une tâche et permet à la vue principale de réagir aux actions de l'utilisateur.

## 6. Technologies

- Vue 3 : interface utilisateur
- Vue Router : navigation
- Vite : environnement de développement et build
- JavaScript : logique de l'application
- CSS : mise en forme de l'interface
- Tauri 2 : application desktop
- Rust : environnement utilisé par Tauri
- Git et GitHub : gestion des versions et collaboration

## 7. Architecture générale

L'application suit une séparation simple des responsabilités :

Utilisateur
→ Vues Vue
→ Composants
→ Service de tâches
→ Données

Vue Router permet de naviguer entre les différentes vues, tandis que Tauri encapsule l'application frontend afin de permettre son exécution comme application desktop.
