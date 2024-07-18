<template>
  <div>
    <icon
      class="star"
      :color="score >= item ? activeColor : ''"
      @click="rating(item)"
      name="shoucang"
      v-for="item in fullScore"
      :key="item"
    ></icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import icon from "../icon/icon.vue";
import { rateProps } from "./types";

const props = defineProps(rateProps);
const emit = defineEmits(["rate"]);
const activeColor = '#ffb712';
let fullScore = ref(5);
let score = ref(props.score || 0);
const rating = (num) => {
  console.log("score", num);
  score.value = num;
  emit("rate", num);
};
</script>

<style lang="less" scoped>
.star {
  cursor: pointer;
}
</style>
