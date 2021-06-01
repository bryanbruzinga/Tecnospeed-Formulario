<template>
  <header>
    <img src="@/assets/tecnospeed-white.svg" alt="Tecnospeed" />
    <nav>
      <button @click="toggleMenu">Menu <span></span></button>
      <ul :class="menuAtivo === true ? 'menuAtivo' : ''">
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
    border: none;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    background: none;
    font-size: 1rem;
    color: #ccc;
  }
  span {
    border-top: 2px solid #000;
    width: 20px;
  }

  span::after,
  span::before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background: #000;
    margin-top: 5px;
    transition: transform 0.2s ease-in;
  }
  ul.menuAtivo {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    width: 100%;
    top: 80px;
    right: 0;
    background: var(--primary-color);
    animation: show-down 0.2s ease-in;
  }
}

@keyframes show-down {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
