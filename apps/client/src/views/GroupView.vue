<script setup lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import baseUrl from '../lib/baseUrl'

const router = useRouter()
function onClick(name: string, id: any) {
  router.push({ path: `/seed_groups/${name}`, query: { id } })
}

const dataListPrograms = ref()
const dataListSeeds = ref()

onMounted(async () => {
  try {
    const responseProg = await axios.get(`${baseUrl}/api/programs`)
    dataListPrograms.value = responseProg.data
    console.log(dataListPrograms.value)

    const responseSeed = await axios.get(`${baseUrl}/api/seed-groups`)
    dataListSeeds.value = responseSeed.data
    console.log(dataListSeeds.value)

  } catch (error) {
    console.log(error)
  }

})
</script>
<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="item in dataListPrograms" :key="item">
      <v-expansion-panel-title>{{ item.name }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list v-for="seed in dataListSeeds" :key="seed">
          <v-list-item @click="onClick(seed.name, seed.id)" v-if="seed.programId == item.id" :title="seed.name"
            :value="seed.name">
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>