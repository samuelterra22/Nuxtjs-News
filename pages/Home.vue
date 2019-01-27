<template>
  <main>
    <tab />

    <v-content>
      <card
        v-for="article in articles"
        :key="article.title"
        :article="article"
      />
    </v-content>

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
    Newsletter,
    VContent,
    Card,
    Tab
  },
  data: () => ({ articles: [] }),
  async asyncData({ app }) {
    const NewsAPI = require('newsapi')
    const newsapi = new NewsAPI(process.env.API_KEY)

    const articles = await newsapi.v2
      .topHeadlines({
        country: 'br',
        category: 'technology',
        sortBy: 'relevancy'
      })
      .then(({ articles }) => {
        return articles
      })
      .catch(e => {
        console.log(e)
      })
    return { articles }
  }
}
</script>

<style>
</style>
