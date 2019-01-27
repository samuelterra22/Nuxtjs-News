<template>
  <main>
    <tab
      :items="navItems"
      :selected="navItemSelected"
      @selected="onTabSelected"
    />

    <v-content>
      <v-loading
        :is-loading="loading"
        class="container max-w-xl m-auto flex flex-wrap items-center justify-start"
      >
        <card
          v-for="article in articles"
          :key="article.title"
          :article="article"
        />
      </v-loading>
    </v-content>

    <newsletter />
  </main>
</template>

<script>
import Tab from '../components/Tab'
import Card from '../components/Card'
import VContent from '../components/VContent'
import Newsletter from '../components/Newsletter'
import NewsAPI from 'newsapi'
import VLoading from '../components/VLoading'

export default {
  components: {
    VLoading,
    Newsletter,
    VContent,
    Card,
    Tab
  },
  data: () => ({
    loading: true,
    newsapi: null,
    articles: [],
    navItemSelected: 'business',
    navItems: [
      {
        key: 'business',
        value: 'Negócios'
      },
      {
        key: 'entertainment',
        value: 'Entreterimento'
      },
      {
        key: 'health',
        value: 'Saúde'
      },
      {
        key: 'science',
        value: 'Ciência'
      },
      {
        key: 'sports',
        value: 'Esporte'
      },
      {
        key: 'technology',
        value: 'Tecnologia'
      }
    ]
  }),
  created() {
    this.newsapi = new NewsAPI(process.env.API_KEY)
  },
  async mounted() {
    await this.getArticles()
  },
  methods: {
    async onTabSelected(item) {
      this.navItemSelected = item.key
      await this.getArticles()
    },
    async getArticles() {
      this.loading = true
      this.articles = await this.newsapi.v2
        .topHeadlines({
          country: 'br',
          category: this.navItemSelected,
          sortBy: 'relevancy'
        })
        .then(({ articles }) => {
          return articles
        })
        .catch(e => {
          console.log(e)
        })
      this.loading = false
    }
  }
}
</script>

<style>
</style>
