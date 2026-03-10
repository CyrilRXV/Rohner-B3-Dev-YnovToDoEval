# YnovToDo
<p align="center">
<img width="80" height="82" alt="logo" src="https://github.com/user-attachments/assets/b0d77863-9d5f-4539-8d17-08daf7e22e60" />
</p>


## 👥 Auteurs
Rohner Cyril
GitHub :https://github.com/CyrilRXV

---
## 📄 Description
YnovToDo est une application desktop de gestion de tâches développée avec Electron + Quasar.
Elle permet d'organiser facilement ses tâches quotidiennes grâce à un système de catégories :

L'objectif est de fournir une application simple, rapide et efficace pour suivre ses tâches et améliorer sa productivité.
Cette application est principalement destinée aux personnes souhaitant organiser leurs tâches quotidiennes

---
## ✅ Fonctionnalités

| Fonctionnalité | Statut |
|---|---|
| Home | ✅ |
| Dashboard | ✅ |
| Création de tâche | ✅ |
| Édition de tâche | ⏳ |
| Suppression de tâche | ⏳ |
| Liste des tâches par catégorie | ✅ |
| Affichage détail tâche | ⏳ |
| Marquer tâche comme faite | ⏳ |
| Mettre en place traduxtion i18n | ⏳ |

---
## 🎨 Conception & Design
Prototype Figma :
https://www.figma.com/design/sOsxWCqX88BV7xgkh7DejV/Todo-App--Community-?node-id=0-1&p=f&t=mh3yx6dir2PqLelF-0

---
## 📐 Architecture & UML (planUML)

Use Case Diagram
```
@startuml
title YnovToDo - Use Case Diagram
left to right direction
actor Utilisateur
rectangle YnovToDo {
    Utilisateur --> (Consulter le Dashboard)
    Utilisateur --> (Voir les tâches du jour)
    Utilisateur --> (Créer une tâche)
    Utilisateur --> (Modifier une tâche)
    Utilisateur --> (Supprimer une tâche)
    Utilisateur --> (Marquer une tâche comme terminée)
    Utilisateur --> (Consulter les tâches par catégorie)
    Utilisateur --> (Modifier une catégorie)
}
@enduml
```
<img width="446" height="730" alt="UseCase" src="https://github.com/user-attachments/assets/a35eeebd-2bba-4b52-bfd2-f25ad2d62c9b" />

Class Diagram 
```
@startuml
title YnovToDo - Class Diagram

class Utilisateur

class Task {
    +id: number
    +name: string
    +date: Date
    +time: string
    +priority: string
    +description: string
    +done: boolean
    +categoryId: number
}

class Category {
    +id: number
    +name: string
    +color: string
}

class TaskStore {
    +tasks: Task[]
    +categories: Category[]
    +useTaskStore()
    +todayTasks()
    +addTask()
    +updateTask()
    +deleteTask()
    +toggleTask()
    +tasksByCategory()
}

Utilisateur --> TaskStore : utilise
TaskStore --> Task : gère
TaskStore --> Category : contient
Task --> Category : appartient à

@enduml
```

<img width="292" height="865" alt="Capture d’écran du 2026-03-10 14-41-15" src="https://github.com/user-attachments/assets/2cdb3754-849b-456c-a7d9-802ed128031a" />

---

## 🛠 Stack Technique

| Technologie | Utilisation |
|---|---|
| Electron | Application Desktop |
| Quasar | Framework UI |
| Vue 3 | Frontend |
| Pinia | State management |
| i18n | Traduction |
| Figma | Design UI |
| VS Code | Développement |

Utilisation Electron avec quasar, car c'est un langague qui ce rapproche le plus au web.

---


## 📸 Démonstration
| Page Home / Login |
<img width="1100" height="722" alt="Home" src="https://github.com/user-attachments/assets/1052e5db-98c4-471a-9ee3-049893b9d42f" />

| Page Dashboard |
<img width="1920" height="978" alt="dashboard" src="https://github.com/user-attachments/assets/b82b128c-6405-47e4-8c17-ce5b12fb412b" />

| Page de création tache |
<img width="1918" height="982" alt="création" src="https://github.com/user-attachments/assets/d12873c0-2832-45fc-89df-8d1c53a35898" />

| Page de list en lien avec la catégorie |
<img width="1102" height="420" alt="Capture d’écran du 2026-03-10 15-50-05" src="https://github.com/user-attachments/assets/1bfad847-78d7-4e41-b887-6d085114beea" />

---

## 🚀 Installation & Lancement
Prérequis

Node.js LTS
Git


1️⃣ Cloner le projet
```
git clone https://github.com/votre-user/votre-projet.git
cd ynovtodo
```
2️⃣ Installer les dépendances
```
npm install
```

3️⃣ Ajouter Electron
```
quasar mode add electron
```

4️⃣ Lancer l'application
```
quasar dev -m electron
```

## 🤖 Section IA & Méthodologie

Répartition IA / Code Humain
| Partie | Répartition |
|---|---|
| Boilerplate | 20% IA |
| Logique métier | 90% humain |
| Interface UI | 20% IA / 80% humain |

---
## ⚖️ Auto‑Évaluation
✅ Ce qui fonctionne bien

Architecture claireconnaissan 
Interface simple et rapide
Navigation fluide


⚠️ Difficultés rencontrées
Gestion du routing dans Electron
Le fonctionnement du framework quasar
Organisation du store Pinia
Manque de temps pour le style
Première peojet fait avec Forge puis j'ai recommencé avec quasar

🔄 Si c'était à refaire

Ajouter un système de sauvegarde local plus robuste
Implémenter des notifications système
Ajouter une gestion avancée des priorités
