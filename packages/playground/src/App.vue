<script setup lang="ts">
import { reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { ButtonType } from '@lam-ui/components/button/types';
// import { Button } from '@lam-ui/components'
type BtnTypes = typeof ButtonType[number]
// defineProps<{
//   btnType: {
//     type: btnTypes,
//     default: 'danger'
//   }
// }>()
// const btnType : BtnTypes = 'danger'
const btnType = ref<BtnTypes>('danger')
const refVar = ref({ num: 1 })
const reactRaw = [1,2,3]
const object = { id: ref(1) }
const { id } = object

let reactVar = reactive(reactRaw)
const _reactVar = reactVar

const changeType = (): void => {
  const btnTypes = ['primary', 'danger', 'warning'] as const
  const restTypes = btnTypes.filter(type => type !== btnType.value)
  btnType.value = restTypes[Math.round(Math.random())]
  console.log(btnType, reactVar, refVar)
  let temp = [4,5,6]
  reactVar = temp
  console.log(reactVar === temp)
}

const rating = score => {
  console.log('rating', score);
}

// 设置默认主题
window.document.documentElement.setAttribute('data-theme', 'default')

// 动态设置主题色
// document.documentElement.style.setProperty('--color-primary', '#808080')
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    {{ id + 1 }}
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <lam-button @click="changeType" :type="btnType" size="large" icon="fasong">click me</lam-button>
  <lam-icon name="bukejian" color="cyan" :size="40"></lam-icon>
  <lam-rate @rate="rating"></lam-rate>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
