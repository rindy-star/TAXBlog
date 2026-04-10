async function loadIncludes() {
  const includeTargets = Array.from(document.querySelectorAll("[data-include]"));

  await Promise.all(
    includeTargets.map(async (target) => {
      const path = target.getAttribute("data-include");
      if (!path) return;

      const resolvedPath = new URL(path, document.baseURI).toString();
      const response = await fetch(resolvedPath);
      if (!response.ok) return;

      const html = await response.text();
      target.innerHTML = html;
      target.removeAttribute("data-include");
    })
  );

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document
      .querySelectorAll(`.nav-link[data-page="${currentPage}"]`)
      .forEach((link) => link.classList.add("active"));
  }

  document.dispatchEvent(new CustomEvent("includes:loaded"));
}

loadIncludes();
