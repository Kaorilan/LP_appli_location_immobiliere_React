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

État initial : contenu caché.
Ouverture/fermeture via clic.
Affichage de contenu complexe (listes).
Changement de classe CSS pour l'icône.
Cas limites : titre vide, contenu null/undefined, props manquantes, clics multiples.
Accessibilité : navigation clavier (Enter/Space), attribut aria-expanded, rôle button focusable.

Composant Card :

Vérification titre et image et link correct.
Mise en place pour rendre un fallback si pas d'image, mise en place du logo de Kasa par défaut.
Vérification de la gestion d'un titre manquant.
Vérification pour gérer un id manquant.
Vérification de la navigation au clavier (Touche Enter).
Vérification de la classe card s'affiche correctement.


Structure du projet

frontend/ : Contient l'application React (composants, tests, configuration Vite/ESLint).
backend/ : API Node.js pour fournir les données des logements.
src/components/ : Composants React comme Collapse.
src/tests/ : Tests unitaires et d'intégration avec Vitest.

