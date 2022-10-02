<template>
  <picture>
    <source media="(min-width:600px)" srcset="../public/images/bg-desktop-light.jpg">
    <img src="../public/images/bg-mobile-light.jpg" alt="Flowers">
  </picture>
  <section id="container">
    <header-title></header-title>
    <main>
      <new-todo></new-todo>
      <ul>
        <todo-item></todo-item>
        <todo-item></todo-item>
        <todo-item></todo-item>
        <todo-item></todo-item>
        <todo-nav></todo-nav>
      </ul>
      <div class="shadow-layout"></div>
    </main>
    <div class="sort-todo mobile">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div> 
  </section>
  <attribution></attribution>
</template>

<script>


</script>

<style>

</style>
