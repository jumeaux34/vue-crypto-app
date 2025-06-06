<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

type Office = { id: number; name: string; address: string }

const offices: Office[] = [
  { id: 1, name: 'Moscow Center', address: 'Red Square 1, Moscow' },
  { id: 2, name: 'Saint Petersburg', address: 'Nevsky Prospekt 45, SPB' }
]

const form = ref({ office: '', name: '', message: '' })

const submit = () => {
  ElMessage.success('Заявка отправлена!')
  form.value.name = ''
  form.value.message = ''
}
</script>

<template>
  <div class="offices">
    <h1>Наши офисы</h1>
    <ul class="list">
      <li v-for="o in offices" :key="o.id">
        <strong>{{ o.name }}</strong
        ><br />
        {{ o.address }}
      </li>
    </ul>

    <h2>Связаться с менеджером</h2>
    <el-form @submit.prevent="submit" :model="form" label-width="80px">
      <el-form-item label="Офис">
        <el-select v-model="form.office" placeholder="Выберите офис">
          <el-option v-for="o in offices" :key="o.id" :label="o.name" :value="o.name" />
        </el-select>
      </el-form-item>
      <el-form-item label="Имя">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Сообщение">
        <el-input type="textarea" v-model="form.message" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">Отправить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.offices {
  padding: 2rem;
  color: #eee;
}
.list {
  margin-bottom: 2rem;
}
.list li {
  margin-bottom: 0.5rem;
}
</style>
