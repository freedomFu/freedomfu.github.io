(function () {
  "use strict";

  var ICONS = {
    "about-me": "fa-user",
    "news": "fa-bullhorn",
    "research-statement": "fa-book",
    "research-works": "fa-newspaper",
    "publications": "fa-newspaper"
  };

  var WIDE_QUERY = "(min-width: 1440px)";

  var toggle = document.getElementById("toc-toggle");
  var panel = document.getElementById("toc-panel");
  var backdrop = document.getElementById("toc-backdrop");
  var nav = document.getElementById("toc-nav");
  if (!toggle || !panel || !nav || !backdrop) return;

  var headings = Array.prototype.slice.call(
    document.querySelectorAll(".main-content h2")
  );

  headings.forEach(function (h, i) {
    if (!h.id) {
      var slug = h.textContent.trim().toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      h.id = slug || "section-" + (i + 1);
    }
    var icon = ICONS[h.id] || "fa-hashtag";
    var a = document.createElement("a");
    a.href = "#" + h.id;
    a.className = "toc-link";
    a.setAttribute("data-toc-target", h.id);
    a.innerHTML =
      '<span class="toc-icon"><i class="fa-solid ' + icon + '" aria-hidden="true"></i></span>' +
      '<span class="toc-text">' + h.textContent.trim() + "</span>";
    nav.appendChild(a);
  });

  var links = Array.prototype.slice.call(nav.querySelectorAll(".toc-link"));

  function isWide() {
    return window.matchMedia(WIDE_QUERY).matches;
  }

  function isOpen() {
    return document.body.classList.contains("toc-open");
  }

  function open() {
    document.body.classList.add("toc-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function close() {
    document.body.classList.remove("toc-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    if (isOpen()) close(); else open();
  });

  backdrop.addEventListener("click", close);

  // On narrow screens the panel overlays content, so dismiss it after navigating.
  nav.addEventListener("click", function (e) {
    var link = e.target.closest(".toc-link");
    if (!link) return;
    if (!isWide()) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) close();
  });

  // Highlight the section currently in view.
  var idToLink = {};
  links.forEach(function (l) {
    idToLink[l.getAttribute("data-toc-target")] = l;
  });

  if ("IntersectionObserver" in window && headings.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = idToLink[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    headings.forEach(function (h) { observer.observe(h); });
  }
})();
