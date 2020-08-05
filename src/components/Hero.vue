<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="hero-text">
              <h1 class="mx-auto font-weight-light">Customer gadget shop</h1>
              <hr />
              <p class="home-p font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum minus. Nulla aperiam
                molestiae optio officia reprehenderit ratione animi, sint harum ullam labore natus quia perferendis,
                perspiciatis provident fugit numquam!
              </p>
            </div>
          </div>
          <div class="col-md-7">
            <div class="hero-graphic">
              <img class="hero-graphic" src="/3389.jpg" alt />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="circle-div">
              <img src="/app.svg" style="margin:auto" alt width="100" height="100" />
            </div>
            <h3 class="font-weight-light text-center">Phones</h3>
          </div>
          <div class="col-md-4">
            <div class="circle-div">
              <img src="/purchase.svg" style="margin:auto" alt width="100" height="100" />
            </div>
            <h3 class="font-weight-light text-center">Laptops</h3>
          </div>
          <div class="col-md-4">
            <div class="circle-div">
              <img src="/headphones.svg" style="margin:auto" alt width="100" height="100" />
            </div>
            <h3 class="font-weight-light text-center">Accessories</h3>
          </div>
        </div>
      </div>
    </section>
    <div class>
      <services />
    </div>
    <div class>
      <productFlow />
    </div>
  </div>
</template>
<script>
import productFlow from "../sections/ProductFlow";
import services from "../sections/Services";

export default {
  components: {
    productFlow,
    services,
  },
};
</script>
<style>
.home-p {
  font-size: 25px;
}
.hero-graphic {
  height: 600px;
  animation: fadeIn 1s ease-in-out;
}
.hero-text {
  margin-top: 100px;
  animation: slideInLeft 1s ease-in-out;
}
@keyframes slideInLeft {
  from {
    opacity: 0;
    margin-left: -500px;
    margin-right: 500px;
  }

  to {
    opacity: 1;
    margin-left: 0px;
    margin-right: 0px;
  }
}
section {
  height: 100vh;
}
</style>
