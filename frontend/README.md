### Kasa - Application de location immobilière
Kasa est une application web développée dans le cadre de la formation Testeur Logiciel d'OpenClassrooms. Elle permet de consulter une liste de logements avec des détails interactifs (composant Collapse, carrousel d'images) et une navigation fluide via React Router. Le projet inclut des tests unitaires pour garantir la qualité.


### Fonctionnalités

- Affichage d'une liste de logements depuis une API.
- Navigation entre les pages (Accueil, À propos, Fiche Logement) via React Router.
- Composants : `Layout` (structure principale), `Collapse` (afficher/masquer descriptions et équipements), `Gallery` (carrousel d'images), `Card` (cartes cliquables), `Banner`.
- Hook personnalisé pour accéder aux données.
- Tests unitaires pour valider le comportement des composants.

### Technologies

- Front-end : React 19, React Router, Vite
- Tests : Vitest, React Testing Library, Jest-DOM, Coverage
- Back-end : Node.js, API REST
- Conteneurisation : Docker
- Linter : ESLint

### Prérequis

Node.js (version 18 ou supérieure)
Docker (pour lancer l'API)
npm ou yarn

### Installation


### Lancer le back-end avec Docker :
```bash
docker-compose up -d
```

### Lancer le front-end
```bash
cd frontend
npm install
npm run dev
```

### Test
```bash
npm run test
npm run coverage
```


### Tests implémentés

Composant Collapse

- État initial : contenu caché.
- Ouverture/fermeture via clic.
- Affichage de contenu complexe (listes).
- Changement de classe CSS pour l'icône.
- Cas limites : titre vide, contenu null/undefined, props manquantes, clics multiples.
- Accessibilité : navigation clavier (Enter/Space), attribut aria-expanded, rôle button focusable.

Composant Card

- Vérification du titre, image et lien corrects.
- Fallback avec le logo Kasa si pas d'image.
- Gestion d'un titre manquant.
- Gestion d'un ID manquant.
- Navigation au clavier (touche Enter).
- Vérification de la classe card.

### Configuration

Le frontend utilise Vite comme bundler avec une configuration pour les tests et la couverture.

- vite.config.js : Configure Vite pour l'environnement de test avec jsdom et active la couverture pour tous les fichiers JavaScript/React.

- setupTests.js : Configure Jest-DOM pour des assertions personnalisées dans les tests.

Ces fichiers se trouvent dans frontend/ et frontend/src/, respectivement. Ils garantissent que les tests s'exécutent dans un environnement simulé (jsdom) avec des assertions claires et une couverture complète.


### Structure du projet

- frontend/ : Application React

src/components/ : Composants (Card.jsx, Collapse.jsx, Gallery.jsx, Layout.jsx, Banner.jsx)

src/tests/ : Tests unitaires (Card.test.jsx, Collapse.test.jsx)

src/assets/ : Ressources statiques (LOGO_Kasa.png)


- backend/ : API Node.js pour les données des logements

vite.config.js : Configuration Vite avec tests et couverture

setupTests.js : Configuration Jest-DOM

### Dépendances principales

Frontend : react, react-dom, react-router-dom, @fortawesome/react-fontawesome

Tests : vitest, @testing-library/react, @testing-library/jest-dom, jsdom

### Contributeurs

Kaorilan

#### Licence
MIT License © 2025 Kaorilan