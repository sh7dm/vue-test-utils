<template>
  <div><slot /></div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
class App extends Vue {
  msg = 123
}

export default App
</script>
