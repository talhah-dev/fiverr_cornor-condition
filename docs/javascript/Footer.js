const footer = document.getElementById("footer");

if (footer) {
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <footer class="px-4 pb-10 pt-6 sm:px-6 lg:px-10">
      <div class="mx-auto max-w-7xl px-6 py-10 text-center text-white sm:px-10">
      

        <div class="mt-6 flex items-center justify-center gap-3">
          <a href="https://www.instagram.com/corner.condition/" aria-label="Instagram"
            class="flex h-11 w-11 items-center justify-center text-white transition">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@cornercondition" aria-label="TikTok"
            class="flex h-11 w-11 items-center justify-center text-white transition">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCro-oWVB717PWskBcVaGhlg" aria-label="YouTube"
            class="flex h-11 w-11 items-center justify-center text-white transition">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="https://sketchfab.com/haley.e.castro/collections" aria-label="Apple Music"
            class="flex h-11 w-11 items-center justify-center text-white transition">
            <i class="fa-brands fa-apple"></i>
          </a>
          <a href="https://open.spotify.com/artist/0oLEVhi38oprboMuNqFX6e?si=ATPmxUeLT9W_bG3baaMKkg&nd=1&dlsi=26494ac28fc240c2" aria-label="Spotify"
            class="flex h-11 w-11 items-center justify-center text-white transition">
            <i class="fa-brands fa-spotify"></i>
          </a>
          <a href="mailto:info@cornercondition.com" aria-label="Email"
            class="flex h-11 w-11 items-center justify-center text-white transition">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>

      </div>
    </footer>
  `;
}
