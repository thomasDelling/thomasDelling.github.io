/**
 * DEPÓSITO DO CAOS — Script Principal
 * Autor: Thomas Max Delling
 */

// 1. Dados dos Projetos (Placeholder / Fácil atualização)
const projectsData = [
  {
    id: 1,
    title: "Projeto Caos Alpha",
    image: "", // Deixe vazio para usar o visualizador padrão
    tags: ["HTML5", "CSS3", "JavaScript"],
    description: "Protótipo experimental para testes de animação e estruturas com Javascript puro.",
    repoUrl: "https://github.com/thomasDelling"
  },
  {
    id: 2,
    title: "Gerenciador de Tarefas",
    image: "",
    tags: ["JavaScript", "LocalStorage"],
    description: "Aplicação estática para organização de tarefas sem persistência remota.",
    repoUrl: "https://github.com/thomasDelling"
  },
  {
    id: 3,
    title: "API Canvas Visualizer",
    image: "",
    tags: ["HTML5 Canvas", "JS Vanilla"],
    description: "Experimento de renderização gráfica direto no navegador usando a API 2D Context.",
    repoUrl: "https://github.com/thomasDelling"
  }
];

// 2. Renderização dos Cards na Seção de Projetos
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData.map(project => {
    const bannerContent = project.image 
      ? `<img src="${project.image}" alt="Cartaz do projeto ${project.title}">`
      : `<div class="card-banner-placeholder">&lt;PROJETO #${project.id}&gt;</div>`;

    const tagsHtml = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    return `
      <article class="project-card">
        <div class="card-banner">
          ${bannerContent}
        </div>
        <div class="card-content">
          <h3 class="card-title">${project.title}</h3>
          <div class="card-tags">
            ${tagsHtml}
          </div>
          <p class="card-description">${project.description}</p>
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-card">
            VER REPOSITÓRIO
          </a>
        </div>
      </article>
    `;
  }).join("");
}

// 3. Menu Mobile
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Fechar o menu ao clicar em qualquer link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// 4. Highlight do Item Ativo na Navbar (ScrollSpy)
function initScrollSpy() {
  const sections = document.querySelectorAll("section.section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initMobileMenu();
  initScrollSpy();
});