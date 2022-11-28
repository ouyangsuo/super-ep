<template>
   <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      @select="onSelect"
      background-color="#3a4149"
      text-color="#fff"
      active-text-color="#99ffff">
      <EpMenuUnit
         :menu="menu"
         parentIndex="" />
   </el-menu>
</template>

<script setup>
import EpMenuUnit from "./EpMenuUnit.vue";

const name = "EpMenu"

const { activeIndex } = defineProps({
   activeIndex: String,
   menu: Array,
});
</script>

<style lang="scss" scoped></style>
