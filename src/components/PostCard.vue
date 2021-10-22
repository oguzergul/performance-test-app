<template>
  <Card>
    <Text :size="['normal','black']">{{ id }}</Text>
    <Text :size="['normal','black']" class="ml-4">{{ title }}</Text>
  </Card>
</template>

<script>

import Card from "./Card";
import Text from "./Text";

export default {
  name: 'UserCard',
  props: ['id', 'title'],
  components: {Card, Text}
}
</script>

<style scoped>

</style>