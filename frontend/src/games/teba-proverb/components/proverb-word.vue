<template>
  <v-btn
    v-for="(letter, index) in word"
    :key="index"
    :text="letter.hide ? '?' : letter.value"
    :ripple="false"
    style="cursor: default"
    :class="{
      'letter pa-0': true,
      'first-btn': isFirst(index, word.length),
      'last-btn': isLast(index, word.length),
      'solo-btn': word.length === 1
    }"
    :style="{ 'font-size': display.xs.value ? '1rem' : '1.2rem' }"
    :size="display.xs.value ? 'x-small' : 'large'"
    rounded="0"
    elevation="0"
    :color="getLetterColor(letter)"
  />
</template>

<script setup lang="ts">
import { proverbWord } from '../definitions'
import { useDisplay } from 'vuetify'
import { marks, proverbLetter } from '../definitions'
import game from '../store'

defineProps<{ word: proverbWord }>()
const display = useDisplay()

const isFirst = (index: number, wordLength: number) =>
  wordLength === 1 ? false : index === 0

const isLast = (index: number, wordLength: number) =>
  wordLength === 1 ? false : index === wordLength - 1

const getLetterColor = (letter: proverbLetter) => {
  if (marks.includes(letter.value)) return 'accent'
  if (!game.tries) return 'error'

  return letter.hide ? 'secondary' : 'green-lighten-1'
}
</script>

<style lang="scss" scoped>
.first-btn {
  border-radius: 20rem 0rem 0rem 20rem !important;
}

.last-btn {
  border-radius: 0rem 20rem 20rem 0rem !important;
}

.solo-btn {
  border-radius: 20rem !important;
}

.letter {
  font-size: 1.5rem;
}
</style>
