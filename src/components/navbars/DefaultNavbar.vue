<template>
      <header class="header-scroll">
        <nav id="nav-bar">
            <div class="nav-container contain">
                <div class="logo">
                    <a href="index.html" class="logo" style="font-weight: Bold;"><img class="logo-image blended" src="/images/home/Mwalimu Logo.png"
                            alt="Mwalimu app logo" width="200px"></a>
                </div>
                <div class="links" id="links">
                    <div class="cancel">
                        <span class="cancel-btn"><i class="fas fa-times"></i></span>
                    </div>
                    <a href="#top">Home</a>
                    <a href="#scc">Online</a>
                    <a href="#pack">Physical</a>
                    <a href="#resource">Resources</a>
                    <a href="#sch">School</a>
                    <a href="#news">news</a>
                    <div class="nav-btns">
                        <router-link class="navl-btn btn" to='signin'>Login</router-link>
                        <router-link class="navs-btn btn" to="register">Sign Up</router-link>
                    </div>
                </div>
                <div class="menu-bar">
                    <span class="menu-btn"><i class="fas fa-bars"></i></span>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style >

</style>