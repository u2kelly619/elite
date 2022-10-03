<template>
  <button class="btn" @click="isHidden = !isHidden">Toggle Section 2</button>
  <div class="container">
    <div class="section1">
      Section 1
    </div>
    <div class="section2" :class="isHidden ? 'hidden': ''">
      Section 2
      <p>{{ this.$store.getters.showData.title }}</p>
      <p>{{ this.$store.getters.showData.descriptionFilterHtml }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isHidden: true,
    }
  },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.btn {
  display: block;
  margin: 10px;
}
.container {
  padding: 0 10px;
  display: flex;
  gap: 10px;
}

.section1 {
  background-color: #d4e2d4;
  width: 150px;
  height: 150px;
  padding: 24px;
}
.section2 {
  background-color: #ecb390;
  width: 300px;
  height: 300px;
  padding: 24px;
}
@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
  .section1 {
    width: 100%;
  }
  .section2 {
    width: 100%;
  }
}

.hidden {
  display: none;
}
</style>
