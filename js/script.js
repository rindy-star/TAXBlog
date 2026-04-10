function bindNavbarToggle() {
  const toggleButton = document.querySelector(".navbar-toggler");
  const collapse = document.querySelector(".navbar-collapse");

  if (!toggleButton || !collapse || toggleButton.dataset.bound === "true") return;
  toggleButton.dataset.bound = "true";

  toggleButton.addEventListener("click", () => {
    const isOpen = collapse.classList.toggle("show");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  collapse.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      collapse.classList.remove("show");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", bindNavbarToggle);
document.addEventListener("includes:loaded", bindNavbarToggle);

function bindPostShareBar() {
  const copyBtn = document.getElementById("copyPostLink");
  if (copyBtn && !copyBtn.dataset.bound) {
    copyBtn.dataset.bound = "true";
    const label = copyBtn.querySelector(".post-share-btn__text");
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        if (label) {
          const prev = label.textContent;
          label.textContent = "Copied!";
          setTimeout(() => {
            label.textContent = prev;
          }, 2000);
        }
      } catch {
        /* ignore */
      }
    });
  }

  const pageUrl = encodeURIComponent(window.location.href);
  document.querySelectorAll("a[data-share]").forEach((el) => {
    const type = el.getAttribute("data-share");
    if (type === "twitter") {
      el.href = `https://twitter.com/intent/tweet?url=${pageUrl}`;
    } else if (type === "facebook") {
      el.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    } else if (type === "linkedin") {
      el.href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
    }
  });
}

document.addEventListener("DOMContentLoaded", bindPostShareBar);
