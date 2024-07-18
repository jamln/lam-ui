<template>
  <div>
    <!-- <lam-button></lam-button> -->
    <LamButton type="success"></LamButton>
  </div>
</template>

<script setup lang="ts">
function createArray<T>(value: T, length: number): T[] {
  let arr: T[] = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}

// let fooArray = createArray<string>('foo', 3);
  let fooArray = createArray('foo', 3);
console.log(fooArray);

</script>

<style scoped>

</style>