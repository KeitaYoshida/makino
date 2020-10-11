<template>
  <section id="contact" class="py-5">
    <heading>Contact Us</heading>

    <v-container>
      <v-row>
        <v-col xs12 md6>
          <v-form>
            <v-container pa-0>
              <v-row>
                <v-col cols="12" class="mb-4 grey--text">
                  Call or submit our online form to request an estimate or for
                  general questions about U.S. Certified Contractors and our
                  services. We look forward to serving you!
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field outlined label="First Name*" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field outlined label="Last Name*" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field outlined label="Your Email*" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Your Phone Number*" outlined />
                </v-col>

                <v-col cols="12">
                  <v-text-field label="Subject" outlined />
                </v-col>

                <v-col cols="12">
                  <v-textarea label="Message" outlined />
                </v-col>

                <v-col cols="12">
                  <v-btn
                    :block="$vuetify.breakpoint.xsOnly"
                    color="primary"
                    depressed
                    x-large
                  >
                    Send Message
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>

        <v-col cols="12" md="6">
          <v-container fluid pa-0>
            <v-row>
              <v-col cols="12" md="6" class="pa-0">
                <v-card-title>Mailing Address</v-card-title>
                <v-card-text>
                  <div>〒399-1801</div>
                  <div>長野県下伊那郡泰阜村8427-30</div>
                  <div>明信塗装工業</div>
                </v-card-text>
              </v-col>

              <v-col cols="12" md="6" class="pa-0">
                <v-card-title>Contact Info</v-card-title>
                <v-card-text>
                  <div>電話番号</div>
                  <div>
                    <a href="#">contact@alphaconstruction.com</a>
                  </div>
                </v-card-text>
              </v-col>
              <v-col cols="12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26028.465094019524!2d137.83517429187907!3d35.36661066341309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6ZW36YeO55yM5LiL5LyK6YKj6YOh5rOw6Zic5p2RODQyNy0zMA!5e0!3m2!1sja!2sjp!4v1602400855127!5m2!1sja!2sjp"
                  width="100%"
                  height="400"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
                <!-- <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d104114.22147054068!2d137.79775211627768!3d35.36633069515717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6ZW36YeO55yM5LiL5LyK6YKj6YOh5rOw6Zic5p2RODQyNy0zMA!5e0!3m2!1sja!2sjp!4v1602400746277!5m2!1sja!2sjp"
                  width="100%"
                  height="400"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen
                /> -->
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content: 'Customized vue-cli templates for Vue and Vuetify'
      }
    ]
  },

  components: {
    Heading: () => import('@/components/Heading')
  }
};
</script>
