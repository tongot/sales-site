<template>
  <div class="productFlow container mb-5">
    <h1 class="text-center font-weight-light display-3">Top Products</h1>
    <div class="d-flex justify-content-around">
      <div class="card shadow" style="width:250px;">
        <img src="/Laptop.png" alt class="card-img-top p-2" />
        <div class="card-body">
          <h3 class="card-title font-weight-light">HP 450</h3>
          <p class="card-text">The best product ever made</p>
          <a class="btn btn-primary float-right text-white">More...</a>
        </div>
      </div>
      <div class="card shadow" style="width:250px;">
        <img src="/Laptop.png" alt class="card-img-top p-2" />
        <div class="card-body">
          <h3 class="card-title font-weight-light">HP 450</h3>
          <p class="card-text">The best product ever made</p>
          <a class="btn btn-primary float-right text-white">More...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.productFlow {
  width: 100%;
  height: 100%;
}
</style>