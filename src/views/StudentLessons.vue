<template>
       <section class="mkt-articles">
            <div class="mkt-articles-contain contain">
                <div class="mkt-articles">
                    <div class="mkt-article" v-for="(lesson,index) of lessons" :key="index">
                        <img class="mkt-img" src="/images/online-class.png" alt="lesson">
                        <div class="mkt-icon-info">
                            <span>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                                    <rect x="0.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                                    <rect x="11.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                                    <rect x="11.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9"/>
                                </svg>                                    
                                {{ lesson.subject }}
                            </span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM12 21.375C6.79688 21.375 2.625 17.2031 2.625 12C2.625 6.84375 6.79688 2.625 12 2.625C17.1562 2.625 21.375 6.84375 21.375 12C21.375 17.2031 17.1562 21.375 12 21.375ZM14.8594 16.5C15.1406 16.6875 15.4688 16.6406 15.6562 16.3594L16.5469 15.1875C16.7344 14.9062 16.6875 14.5781 16.4062 14.3906L13.3125 12.0938V5.4375C13.3125 5.15625 13.0312 4.875 12.75 4.875H11.25C10.9219 4.875 10.6875 5.15625 10.6875 5.4375V13.1719C10.6875 13.3125 10.7344 13.5 10.875 13.5938L14.8594 16.5Z" fill="#D9D9D9"/>
                                </svg>                                    
                                3 Months
                            </span>
                        </div>
                        <h3>{{ lesson.name }}</h3>
                        <p>{{ lesson.description }}</p>
                        <div class="mkt-amount">
                            <div class="mkt-article-writer">
                                <a-button type="primary">Enroll</a-button>
                                <!-- <span>By Lina</span> -->
                            </div>
                            <div class="price">
                                <p class="itallic"><del></del></p>
                                <span>KES{{ lesson.amount }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
import { mapState } from "vuex";
import * as fb from "../firebase";
export default ({
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
...mapState(["users",'lessons']),
user(){
  return this.users.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
}
},
mounted(){
this.$store.dispatch('getMyLessons')
}
})

</script>
<style scoped>
section.mkt-articles{
  background-color: #ffffff;
}
.mkt-articles-contain h3.title{
  font-size: 20px;
  font-weight: 500;
  line-height: 38px;
  color: #000000;
  margin: 0px 0px 10px;
}
.mkt-articles{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.mkt-article{
  padding: 14px;
  height: fit-content;
  width: 280px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 20px #00000033;
  margin: 10px 7px;
}
.mkt-article img.mkt-img{
  width: 100%;
  border-radius: 20px;
}
.mkt-icon-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
}
.mkt-icon-info span{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  font-weight: 500;
  color: #696984;
}
.mkt-icon-info span svg{
  margin: 0px 8px 0px 0px;
}
.mkt-article h3{
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #252641;
  margin: 5px 0px 10px;
}
.mkt-article p{
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #696984;
  margin: 10px 0px 10px;
}
.mkt-article .mkt-amount{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 10px;
}
.mkt-article-writer,
.mkt-amount .price{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.mkt-article-writer img{
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 0px 5px 0px 0px;
}
.mkt-article-writer span{
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
}
.mkt-amount .price p:nth-child(1){
  font-style: italic;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  text-decoration: line-through;
  
}
.mkt-amount .price span:nth-child(2){
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #F48C06;
  margin: 0px 0px 0px 10px;
}
</style>