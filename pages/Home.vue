<template>
  <main>
    <tab />

    <notification />

    <v-content>
      <card
        v-for="card in [1,2,3]"
        :key="card"
      />

      <horizontal-card
        v-for="card in [1,2,3]"
        :key="card"
      />
    </v-content>

    <login />

    <v-article />

    <newsletter />
  </main>
</template>

<script>
import Tab from '../components/Tab'
import Notification from '../components/Notification'
import Card from '../components/Card'
import VContent from '../components/VContent'
import Login from '../components/Login'
import VArticle from '../components/VArticle'
import Newsletter from '../components/Newsletter'
import HorizontalCard from '../components/HorizontalCard'

export default {
  components: {
    HorizontalCard,
    Newsletter,
    VArticle,
    Login,
    VContent,
    Card,
    Notification,
    Tab
  }
}
</script>

<style>
</style>
