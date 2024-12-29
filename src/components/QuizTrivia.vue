<script setup lang="ts">
import QuestionRadio from "@/components/QuestionRadio.vue"
import { QuestionState } from '@/models'
import { reactive, computed, ref } from 'vue'

const questions = ref<
  {
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }[]
>([])

const answers = reactive<{ [key: number]: QuestionState }>({})
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

function submit(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}

function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}

fetch('https://opentdb.com/api.php?amount=10&type=multiple')
  .then((response) => response.json())
  .then((data) => {
    questions.value = data.results
    questions.value.forEach((_, index) => {
      answers[index] = QuestionState.Empty
      questionStates.value.push(QuestionState.Empty)
    })
  })
</script>

<template>
  <div class="quiz-container">
    <form @submit="submit">
      <QuestionRadio
        v-for="(question, index) in questions"
        :id="index.toString()"
        :key="index"
        answer=""
        :text="question.question"
        :options="[
          { value: question.correct_answer, text: question.correct_answer },
          ...question.incorrect_answers.map((answer) => ({
            value: answer,
            text: answer,
          })),
        ]"
      />
      <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">
        terminer
      </button>
      &nbsp;

      <button class="btn btn-secondary" @click="reset">réinitialiser</button>
      <div v-if="submitted">votre score est de : {{ score }} / {{ totalScore }}</div>
    </form>
  </div>
</template>
