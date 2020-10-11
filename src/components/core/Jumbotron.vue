<template>
  <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '40vh' : '100vh'"
    color="primary"
    tile
  >
    <v-img
      :key="image"
      :src="image"
      gradient="to top, rgba(160, 90, 70, .85), rgba(30, 40, 30, .85)"
      height="100%"
    >
      <v-container fill-height white--text fluid>
        <v-slide-x-transition appear>
          <v-col align="center" justify="center">
            <h1
              :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
              class="my-5 title-fix"
              v-text="title"
            />
            <div class="title font-weight-light mb-3" v-text="subtitle" />
          </v-col>
        </v-slide-x-transition>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    titles: {
      home: {
        title: '「塗る」塗装から「守る」塗装へ',
        subtitle: '手塗りならではの丁寧さ、気持ちを込めた仕上がりが自慢です。'
      },
      services: {
        title: '最高の塗装を',
        subtitle: 'subtitle'
      },
      projects: {
        title: '施工事例',
        subtitle: 'Vestibulum turpis sem, aliquet eget, lobortis pellentesque.'
      },
      contact: {
        title: 'お問い合わせ',
        subtitle: 'Aenean viverra rhoncus pede. Morbi mollis tellus ac sapien.'
      }
    }
  }),

  computed: {
    namespace() {
      if (!this.$route || !this.$route.name) return '';

      return this.$route.name.toLowerCase();
    },
    image() {
      return '/static/' + this.namespace + '-hero.png';
    },
    subtitle() {
      return this.titles[this.namespace].subtitle;
    },
    title() {
      return this.titles[this.namespace].title;
    }
  }
};
</script>

<style lang="scss" scoped>
.title-fix {
  /* @media (max-width: 980px) { */
  font-size: 2.4rem !important;
  /* } */
  @media (max-width: 600px) {
    line-height: 2 !important;
  }
}
</style>
