<template>
  <div>
    <Header></Header>
    <main>
            <Filters :advocates="advocates"></Filters>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Filters from "../components/Widgets/Filters.vue";
import { mapState } from "vuex";
import Footer from "../components/home/Footer.vue";
export default {
  components: { Header, Filters, Footer },
data(){
return{
  title: 'Find A Lawyer',
      description: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market',
      url: 'https://dialalawyer.africa',
      image: 'https://firebasestorage.googleapis.com/v0/b/scanpal-f74da.appspot.com/o/banner.jpg?alt=media&token=638b0c97-bd4b-4e0a-8053-874fc7e5bc80',
}
},
metaInfo() {
    return {
      title: this.title,
      meta: [
  // Open Graph (for Facebook, LinkedIn, etc.)
  { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: this.image },
        { property: 'og:url', content: this.url },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.image },
        { name: 'twitter:url', content: this.url },
        // Add more tags as needed
      ]
    }
  },
  created() {},
  computed: {
    ...mapState(["allAdvocates", "courtData"]),
    advocates() {
      return this.allAdvocates.filter(
        (advocate) => advocate.status === "active"
      );
    },
  },
};
</script>

<style scoped>
section.single-research-banner {
  height: 40vh;
  background-image: url("https://acelitigator.com/wp-content/uploads/2022/10/Analysis-of-Supreme-Court-30-of-2019.png") !important;
  background-size: cover;
  margin-bottom: 20px;
}
</style>
