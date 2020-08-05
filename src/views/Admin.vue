<template>
  <div class="container">
    <div class="mt-5 p-3">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'new-product'}">New item</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'list-product'}">List</router-link>
        </li>
      </ul>
      <hr />
      <div>
        <transition name="slidein">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.slidein-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slidein-leave {
  transform: translateX(200px);
}
</style>

