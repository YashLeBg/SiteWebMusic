# 🎵 Site de Promotion d'un EP

### 👨‍💻 Développeur

- [Anli-Yach Mohamed](https://github.com/YashLeBg)

## 📌 Description
Ce projet est un site web conçu pour promouvoir un EP musical. Il permet aux auditeurs d'écouter les morceaux de l'artiste et de visionner un clip d'introduction. L'accès au site est restreint par un code, qui peut être modifié par l'administrateur.

## ⚙️ Fonctionnalités
- Page de connexion avec un code d'accès.
- Lecture du clip d'intro avant d'accéder au contenu.
- Présentation des EPs de l'artiste avec écoute en streaming.
- Interface administrateur permettant de modifier le code d'accès.
- Site responsive, compatible desktop et mobile.

## 🛠️ Technologies utilisées
- **ReactJS** : Framework pour le développement de l'interface utilisateur.
- **Vite** : Outil de build rapide.
- **Tailwind CSS** : Framework CSS pour un design fluide et moderne.
- **TypeScript** : Langage utilisé pour une meilleure gestion du typage.
- **Visual Studio Code** : IDE utilisé pour le développement.

## 🚀 Installation et exécution
1. **Cloner le dépôt**
   ```sh
   git clone https://github.com/YashLeBg/SiteWebMusic.git
   cd SiteWebMusic
   ```
2. **Installer les dépendances**
   ```sh
   npm install
   ```
3. **Lancer le projet en mode développement**
   ```sh
   npm run dev
   ```

## 📂 Structure du projet
```
📦 votre-projet
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Login.tsx
 ┃ ┃ ┣ 📜 Admin.tsx
 ┃ ┃ ┣ 📜 Home.tsx
 ┃ ┃ ┣ 📜 EP.tsx
 ┃ ┃ ┗ 📜 Player.tsx
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 main.tsx
 ┗ 📜 package.json
```

## 🔥 Défis rencontrés
- Implémentation de l'accès sécurisé avec un code dynamique.
- Apprentissage et intégration de Tailwind CSS pour un design responsive.
- Gestion de l’état global pour synchroniser le code d’accès entre les composants.

## 📌 Améliorations futures
- Ajout d'un système d'authentification plus sécurisé.
- Optimisation des performances pour une meilleure expérience utilisateur.

## 📝 Licence
Projet réalisé dans le cadre d'un stage de développement web.
