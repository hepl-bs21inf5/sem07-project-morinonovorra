<script setup lang="ts">
import { computed, ref } from 'vue'
import { QuestionState } from '@/utils/models'
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
        <QuestionRadio
          id="planete"
          v-model="questionStates[0]"
          text="Quelle est la planète la plus dense du système solaire ?"
          :options="[
            { value: 'jupiter', text: 'Jupiter' },
            { value: 'saturne', text: 'Saturne' },
            { value: 'mercure', text: 'Mercure' },
            { value: 'terre', text: 'Terre' },
          ]"
          answer="terre"
          answer-detail="La Terre est la planète la plus dense du système solaire, avec une densité moyenne d'environ 5,52 g/cm3."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 2 : littérature</h5>
        <QuestionRadio
          id="oeuvre"
          v-model="questionStates[1]"
          text="Quelle est la seule oeuvre à avoir été traduite dans toutes les langues officielles de l'ONU ?"
          :options="[
            { value: 'le petit prince', text: 'Le Petit Prince' },
            { value: 'les misérables', text: 'Les Misérables' },
            { value: '1984', text: '1984' },
            { value: 'harry potter', text: 'Harry Potter' },
          ]"
          answer="le petit prince"
          answer-detail="'Le Petit Prince' d'Antoine de Saint-Exupéry a été traduit dans toutes les langues officielles de l'ONU."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>Question 3 : Une seule réponse</h5>
        <QuestionRadio
          id="capitale"
          v-model="questionStates[2]"
          text="Quelle est la capitale du Kazakhstan ?"
          :options="[
            { value: 'almaty', text: 'Almaty' },
            { value: 'tachkent', text: 'Tachkent' },
            { value: 'astana', text: 'Astana' },
            { value: 'achgabat', text: 'Achgabat' },
          ]"
          answer="astana"
          answer-detail="Vrai ! La capitale du Kazakhstan est Astana."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>Question 4 : Plusieurs réponses</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\la-mer-caspienne.jpeg"
          alt="Mer Caspienne"
          class="question-image"
        />
        <QuestionCheckbox
          id="membres"
          v-model="questionStates[3]"
          text="Quels pays bordent la mer Caspienne ?"
          :options="[
            { value: 'russie', text: 'Russie' },
            { value: 'turquie', text: 'Turquie' },
            { value: 'iran', text: 'Iran' },
            { value: 'azerbaidjan', text: 'Azerbaïdjan' },
            { value: 'kazakhstan', text: 'Kazakhstan' },
            { value: 'ouzbekistan', text: 'Ouzbékistan' },
            { value: 'turkmenistan', text: 'Turkménistan' },
            { value: 'irak', text: 'Irak' },
          ]"
          :answer="['Russie', 'Kazakhstan', 'Iran', 'Azerbaïdjan', 'Turkménistan']"
          answer-detail="La mer Caspienne, alimentée principalement par la Volga, est bordée par cinq pays : la Russie, le Kazakhstan, l'Iran, l'Azerbaïdjan et le Turkménistan. La Turquie et l'Ouzbékistan n'y ont pas d'accès direct."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>Question 5 : Question ouverte</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\danube.jpg"
          alt="Danube"
          class="question-image"
        />
        <QuestionText
          id="pi"
          v-model="questionStates[4]"
          text="Combien de pays d'Europe sont traversés par le Danube ?"
          answer="10"
          answer-detail="Le Danube, second plus long fleuve d'Europe derrière la Volga, est un fleuve qui traverse ou longe dix pays d'Europe : l'Allemagne, l'Autriche, la Slovaquie, la Hongrie, la Croatie, la Serbie, la Bulgarie, la Roumanie, la Moldavie et l'Ukraine."
          placeholder="Veuillez saisir un nombre"
        />
      </div>
      <!-- attention prochain paragraphe à mieux regarder/comprendre-->
      <br />
      <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">
        Terminer
      </button>
      &nbsp;

      <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
      <div v-if="submitted">Score : {{ score }} / {{ totalScore }}</div>
      <div>Debug états : {{ questionStates }}</div>
    </form>
  </div>
</template>
