# <p style="color: LightCoral;">BS21INF5 - Projet 2024 - Marina Navarro</p>

- Objectifs : Faire un projet avec Vue.js.
- Rendu le 26 décembre 2024 à 23h59

### Journal de bord

- Mise en forme libre
- Éléments obligatoires :
  - Temps estimé et temps passé sur le projet
  - Tâches réalisées
  - Difficultés rencontrées et solutions trouvées
  - Explications et réflextions sur le code (questions pour nous guider chaque semaine)
  - Suite du projet (que pourrait-on faire pour la suite du projet ?)

## <p style="color: LightCoral;">Projet 01 - Semaine 07 (07.11 - 13.11) : Application Web</p>

### Vue.js

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Bootstrap

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Quiz

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Questions

- Expliquer le rôle des fichiers suivants :

  - main.ts :
  - main.css :
  - App.vue :
  - router/index.ts :
  - AboutView.vue :
  - HomeView.vue :
  - QuizForm.vue :

- Dans le fichier QuizForm.vue :
  - Quelles sont les similarités et les différences entre ref et computed ?
  - Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?
  - Qu'est-ce qu'un v-model ?
  - À quoi sert le :class="{ disabled: !filled }" ?

### Exemple Semaine 01

https://github.com/blueur/quiz/tree/week/1-final

## <p style="color: LightCoral;">Projet 02 - Semaine 08 (14.11 - 20.11) : Architecture trois tiers</p>

### QuestionRadio

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

> Quelle est la différence entre un prop et un modèle (v-model) ?

### QuestionText

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

> Comment rendre la propriété placeholder optionnelle ?

### API

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### QuestionCheckbox (bonus)

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Exemple Semaine 02

https://github.com/blueur/quiz/tree/week/2-final

## <p style="color: LightCoral;">Projet 03 - Semaine 09 (21.11 - 27.11) : Base de données</p>

### Réponse

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

- À quoi sert l'option immediate: true dans le watch ?
- Que se passe-t-il si on l'enlève ou si on met immediate: false ?

### Score

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

- Proposer une autre manière de calculer le score (réecrire la fonction du computed) et comparer les deux méthodes

### Exemple Semaine 03

https://hep.davidtang.ch/docs/seminaire/projet#semaine-1:~:text=https%3A//github.com/blueur/quiz/tree/week/3%2Dfinal

https://github.com/blueur/quiz/tree/week/3-final

## <p style="color: LightCoral;">Projet 04 - Semaines 10 / 11 (28.11 - 04.12) / (05.12 - 11.12) : SQL + Syntaxe / Transaction & Indexation</p>

### États

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

- États possibles :

  - Empty : la question n'a pas été répondue
  - Fill : la question a été répondue
  - Submit : la question a été soumise pour correction
  - Correct : la réponse est juste
  - Wrong : la réponse est fausse

- Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?

  - model.value =
    value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;

- Comment pourrait-on réécrire autrement la logique du watch sur value ?

### Boutons

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Réponses immuables (non modifiables)

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Exemple

https://github.com/blueur/quiz/tree/week/4-final

## <p style="color: LightCoral;">Projet 05 - Semaine 12 (12.12 - 18.12) : NoSQL</p>

### Réponse détaillée

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

- Ajouter ce computed dans QuestionRadio.vue : - const answerText = computed<string>(
  () =>
  props.options.find((option) => option.value === props.answer)?.text ??
  props.answer,
  ); - Remplacer {{ props.answer }} par {{ answerText }} dans le template. Expliquer pourquoi on a fait ce changement ainsi que le code du computed.

- Que se passe-t-il lorsqu'on ne met pas de valeur à answer-detail ? Est-ce satisfaisant ? Si ce n'est pas le cas, proposer une amélioration.

### Style

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Exemple Semaine 05

https://github.com/blueur/quiz/tree/week/5-final

## <p style="color: LightCoral;">Projet 06 - Semaine 13 (19.12 - 25.12) : Révision</p>

#### Déploiement

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

#### Améliorations

| Temps estimé | Temps passé | Difficultés rencontrées | Solutions trouvées | Explications et réflexions | Suite du projet |
| ------------ | ----------- | ----------------------- | ------------------ | -------------------------- | --------------- |
|              |             |                         |

### Aides

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

- Vue.js : https://fr.vuejs.org/guide/introduction
- Bootstrap : https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Bootstrap Icons : https://icons.getbootstrap.com/

#### Vérification

- Pour vérifier que le code est correct localement, on peut construire le projet :

  - npm run build

- Résultat final :
  - https://blueur.github.io/quiz/

## Évaluation

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
