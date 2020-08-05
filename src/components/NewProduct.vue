<template>
  <div class="d-flex justify-content-center">
    <div class="card col-md-6">
      <div class="pt-3">
        <h2 class="text-center font-weight-light">New Product</h2>
        <form>
          <div class="form-group">
            <label for="Name">Name</label>
            <input type="text" id="Name" placeholder="Name of product" class="form-control" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              type="text"
              id="description"
              placeholder="Product description"
              class="form-control"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="number"
              id="price"
              placeholder="Price of product"
              step="2"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input type="text" id="image" placeholder="Name of product" class="form-control" />
          </div>
          <div class="d-flex justify-content-end mb-2">
            <input class="btn btn-primary" value="Add" type="submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>