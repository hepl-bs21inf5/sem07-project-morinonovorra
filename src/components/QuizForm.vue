<script setup lang="ts">
import { computed, ref } from 'vue'

const cheval = ref<string | null>(null)
const pattes = ref<string | null>(null)
const capitale = ref<string | null>(null)
const filled = computed<boolean>(
  () => cheval.value !== null && pattes.value !== null && capitale.value !== null,
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
  if (capitale.value == 'Berne') {
    score += 1
  }
  alert(`Votre score est de ${score} sur 3`)
}

function reset(event: Event): void {
  event.preventDefault()

  cheval.value = null
  pattes.value = null
  capitale.value = null
}
</script>

<template>
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
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
    <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
  </form>
</template>
