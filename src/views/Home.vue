<template>
  <div id="home">
    <get-a-quote />
    <v-container id="goals" class="py-5" tag="section">
      <heading>塗装のココロ</heading>

      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          class="d-flex"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card outlined max-width="100%">
            <v-img :src="feature.src" />
            <v-card-title class="align-start" v-text="feature.title" />
            <v-card-text class="pb-5 pt-3 card-text" v-text="feature.text" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="testimonials" class="py-5" tag="section">
      <heading>お客様の声</heading>

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
      <v-parallax contain src="/static/home-parallax.png">
        <v-overlay absolute class="px-3" opacity=".8">
          <testimonial dark :testimonial="highlightedTestimonial" />
        </v-overlay>
      </v-parallax>
    </v-container>

    <v-container
      id="why-us"
      class="px-3 py-12 mb-n9 grey lighten-3"
      fluid
      tag="section"
    >
      <heading>
        Subscribe to our <span class="primary--text">Newsletter</span>
      </heading>

      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            hide-details
            label="Email"
            solo
            color="secondary"
            outlined
            single-line
            flat
          >
            <template #append>
              <v-btn color="primary"> Subscribe </v-btn>
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
      {
        name: 'description',
        content: 'Customized vue-cli templates for Vue and Vuetify'
      }
    ]
  },

  components: {
    GetAQuote: () => import('@/components/GetAQuote'),
    Heading: () => import('@/components/Heading'),
    Testimonial: () => import('@/components/Testimonial')
  },

  data: () => ({
    highlightedTestimonial: {
      blurb:
        '「塗装台が高い」「見た目は重視していない」そのような言葉をよく耳にします。メッセージ',
      person: '代表取締役 社長 牧野',
      title: 'General Manager, Springfield Tower'
    },
    features: [
      {
        title: '外観が与える信頼',
        text:
          '建物の外観は家の、会社の顔です。外観を綺麗にすることはお客様をお招きするときにお家を片付けることと同様です。違うことといえば、日々、整理整頓をしなければならない家の中と違い、外観は数年に一度だけでいい点です。',
        src: '/static/feature1.png'
      },
      {
        title: '「守る」塗装',
        text:
          '塗装の劣化が招くものは景観の悪化だけではありません。劣化し、剥がれ落ちた塗装から雨風が侵入すると建物の腐食が引き起こされます。腐食した建物は強度や断熱効果の低下、害虫被害等、様々な悪因を引き起こします。そのような自体になってしまえば、大規模な改修工事を余儀なくれます。そのような事態から建物を「守る」のが、私達の仕事です。',
        src: '/static/feature2.png'
      },
      {
        title: '「付与する」塗装',
        text:
          '塗装の効果は見た目の改修・建物の保全、「だけ」ではありません。お家が寒ければ「熱を取り込みやすい塗装」「害虫を寄せにくい塗装」「水に強い塗装」、塗装には様々な「効果」があります。あなたのお家の悩み、私達が手助けできるかもしれません。',
        src: '/static/feature3.png'
      }
    ],
    testimonials: [
      {
        blurb: 'text',
        person: '早野 康',
        title: '小学校のプールの塗装'
      },
      {
        blurb:
          'Leverage agile frameworks to provide a robust synopsis for high level over Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        person: '佐々木 大成',
        title: '釈迦の塗装'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.card-text {
  line-height: 1.85 !important;
}
</style>
