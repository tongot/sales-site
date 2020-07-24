<template>
  <div>
    <div class="hero">
      <div class="container">
        <div class="row h-100 justify-content-center">
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
        <div class="mt-2 row">
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
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.circle-div {
  border: solid 1px rgb(219, 219, 219);
  width: 200px;
  margin: auto;
  height: 200px;
  border-radius: 50%;
  align-items: center;
  justify-items: center;
  display: flex;
  color: blue;
  cursor: pointer;
  box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0.5);
  -webkit-transition-duration: 75ms;
  transition-duration: 75ms;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;
}
.circle-div:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
.home-p {
  font-size: 25px;
}
.hero-graphic {
  height: 600px;
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
.hero {
  width: 100%;
  height: 800px;
}
</style>
