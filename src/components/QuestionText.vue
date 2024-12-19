<script setup lang="ts">
import { QuestionState } from '@/utils/models'
//import { defineModel } from 'vue'//
import { ref, watch } from 'vue'

const model = defineModel<QuestionState>()
//const reponse = defineModel<string | null>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  answerDetail: { type: String, default: '' },
  placeholder: { type: String, default: 'Veuillez saisir une réponse' },
})

const value = ref<string | null>(null)

watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true },
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    value.value = null
  }
})
</script>

<template>
  <label for="exampleFormControlInput" class="form-label"> Combien de cantons a la Suisse ? </label>
  <input
    id="exampleFormControlInput"
    v-model="value"
    class="form-control"
    placeholder="Veuillez saisir un nombre"
  />
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">Faux ! La réponse était : {{ props.answer }}</p>
    <p class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
</template>

<style scoped>
.text-danger {
  color: purple !important;
}
</style>
