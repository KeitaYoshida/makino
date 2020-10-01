<template>
  <div id="home">
    <get-a-quote />
    <v-container
      id="goals"
      class="py-5"
      tag="section"
    >
      <heading>Our Goals</heading>

      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          class="d-flex"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            outlined
            max-width="100%"
          >
            <v-img :src="feature.src" />
            <v-card-title
              class="align-start"
              style="min-height: 88px;"
              v-text="feature.title"
            />
            <v-card-text
              class="pb-5 pt-3"
              v-text="feature.text"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      id="testimonials"
      class="py-5"
      tag="section"
    >
      <heading>Testimonials</heading>

      <v-row>
        <v-col
          v-for="(testimonial, i) in testimonials"
          :key="i"
          cols="12"
          md="6"
        >
          <testimonial :testimonial="testimonial" />
        </v-col>
      </v-row>
    </v-container>

    <v-container
      id="highlighted-testimonial"
      class="pt-5 px-0 mb-n3"
      fluid
      tag="section"
    >
      <v-parallax
        contain
        src="/static/home-parallax.png"
      >
        <v-overlay
          absolute
          class="px-3"
          opacity=".8"
        >
          <testimonial
            dark
            :testimonial="highlightedTestimonial"
          />
        </v-overlay>
      </v-parallax>
    </v-container>

    <v-container
      id="why-us"
      class="px-3 py-12 mb-n9 grey lighten-3"
      fluid
      tag="section"
    >
      <heading>Subscribe to our <span class="primary--text">Newsletter</span></heading>

      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
            hide-details
            label="Email"
            solo
            color="secondary"
            outlined
            single-line
            flat
          >
            <template v-slot:append>
              <v-btn color="primary">
                Subscribe
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },

    components: {
      GetAQuote: () => import('@/components/GetAQuote'),
      Heading: () => import('@/components/Heading'),
      Testimonial: () => import('@/components/Testimonial')
    },

    data: () => ({
      highlightedTestimonial: {
        blurb: 'The complexities and challenges AlphaConstruction successfully overcame on our behalf includes substantial permit obstacles, coordination and selection support of all design and finish materials, and the diffculty of integrating existing and new structures.',
        person: 'Joe Malonagi',
        title: 'General Manager, Springfield Tower'
      },
      features: [
        {
          title: 'Award-winning architecture',
          text: 'Every achievement begins with a vision. It is built on a foundation of creative concepts and dreams to become something bigger and better. At AlphaConstruction we build with those who follow a vision, not a path.',
          src: '/static/feature1.png'
        },
        {
          title: 'Relentless pursuit of your vision',
          text: 'Our commitment to excellence and continous improvement, to building lasting relationships with our clients, and to the team members who create your vision, are the guiding principles that assure successful outcomes on every project we build.',
          src: '/static/feature2.png'
        },
        {
          title: 'Your vision - Our mission',
          text: 'To build an everlasting environment of trust with our clients and team members that will foster customer loyalty by delivering superior service and quality projects.',
          src: '/static/feature3.png'
        }
      ],
      testimonials: [
        {
          blurb: 'Leverage agile frameworks to provide a robust synopsis for high level over Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          person: 'Nancy Swanson',
          title: 'President, Springfield Country Club'
        },
        {
          blurb: 'Leverage agile frameworks to provide a robust synopsis for high level over Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          person: 'Jason Schraiber',
          title: 'Mayor, Boca Raton'
        }
      ]
    })
  }
</script>
