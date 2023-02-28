<template>
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <router-link to="advocate">{{ this.$route.name }}</router-link>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {  }
}
</script>

<style>

</style>