export default function renderNavbar() {
  const nav = document.getElementById('navbar');
  nav.innerHTML = `
    <nav class="nav">
      <div class="logo">Flowex</div>
      <div class="links">
        <a href="../../public/index.html">Home</a>
        <a href="../pages/quests.html">Quests</a>
        <a href="../pages/login.html">Login</a>
        <a href="../pages/signup.html" class="btn">Sign up</a>
      </div>
    </nav>
  `;
}
document.addEventListener('DOMContentLoaded', renderNavbar);
