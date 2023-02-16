<template>
  <div>
    <Header></Header>
    <Breadcrum></Breadcrum>
    <section class="blog-section spad">
      <div class="container">
        <div class="row">
          <KnowYourCourtsSidebar />
          <KnowYourCourtsContent />
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import KnowYourCourtsSidebar from "../components/Sidebars/Know-Your-Courts-Sidebar.vue";
import KnowYourCourtsContent from "../components/Know-Your-Courts/Know-Your-Courts-Content.vue";
export default {
  components: {
    Header,
    Footer,
    Breadcrum,
    KnowYourCourtsSidebar,
    KnowYourCourtsContent,
  },
};
</script>

<style></style>
