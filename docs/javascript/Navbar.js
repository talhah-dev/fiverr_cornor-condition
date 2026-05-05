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
        <a
          href="${href}"
          class="rounded-full px-4 py-2 text-sm font-medium uppercase transition ${
            isActive
              ? "bg-white/18 text-white"
              : "text-white hover:bg-white hover:text-black"
          }"
        >
          ${label}
        </a>
      `;
    })
    .join("");

  const mobileLinks = navLinks
    .map(
      ({ label, href }) => `
        <a
          href="${href}"
          class="rounded-full px-4 py-3 text-sm font-medium uppercase text-white transition hover:bg-white hover:text-black"
        >
          ${label}
        </a>
      `
    )
    .join("");

  navbar.innerHTML = `
    <header class="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div class="mx-auto max-w-6xl rounded-full border border-red-200/45 bg-red-500/35 px-4 py-3 shadow-[0_12px_40px_rgba(127,29,29,0.28)] backdrop-blur-xl">
        <div class="flex items-center justify-center">
          <nav class="hidden flex-wrap items-center justify-center gap-2 lg:flex">
            ${desktopLinks}
          </nav>

          <button
            id="navbarToggle"
            type="button"
            aria-label="Open navigation"
            aria-expanded="false"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-400/40 text-white transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            <i class="fa-solid fa-bars text-sm"></i>
          </button>
        </div>
      </div>
    </header>

    <div
      id="navbarBackdrop"
      class="pointer-events-none fixed inset-0 z-40 bg-black/45 opacity-0 transition-opacity duration-300 lg:hidden"
    ></div>

    <div
      id="navbarMenu"
      class="pointer-events-none fixed inset-x-4 top-24 z-50 translate-y-4 opacity-0 transition-all duration-300 ease-out lg:hidden sm:inset-x-6"
    >
      <nav class="grid grid-cols-1 gap-2 rounded-2xl border border-red-200/40 bg-red-600/70 p-4 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
        ${mobileLinks}
      </nav>
    </div>
  `;

  const toggleButton = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");
  const backdrop = document.getElementById("navbarBackdrop");

  if (toggleButton && menu && backdrop) {
    const setMenuState = (isOpen) => {
      toggleButton.setAttribute("aria-expanded", String(isOpen));
      toggleButton.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark text-base"></i>'
        : '<i class="fa-solid fa-bars text-base"></i>';

      menu.classList.toggle("pointer-events-none", !isOpen);
      menu.classList.toggle("opacity-0", !isOpen);
      menu.classList.toggle("translate-y-4", !isOpen);
      menu.classList.toggle("opacity-100", isOpen);
      menu.classList.toggle("translate-y-0", isOpen);

      backdrop.classList.toggle("pointer-events-none", !isOpen);
      backdrop.classList.toggle("opacity-0", !isOpen);
      backdrop.classList.toggle("opacity-100", isOpen);
    };

    toggleButton.addEventListener("click", () => {
      const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    backdrop.addEventListener("click", () => {
      setMenuState(false);
    });

    document.addEventListener("click", (event) => {
      const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
      if (!isOpen) {
        return;
      }

      if (!navbar.contains(event.target)) {
        setMenuState(false);
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });
  }
}
