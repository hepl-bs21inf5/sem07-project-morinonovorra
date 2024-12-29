# <p style="color: brown;">BS21INF5 - Projet 2024 - Marina Navarro</p>

- Objectifs : Faire un projet avec **Vue.js**.
- Rendu le 29 décembre 2024 à 23h59

### <p style="color: PeachPuff;">Journal de bord</p>

- Mise en forme libre
- Éléments obligatoires :
  - Temps estimé et temps passé sur le projet
  - Tâches réalisées
  - Difficultés rencontrées et solutions trouvées
  - Explications et réflextions sur le code (questions pour nous guider chaque semaine)
  - Suite du projet (que pourrait-on faire pour la suite du projet ?)

## <p style="color: LightCoral;">Projet 01 - Semaine 07 (07.11 - 13.11) : Application Web</p>

### <p style="color: PeachPuff;">Vue.js</p>

| Temps estimé | Temps passé | Difficultés                                       | Solutions                   | Explications et réflexions                                                                                                                             | Projet                             |
| ------------ | ----------- | ------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 20 min       | 15 min      | comment cloner dépôt Git dans répertoire du cours | **git clone** dans terminal | installer les dépendances et formater le code : **npm install**, et **npm run format** ; pour lancer le projet en mode développement : **npm run dev** | créations de fichiers et du projet |

### <p style="color: PeachPuff;">Bootstrap</p>

| Temps estimé | Temps passé | Difficultés                              | Solutions                                                                                                                                           | Explications et réflexions                                                                       | Projet                                               |
| ------------ | ----------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| 5 min        | 10 min      | trouver pourquoi ça ne marche pas / beug | ne pas hésiter à comparer régulièrement au code source ; pour changer les icones dans la bar de navigation avec boostrap : : i class="bi bi-puzzle" | isntaller Bootstrap et Boostrap Icons : **npm install bootstrap @popperjs/core bootstrap-icons** | changement de la langue et du titre de l'application |

### <p style="color: PeachPuff;">Quiz</p>

| Temps estimé | Temps passé | Difficultés                                                              | Solutions                                                                                              | Explications et réflexions | Projet                                                                                                           |
| ------------ | ----------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 10 min       | 30 min      | afficher score final et message de félicitations si le score est parfait | Votre score est de : {{ score }} / {{ totalScore }} ; v-if="score === totalScore" , v-else-if , v-else |                            | ajout de questions, bouton de réinitialisation, modification de la couleur du bouton et les icônes de navigation |

### <p style="color: PeachPuff;">Questions</p>

> Expliquer le rôle des fichiers suivants :

| Nom                 | Rôle                                                                     | Fonction                                                                                                                                                     | Résumé                                                                  |
| ------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **main.ts**         | Point de départ de l'application.                                        | Initialise l'application et connecte le code à la page web (généralement au fichier HTML principal)                                                          | Démarre l'application                                                   |
| **main.css**        | Gère l'apparence globale du site (style).                                | Contient les règles de design (couleurs, polices, marges, etc.) qui s'appliquent à toute l'application, sauf si des styles spécifiques sont définis ailleurs | Gère l'apparence globale                                                |
| **App.vue**         | Composant principal de l'application.                                    | Agit comme la base de l'interface utilisateur. Tous les autres composants de l'application (par exemoke, HomeView.vue, AboutView.vue) s'intègrent ici.       | Agit comme le coeur de l'interface                                      |
| **router/index.ts** | Configure le système de navigation entre les pages.                      | Définit quelles pages ou vues (HomeView.vue, AboutView.vue, etc.) doivent s'afficher en fonction de l'URL. C'est comme un GPS pour l'application.            | Gère la navigation                                                      |
| **AboutView.vue**   | Représente une page ou une section spécifique (par exemple, "À propos"). | Contient le code HTML, CSS et JavaScript nécessaire pour afficher cette vue et gérer ses interactions.                                                       | Représente des sections ou des composants spécifiques de l'application. |
| **HomeView.vue**    | Représente la page d'accueil de l'application.                           | Comme AboutView.vue, elle contient le code pour afficher la page d'accueil et ses fonctionnalités.                                                           | " "                                                                     |
| **QuizForm.vue**    | Composant spécifique pour le quiz.                                       | Contient le formulaire ou les éléments nécessaires pour gérer et afficher le quiz interactif.                                                                | " "                                                                     |

> Dans le fichier **QuizForm.vue** :

