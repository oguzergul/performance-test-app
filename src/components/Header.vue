<template>
  <header class="bg-blue-700 py-3">
    <Container>
      <Text :size="['normal','white']" tag="h1">Performance Tracker App</Text>
    </Container>
  </header>
</template>

<script>
import Container from "./Container";
import Text from "./Text";

export default {
  name: 'Header',
  components: {Text, Container}
}
</script>

<style scoped>

</style>