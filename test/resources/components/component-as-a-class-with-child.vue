<template>
  <div>
    <a-component />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import AComponent from './component.vue'

@Component({
  components: {
    AComponent
  }
})
class CogPage extends Vue {}

export default CogPage
</script>
