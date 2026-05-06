const navbar = document.getElementById("navbar");

if (navbar) {
  const navLinks = [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "The Artists", href: "the-artists.html" },
    { label: "Music", href: "music.html" },
    { label: "Videos", href: "videos.html" },
    { label: "Portfolio", href: "portfolio.html" },
    { label: "Fine Art", href: "fine-art.html" },
    { label: "EPK", href: "epk.html" },
    { label: "Contact", href: "contact.html" },
  ];

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const desktopLinks = navLinks
    .map(({ label, href }) => {
      const isActive = href === currentPath;
      return `
        <a href="${href}"
          class="rounded-full px-4 py-2 text-sm font-medium uppercase transition ${
            isActive
              ? "bg-white/20 text-white"
              : "text-white hover:bg-white hover:text-black"
          }">
          ${label}
        </a>
      `;
    })
    .join("");

  const mobileLinks = navLinks
    .map(
      ({ label, href }) => `
        <a href="${href}"
          class="block px-4 py-3 text-sm font-medium uppercase text-white hover:bg-white hover:text-black rounded-lg">
          ${label}
        </a>
      `
    )
    .join("");

  navbar.innerHTML = `
    <header class="z-50 px-4 py-4 sm:px-6">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center justify-between">

          <div class="w-10"></div>

          <nav class="hidden lg:flex justify-center flex-1 gap-2">
            ${desktopLinks}
          </nav>

          <button id="navbarToggle"
            class="lg:hidden h-10 w-10 flex items-center justify-center text-white">
            <i class="fa-solid fa-bars"></i>
          </button>

        </div>
      </div>
    </header>

    <div id="navbarBackdrop"
      class="fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition duration-300 z-40">
    </div>

    <div id="navbarMenu"
      class="fixed top-0 right-0 h-full w-72 bg-red-600 transform translate-x-full transition-transform duration-300 z-50 flex flex-col">

      <div class="flex justify-end p-4">
        <button id="closeMenu" class="text-white text-2xl">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav class="flex flex-col gap-2 px-4">
        ${mobileLinks}
      </nav>

    </div>
  `;

  const toggleButton = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");
  const backdrop = document.getElementById("navbarBackdrop");
  const closeBtn = document.getElementById("closeMenu");

  let isOpen = false;

  const openMenu = () => {
    isOpen = true;
    menu.classList.remove("translate-x-full");
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100");
  };

  const closeMenu = () => {
    isOpen = false;
    menu.classList.add("translate-x-full");
    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("opacity-0", "pointer-events-none");
  };

  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener("click", closeMenu);

  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("click", (e) => {
    if (isOpen && !menu.contains(e.target) && !toggleButton.contains(e.target)) {
      closeMenu();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}