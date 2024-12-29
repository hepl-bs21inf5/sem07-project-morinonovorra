<script setup lang="ts">
import { computed, ref } from 'vue'
import { QuestionState } from '@/models'
import ExpertRadio from '@/components/ExpertRadio.vue'
import ExpertText from '@/components/QuestionText.vue'
import ExpertCheckbox from './ExpertCheckbox.vue'

const questionStates = ref<QuestionState[]>([
  QuestionState.Empty, // Question 1
  QuestionState.Empty, // Question 2
  QuestionState.Empty, // Question 3
  QuestionState.Empty, // Question 4
  QuestionState.Empty, // Question Checkbox
])

const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)

const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)

const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
)

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
  <div class="quiz-container">
    <form @submit="submit">
      <div class="question">
        <h5>question 1 : sciences</h5>
        <img src="@/assets/images/densite_planetes.jpg" alt="planètes" class="question-image" />
        <ExpertRadio
          id="planete"
          v-model="questionStates[0]"
          text="quelle est la planète la plus dense du système solaire ?"
          :options="[
            { value: 'jupiter', text: 'jupiter' },
            { value: 'saturne', text: 'saturne' },
            { value: 'mercure', text: 'mercure' },
            { value: 'terre', text: 'terre' },
          ]"
          answer="terre"
          answer-detail="la terre est composée d'un noyau métallique massif qui représente environ 32% de sa masse totale, ce qui explique sa densité exceptionnelle ; de plus, les planètes gazeuse, bien qui gigantesques, sont beaucoup moins denses que la terre à cause de leur composition essentiellement faite d'hydrogène et d'hélium"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 2 : littérature</h5>
        <img src="@/assets/images/onu.jpg" alt="planètes" class="question-image" />
        <ExpertRadio
          id="oeuvre"
          v-model="questionStates[1]"
          text="quelle est la seule oeuvre à avoir été traduite dans toutes les langues officielles de l'onu ?"
          :options="[
            { value: 'le petit prince', text: 'le petit prince' },
            { value: 'les misérables', text: 'les misérables' },
            { value: '1984', text: '1984' },
            { value: 'harry potter', text: 'harry potter' },
          ]"
          answer="le petit prince"
          answer-detail="avec plus de 500 traductions, 'le petit prince' est un phénomène littéraire mondial, souvent utilisé pour enseigner des valeurs universelles comme l'amitié et la curiosité ; le message intemporel du livre - voir avec le coeur plutôt qu'avec les yeux - trouve un écho particulier dans un monde de plus en plus technologique"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 3 : capitale</h5>
        <img src="@/assets/images/kazakhstan.jpg" class="question-image" />
        <ExpertRadio
          id="capitale"
          v-model="questionStates[2]"
          text="quelle est la capitale du kazakhstan ?"
          :options="[
            { value: 'almaty', text: 'almaty' },
            { value: 'tachkent', text: 'tachkent' },
            { value: 'astana', text: 'astana' },
            { value: 'achgabat', text: 'achgabat' },
          ]"
          answer="astana"
          answer-detail="astana, autrefois appelée nur-sultan, est un exemple de mégapole moderne surgie de nulle part, sa transformation rapide illustre l'ambition économique et politique du kazakhstan ; parmi ses bâtiments célèbres, on trouve le palais de la paix et de la réconciliation, une pyramide futuriste qui reflète la diversité religieuse et culturelle du pays"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 4 : choix multiples</h5>
        <img src="@/assets/images/caspienne.jpg" alt="Mer Caspienne" class="question-image" />
        <ExpertCheckbox
          id="membres"
          v-model="questionStates[3]"
          text="quels pays bordent la mer caspienne ?"
          :options="[
            { value: 'russie', text: 'russie' },
            { value: 'turquie', text: 'turquie' },
            { value: 'iran', text: 'iran' },
            { value: 'azerbaidjan', text: 'azerbaïdjan' },
            { value: 'kazakhstan', text: 'kazakhstan' },
            { value: 'ouzbekistan', text: 'ouzbékistan' },
            { value: 'turkmenistan', text: 'turkménistan' },
            { value: 'irak', text: 'irak' },
          ]"
          :answer="['russie', 'kazakhstan', 'iran', 'azerbaïdjan', 'turkménistan']"
          answer-detail="la mer caspienne est unique : à mi-chemin entre un lac et une mer, elle contient environ 40% de l'eau salée de surface du monde ; elle est bordée par des pays aux ressources naturelles abondantes (russie, kazakhstan, iran, azerbaïdjan et turkménistan), notamment du pétrole et d ugaz, ce qui en fait un région clé sur le plan géopolitique"
        />
      </div>
    </form>
    <form @submit="submit">
      <div class="question">
        <h5>question 5 : réponse libre</h5>
        <img src="@/assets/images/danube.jpg" alt="danube" class="question-image" />
        <ExpertText
          id="danube"
          v-model="questionStates[4]"
          text="combien de pays d'europe sont traversés ou longés par le danube ?"
          answer="10"
          :accepted-answers="['dix', '10', 'une dizaine']"
          answer-detail="le danube, second plus long fleuve d'europe derrière la volga, est un fleuve qui traverse ou longe dix pays d'europe : allemagne, autriche, slovaquie, hongrie, croatie, serbie, bulgarie, roumanie, moldavie et ukraine ; il traverse des capitales comme vienne, bratislava, budapest et belgrade, reflétant la diversité culture de l'europre centrale et orientale"
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
        <p v-if="score === totalScore" class="congratulations">score parfait, impressionnant !</p>
        <p v-else-if="score === 1">tu n'as pas tout faux, courage !</p>
        <p v-else-if="totalScore - score >= 2 && totalScore - score <= 4">
          courage, tu as de bonnes bases !
        </p>
        <p v-else-if="totalScore - score === 1">une petite erreur, mais tu assures !</p>
        <p v-else>oups, ça arrive aussi aux meilleurs !</p>
      </div>
      <!--<div>Debug états : {{ questionStates }}</div>-->
    </form>
  </div>
</template>
