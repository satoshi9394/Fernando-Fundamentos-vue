<template>
  <h2>{{ customTitle }}</h2>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <p data-testid="counter">{{ counter }}</p>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    title: String,
    start: {
      type: Number,
      //required: true,
      default: 100,
      validator( value ) {
        return value > 100
      }
    }
  },
  data() {
    return {
      counter: this.start
    };
  },
  methods: {
    increase() {
      this.counter++
    },
    decrease() {
      this.counter--
    }
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || 'Counter'
    }
  }

}
</script>

<style>
  button {
    background-color: #64bb87;
    border-radius: 5px;
    color: red;
    cursor: pointer;
    margin: 5px;
    padding: 5px 15px;
    transition: 0.3px ease-in-out;
  }
  button:hover {
    background-color: #5aa67b;
    transition: 0.3 ease-in-out;
  }

</style>