(function () {
  "use strict";

  var root = document.querySelector("[data-publications]");
  if (!root) return;

  var list = root.querySelector("[data-publication-list]");
  var cards = Array.prototype.slice.call(root.querySelectorAll(".publication-card"));
  var viewControls = Array.prototype.slice.call(root.querySelectorAll("[data-publication-view]"));
  var topicControls = Array.prototype.slice.call(root.querySelectorAll("[data-topic-filter]"));
  var status = root.querySelector("[data-publication-status]");
  var originalOrder = cards.slice();
  var topicOrder = [
    "identity-authentication",
    "password-managers",
    "usable-security",
    "empirical-security",
    "digital-forensics",
    "software-testing"
  ];
  var topicLabels = {
    "identity-authentication": "Identity Authentication",
    "password-managers": "Password Managers",
    "usable-security": "Usable Security",
    "empirical-security": "Empirical Security",
    "digital-forensics": "Digital Forensics",
    "software-testing": "Software Testing"
  };

  function setActiveView(view) {
    viewControls.forEach(function (control) {
      var active = control.getAttribute("data-publication-view") === view;
      control.classList.toggle("is-active", active);
      control.setAttribute("aria-pressed", String(active));
    });
  }

  function resetTopics() {
    topicControls.forEach(function (control) {
      control.classList.remove("is-active");
      control.setAttribute("aria-pressed", "false");
    });
  }

  function clearTopicGroups() {
    cards.forEach(function (card) {
      card.classList.remove("topic-group-start");
      card.removeAttribute("data-group-title");
    });
  }

  function showCards(visibleCards, message) {
    cards.forEach(function (card) {
      card.hidden = visibleCards.indexOf(card) === -1;
    });
    visibleCards.forEach(function (card) {
      list.appendChild(card);
    });
    status.textContent = message + " · " + visibleCards.length + " publication" + (visibleCards.length === 1 ? "" : "s");
  }

  function renderView(view) {
    resetTopics();
    clearTopicGroups();
    setActiveView(view);

    if (view === "selected") {
      var selected = originalOrder.filter(function (card) {
        return card.getAttribute("data-selected") === "true";
      });
      showCards(selected, "Showing selected works");
      return;
    }

    if (view === "topic") {
      var grouped = originalOrder.slice().sort(function (a, b) {
        var topicDifference =
          topicOrder.indexOf(a.getAttribute("data-primary-topic")) -
          topicOrder.indexOf(b.getAttribute("data-primary-topic"));
        return topicDifference || Number(b.getAttribute("data-year")) - Number(a.getAttribute("data-year"));
      });
      var previousTopic = "";
      grouped.forEach(function (card) {
        var topic = card.getAttribute("data-primary-topic");
        if (topic !== previousTopic) {
          card.classList.add("topic-group-start");
          card.setAttribute("data-group-title", topicLabels[topic] || topic);
          previousTopic = topic;
        }
      });
      showCards(grouped, "Showing all works grouped by topic");
      return;
    }

    var dated = originalOrder.slice().sort(function (a, b) {
      return Number(b.getAttribute("data-year")) - Number(a.getAttribute("data-year"));
    });
    showCards(dated, "Showing all works by date");
  }

  viewControls.forEach(function (control) {
    control.addEventListener("click", function () {
      renderView(control.getAttribute("data-publication-view"));
    });
  });

  topicControls.forEach(function (control) {
    control.setAttribute("aria-pressed", "false");
    control.addEventListener("click", function () {
      var topic = control.getAttribute("data-topic-filter");
      clearTopicGroups();
      setActiveView("");
      resetTopics();
      control.classList.add("is-active");
      control.setAttribute("aria-pressed", "true");
      var matching = originalOrder.filter(function (card) {
        return card.getAttribute("data-topics").split(/\s+/).indexOf(topic) !== -1;
      });
      showCards(matching, "Topic: " + control.textContent);
    });
  });

  renderView("selected");
})();
