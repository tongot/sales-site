<template>
  <div class="services col-12">
    <h1 class="text-center font-weight-light display-3">Our Services</h1>
    <div class="row align-items-center" v-screen-observer="'before-loaded-left'">
      <div class="card-picture">
        <img src="/Tv.png" alt />
      </div>
      <div class="card-text">
        <h2 class="font-weight-light">
          <strong>Tv sales and repairs</strong>
          <small class="font-weight-lighter">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi reprehenderit
            eum placeat et dolore quod modi omnis vero possimus delectus dolorem doloremque magnam
            officiis, veritatis aspernatur quae voluptatem iure earum.
          </small>
        </h2>
      </div>
    </div>
    <div class="row align-items-center" v-screen-observer="'before-loaded-right'">
      <div class="service2">
        <div class="card-picture">
          <img src="/tabs_phones.png" alt />
        </div>
        <div class="card-text">
          <h2 class="font-weight-light">
            <strong>Phone and laptop sales</strong>
            <small class="font-weight-lighter">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi reprehenderit
              eum placeat et dolore quod modi omnis vero possimus delectus dolorem doloremque magnam
              officiis, veritatis aspernatur quae voluptatem iure earum.
            </small>
          </h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-text {
  width: 500px;
  padding: 20px;
  box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.5);
  margin-left: -200px;
  background: white;
  max-height: auto;
}
.service2 {
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  display: flex;
}
.services {
  height: 100%;
  padding: 20px;
}
.scrolled {
  background: red;
}
.before-loaded-left {
  transform: translateX(-300px);
  opacity: 0;
  transition: all 2s ease-out;
}
.before-loaded-right {
  transform: translateX(100px);
  opacity: 0;
  transition: all 2s ease-out;
}
.loaded {
  transform: translateX(0px);
  opacity: 1;
}
</style>