# <p style="color: brown;">BS21INF5 - Projet 2024 - Marina Navarro</p>

- Objectifs : Faire un projet avec **Vue.js**.
- Rendu le 26 décembre 2024 à 23h59

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

| Temps estimé | Temps passé | Difficultés rencontrées                           | Solutions trouvées          | Explications et réflexions                                                                                                                             | Projet                             |
| ------------ | ----------- | ------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 20 min       | 15 min      | comment cloner dépôt Git dans répertoire du cours | **git clone** dans terminal | installer les dépendances et formater le code : **npm install**, et **npm run format** ; pour lancer le projet en mode développement : **npm run dev** | créations de fichiers et du projet |

### <p style="color: PeachPuff;">Bootstrap</p>

| Temps estimé | Temps passé | Difficultés rencontrées                  | Solutions trouvées                                     | Explications et réflexions                                                                       | Projet                                               |
| ------------ | ----------- | ---------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| 5 min        | 10 min      | trouver pourquoi ça ne marche pas / beug | ne pas hésiter à comparer régulièrement au code source | isntaller Bootstrap et Boostrap Icons : **npm install bootstrap @popperjs/core bootstrap-icons** | changement de la langue et du titre de l'application |

### <p style="color: PeachPuff;">Quiz</p>

| Temps estimé | Temps passé | Difficultés rencontrées                                                       | Solutions trouvées | Explications et réflexions | Suite du projet                                                                                                  |
| ------------ | ----------- | ----------------------------------------------------------------------------- | ------------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 10 min       | 30 min      | afficher score final et message de félicitations si le score est parfait !!!! |                    |                            | ajout de questions, bouton de réinitialisation, modification de la couleur du bouton et les icônes de navigation |

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

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |                    |                            |

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

### QuestionText

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

> Comment rendre la propriété placeholder optionnelle ?

### API

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

> Open Trivia Database est une API qui fournit des questions de quiz, on peut en obtenir en faisant une requête HTTP GET à l'URL suivante :
> https://opentdb.com/api.php?amount=10&type=multiple

> À sa création, ce composant va récupérer 10 questions avec l'API et stocker les questions dans la **ref** **questions**. Ensuite, on affiche chaque question avec le composant **QuestionRadio** (avec une boucle **v-for**) en passant les propriétés nécessaires.

- **amount** : le nombre de questions à obtenir
- **type** : le type de questions (multiples ou boolean)

### QuestionCheckbox (bonus)

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

> Les checkboxes sont comme les radios, mais on peut en sélectionner plusieurs.
> Noter que comme la réponse est une liste, il faut initialiser la **ref** avec une liste vide.

### Exemple Semaine 02

### <p style="color: PeachPuff;">Journal de bord</p>

https://github.com/blueur/quiz/tree/week/2-final

## <p style="color: LightCoral;">Projet 03 - Semaine 09 (21.11 - 27.11) : Base de données</p>

### Réponse

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

- À quoi sert l'option immediate: true dans le watch ?
- Que se passe-t-il si on l'enlève ou si on met immediate: false ?

### Score

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

- Proposer une autre manière de calculer le score (réecrire la fonction du computed) et comparer les deux méthodes

### Exemple Semaine 03

### <p style="color: PeachPuff;">Journal de bord</p>

https://hep.davidtang.ch/docs/seminaire/projet#semaine-1:~:text=https%3A//github.com/blueur/quiz/tree/week/3%2Dfinal

https://github.com/blueur/quiz/tree/week/3-final

## <p style="color: LightCoral;">Projet 04 - Semaines 10 / 11 (28.11 - 04.12) / (05.12 - 11.12) : SQL + Syntaxe / Transaction & Indexation</p>

### États

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions                                                                            | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | ----------------------------------------------------------------------------------------------------- | --------------- |
|              |             |                         |                    | enum (type énuméré) est un type qui peut prendre une valeur parmi un ensemble de valeurs pré-définies |

temps estimé : 45m
temps passé : 60m
difficultés rencontrées : code donné pour seulement 3 questions, comment donner la valeur de la quatrième question ?
solutions trouvées : regardé la partie du code en question, compris que les numéros allaient dans l'ordre de 0 à 2, rajouté 3

> États possibles :

- Empty : la question n'a pas été répondue
- Fill : la question a été répondue
- Submit : la question a été soumise pour correction
- Correct : la réponse est juste
- Wrong : la réponse est fausse

- Un **enum (type énuméré)** est un type qui peut prendre une valeur parmi un ensemble de valeurs pré-définies.
- On crée un enum **QuestionState** qui contient les états possibles pour une question.
- **export** permet d'importer cet enum dans d'autres fichiers.

- Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?

  - model.value =
    value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;

- Comment pourrait-on réécrire autrement la logique du watch sur value ?

### Boutons

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

temps estimé : 10m
temps passé : 15m

### Réponses immuables (non modifiables)

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

temps estimé : 10m
temps passé : 5m

### Exemple

### <p style="color: PeachPuff;">Journal de bord</p>

https://github.com/blueur/quiz/tree/week/4-final

## <p style="color: LightCoral;">Projet 05 - Semaine 12 (12.12 - 18.12) : NoSQL</p>

### Réponse détaillée

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

- Ajouter ce computed dans QuestionRadio.vue : - const answerText = computed<string>(
  () =>
  props.options.find((option) => option.value === props.answer)?.text ??
  props.answer,
  ); - Remplacer {{ props.answer }} par {{ answerText }} dans le template. Expliquer pourquoi on a fait ce changement ainsi que le code du computed.

- Que se passe-t-il lorsqu'on ne met pas de valeur à answer-detail ? Est-ce satisfaisant ? Si ce n'est pas le cas, proposer une amélioration.

> Dans la partie **< template >**:

- **v-if** permet d'afficher une balise HTML si la condition est vraie.
- **v-else** est lié au dernier **v-id** et affiche une balise HTML si la condition du **v-if** est fausse.
- **class="text-success"** et **class=text-danger"** permettent de changer la couleur du texte avec Bootstrap.
- **class="blockquote-footer"** a été utilisé pour afficher les détails.

### Style

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

> Pour changer les couleurs dans un composant, ajouter un **< style scoped >** à la fin du fichier :

- **scoped** permet d'appliquer les styles uniquement au composant actuel.
- **!important** permet de forcer l'application du style.
- Aussi possible de créer les noms de classes personnalisés (par exemple : **.answer-correct** et **.answer-wrong**).

### Exemple Semaine 05

### <p style="color: PeachPuff;">Journal de bord</p>

https://github.com/blueur/quiz/tree/week/5-final

## <p style="color: LightCoral;">Projet 06 - Semaine 13 (19.12 - 25.12) : Révision</p>

#### Déploiement

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

#### Améliorations

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

> Voici quelques idées pour améliorer le projet :

résultats en pourcentage ?

- **QuestionCheckbox.vue** : Sélectionner plusieurs réponses.
  être en deux colonnes
  > montrer nombres de points ? (env.45m)
  > phrase différente selon nombres de points ?
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
      <p v-if="model === QuestionState.Correct" class="text-success">alors là, rien à dire ! +1</p>
      <p v-if="correctAnswersCount === 0" class="text-danger">0 / 5, ça arrive !</p>
      <p v-else-if="correctAnswersCount === 1" class="text-warning">1 / 5, bien essayé !</p>
      <p v-else-if="correctAnswersCount === 2" class="text-warning">2 / 5, pas mal !</p>
      <p v-else-if="correctAnswersCount < props.answer.length" class="text-warning">
        {{ correctAnswersCount }} / 5, quel niveau !
      </p>
      <p class="blockquote-footer">{{ props.answerDetail }}</p>
    </div>

> réponses dans ordre aléatoire (Ajouter un Mélangeur pour Les Options) pour QuestionCheckbox ou (ExpertCheckbox.vue)

1. dans QuestionCheckbox.vue : Étape 1 : Ajouter un Mélangeur pour Les Options
   Nous devons mélanger les réponses à chaque chargement. Pour ce faire, ajoutez une méthode pour mélanger les options et appliquez-la à l'initialisation.
   Code mis à jour dans setup :
   const shuffledOptions = ref<{ value: string; text: string }[]>([])

const shuffleArray = (array: { value: string; text: string }[]) => {
return array
.map((item) => ({ ...item, sortKey: Math.random() }))
.sort((a, b) => a.sortKey - b.sortKey)
.map(({ sortKey, ...item }) => item)
}

shuffledOptions.value = shuffleArray(props.options) 2. puis dans le template, remplacer **props.options** par :

<div v-for="option in **shuffledOptions**" :key="option.value" class="form-check">
  <input
    :id="`${props.id}-${option.value}`"
    v-model="checkedNames"
    class="form-check-input"
    type="checkbox"
    :value="option.value"
    :disabled="
      model === QuestionState.Submit ||
      model === QuestionState.Correct ||
      model === QuestionState.Wrong
    "
  />
  <label class="form-check-label" :for="`${props.id}-${option.value}`">
    {{ option.text }}
  </label>
</div>

