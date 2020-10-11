<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'rgba(66, 66, 66, .9)'"
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    app
    dark
    elevate-on-scroll
  >
    <!-- <v-img
      alt="Alpha Construction"
      class="shrink"
      max-width="60%"
      src="/static/alpha-construction-logo.png"
    /> -->
    <span class="logo">明信塗装工業</span>
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        :to="item.to"
        text
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      v-else
      aria-label="Open Navigation Drawer"
      @click="toggleDrawer"
    />
  </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    isScrolling: false
  }),

  computed: {
    items() {
      return [
        {
          to: '/',
          text: 'Home'
        },
        {
          to: '/services',
          text: 'Services'
        },
        {
          to: '/projects',
          text: 'Projects'
        },
        {
          to: '/contact',
          text: 'Contact'
        }
      ];
    }
  },

  methods: {
    ...mapMutations(['toggleDrawer']),
    onScroll() {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 25;
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
}
</style>
