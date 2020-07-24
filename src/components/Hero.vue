<template>
  <div>
    <div class="hero">
      <div class="container">
        <div class="row h-100 justify-content-center">
          <div class="col-md-5">
            <div class="hero-text">
              <h1 class="mx-auto font-weight-light">Customer gadget shop</h1>
              <hr />
              <p class="font-weight-light">
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
        <div>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link">Phones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active">Laptops</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Accesories</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
p {
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
  height: 890px;
}
</style>
