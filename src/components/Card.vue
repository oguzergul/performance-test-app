<template>
  <div class="p-2 border rounded-sm mt-4">
    <slot></slot>
  </div>
</template>

<script>
import Text from "./Text";

export default {
  name: 'Card',
  components: {Text}
}
</script>

<style scoped>

</style>