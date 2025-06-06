<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const rate = ref<number | null>(null)
const rubAmount = ref(0)

const fetchRate = async () => {
  try {
    const res = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
    const data = await res.json()
    rate.value = data.rates.RUB
  } catch (e) {
    console.error(e)
  }
}

onMounted(fetchRate)

const dollars = computed(() => {
  if (!rate.value) return 0
  return rubAmount.value / rate.value
})
</script>

<template>
  <div class="exchange">
    <h1>Курс доллара к рублю</h1>
    <p v-if="rate">1 USD = {{ rate.toFixed(2) }} RUB</p>
    <p v-else>Загрузка курса...</p>
    <div class="converter">
      <label>Введите сумму в рублях:</label>
      <el-input v-model.number="rubAmount" placeholder="RUB" />
    </div>
    <p>Это примерно {{ dollars.toFixed(2) }} USD</p>
  </div>
</template>

<style scoped>
.exchange {
  padding: 2rem;
  color: #eee;
}
.converter {
  margin: 1rem 0;
  max-width: 300px;
}
</style>
