<template>
  <header>
    <img src="@/assets/tecnospeed-white.svg" alt="Tecnospeed" />
    <nav>
      <button @click="toggleMenu">Menu</button>
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
  data() {
    return {
      menuAtivo: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuAtivo = !this.menuAtivo;
    },
  },
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

header nav button {
  display: none;
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

@media (max-width: 840px) {
  header img {
    height: 50px;
    width: 100px;
  }
  header ul {
    display: none;
  }
  header nav button {
    display: block;
  }
}
</style>
