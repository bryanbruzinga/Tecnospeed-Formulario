<template>
  <header>
    <img src="@/assets/logo.png" alt="Tecnospeed">
    <nav>
        <ul>
            <li>Soluções</li>
            <li>Institucional</li>
            <li>Suporte</li>
            <li>Blog</li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'headerMenu'
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
    }

    header img {
        height: 100px;
        width: 300px;
    }

    header ul {
        display: flex;
    }

    header ul li {
        list-style: none;
        padding: 1rem;
    }
</style>