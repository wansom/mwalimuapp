<template>
      <header class="header-scroll bg-[#ffffff]">
        <nav id="nav-bar">
            <div class="nav-container contain">
                <div class="">
                  <router-link to="/"> <img class="w-[220px]" src="/images/home/mwalimu-logo.png"
                            alt="Mwalimu app logo" ></router-link>
                </div>
                <div class="links" id="links">
                    <div class="cancel">
                        <span class="cancel-btn"><i class="fas fa-times"></i></span>
                    </div>
                    <router-link to="/">Home</router-link>
                    <router-link to="about">Resources</router-link>
                    <a href="#scc">Online</a>
                    <a href="#pack">Physical</a>
                  
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