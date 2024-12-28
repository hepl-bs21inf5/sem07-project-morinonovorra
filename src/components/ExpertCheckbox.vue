<script setup lang="ts">
import { QuestionState } from '@/models'
import { computed, ref, watch, type PropType } from 'vue'

const model = defineModel<QuestionState>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: Array as PropType<string[]>, required: true },
  answerDetail: { type: String, default: '' },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})

const checkedNames = ref<string[]>([])

// Calculer le nombre de réponses correctes sélectionnées
const correctAnswersCount = computed(
  () => checkedNames.value.filter((name) => props.answer.includes(name)).length,
)

// Déterminer si toutes les réponses sont correctes
const allCorrect = computed(
  () =>
    props.answer.every((ans) => checkedNames.value.includes(ans)) &&
    props.answer.length === checkedNames.value.length,
)

const shuffledOptions = ref<{ value: string; text: string }[]>([])

//Ajouter un Mélangeur pour Les Options
const shuffleArray = (array: { value: string; text: string }[]) => {
  return array
    .map((item) => ({ ...item, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ sortKey, ...item }) => item)
}

shuffledOptions.value = shuffleArray(props.options)

watch(
  checkedNames,
  () => {
    if (checkedNames.value.length === 0) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true },
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    const isCorrect =
      props.answer.every((ans) => checkedNames.value.includes(ans)) &&
      props.answer.length === checkedNames.value.length
    model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    checkedNames.value = []
  }
})
</script>

<template>
  <div>
    <p>{{ props.text }}</p>
    <div v-for="option in shuffledOptions" :key="option.value" class="form-check">
      <input
        :id="`${props.id}-${option.value}`"
        v-model="checkedNames"
        class="form-check-input"
        type="checkbox"
        :value="option.value"
        :disabled="
          model === QuestionState.Submit ||
          model === QuestionState.Correct ||
          model === QuestionState.Wrong
        "
      />
      <label class="form-check-label" :for="`${props.id}-${option.value}`">
        {{ option.text }}
      </label>
    </div>
  </div>

  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">alors là, rien à dire ! +1</p>
    <p v-if="correctAnswersCount === 0" class="text-danger">0 / 5, ça arrive !</p>
    <p v-else-if="correctAnswersCount === 1" class="text-warning">1 / 5, bien essayé !</p>
    <p v-else-if="correctAnswersCount === 2" class="text-warning">2 / 5, pas mal !</p>
    <p v-else-if="correctAnswersCount < props.answer.length" class="text-warning">
      {{ correctAnswersCount }} / 5, quel niveau !
    </p>
    <p class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
</template>
