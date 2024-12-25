<script setup lang="ts">
import { QuestionState } from '@/utils/models'
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
    <div v-for="option in props.options" :key="option.value" class="form-check">
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
</template>

<!--
    code pour essayer d'avoir phrases différentes selon nbre de questions justes
    <div v-if="model === QuestionState.Submit">
      <p v-if="correctAnswersCount === 0" class="text-danger">
        Oups ! Aucune réponse correcte. Essayez à nouveau !
      </p>
      <p v-else-if="correctAnswersCount === 1" class="text-warning">
        Une réponse correcte, c'est un bon début, mais il en manque encore !
      </p>
      <p v-else-if="correctAnswersCount < props.answer.length" class="text-warning">
        {{ correctAnswersCount }} réponses correctes, continuez comme ça !
      </p>
      <p v-else class="text-success">Magnifique ! Vous avez trouvé toutes les bonnes réponses !</p>
      <p class="blockquote-footer">{{ props.answerDetail }}</p>
    </div>

    <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
      <p v-if="model === QuestionState.Correct" class="text-success">Juste, bien joué !</p>
      <p v-else class="text-danger">Faux ! Les réponses étaient : {{ props.answer.join(', ') }}</p>
      <p class="blockquote-footer">{{ props.answerDetail }}</p>
    </div>
  </div>
</template>
-->

<!--
<template>
<div class="form-check">
    <input
      id="checkboxJane"
      v-model="checkedNames"
      class="form-check-input"
      type="checkbox"
      value="Jane"
    />
    <label class="form-check-label" for="checkboxJane">Jane</label>
  </div>
<div class="form-check">
    <input
      id="checkboxJohn"
      v-model="checkedNames"
      class="form-check-input"
      type="checkbox"
      value="John"
    />
    <label class="form-check-label" for="checkboxJohn">John</label>
  </div>




const checkedNames = ref<string[]>([]) // Utilisation de votre `checkedNames`

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
    <div v-for="option in props.options" :key="option.value" class="form-check">
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
    <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
      <p v-if="model === QuestionState.Correct" class="text-success">Juste, bien joué !</p>
      <p v-else class="text-danger">Faux ! Les réponses étaient : {{ props.answer.join(', ') }}</p>
      <p class="blockquote-footer">{{ props.answerDetail }}</p>
    </div>
  </div>
</template>
-->
