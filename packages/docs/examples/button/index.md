<style scoped>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .lam-button {
        margin:10px 5px !important
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
    a {
      all: initial
    }
    a:hover {
      all: initial
    }
</style>

# Button 按钮

## 基础用法

共有主要、警告、危险三种按钮的样式。

<div class="example">
    <div>
        <lam-button>默认按钮</lam-button>
        <!-- <lam-button icon="edit" type="primary">主要按钮</lam-button> -->
        <lam-button type="primary">主要按钮</lam-button>
        <!-- <lam-button type="info">信息按钮</lam-button> -->
        <lam-button type="warning">警告按钮</lam-button>
        <lam-button type="danger">危险按钮</lam-button>
        <!-- <lam-button type="text">文字按钮</lam-button>
        <br>
        <br>
        <lam-button plain>朴素按钮</lam-button>
        <lam-button type="primary" plain>主要按钮</lam-button>
        <lam-button type="primary" plain>主要按钮</lam-button>
        <lam-button type="info" plain>信息按钮</lam-button>
        <lam-button type="warning" plain>警告按钮</lam-button>
        <lam-button type="danger" plain>危险按钮</lam-button>
        <br>
        <br>
        <lam-button round>圆角按钮</lam-button>
        <lam-button type="primary" round>主要按钮</lam-button>
        <lam-button type="primary" round>主要按钮</lam-button>
        <lam-button type="info" round>信息按钮</lam-button>
        <lam-button type="warning" round>警告按钮</lam-button>
        <lam-button type="danger" round>危险按钮</lam-button> -->
    </div>

</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <lam-button>默认按钮</lam-button>
    <lam-button type="primary">主要按钮</lam-button>
    <lam-button type="warning">警告按钮</lam-button>
    <lam-button type="danger">危险按钮</lam-button>
  </div>
</template>
<script lang="ts" setup>
// import { lam-button } from "@lam-ui/components";
</script>
<style>
.lam-button {
  margin-right: 10px;
}
</style>
```

</details>


## 调整尺寸

<div class="example">
    <div>
        <lam-button>默认按钮</lam-button>
        <lam-button size="large">大型按钮</lam-button>
        <lam-button size="medium">中等按钮</lam-button>
        <lam-button size="small">小型按钮</lam-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <lam-button>默认按钮</lam-button>
    <lam-button size="large">大型按钮</lam-button>
    <lam-button size="medium">中等按钮</lam-button>
    <lam-button size="small">小型按钮</lam-button>
  </div>
</template>
<script lang="ts" setup>
import { lam-button } from "@lam-ui/components";
</script>
<style>
.lam-button {
  margin-right: 10px;
}
</style>
```

</details>
