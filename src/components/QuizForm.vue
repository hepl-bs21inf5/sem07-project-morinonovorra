<script setup lang="ts">
import { computed, ref } from 'vue'
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'

const cheval = ref<string | null>(null)
const pattes = ref<string | null>(null)
const capitale = ref<string | null>(null)
const reponse = ref<string | null>(null)
const correctAnswers = ref<boolean[]>([])
const score = computed<number>(() => correctAnswers.value.filter((value) => value).length)
const totalScore = computed<number>(() => correctAnswers.value.length)
const filled = computed<boolean>(
  () =>
    cheval.value !== null &&
    pattes.value !== null &&
    capitale.value !== null &&
    reponse.value !== null,
)
/*
calcul si toutes les réponses sont remplies
&& : condition
besoin d'un seul filled : ce qui vérifie qu'on a les bonnes réponses
*/

function submit(event: Event): void {
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

function reset(event: Event): void {
  event.preventDefault()

  cheval.value = null
  pattes.value = null
  capitale.value = null
  reponse.value = null
}
</script>

<template>
  <form @submit="submit">
    <QuestionText
      id="reponse"
      v-model="reponse"
      text="Combien de pattes a un chat ?"
      placeholder="Veuillez saisir un nombre"
    />
  </form>
  <form @submit="submit">
    <QuestionRadio
      id="cheval"
      v-model="correctAnswers[0]"
      answer="blanc"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      :options="[
        { value: 'blanc', text: 'Blanc' },
        { value: 'brun', text: 'Brun' },
        { value: 'noir', text: 'Noir' },
        { value: 'rose', text: 'Rose' },
      ]"
    />
  </form>
  <form @submit="submit">
    <QuestionRadio
      id="pattes"
      v-model="correctAnswers[1]"
      answer="quatre"
      text="Combien de pattes a un chat ?"
      :options="[
        { value: 'aucune', text: 'Aucune' },
        { value: 'deux', text: 'Deux' },
        { value: 'quatre', text: 'Quatre' },
        { value: 'dix', text: 'Dix' },
      ]"
    />
  </form>
  <form @submit="submit">
    <QuestionRadio
      id="capitale"
      v-model="correctAnswers[2]"
      answer="berne"
      text="Quelle est la capitale de la Suisse ?"
      :options="[
        { value: 'geneve', text: 'Genève' },
        { value: 'lausanne', text: 'Lausanne' },
        { value: 'berne', text: 'Berne' },
        { value: 'zurich', text: 'Zürich' },
      ]"
    />
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
    <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
    <div>Réponses correctes : {{ correctAnswers }}</div>
    <div>Score : {{ score }} / {{ totalScore }}</div>
  </form>
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
