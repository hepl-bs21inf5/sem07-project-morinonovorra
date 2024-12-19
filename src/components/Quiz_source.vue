<script setup lang="ts">
  import { computed, ref } from 'vue'

  const cheval = ref<string | null>(null)
  const chat = ref<string | null>(null)
  const filled = computed<boolean>(() => cheval.value !== null && chat.value !== null)

  function submit(event: Event): void {
    event.preventDefault()
    let score: number = 0
    if (cheval.value === 'blanc') {
      score += 1
    }
    if (chat.value === '4') {
      score += 1
    }
    alert(`Votre score est de ${score} sur 2`)
  }
  function reset(event: Event): void {
    event.preventDefault()

    cheval.value = null
    chat.value = null
  }
</script>

<template>
  <form>
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
    Combien de pattes a un chat ?
    <div class="form-check">
      <input
        id="chat2"
        v-model="chat"
        class="form-check-input"
        type="radio"
        name="chat"
        value="2"
      />
      <label class="form-check-label" for="chat2">Deux</label>
    </div>
    <div class="form-check">
      <input
        id="chat4"
        v-model="chat"
        class="form-check-input"
        type="radio"
        name="chat"
        value="4"
      />
      <label class="form-check-label" for="chat4">Quatre</label>
    </div>
    <div class="form-check">
      <input
        id="chat6"
        v-model="chat"
        class="form-check-input"
        type="radio"
        name="chat"
        value="6"
      />
      <label class="form-check-label" for="chat6">Six</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">Terminer</button>
    <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
  </form>
</template>
