# Kasa - Application de location immobilière

Kasa est une application web développée dans le cadre de la formation Testeur Logiciel d'OpenClassrooms. Elle permet de consulter une liste de logements avec des détails interactifs (composant Collapse, carrousel d'images) et une navigation fluide via React Router. Le projet inclut des tests unitaires et d'intégration pour garantir la qualité.

## Fonctionnalités
- Affichage d'une liste de logements depuis une API.
- Navigation entre les pages (Accueil, À propos, Fiche Logement) avec React Router.
- Composant `Layout` pour la structure principale, `Collapse` pour afficher/masquer les descriptions et équipements, `Gallery` pour afficher les images dans un carroussel, `Card` et `Banner`.
- un Hook pour accéder aux données.
- Tests unitaires et d'intégration pour valider le comportement des composants.

## Technologies
- **Front-end** : React 19, React Router, Vite
- **Tests** : Vitest, React Testing Library, Jest-DOM, Coverage
- **Back-end** : Node.js, API REST
- **Conteneurisation** : Docker
- **Linter** : ESLint

## Prérequis
- Node.js (version 18 ou supérieure)
- Docker (pour lancer l'API)
- npm ou yarn

## Installation

### Back-end
Avec Docker :
docker-compose up -d

### Front-end
cd frontend
npm install
npm run dev

### Test
npm run test
npm run coverage


### Tests implémentés

Composant Collapse :

État initial (contenu caché).
Ouverture/fermeture via clic.
Affichage de contenu complexe (listes).
Changement de classe CSS pour l'icône.
Cas limites (titre vide, contenu null/undefined, props manquantes, clics multiples).
Accessibilité (navigation clavier (Enter/Space), attribut aria-expanded, rôle button focusable).

Composant Card :

Vérification titre et image et link correct.
Mise en place pour rendre un fallback si pas d'image, mise en place du logo de Kasa par défaut.
Vérification de la gestion d'un titre manquant.
Vérification pour gérer un id manquant.
Vérification de la navigation au clavier (Touche Enter).
Vérification de la classe card s'affiche correctement.


### Configuration
Le frontend utilise Vite comme bundler et inclut une configuration spécifique pour les tests et la couverture.

vite.config.js :
Configure Vite pour l’environnement de test avec jsdom et active la couverture pour tous les fichiers JavaScript/React

setupTests.js :
Configure Jest-DOM pour des assertions personnalisées dans les tests

Ces fichiers se trouvent dans frontend/ et frontend/src/, respectivement. Ils garantissent que les tests s’exécutent dans un environnement simulé (jsdom) avec des assertions claires et une couverture complète.

### Structure du projet

frontend/ : Application React
src/components/ : Composants (Card.jsx, Collapse.jsx, Gallery.jsx, Layout.jsx, Banner.jsx)
src/tests/ : Tests unitaires (Card.test.jsx, Collapse.test.jsx)
src/assets/ : Ressources statiques (LOGO_Kasa.png)


backend/ : API Node.js pour les données des logements
vite.config.js : Configuration Vite avec tests et couverture
setupTests.js : Configuration Jest-DOM

### Dépendances principales

Frontend : react, react-dom, react-router-dom, @fortawesome/react-fontawesome
Tests : vitest, @testing-library/react, @testing-library/jest-dom, jsdom


### Contributeurs:
Kaorilan

### Licence
MIT License © 2025 Kaorilan