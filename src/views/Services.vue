<template>
  <section id="services" class="py-5">
    <heading>Our Services</heading>

    <v-container>
      <v-row align="center" class="mb-5">
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-img src="/static/project6.png" height="250" />
          </v-card>
        </v-col>

        <v-col class="px-0" cols="12" md="8">
          <v-card flat color="transparent">
            <v-card-title>Realtime Global Deployments</v-card-title>

            <v-card-text>
              Te dolor consul mei, etiam molestie indoctum usu ad, qui inermis
              eleifend an. Pro iriure alienum incorrupte ex, cu diceret
              moderatius mei. Te corrumpit posidonium sit, in cum nonumy utamur.
              Usu impedit patrioque vituperatoribus ei, cu voluptua nominati
              philosophia mel. Sea at legendos percipitur, nulla dicant
              convenire ne duo. Veniam epicuri vis cu, ea pri alii ceteros
              fierent.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" class="mb-5">
        <v-col cols="12" md="4" order-md="2">
          <v-card outlined>
            <v-img src="/static/project4.png" height="250" />
          </v-card>
        </v-col>

        <v-col class="px-0" cols="12" md="8">
          <v-card color="transparent" flat>
            <v-card-title>Focus On What Drives Your Business</v-card-title>

            <v-card-text>
              <p>
                Lorem ipsum dolor sit amet, ea mutat tation constituam per, mei
                error ocurreret definiebas ne. Te harum constituto inciderint
                his. Vis no delenit mediocritatem. His et debet possim perpetua,
                assum argumentum ne quo, constituto eloquentiam sea ne. Ne has
                ludus graecis fabellas.
              </p>

              <p>
                Ei est iriure partiendo, ius falli tritani accumsan ad, mea
                altera eripuit fierent ut. Te quem legere fastidii ius. Ei vis
                quod qualisque, ignota nemore cotidieque mea eu. Scripta labitur
                ei vel, mei case quidam corpora no, est dico sale utroque ne. Eu
                erroribus delicatissimi eum, ut quem veri tincidunt vim.
              </p>

              <p>
                Velit eruditi an est, cu eius graeci sed. Vel ei dolorem
                sapientem temporibus. No his omnes meliore maiestatis, mei
                iisque molestiae gubergren ex. Usu placerat liberavisse et, eam
                dicta blandit evertitur an. Ea vim fabellas indoctum maiestatis.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" class="mb-5">
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-img src="/static/project3.png" height="250" />
          </v-card>
        </v-col>

        <v-col class="px-0" cols="12" md="8">
          <v-card flat color="transparent">
            <v-card-title>Business Development That Just Works</v-card-title>

            <v-card-text>
              <p>
                Te dolor consul mei, etiam molestie indoctum usu ad, qui inermis
                eleifend an. Pro iriure alienum incorrupte ex, cu diceret
                moderatius mei. Te corrumpit posidonium sit, in cum nonumy
                utamur. Usu impedit patrioque vituperatoribus ei, cu voluptua
                nominati philosophia mel. Sea at legendos percipitur, nulla
                dicant convenire ne duo. Veniam epicuri vis cu, ea pri alii
                ceteros fierent.
              </p>
              <p>
                Te dolor consul mei, etiam molestie indoctum usu ad, qui inermis
                eleifend an. Pro iriure alienum incorrupte ex, cu diceret
                moderatius mei. Te corrumpit posidonium sit, in cum nonumy
                utamur. Usu impedit patrioque vituperatoribus ei, cu voluptua
                nominati philosophia mel. Sea at legendos percipitur, nulla
                dicant convenire ne duo. Veniam epicuri vis cu, ea pri alii
                ceteros fierent.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="py-5 px-3">
        <testimonial :testimonial="testimonial" />
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'Services',
    meta: [
      {
        name: 'description',
        content: 'Customized vue-cli templates for Vue and Vuetify'
      }
    ]
  },

  components: {
    Heading: () => import('@/components/Heading'),
    Testimonial: () => import('@/components/Testimonial')
  },

  data: () => ({
    testimonial: {
      blurb:
        'With Alpha Construction managing all of our customer-facing services and ASCC, helping us monitor and understand building performance, Abocado is in great shape to create and release new products.',
      person: 'Jay Oakrson',
      title: 'CEO Abocado'
    }
  })
};
</script>
