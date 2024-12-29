<script setup lang="ts">
import { computed, ref } from 'vue'
import { QuestionState } from '@/models'
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import QuestionCheckbox from './QuestionCheckbox.vue'

const questionStates = ref<QuestionState[]>([
  QuestionState.Empty, // Question 1
  QuestionState.Empty, // Question 2
  QuestionState.Empty, // Question 3
  QuestionState.Empty, // Question 4
  QuestionState.Empty, // Question Checkbox
])

//vérifie si toutes les questions sont remplies
const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)

//vérifie si le quiz est soumis
const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)

//calcul du score actuel
const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
)

//score total (nombre de questions)
const totalScore = computed<number>(() => questionStates.value.length)

function submit(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}

function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}
</script>

<template>
  <div class="quiz-container" >
    <form @submit="submit">
      <div class="question">
        <h5>question 1 : sciences</h5>
        <img src="@/assets/images/ordre_planetes.jpg" alt="ordre planètes" class="question-image" />
        <QuestionRadio
          id="planete"
          v-model="questionStates[0]"
          text="quelle est la cinquième planète la plus proche du soleil ?"
          :options="[
            { value: 'jupiter', text: 'jupiter' },
            { value: 'saturne', text: 'saturne' },
            { value: 'mars', text: 'mars' },
            { value: 'neptune', text: 'neptune' },
          ]"
          answer="jupiter"
          answer-detail="en astronomie, la terre est souvent appelée la 'zone habitable', car elle se trouve à la distance idéale pour maintenir de l'eau liquide - un prérequis pour la vie telle que nous la connaissons"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 2 : littérature et arts</h5>
        <img src="@/assets/images/nuit_etoilee.jpg" alt="nuit étoilée" class="question-image" />
        <QuestionRadio
          id="oeuvre"
          v-model="questionStates[1]"
          text="quel artiste a peint 'la nuit étoilée' ?"
          :options="[
            { value: 'claude monet', text: 'claude monet' },
            { value: 'pablo picasso', text: 'pablo picasso' },
            { value: 'vincent van gogh', text: 'vincent van gogh' },
            { value: 'edvard munch', text: 'edvard munch' },
          ]"
          answer="vincent van gogh"
          answer-detail="peinte en 1889, cette oeuvre montre comment van gogh était capable de transmuter sa souffrance en art universel ; ironiquement, il ne considérait pas cette toile comme une réussite majeure"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 3 : capitale</h5>
        <img src="@/assets/images/australie.jpg" alt="ordre planètes" class="question-image" />
        <QuestionRadio
          id="capitale"
          v-model="questionStates[2]"
          text="quelle est la capitale de l'australie ?"
          :options="[
            { value: 'melbourne', text: 'melbourne' },
            { value: 'perth', text: 'perth' },
            { value: 'sydney', text: 'sydney' },
            { value: 'canberra', text: 'canberra' },
          ]"
          answer="canberra"
          answer-detail="contrairement à la plupart des capitales, canberra n'est ni la plus grande ni la plus ancienne ville d'australie ; elle est une curiosité politique, choisie pour apaiser la rivalité entre sydney et melbourne"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 4 : choix multiples</h5>
        <img src="@/assets/images/europecarte.jpg" alt="slovaquie" class="question-image" />
        <QuestionCheckbox
          id="membres"
          v-model="questionStates[3]"
          text="quels sont les pays qui entourent la slovaquie ?"
          :options="[
            { value: 'republique tcheque', text: 'république tchèque' },
            { value: 'slovenie', text: 'slovénie' },
            { value: 'ukraine', text: 'ukraine' },
            { value: 'roumanie', text: 'roumanie' },
            { value: 'autriche', text: 'autriche' },
            { value: 'bielorussie', text: 'biélorussie' },
            { value: 'pologne', text: 'pologne' },
            { value: 'hongrie', text: 'hongrie' },
          ]"
          :answer="['republique tcheque', 'ukraine', 'autriche', 'pologne', 'hongrie']"
          answer-detail="la slovaquie partage avec ses voisins (république tchèque, ukraine, autriche, pologne et hongrie) une histoire compliqueé : elle a été partie intégrante de la tchécoslovaquie jusqu'en 1993 et était sous domination austro-hongroise avant cela"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 5 : réponse libre</h5>
        <img src="@/assets/images/volcan.jpg" alt="volcan" class="question-image" />
        <QuestionText
          id="volcan"
          v-model="questionStates[4]"
          text="quel est le pays qui possède le plus de volcans actifs ?"
          answer="indonésie"
          :accepted-answers="['indonésie', 'indonesia', 'Indonésie', 'Indonesie', 'Indonesia']"
          answer-detail="avec plus de 130 volcans actifs, l'indonésie est une zone volcanique majeure ; en effet le pays se trouve ssur la ceinture de feu du pacifique, où les plaques tectoniques s'entrechoquent, créant des volcans, des séismes et des tsunamis"
          placeholder="indice : la carte"
        />
      </div>

      <br />
      <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">
        terminer
      </button>
      &nbsp;

      <button class="btn btn-secondary" @click="reset">réinitialiser</button>
      <div v-if="submitted">
        <p>votre score est de : {{ score }} / {{ totalScore }}</p>
        <p v-if="score === totalScore" class="congratulations">c'est un sans-faute, chapeau !</p>
        <p v-else-if="score === 1">au moins un de bon, c'est un début !</p>
        <p v-else-if="totalScore - score >= 2 && totalScore - score <= 4">
          pas mal, mais il reste du boulot !
        </p>
        <p v-else-if="totalScore - score === 1">presque un sans-faute, t'es sur la bonne voie !</p>
        <p v-else>oups, on a vu mieux !</p>
      </div>
      <!--<div>résultats : {{ questionStates }}</div>-->
    </form>
  </div>
</template>
