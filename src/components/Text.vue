<template>
  <component :is="tag" :class="[size,color]">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'Text',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: [String, Array],
      default: 'normal',
      validator: function (value) {
        return ['small', 'normal', 'large', 'xlarge'].indexOf(value[0]) !== -1
      }
    },
    color: {
      type: [String, Array],
      default: 'white',
      validator: function (value) {
        return ['white', 'black'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.white {
  @apply text-white
}

.black {
  @apply text-black
}

.small {
  @apply text-sm
}

.normal {
  @apply text-lg
}

.large {
  @apply text-xl
}

.xlarge {
  @apply text-2xl
}
</style>