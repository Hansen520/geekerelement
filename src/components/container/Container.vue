<template>
  <section class="el-container" :class="{ 'is-vertical': isVertival }">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: 'ElContainer',
};
</script>
<script setup lang="ts">
import { useSlots, computed, VNode, Component } from 'vue';
interface Props {
  direction?: string;
}
const props = defineProps<Props>();
const slots = useSlots();
console.log(slots.default, 19);
const isVertival = computed(() => {
  if (slots && slots.default) {
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name;
      console.log(tag, 24);
      return tag === 'ElHeader' || tag === 'ElFooter';
    });
  } else {
    return props.direction === 'vertival';
  }
});
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  @include when(vertical) {
    flex-direction: column;
  }
}
</style>
