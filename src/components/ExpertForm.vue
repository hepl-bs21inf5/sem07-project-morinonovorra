<script setup lang="ts">
import { computed, ref } from 'vue'
import { QuestionState } from '@/models'
import ExpertRadio from '@/components/ExpertRadio.vue'
import ExpertText from '@/components/QuestionText.vue'
import ExpertCheckbox from './ExpertCheckbox.vue'

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
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\2a19e9e53280c4d258b8fd2022bcde34.jpg"
          alt="planètes"
          class="question-image"
        />
        <ExpertRadio
          id="planete"
          v-model="questionStates[0]"
          text="quelle est la planète la plus dense du système solaire ?"
          :options="[
            { value: 'jupiter', text: 'jupiter' },
            { value: 'saturne', text: 'saturne' },
            { value: 'mercure', text: 'mercure' },
            { value: 'terre', text: 'terre' },
          ]"
          answer="terre"
          answer-detail="la terre est la planète la plus dense du système solaire, avec une densité moyenne d'environ 5,52 g/cm3."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 2 : littérature</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\onu.jpg"
          alt="planètes"
          class="question-image"
        />
        <ExpertRadio
          id="oeuvre"
          v-model="questionStates[1]"
          text="Quelle est la seule oeuvre à avoir été traduite dans toutes les langues officielles de l'onu ?"
          :options="[
            { value: 'le petit prince', text: 'le petit prince' },
            { value: 'les misérables', text: 'les misérables' },
            { value: '1984', text: '1984' },
            { value: 'harry potter', text: 'harry potter' },
          ]"
          answer="le petit prince"
          answer-detail="'le petit prince' d'antoine de saint-exupéry a été traduit dans toutes les langues officielles de l'onu."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 3 : capitale</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\Карта флага Казахстана _ Премиум Фото.jpeg"
          alt="ordre planètes"
          class="question-image"
        />
        <ExpertRadio
          id="capitale"
          v-model="questionStates[2]"
          text="quelle est la capitale du kazakhstan ?"
          :options="[
            { value: 'almaty', text: 'almaty' },
            { value: 'tachkent', text: 'tachkent' },
            { value: 'astana', text: 'astana' },
            { value: 'achgabat', text: 'achgabat' },
          ]"
          answer="astana"
          answer-detail="astana est connue pour son architecture futuriste, symbole du développement rapide du pays, et elle a remplacé almaty comme capitale en 1997 pour des raisons stratégiques et géographiques ; tachkent est la capitale de l'ouzbékistan, et achgabat du turkménistan."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 4 : choix multiples</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\la-mer-caspienne.jpeg"
          alt="Mer Caspienne"
          class="question-image"
        />
        <ExpertCheckbox
          id="membres"
          v-model="questionStates[3]"
          text="quels pays bordent la mer caspienne ?"
          :options="[
            { value: 'russie', text: 'russie' },
            { value: 'turquie', text: 'turquie' },
            { value: 'iran', text: 'iran' },
            { value: 'azerbaidjan', text: 'azerbaïdjan' },
            { value: 'kazakhstan', text: 'kazakhstan' },
            { value: 'ouzbekistan', text: 'ouzbékistan' },
            { value: 'turkmenistan', text: 'turkménistan' },
            { value: 'irak', text: 'irak' },
          ]"
          :answer="['russie', 'kazakhstan', 'iran', 'azerbaïdjan', 'turkménistan']"
          answer-detail="la mer caspienne, alimentée principalement par la volga, est bordée par cinq pays : la russie, le kazakhstan, l'iran, l'azerbaïdjan et le turkménistan ; la turquie et l'ouzbékistan n'y ont pas d'accès direct."
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 5 : réponse libre</h5>
        <img
          src="C:\Users\morino\OneDrive\Hepl\Ba3\INF5 - Programmation Web et base de données\sem07-project-morinonovorra\images\danube.jpg"
          alt="danube"
          class="question-image"
        />
        <ExpertText
          id="danube"
          v-model="questionStates[4]"
          text="combien de pays d'europe sont traversés ou longés par le danube ?"
          answer="10"
          :accepted-answers="['dix', '10', 'une dizaine']"
          answer-detail="le danube, second plus long fleuve d'europe derrière la volga, est un fleuve qui traverse ou longe dix pays d'europe : l'allemagne, l'autriche, la slovaquie, la hongrie, la croatie, la serbie, la bulgarie, la roumanie, la moldavie et l'ukraine."
          placeholder="indice : la carte"
        />
      </div>
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
