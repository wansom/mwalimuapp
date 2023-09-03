<template>
   <footer>
 
      <div class="bottom-footer container mx-auto">
        <p class="text-center">Fikisha Mashinani. Rights Reserved. Copyright {{ new Date().getFullYear() }}.</p>
      </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* == || Contact == */
/* == Footer == */
footer {
  height: fit-content;
  padding: 80px 0px 20px;
  background: #000000;
}

.footer-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.col {
  width: 100%;
  margin: 10px;
}

.col.one {
  max-width: 600px;
  min-width: 280px;
}

.col.one h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 610;
  font-size: 22px;
  line-height: 36px;
  color: #fcfcfc;
  margin: 10px 0px;
}

.col.one p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcfc;
  margin: 10px 0px 13px;
}

.col.two,
.col.three {
  max-width: 300px;
  min-width: 280px;
  margin: 10px;
}

.col h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #fcfcfc;
  margin: 10px 0px;
}

.col ul {
  margin: 30px 0px 0px;
}

.col ul li {
  padding: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.col ul li a {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcfc;
}

.bottom-footer p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #fcfcfc;
  margin: 10px;
}

/* == || Footer == */

</style>
