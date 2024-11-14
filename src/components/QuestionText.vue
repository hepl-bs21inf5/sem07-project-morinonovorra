<script setup lang="ts">
import { defineModel } from 'vue'
const reponse = defineModel<string | null>()
</script>

<template>
  <label for="exampleFormControlInput" class="form-label"> Combien de cantons a la Suisse ? </label>
  <input
    id="exampleFormControlInput"
    v-model="reponse"
    class="form-control"
    placeholder="Veuillez saisir un nombre"
  />
</template>
