<template>
  <div class="home">
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-layout column align-center>
          <v-btn :to="{ name: 'signup' }">Signup</v-btn>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/Home.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
};
</script>
