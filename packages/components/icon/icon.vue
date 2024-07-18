<template>
  <svg class="icon" :color="iconColor" :style="fontSize" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script setup lang="ts">
import './font/iconfont.js'
import './style/index.less'
import { computed, ref } from 'vue'
import { iconProps } from './types'
const props = defineProps(iconProps)
const iconName = computed(() => `#lam-${props.name}`)
// const iconColor = ref(props.color)
const iconColor = computed(() => props.color)
const fontSize = ref(props.size ? `font-size: ${props.size}` : '')
</script>