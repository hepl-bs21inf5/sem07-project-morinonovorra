<script setup lang="ts">
import { QuestionState } from '@/models'
import { ref, watch } from 'vue'

const model = defineModel<QuestionState>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  acceptedAnswers: { type: Array as () => string[], required: true },
  answerDetail: { type: String, default: '' },
  placeholder: { type: String, default: 'veuillez saisir une réponse' },
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
    const normalizedValue = value.value?.trim().toLowerCase() || ''
    const isCorrect = props.acceptedAnswers.some(
      (answer) => answer.toLowerCase() === normalizedValue,
    )
    model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    value.value = null
  }
})
</script>

<template>
  <label for="props.id" class="form-label">
    {{ props.text }}
  </label>
  <input
    id="props.id"
    v-model="value"
    class="form-control"
    :disabled="
      model === QuestionState.Submit ||
      model === QuestionState.Correct ||
      model === QuestionState.Wrong
    "
    :placeholder="props.placeholder"
  />
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">magnifique ! +1</p>
    <p v-else class="text-danger">presque ! </p>
    <p class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
</template>

<style scoped>
.text-danger {
  color: red !important;
}
</style>
