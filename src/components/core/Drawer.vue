<template>
  <v-navigation-drawer v-model="inputValue" fixed right temporary>
    <v-row align="center" class="ma-0 pa-3 flex-no-wrap">
      <v-img
        contain
        src="/static/alpha-construction-logo-dark.png"
        width="50"
      />
      <v-btn aria-label="Close" class="ml-4" icon @click="toggleDrawer">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-divider />
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
        <v-list-item-title v-text="item.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState, mapMutations } from 'vuex';

export default {
  data: () => ({
    items: [
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
    ]
  }),

  computed: {
    ...mapState(['drawer']),
    inputValue: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },

  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer'])
  }
};
</script>
