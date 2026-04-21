@import "tailwindcss";

@theme {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

:root {
  color-scheme: dark;
}

body {
  background-color: black;
  color: white;
  overflow-x: hidden;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #333;
}

html {
  scroll-behavior: smooth;
}

@layer base {
  * {
    @apply border-white/10;
  }
}
