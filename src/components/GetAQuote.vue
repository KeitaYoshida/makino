<template>
  <v-alert class="mt-n5" color="primary" dark dense tile>
    <v-container py-0>
      <v-row align="center" justify="center">
        <v-col class="grow hidden-sm-and-down">
          <h2 class="title font-weight-light">
            お気軽にお問い合わせください。
          </h2>
        </v-col>
        <v-col class="shrink" @click="$router.push('/contact')">
          <v-btn outlined>Contact</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-alert>
</template>
