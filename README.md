# AYA Website Login Project

## Description

Ce projet est une petite application web de connexion et d'inscription pour le site d'AYA. Il comporte trois pages principales :

- `index.html` : page de connexion
- `login.html` : page d'inscription
- `welcome.html` : page de bienvenue après connexion ou inscription

La gestion des utilisateurs se fait localement dans le navigateur avec `localStorage`.

## Fonctionnalités

- Formulaire d'inscription avec nom, email et mot de passe
- Formulaire de connexion avec email et mot de passe
- Redirection automatique vers la page d'inscription si l'utilisateur n'existe pas
- Redirection vers une page de bienvenue après connexion ou inscription
- Message de bienvenue personnalisé avec le nom de l'utilisateur
- Déconnexion depuis la page de bienvenue
- Design responsive et interface stylée pour toutes les pages

## Fichiers principaux

- `index.html` : page de connexion
- `login.html` : page d'inscription
- `welcome.html` : page de bienvenue après connexion
- `index.js` : logique JavaScript pour connexion, inscription, redirection et authentification
- `index.css` : styles pour la page d'inscription
- `login.css` : styles pour la page de connexion
- `welcome.css` : styles pour la page de bienvenue

## Comment utiliser

1. Ouvrir `index.html` dans un navigateur.
2. Si vous avez déjà un compte, connectez-vous avec votre email et votre mot de passe.
3. Si vous n'avez pas de compte, cliquez sur "Créer un compte" pour aller sur `login.html`.
4. Après inscription, vous serez redirigé vers `welcome.html`.
5. Depuis la page de bienvenue, vous pouvez vous déconnecter pour revenir à la page de connexion.

## Notes

- Les données sont stockées en local, donc elles ne sont pas partagées entre les navigateurs.
- Ce projet est conçu pour un prototype ou une démo front-end, et non pas comme une solution de production sécurisée.
