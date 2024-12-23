<script setup lang="ts">
import { computed, ref } from 'vue'
import { QuestionState } from '@/utils/models'
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'

const planete = ref<string | null>(null)
const oeuvre = ref<string | null>(null)
const capitale = ref<string | null>(null)
const pi = ref<string | null>(null)
//const correctAnswers = ref<boolean[]>([])
//const score = computed<number>(() => correctAnswers.value.filter((value) => value).length)
//const totalScore = computed<number>(() => correctAnswers.value.length)
const questionStates = ref<QuestionState[]>([])
const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
)
const totalScore = computed<number>(() => questionStates.value.length)
const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)
const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)

/*const filled = computed<boolean>(
  () =>
    cheval.value !== null &&
    pattes.value !== null &&
    capitale.value !== null &&
    reponse.value !== null,
)
*/

/*
calcul si toutes les réponses sont remplies
&& : condition
besoin d'un seul filled : ce qui vérifie qu'on a les bonnes réponses
*/

function submit(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}
/*function submit(event: Event): void {
  event.preventDefault()
  let score: number = 0
  if (cheval.value == 'blanc') {
    score += 1
  }
  if (pattes.value == 'quatre') {
    score += 1
  }
  if (capitale.value == 'berne') {
    score += 1
  }
  if (reponse.value == '26') {
    score += 1
  }
  alert(`Votre score est de ${score} sur 4`)
}
*/

function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}
/*function reset(event: Event): void {
  event.preventDefault()

  cheval.value = null
  pattes.value = null
  capitale.value = null
  reponse.value = null
}
*/
</script>

<template>
  <form @submit="submit">
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
      answer-detail="Vrai ! La Terre est la planète la plus dense du système solaire, avec une densité moyenne d'environ 5,52 g/cm3."
    />
  </form>
  <form @submit="submit">
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
      answer-detail="Vrai ! 'Le Petit Prince' d'Antoine de Saint-Exupéry a été traduit dans toutes les langues officielles de l'ONU."
    />
  </form>
  <form @submit="submit">
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
  </form>
  <form @submit="submit">
    <QuestionText
      id="pi"
      v-model="questionStates[3]"
      text="Quelles sont les 10 premières décimales de pi ?"
      placeholder="Veuillez saisir un nombre"
      answer="14159265"
      answer-detail="Les 10 premières décimales de pi sont : 3, 1415 92 6535."
    />
  </form>

  <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>

  <button class="btn btn-secondary" @click="reset">Réinitialiser</button>

  <div v-if="submitted">Score : {{ score }} / {{ totalScore }}</div>
  <div>Debug états : {{ questionStates }}</div>
</template>

<!--
  <form @submit="submit">
    De quelle couleur est le cheval blanc de Napoléon ?
    <div class="form-check">
      <input
        id="chevalBlanc"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="blanc"
      />
      <label class="form-check-label" for="chevalBlanc">Blanc</label>
    </div>
    <div class="form-check">
      <input
        id="chevalBrun"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="brun"
      />
      <label class="form-check-label" for="chevalBrun">Brun</label>
    </div>
    <div class="form-check">
      <input
        id="chevalNoir"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="noir"
      />
      <label class="form-check-label" for="chevalNoir">Noir</label>
    </div>
    <div class="form-check">
      <input
        id="chevalRose"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="rose"
      />
      <label class="form-check-label" for="chevalRose">Rose</label>
    </div>

    Combien de pattes a un chat ?
    <div class="form-check">
      <input
        id="aucunePatte"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="aucune"
      />
      <label class="form-check-label" for="aucunePatte">Aucune</label>
    </div>
    <div class="form-check">
      <input
        id="deuxPattes"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="deux"
      />
      <label class="form-check-label" for="deuxPattes">Deux</label>
    </div>
    <div class="form-check">
      <input
        id="quatrePattes"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="quatre"
      />
      <label class="form-check-label" for="quatrePattes">Quatre</label>
    </div>
    <div class="form-check">
      <input
        id="dixPattes"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="dix"
      />
      <label class="form-check-label" for="dixPattes">Dix</label>
    </div>

    Quelle est la capitale de la Suisse ?
    <div class="form-check">
      <input
        id="Genève"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="Genève"
      />
      <label class="form-check-label" for="Genève">Genève</label>
    </div>
    <div class="form-check">
      <input
        id="Lausanne"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="Lausanne"
      />
      <label class="form-check-label" for="Lausanne">Lausanne</label>
    </div>
    <div class="form-check">
      <input
        id="Berne"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="Berne"
      />
      <label class="form-check-label" for="Berne">Berne</label>
    </div>
    <div class="form-check">
      <input
        id="Zürich"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="Zürich"
      />
      <label class="form-check-label" for="Zürich">Zürich</label>
    </div>
  </form>
-->
