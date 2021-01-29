<template>
  <div class="body">
    <h1>Directly from db: {{ colors }}</h1>
    <div class="sliders">
      <b-field label="Red">
        <b-slider v-model="red" type="is-danger" :max="255"></b-slider>
      </b-field>
      <b-field label="Green">
        <b-slider v-model="green" type="is-success" :max="255"></b-slider>
      </b-field>
      <b-field label="Blue">
        <b-slider v-model="blue" type="is-info" :max="255"></b-slider>
      </b-field>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  name: "HomePage",
  data() {
    return {
      colors: {},
      red: 0,
      green: 0,
      blue: 0,
    };
  },
  firebase: {
    colors: db.ref("colors"),
  },
  watch: {
    colors: function () {
      this.red = this.colors.red;
      this.green = this.colors.green;
      this.blue = this.colors.blue;
    },
    red: function () {
      this.$firebaseRefs.colors.update({ red: this.red });
    },
    green: function () {
      this.$firebaseRefs.colors.update({ green: this.green });
    },
    blue: function () {
      this.$firebaseRefs.colors.update({ blue: this.blue });
    },
  },
};
</script>

<style>
.sliders {
  width: 50vw;

  /* to put it in the middle */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
