<template>
  <button class="lam-button" :class="styleClass">
    <Icon v-if="icon" :name="icon"></Icon>
    <span><slot /></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, toRef } from 'vue'
import { buttonProps } from './types.ts'
import Icon from '../icon/icon.vue'

export default defineComponent({
  name: 'LamButton',
  components: { Icon },
  props: buttonProps,
  setup(props) {
    // toRef 使prop.type能响应更新
    const type = toRef(props, 'type')
    const icon = toRef(props, 'icon')
    const styleClass = computed(() => {
      return {
        [`${props.type}`]: props.type,
        [`${props.size ? `lam-button--${props.size}` : ''}`]: props.size
      }
    }) 
    return {
      styleClass,
      icon
    }
  },
})
</script>

<style lang="less">
@import '../style/theme.less';
</style>
<style lang="less" scoped>
@import 'styles.less';

</style>