- Quelles sont les similarités et les différences entre **ref** et **computed** ?
  - Similarités : Les deux sont des outils réactifs, c'est-à-dire qu'ils permettent de suivre les changements dans les données et de mettre à jour automatiquement l'interface utilisateur. Ils sont utilisés pour gérer et afficher des données dans une application **Vue.js**.
  - Différences :
    | **ref** | **computed** |
    | ------------ | ----------- |
    | Stocke une donnée réactive modifiable. | Crée une donnée dérivée d'autres données réactives. |  
     | Utilisé pour des valeurs simples ou complexes. | Utilisé pour des calculs ou transformations. |
    | Peut être modifié directement (ex. : ref.value = x). | Ne peut pas être modifié directement (lecture seule). |
  - Exemple : **ref** : une variable qui change, comme le score d'un quiz ; **computed** : une valeur calculée, comme un pourcentage basé sur le score
- Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?
  - Lorsqu'on clique sur le bouton "Terminer", les actions suivantes se produisent (selon la logique typique d'un quiz) :
    1. Une fonction est appelée (souvent liée à l'événement @click).
    2. Cette fonction peut :
       - Vérifier si toutes les questions sont répondues.
       - Calculer le score final ou un résultat basé sur les réponses.
       - Mettre à jour des données dans le composant, comme passer à un écran de résultats.
       - Envoyer les données à un serveur (si nécessaire).
  - En résumé, ce bouton termine l'interaction avec le quiz et déclenche les actions nécessaires pour afficher ou traiter le résultat.
- Qu'est-ce qu'un v-model ?
  - V-model est une directive spéciale de Vue.js qui crée une liaison bidirectionnelle entre une donnée et un élément HTML (par exemple un champ de saisie).
  - Fonctionnement :
    - Si la donnée est chargée, l'élément HTML est mis à jour.
    - Si l'utilisateur interagit avec l'élément HTML (ex.: saisie das un champ texte), la donnée est mise à jour automatiquement.
    - Exemple : <input v-model="userAnswer" /> , la variable userAnswer est automatiquement mise à jour quand l'utilisateur tape dans le champ.
- À quoi sert le :class="{ disabled: !filled }" ?

  - Définition : Cette syntaxe dynamique permet dajouter ou de retirer la classe CSS disabled en fonction de la condition !filled.
  - Détails :
    - :class signifie que la classe est dynamique (elle change en fonction de la valeur d'une donnée).
    - { disabled: !filled } signifie :
      - ajoute la classe disabled si la condition !filled (non remplie) est vraie.
      - Ne l'ajoute pas si filled est vrai.
  - Contexte : Si filled indique que toutes les réponses sont complètes, le bouton pourrait être activé / désactivé pour empêcher de "terminer" tant que le quiz n'est complété.

- Résumé des concepts :
  - ref : Stocke des données réactives.
  - computed : Calcule des données basées sur d'autres.
  - Bouton "Terminer" : Appelle une fonction pour traiter le quiz.
  - v-model : Liaison bidirectionnelle entre données et champs.
  - :class="{ diabled: !filled }" : Ajoute une classe CSS conditionnellement.

### Exemple Semaine 01

### <p style="color: PeachPuff;">Journal de bord</p>

https://github.com/blueur/quiz/tree/week/1-final

## <p style="color: LightCoral;">Projet 02 - Semaine 08 (14.11 - 20.11) : Architecture trois tiers</p>

### <p style="color: PeachPuff;">QuestionRadio</p>

| Temps estimé | Temps passé | Difficultés                                                      | Solutions                                                   | Explications et réflexions | Projet                                                                                                                               |
| ------------ | ----------- | ---------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 15 min       | 25 min      | ne pas oublier d'importer le nouveau composant dans QuizForm.vue | import QuestionRadio from "@/components/QuestionRadio.vue"; |                            | remplacer chaque question par un composant **QuestionRadio** (afin d'éviter de devoir répéter les mêmes étapes pour chaque question) |

> Propriétés du composant **QuestionRadio** :

- **v-model**: la valeur de la réponse (bi-diretionnel, car on veut pouvoir modifier la réponse depuis le composant parent lorsqu'on clique sur le bouton "Réinitialiser" et récupérer la réponse depuis le composant parent pour calculer le score)
- **id**: un identifiant unique pour le groupe de boutons radio
- **text**: le texte de la question
- **options**: un tableau d'objets pour les options de réponse, chaque objet doit avoir une propriété **value** pour la valeur de la réponse et une propriété **text** pour le texte affiché de l'option

> Dans la partie **< script >** :

- On utilise les fonctions **defineModel** et **defineProps** pour définir le modèle (**v-model**) et les propriétés (**text**, **name**, **options**) du composant.

> Dans la partie **< template >** :

- On affiche le texte dans la question : **{{ props.text }}**.
- On affiche les options de réponse en utilisant une boucle **v-for** sur **props.options** : le **< div >** sera répété pour chaque option.
- La différence entre les attributs qui commencent par **:** et ceux qui ne commencent pas par **:** est que les premiers sont des expressions JavaScript (interprétées) et les seconds sont des chaînes de caractères (non interprétées).

> Quelle est la différence entre un prop et un modèle (v-model) ?

- **prop** : donnée passée d'un composant parent à un composant enfant. Dans **QuestionRadio**, une prop permet de transmettre des informations comme la question ou les options de réponse.

- **v-model** : v-model est une directive de **Vue** qui crée une liaison bidirectionnelle entre une donnée du parent et une propriété dans l'enfant. Cela permet de lier, par exemple, la réponse sélectionnée dans **QuestionRadio** au parent, et de mettre à jour automatiquement la valeur lorsque l'utilisateur change sa sélection.

En résumé, une **prop** est une donnée unidirectionnelle (parent → enfant), tandis que **v-model** permet une communication bidirectionnelle entre le parent et l'enfant.

### <p style="color: PeachPuff;">QuestionText</p>

| Temps estimé | Temps passé                  | Difficultés                                                                                | Solutions                  | Explications et réflexions  | Projet                                                                                    |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------ | -------------------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| 15 min       | 60 min (avec l'amélioration) | comment accepter plusieurs réponses possibles (par exemple, "4" ou "quatre"). (env. 30min) | :accepted-answers="[]..."" | nouveauté : **placeholder** | création d'un composant **QuestionText.vue** pour les questions à réponse textuelle libre |

> Comment rendre la propriété placeholder optionnelle ?

Pour rendre la propriété placeholder optionnelle dans **QuestionRadio**, il suffit de lui donner une valeur par défaut dans la définition de la **prop**. Si aucune valeur n'est fournie par le parent, la valeur par défaut sera utilisée.

### <p style="color: PeachPuff;">API</p>

| Temps estimé | Temps passé | Difficultés               | Solutions                                                                                                                                                                                                                                                                                                   | Explications et réflexions                                                                            | Projet                                                                                                                                                 |
| ------------ | ----------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20 min       | 30 min      | créer les chemins / liens | ajouter une nouvelle tap **Trivia** dans **App.vue** ; créer une nouvelle vue **TriviaView.vue** dans le dossier **src/views** ; mettre à jour le fichier **router/index.ts** en ajoutant une nouvelle route ; puis finalement ajouter le composant **QuizTrivia.vue** dans le dossier **src/components** : | **amount** : le nombre de questions à obtenir ; **type** : le type de questions (multiple ou boolean) | Utilisation d'une API (Open Trivia Database) pour obtenir des questions aléatoires pour notre quiz (en faisant une requête HTTP GET à l'URL suivante : |

https://opentdb.com/api.php?amount=10&type=multiple)

À sa création, ce composant va récupérer 10 questions avec l'API et stocker les questions dans la **ref** **questions**. Ensuite, on affiche chaque question avec le composant **QuestionRadio** (avec une boucle **v-for**) en passant les propriétés nécessaires.

### <p style="color: PeachPuff;">QuestionCheckbox</p>

| Temps estimé | Temps passé | Difficultés | Solutions | Explications et réflexions                                                                    | Projet                                                                        |
| ------------ | ----------- | ----------- | --------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 5 min        | 15 min      |             |           | Noter que comme la réponse est une liste, il faut initialiser la **ref** avec une liste vide. | Les checkboxes sont comme les radios, mais on peut en sélectionner plusieurs. |

### <p style="color: PeachPuff;">Exemple Semaine 02</p>

https://github.com/blueur/quiz/tree/week/2-final

## <p style="color: LightCoral;">Projet 03 - Semaine 09 (21.11 - 27.11) : Base de données</p>

### <p style="color: PeachPuff;">Réponse</p>

| Temps estimé | Temps passé | Difficultés                                      | Solutions                                                                                                                                                                                                   | Explications et réflexions | Projet                                                                                                                                             |
| ------------ | ----------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25 min       | 30 min      | quelle modication faire et dans quel composant ? | Dans le template, modifier le modifier la partie **script** de **QuestionRadio.vue** ; et ajouter une nouvelle **ref** **correctAnswers** pour stocker l'exactitude de chaque réponse dans **QuizForm.vue** |                            | incorporer la vérification de la réponse dans chaque composant de question (car elle est spécifique à chaque type de question) ; nettoyage du code |

- À quoi sert l'option immediate: true dans le watch ?
- Que se passe-t-il si on l'enlève ou si on met immediate: false ?

### <p style="color: PeachPuff;">Score</p>

| Temps estimé | Temps passé | Difficultés                         | Solutions                                                                                                    | Explications et réflexions                                                                                                                                                                                                                               | Projet                                                                                                                                                                         |
| ------------ | ----------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 25 min       | 40 min      | comment modifier le calcul du score | ajouter une nouvelle **computed score** qui calcule le score en fonction des valeurs de **correctedAnswers** | **correctAnswers.value** est un tableau au booléens ; la méthode **filter** retourne un nouveau tableau avec les éléments qui satisfassent la condition ; la propriété **length** retourne la taille du nouveau tableau qui ne contient que des **true** | changement de la logique du calcul de score, qui se fait maintenant en temps réel (à chaque fois que l'utilisateur change sa réponse, le score est mis à jour automatiquement) |

### <p style="color: PeachPuff;">Exemple Semaine 03</p>

https://hep.davidtang.ch/docs/seminaire/projet#semaine-1:~:text=https%3A//github.com/blueur/quiz/tree/week/3%2Dfinal

https://github.com/blueur/quiz/tree/week/3-final

## <p style="color: LightCoral;">Projet 04 - Semaines 10 / 11 (28.11 - 04.12) / (05.12 - 11.12) : SQL + Syntaxe / Transaction & Indexation</p>

### <p style="color: PeachPuff;">États</p>

| Temps estimé | Temps passé | Difficultés                                                                                    | Solutions                                                                             | Explications et réflexions                                                                                                                                           | Projet                                                                                                                                                      |
| ------------ | ----------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45 min       | 60 min      | code donné pour seulement trois questions, comment donner la valeur de la quatrième question ? | regarder la partie du code concernée, comprendre la logique des numéros et de l'ordre | enum (type énuméré) est un type qui peut prendre une valeur parmi un ensemble de valeurs pré-définies ; **export** permet d'importer cet enum dans d'autres fichiers | changement de noms (**correctAnswers** en **QuestionState**) et adaptation du calcul du score ; ajout de **div** pour afficher les états de chaque question |

> États possibles :

- Empty : la question n'a pas été répondue
- Fill : la question a été répondue
- Submit : la question a été soumise pour correction
- Correct : la réponse est juste
- Wrong : la réponse est fausse

> Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?

- model.value =
  value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;

Pour réécrire cette logique autrement sans l'opérateur ternaire, nous pouvons utiliser un **if** et **else** à la place du ternaire.

> Comment pourrait-on réécrire autrement la logique du watch sur value ?

La logique du **watch** peut aussi être réécrite avec un if dans la fonction du watch, tout comme avec le ternaire, pour faire un contrôle conditionnel plus explicite.

### <p style="color: PeachPuff;">Boutons</p>

| Temps estimé | Temps passé | Difficultés | Solutions | Explications et réflexions | Projet                                                                              |
| ------------ | ----------- | ----------- | --------- | -------------------------- | ----------------------------------------------------------------------------------- |
| 10 min       | 15 min      |             |           |                            | affichage du score uniquement si toutes les questions ont été soumises et corrigées |

### <p style="color: PeachPuff;">Réponses immuables (non modifiables)</p>

| Temps estimé | Temps passé | Difficultés | Solutions | Explications et réflexions | Projet                                                                                         |
| ------------ | ----------- | ----------- | --------- | -------------------------- | ---------------------------------------------------------------------------------------------- |
| 10 min       | 5 min       |             |           |                            | transformation des réponses en réponses immuables (non modifiables) après avoir soumis le quiz |

### <p style="color: PeachPuff;">Exemple</p>

https://github.com/blueur/quiz/tree/week/4-final

## <p style="color: LightCoral;">Projet 05 - Semaine 12 (12.12 - 18.12) : NoSQL</p>

### <p style="color: PeachPuff;">Réponse détaillée</p>

| Temps estimé | Temps passé | Difficultés                                                                                                        | Solutions                                     | Explications et réflexions | Projet                                                 |
| ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | -------------------------- | ------------------------------------------------------ |
| 45 min       | 60 min      | trouver des réponses intéressantes ; ne pas enlever **answer** mais ajouter **answerDetail** aux **QuesstionText** | answerDetail : { type: String, default: "" }, |                            | affichage d'un texte explicatif de la réponse correcte |

> Dans la partie **< template >**:

- **v-if** permet d'afficher une balise HTML si la condition est vraie.
- **v-else** est lié au dernier **v-id** et affiche une balise HTML si la condition du **v-if** est fausse.
- **class="text-success"** et **class=text-danger"** permettent de changer la couleur du texte avec Bootstrap.
- **class="blockquote-footer"** a été utilisé pour afficher les détails.

### <p style="color: PeachPuff;">Style</p>

| Temps estimé | Temps passé | Difficultés | Solutions | Explications et réflexions                                                                                                                                                                   | Projet                                    |
| ------------ | ----------- | ----------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 10 min       | 15 min      |             |           | comme mon quiz contient déjà beaucoup d'images et donc de couleurs, je n'ai pas voulu changer beaucoup les couleurs de la page et autres, je voulais garder quelque chose de simple et léger | changement des couleurs dans un composant |

> Pour changer les couleurs dans un composant, ajouter un **< style scoped >** à la fin du fichier :

- **scoped** permet d'appliquer les styles uniquement au composant actuel.
- **!important** permet de forcer l'application du style.
- Aussi possible de créer les noms de classes personnalisés (par exemple : **.answer-correct** et **.answer-wrong**).

### <p style="color: PeachPuff;">Exemple Semaine 05</p>

https://github.com/blueur/quiz/tree/week/5-final

## <p style="color: LightCoral;">Projet 06 - Semaine 13 (19.12 - 25.12) : Révision</p>

### <p style="color: PeachPuff;">Déploiement</p>

| Temps estimé | Temps passé | Difficultés                                                             | Solutions              | Explications et réflexions | Projet                                 |
| ------------ | ----------- | ----------------------------------------------------------------------- | ---------------------- | -------------------------- | -------------------------------------- |
| 10 min       | 20 min      | difficile pour moi de comprendre cette partie de déploiement sur GitHug | bien suivre les étapes |                            | publication du projet sur GitHub Pages |

### <p style="color: PeachPuff;">Améliorations</p>

| Temps estimé | Temps passé   | Difficultés                                                    | Solutions                       | Explications et réflexions | Projet                                                                                                        |
| ------------ | ------------- | -------------------------------------------------------------- | ------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| beaucoup     | beaucoup trop | comment créer de nouvelles fonctions, ou faire des changements | internet et camarades de classe |                            | avec plus de temps et d'aide j'aurais bien voulu changer le système de points pour un système en pourcentages |

> Amélioration : apparition d'une phrase différente selon nombres de points

v-if="model === QuestionState.Correct" class="text-success">alors là, rien à dire ! +1

v-else-if="correctAnswersCount === 1" class="text-warning">1 / 5, bien essayé !
...

> Amélioration : ajouter un mélangeur aléatoire pour les options (pour QuestionCheckbox.vue et ExpertCheckbox.vue) :

1. Étape 1 : Ajouter un mélangeur pour les réponses à chaque chargement, ajouter une méthode pour mélanger les options et l'appliquer à l'initialisation :
   const shuffledOptions = ref<{ value: string; text: string }[]>([])

const shuffleArray = (array: { value: string; text: string }[]) => {
return array
.map((item) => ({ ...item, sortKey: Math.random() }))
.sort((a, b) => a.sortKey - b.sortKey)
.map(({ sortKey, ...item }) => item)
}

shuffledOptions.value = shuffleArray(props.options)

2. puis dans le template, remplacer **props.options** par **shuffledOptions**

> Amélioration : ajouter des titres aux questions (afin de mieux comprendre type de réponse attendue) dans le template (je rajoute les points afin qu'on ne le voit pas sous forme de titre)

<h.> Question 1 : Une seule réponse <./h>

> Amélioration : ajouter un espace entre les questions afin que ce soit plus clair et lisible (dans CSS)

.question {
margin-bottom: 30px; /_ Ajustez la valeur pour ajouter plus d’espace _/
}

> Autres améliorations possibles :

- Que les questions ne valent pas toutes le même nombre de points (par exemple QuestionRadio 1 à 3 valent 1 point, la QuestionCheckbox en vaudrait 5, 1 point par bonne réponse, et la QuestionText vaudrait 2 points, afin d'avoir un total de 10 points), cela permettrait d'être plus en accord avec la difficulté des questions
- Je n'ai pas voulu rajouter un code pour que les questions soient dans un ordre aléatoire, comme ça le quiz relax et le quiz pro sont dans le même ordre

> Amélioration : ajouter plusieurs réponses valides au QuestionText

1. Ajouter une liste de réponses acceptées dans le script dans QuestionText.vue (ou ExpertText.vue), ajouter la ligne :
   **acceptedAnswers: { type: Array as () => string[], required: true },**
2. Adapter la comparaison de réponses dans le script dans QuestionText.vue (ou ExpertText.vue), remplacer :
   **model.value = value.value === props.answer ?**
   par :

   **const normalizedValue = value.value?.trim().toLowerCase() || '';**
   **const isCorrect = props.acceptedAnswers.some(**
   **(answer) => answer.toLowerCase() === normalizedValue**
   **);**
   **model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong;**

   (la méthode **some** permet de parcourir efficacement toutes les réponses autorisées pour vérifier une correspondance)

3. Adapter QuizForm.vue (ExpertForm.vue) pour fournir plusieurs réponses, dans QuizForm.vue :
   **:accepted-answers="['dix', '10', 'une dizaine']"**

### <p style="color: PeachPuff;">Aides</p>

> Exemples de changements de couleur :

<p style="color: Lavender;">Texte en lavande</p>
<p style="color: PeachPuff;">Texte en pêche</p>
<p style="color: LightSalmon;">Texte en saumon clair</p>
<p style="color: LightCoral;">Texte en corail clair</p>
<p style="color: brown;">Texte en marron</p>
<p style="color: Olive;">Texte en vert olive</p>

> Commentaires :

**//** \*/ : dans le script (.vue) et
**<!- -->** : dans le template (.vue)

### <p style="color: PeachPuff;">Documentations</p>

- Vue.js : https://fr.vuejs.org/guide/introduction
- Bootstrap : https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Bootstrap Icons : https://icons.getbootstrap.com/

> Source des images :

- europecarte.jpg : https://i.pinimg.com/736x/0a/36/5b/0a365b14e18f6fb20e52bff64c698c27.jpg
- onu.jpg : https://i.pinimg.com/736x/67/63/a6/6763a6775d7cfbcb500d66b1b1a1d5e0.jpg
- australie.jpg : https://i.pinimg.com/736x/09/3c/a1/093ca17dbf60d65bad4d9e831498cdc9.jpg
- densite_planetes.jpg : https://i.pinimg.com/736x/2a/19/e9/2a19e9e53280c4d258b8fd2022bcde34.jpg
- kazakhstan : https://i.pinimg.com/736x/b3/78/2e/b3782e9d070fe3b57d2aa4525718488a.jpg
- nuit_etoilee : https://i.pinimg.com/736x/4a/9c/fd/4a9cfdec861d304d61a40b06a402fe7f.jpg
- volcan : https://i.pinimg.com/736x/73/4b/ff/734bff48755b6ba0e8a2513d03ed5caa.jpg
- ordre_planetes : https://i.pinimg.com/736x/b1/ed/42/b1ed42a0099d9bf0548d149a50b74653.jpg

### <p style="color: PeachPuff;">Vérification</p>

- Pour vérifier que le code est correct localement, on peut construire le projet :

  - npm run build

- Résultat final :
  - https://blueur.github.io/quiz/

### <p style="color: PeachPuff;">Évaluation</p>

- Rapport :
  - **Le journal de bord est à jour et complet.**
  - Le journal de bord est bien structuré et synthétique.
- Fonctionnalités :
  - **L'application a les mêmes fonctionnalités que l'exemple.**
  - **L'application est personnalisée.**
  - **L'application a plus de fonctionnalités que l'exemple.**
  - L'application a encore plus de fonctionnalités que l'exemple.
  - Bootstrap est correctement utilisé pour rendre l'application responsive.
- Code :
  - **Le code suit les conventions de codage (formatage, nommage, organisation, …).**
  - Le code est lisible et maintenable (nommage, commentaires, …).
