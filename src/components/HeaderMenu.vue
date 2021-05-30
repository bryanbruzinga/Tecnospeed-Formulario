<template>
  <header>
    <img src="@/assets/tecnospeed-white.svg" alt="Tecnospeed" />
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
  name: "headerMenu",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  margin-bottom: 1rem;
}

header img {
  height: 10vh;
  width: 20vw;
}

header ul {
  display: flex;
}

header ul li {
  list-style: none;
  padding: 1rem;
  font-family: var(--primary-font);
  color: hsla(0, 0%, 100%, 0.5);
  cursor: pointer;
  transition: all 0.2s ease-in;
}

header ul li:hover {
  color: var(--textHover);
}
</style>
