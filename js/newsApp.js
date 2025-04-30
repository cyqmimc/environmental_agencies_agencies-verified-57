import NavBar from './components/NavBar.js';
const { createApp } = Vue;

createApp({
  data() {
    return {
      search: '',
      sortOrder: 'desc',
      newsList: []
    };
  },
  computed: {
    sortedNews() {
      const keyword = this.search.toLowerCase();
      return this.newsList
        .filter(item =>
          item.title.toLowerCase().includes(keyword) ||
          (item.title_cn && item.title_cn.includes(this.search)) ||
          item.country_cn.includes(this.search) ||
          item.agency_name.includes(this.search)
        )
        .sort((a, b) => {
          return this.sortOrder === 'desc'
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date);
        });
    }
  },
  mounted() {
    axios.get('/data/news.json')
      .then(response => {
        this.newsList = response.data;
      })
      .catch(error => {
        console.error('新闻数据加载失败', error);
      });
  },
  components: {
    NavBar
  }
}).mount('#app');

