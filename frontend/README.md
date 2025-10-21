# Kasa - Application de location immobilière

Application web développée dans le cadre de la formation Testeur Logiciel d'OpenClassrooms. Kasa permet de consulter une liste de logements avec des détails interactifs (composant Collapse) et une navigation fluide grâce à React Router.

## Technologies
- **Front-end** : React 19, React Router, Vite
- **Tests** : Vitest, React Testing Library, Jest-DOM
- **Back-end** : Node.js, API REST
- **Conteneurisation** : Docker

## Installation

### Back-end
Avec Docker :
```bash
docker-compose up -d

### Front-end
cd frontend
npm install
npm run dev

### Test
npm run test
npm run coverage


