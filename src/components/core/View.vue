<template>
  <v-content class="py-5">
    <router-view />
  </v-content>
</template>

<script>
export default {
  metaInfo() {
    return {
      titleTemplate: '%s — 明信塗装工業'
    };
  },

  watch: {
    $route: function () {
      this.$nextTick(() => this.$vuetify.goTo(0));
    }
  }
};
</script>
