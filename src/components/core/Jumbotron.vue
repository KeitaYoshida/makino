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
      <v-container
        fill-height
        white--text
      >
        <v-slide-x-transition appear>
          <v-col
            align="center"
            justify="center"
          >
            <h1
              :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
              class="mb-2"
              v-text="title"
            />
            <div
              class="title font-weight-light"
              v-text="subtitle"
            />
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
          title: 'Building a Culture of Excellence',
          subtitle: 'Vestibulum volutpat pretium libero. Suspendisse eu ligula.'
        },
        services: {
          title: 'Next Generation Development Today',
          subtitle: 'Phasellus gravida semper nisi. Fusce convallis metus id felis luctus adipiscing.'
        },
        projects: {
          title: 'Premium Quality and Branding',
          subtitle: 'Vestibulum turpis sem, aliquet eget, lobortis pellentesque.'
        },
        contact: {
          title: 'Contact Alpha Construction',
          subtitle: 'Aenean viverra rhoncus pede. Morbi mollis tellus ac sapien.'
        }
      }
    }),

    computed: {
      namespace () {
        if (!this.$route || !this.$route.name) return ''

        return this.$route.name.toLowerCase()
      },
      image () {
        return '/static/' + this.namespace + '-hero.png'
      },
      subtitle () {
        return this.titles[this.namespace].subtitle
      },
      title () {
        return this.titles[this.namespace].title
      }
    }
  }
</script>