- **QuestionSelect.vue** : Sélectionner une réponse dans une liste déroulante.
- Accepter plusieurs réponses possibles pour **QuestionText.vue** (par exemple, "2" ou "deux"). (env. 30min)
- Adapter le Trivia pour pouvoir y jouer.
- Ordre aléatoire des choix dans **QuestionRadio.vue**.
- Ordre aléatoire des questions. (pas voulu, pour que ça corresponde au quiz pro, mais proposer code pour questions dans ordre aléatoire)

> ajouter titres aux questions (afin de mieux comprendre type de réponse attendue)

- <template>
    <div class="quiz-container">
      <form @submit="submit">
        <div class="question">
          <h2>Question 1 : Une seule réponse</h2>
          <QuestionRadio
          ...
        answer-detail="La Terre est la planète la plus dense du système solaire."
          />
        </div>
        <!-- Répétez pour chaque question -->
      </form>
    </div>
  </template>

> ajout espace entre questions afin que ce soit plus clair et lisible (dans css)

.question {
margin-bottom: 30px; /_ Ajustez la valeur pour ajouter plus d’espace _/
}

> Expliquer votre démarche pour les améliorations que vous avez choisies (vous devez pouvoir expliquer votre code afin de valider une amélioration) :

- Pourquoi avez-vous choisi ces améliorations ?
- Comment les avez-vous implémentées ?
- Quels problèmes avez-vous rencontrés ?
- Quelles améliorations pourriez-vous encore apporter ?

> amélioration : ajouter plusieurs réponses valides au question text

1. (ajouter une liste de réponses acceptées) dans le script dans QuestionText.vue (ou ExpertText.vue) ajouter la ligne :
   const model = defineModel<QuestionState>()
   const props = defineProps({
   id: { type: String, required: true },
   text: { type: String, required: true },
   answer: { type: String, required: true },
   **acceptedAnswers: { type: Array as () => string[], required: true },**
   answerDetail: { type: String, default: '' },
   placeholder: { type: String, default: 'veuillez saisir une réponse' },
   })
2. (adapter la comparaison de réponses) dans le script dans QuestionText.vue (ou ExpertText.vue) remplacer :
   **model.value = value.value === props.answer ?** QuestionState.Correct : QuestionState.Wrong
   par :
   watch(model, (newModel) => {
   if (newModel === QuestionState.Submit) {
   **const normalizedValue = value.value?.trim().toLowerCase() || '';**
   **const isCorrect = props.acceptedAnswers.some(**
   **(answer) => answer.toLowerCase() === normalizedValue**
   **);**
   **model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong;**
   } else if (newModel === QuestionState.Empty) {
   value.value = null;
   }
   });
   (la méthode **some** permet de parcourir efficacement toutes les réponses autorisées pour véréifier une correspondance)
3. (adapter QuizForm.vue (ExpertForm.vue) pour fournir plusieurs réponses) dans QuizForm.vue
   <ExpertText
   id="danube"
   v-model="questionStates[4]"
   text="combien de pays d'europe sont traversés ou longés par le danube ?"
   answer="10"
   **:accepted-answers="['dix', '10', 'une dizaine']"**
   answer-detail="le danube, second plus long fleuve d'europe derrière la volga, est un fleuve qui traverse ou longe dix pays d'europe : l'allemagne, l'autriche, la slovaquie, la hongrie, la croatie, la serbie, la bulgarie, la roumanie, la moldavie et l'ukraine."
   placeholder="indice : la carte"
   />

### Aides

### <p style="color: PeachPuff;">Journal de bord</p>

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

<p style="color: SlateGray;">Texte en gris ardoise</p>
<p style="color: gray;">Texte en gris</p>
<p style="color: silver;">Texte en argenté (gris clair)</p>
<p style="color: Lavender;">Texte en lavande</p>
<p style="color: PeachPuff;">Texte en pêche</p>
<p style="color: LightSalmon;">Texte en saumon clair</p>
<p style="color: LightCoral;">Texte en corail clair</p>
<p style="color: brown;">Texte en marron</p>
<p style="color: DarkRed;">Texte en rouge foncé</p>
<p style="color: Olive;">Texte en vert olive</p>
<p style="color: DarkGreen;">Texte en vert foncé</p>

#### Documentations

### <p style="color: PeachPuff;">Journal de bord</p>

- Vue.js : https://fr.vuejs.org/guide/introduction
- Bootstrap : https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Bootstrap Icons : https://icons.getbootstrap.com/

#### Vérification

### <p style="color: PeachPuff;">Journal de bord</p>

- Pour vérifier que le code est correct localement, on peut construire le projet :

  - npm run build

- Résultat final :
  - https://blueur.github.io/quiz/

## Évaluation

### <p style="color: PeachPuff;">Journal de bord</p>

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
