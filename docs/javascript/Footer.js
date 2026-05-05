const footer = document.getElementById("footer");

if (footer) {
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <footer class="px-4 pb-10 pt-6 sm:px-6 lg:px-10">
      <div class="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-red-950/30 px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-10">
        <h2 class="text-2xl font-medium sm:text-3xl">Corner Condition</h2>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
          Multivalent electronic music shaped through sound, image, and performance.
        </p>

        <div class="mt-6 flex items-center justify-center gap-3">
          <a href="#" aria-label="Instagram"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" aria-label="TikTok"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="#" aria-label="YouTube"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="#" aria-label="Apple Music"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black">
            <i class="fa-brands fa-apple"></i>
          </a>
          <a href="#" aria-label="Spotify"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black">
            <i class="fa-brands fa-spotify"></i>
          </a>
          <a href="mailto:info@cornercondition.com" aria-label="Email"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
          <a href="index.html" class="transition hover:text-white">Home</a>
          <a href="about.html" class="transition hover:text-white">About</a>
          <a href="music.html" class="transition hover:text-white">Music</a>
          <a href="videos.html" class="transition hover:text-white">Videos</a>
          <a href="contact.html" class="transition hover:text-white">Contact</a>
        </div>

        <p class="mt-8 text-xs text-white/55">
          &copy; ${year} Corner Condition. All rights reserved.
        </p>
      </div>
    </footer>
  `;
}
