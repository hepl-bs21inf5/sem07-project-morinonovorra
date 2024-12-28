<script setup lang="ts">
import { computed, ref } from 'vue'
import { QuestionState } from '@/models'
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import QuestionCheckbox from './QuestionCheckbox.vue'

const questionStates = ref<QuestionState[]>([
  QuestionState.Empty, // Question 1
  QuestionState.Empty, // Question 2
  QuestionState.Empty, // Question 3
  QuestionState.Empty, // Question 4
  QuestionState.Empty, // Question Checkbox
])

const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)

const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)

const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
)

const totalScore = computed<number>(() => questionStates.value.length)

function submit(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}

function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}
</script>

<template>
  <div class="quiz-container">
    <form @submit="submit">
      <div class="question">
        <h5>question 1 : sciences</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\6043ef3f3ef82d890a6a7bc2bcd899ff.jpg"
          alt="ordre planètes"
          class="question-image"
        />
        <QuestionRadio
          id="planete"
          v-model="questionStates[0]"
          text="quelle est la cinquième planète la plus proche du soleil ?"
          :options="[
            { value: 'jupiter', text: 'jupiter' },
            { value: 'saturne', text: 'saturne' },
            { value: 'mars', text: 'mars' },
            { value: 'neptune', text: 'neptune' },
          ]"
          answer="jupiter"
          answer-detail="petit mémo-technique (regarder la première lettre de chaque mot) : monsieur vous travaillez mal, je suis un nigaud."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 2 : littérature et arts</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\4a9cfdec861d304d61a40b06a402fe7f.jpg"
          alt="nuit étoilée"
          class="question-image"
        />
        <QuestionRadio
          id="oeuvre"
          v-model="questionStates[1]"
          text="quel artiste a peint 'la nuit étoilée' ?"
          :options="[
            { value: 'claude monet', text: 'claude monet' },
            { value: 'pablo picasso', text: 'pablo picasso' },
            { value: 'vincent van gogh', text: 'vincent van gogh' },
            { value: 'edvard munch', text: 'edvard munch' },
          ]"
          answer="vincent van gogh"
          answer-detail="cette oeuvre, peinte en 1889, est l'une des plus célèbres de van gogh ; elle représente un paysage nocturne avec des étoiles tournoyantes, un exemple de son style post-impressionniste unique."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 3 : capitale</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\THE BEST AUSTRALIA FLAG MAP IMAGES - eDigital Agency.jpeg"
          alt="ordre planètes"
          class="question-image"
        />
        <QuestionRadio
          id="capitale"
          v-model="questionStates[2]"
          text="quelle est la capitale de l'australie ?"
          :options="[
            { value: 'melbourne', text: 'melbourne' },
            { value: 'perth', text: 'perth' },
            { value: 'sydney', text: 'sydney' },
            { value: 'canberra', text: 'canberra' },
          ]"
          answer="canberra"
          answer-detail="cette ville a été choisie en 1908 comme compromis entre les deux grandes rivales, sydney et melbourne"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 4 : choix multiples</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\europe.jpg"
          alt="slovaquie"
          class="question-image"
        />
        <QuestionCheckbox
          id="membres"
          v-model="questionStates[3]"
          text="quels sont les pays qui entourent la slovaquie ?"
          :options="[
            { value: 'republique tcheque', text: 'république tchèque' },
            { value: 'slovenie', text: 'slovénie' },
            { value: 'ukraine', text: 'ukraine' },
            { value: 'roumanie', text: 'roumanie' },
            { value: 'autriche', text: 'autriche' },
            { value: 'bielorussie', text: 'biélorussie' },
            { value: 'pologne', text: 'pologne' },
            { value: 'hongrie', text: 'hongrie' },
          ]"
          :answer="['republique tcheque', 'ukraine', 'autriche', 'pologne', 'hongrie']"
          answer-detail="la slovaquie ...."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 5 : réponse libre</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\ceinture-de-feu-du-pacifique.jpg"
          alt="volcan"
          class="question-image"
        />
        <QuestionText
          id="volcan"
          v-model="questionStates[4]"
          text="quel est le pays qui possède le plus de volcans actifs ?"
          answer="indonésie"
          :accepted-answers="['indonésie', 'indonesia', 'Indonésie', 'Indonesie', 'Indonesia' ]"
          answer-detail="l'indonésie, avec plus de 130 volcans actifs, se trouve sur la ceinture de feu du pacifique, une région où l'activité tectonique est intense."
          placeholder="indice : la carte"
        />
      </div>
  
      <br />
      <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">
        Terminer
      </button>
      &nbsp;

      <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
      <div v-if="submitted">votre score est de : {{ score }} / {{ totalScore }}</div>
      <div>résultats : {{ questionStates }}</div>
    </form>
  </div>
</template>
