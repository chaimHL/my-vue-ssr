<script setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../store/home'
const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)

function add() {
  count.value++
}
</script>

<template>
  <div>
    <h1>about</h1>
    {{ count }}
    <button @click="add">+1</button>
  </div>
</template>
