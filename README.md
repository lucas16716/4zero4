<h1 align="center">4zero4! 🎸</h1>

<div>

[![License](https://img.shields.io/badge/Licença-Personalizada-yellow)](./LICENSE)&nbsp;&nbsp;
[![Status](<https://img.shields.io/badge/Status-Finalizado (v2.0)-blue>)]()&nbsp;&nbsp;
[![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-pink)](https://4zero4.vercel.app/)

</div>

**Website da banda 4zero4!**, projetado em formato OnePage, com o objetivo de fortalecer a presença digital da banda, centralizando todas as informações principais e meios de contatos em uma navegação fluida e intuitiva.

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-e-ferramentas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estrutura-do-projeto">Estrutura</a>
</p>

<h2 id="projeto">PROJETO</h2>

O objetivo desta refatoração (v2.0) foi transformar um código de iniciante em um **case de nível profissional**, aplicando as melhores práticas de desenvolvimento front-end, focado em **Performance, Acessibilidade (A11y) e SEO Técnico**, conforme minha expansão de conhecimentos e habilidades técnicas na programação.

- 🌐 <a href="https://4zero4.vercel.app/">Acesse o Website</a>
- 🖼️ <a href="https://www.canva.com/design/DAGY7iketpE/JNfAb-wEfukJ3xBHZ62Iew/view?utm_content=DAGY7iketpE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h52de8cf561">Prototipagem do Projeto</a>

<h2 id="funcionalidades">FUNCIONALIDADES</h2>

- 🎬 **Vídeo de Fundo (seção Home):** Otimizado com `preload` para melhor performance.
- 🎤 **Cards Interativos:** Apresentação dos integrantes, discografia e agenda de shows.
- 📸 **Galeria de Fotos:** Com transição _fade_ suave e navegação completa por clique e teclado.
- 📞 **Formulário de Contato:** Funcional e integrado com Formspree.
- 📱 **Responsividade:** Design adaptável a todos os dispositivos.
- ♿ **Acessibilidade (A11y):** Navegação por teclado, `aria-labels` e estrutura semântica.
- 👀 **Reveal-on-Scroll:** Animações de carregamento de seção usando `IntersectionObserver.

<h2 id="tecnologias-e-ferramentas">TECNOLOGIAS E FERRAMENTAS</h2>

- **HTML5 →** Estrutura semântica, acessível e otimizada para SEO com JSON-LD.
- **CSS3 →** Estilização moderna (CSS Nesting, Variáveis Globais), animações 3D (`transform`) e responsividade.
- **JavaScript (ES6+) →** Código (Vanilla JS) para todas as interatividades (menu, galeria, formulário, reveal) e manipulação do DOM.
- **Git/GitHub →** Versionamento de código.
- **Vercel →** Deploy oficial do site com otimização e minificação automáticas.
- **Formspree →** Integração do formulário de contato.

---

<h2 id="estruturação-do-projeto">ESTRUTURAÇÃO DO PROJETO</h2>

```bash
📁 4ZERO4
├── 📁 docs
│   ├── 📂 assets
│   │   ├── 📁 docs            # Arquivos (Press Kit)
│   │   ├── 📁 fonts           # Fontes
│   │   ├── 📁 img             # Imagens (separadas por seção)
│   │   └── 📁 videos          # Vídeos
│   ├── 📂 src
│   │   ├── 📂 css
│   │   │   └── style.css       # Código CSS para estilização do projeto
│   │   └── 📂 js
│   │       ├── form.js         # Código JS para funcionalidade do formulário
│   │       ├── gallery.js      # Código JS para funcionalidade da galeria de fotos
│   │       ├── menu.js         # Código JS para funcionalidade do menu e header
│   │       └── reveal.js       # Código JS para funcionalidade do reveal do conteúdo
│   └── index.html              # Página principal
├── README.md                   # Documentação
└── LICENSE                     # Licença

```

---

<h2>📝 LICENÇA</h2> 
<p>Este projeto é público apenas para fins de portfólio do desenvolvedor.
Todos os direitos sobre conteúdo visual e textual pertencem exclusivamente à banda 4zero4.
É proibida a cópia, reprodução ou uso do conteúdo sem autorização expressa.</p>

<h2>🧑🏻‍💻 AUTOR</h2> 
<p>Desenvolvido por <a href="https://bio.site/lucascode">Lucas Code</a>.</p>
