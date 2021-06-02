<h1>Formulário de etapa Tecnospeed</h1>
<h2>Projeto criado como teste para a Tecnospeed</h2>

<h2>Como funciona?</h2>

<p>Consiste de vários formulários separados em partes, sendo ao todo 5 partes, cada campo coleta uma quantidade de informações que juntas formam um objeto com dezenas de campos sobre o usuário cadastrado, nada muito diferente de um formulário comum.</p>

<h2>Tecologias Usadas</h2>

<p>Contruído em VueJs 2, a aplicação conta com as seguintes tecnologias:</p>
<ul>
  <li>Vuex</li>
  <li>Vue Formulate</li>
  <li>Vue Form Wizard</li>
  <li>Vuelidate</li>
</ul>
<p>Vuex provê o SSOT (Single Source Of Truth) que é basicamente um local onde as variáveis estão acessíveis a qualquer parte da aplicação. é lá também onde estão os mutations que são responsáveis por mutar esses estados.</p>
<p>Vue Formulate é uma lib para escrita de formulários, geralmente os formulários sao bem verbosos e a proposta seria reduzir essa verbosidade passando somente um elemento que fica responsável por receber parâmetros como label, name, etc, o que um formulário comum contém.</p>
<p><Vue Form Wizard é a lib responsável pelo formulário de etapa, ele envolve cada componente de formulário separando-o de acordo com o gosto do desenvolvedor ou necessidade do projeto./p>
  <p>Vuelidate é a lib responsável pela validação do formulário, possui uma sintaxe própria pouco intuitiva ao meu ver, mas a documentação vem com bons detalhes de uso.</p>

<h2>Como executar localmente</h2>

<p>Iniciamente o usuário precisa do Node instalado na máquina, caso não tenha, instale a versão LTS <a href="https://nodejs.org/en/">aqui</a>, se já possui ou já instalou, podemos seguir.</p>

<p>Voce pode ou baixar o projeto para sua máquina localmente ou abrir um terminal de sua escolha e executar <code>git clone https://github.com/bryanbruzinga/Tecnospeed-Formulario.git</code>.</p>

<p>Com o repositório clonado, acesse a pasta raiz da aplicação com o terminal e execute o comando <code>npm install</code> e aguarde a instalação de todos os pacotes e dependências.</p>

<p>Agora já pode executar a aplicação, ainda na raiz execute o comando no terminal <code>npm run serve</code>, a aplicação rodará na porta 8080, portanto ela deve estar livre.</p>
