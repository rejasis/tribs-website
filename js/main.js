/* TRIBS site behaviour: icons, navigation, contact form. */
(function () {
  "use strict";

  /* ---- Icons: 2px-stroke line set on a 24px grid (TRIBS design system) ---- */
  var ICONS = {
    "arrow-right": ["M5 12h14", "m12 5 7 7-7 7"],
    wrench: ["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"],
    truck: ["M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", "M15 18H9", "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14", "c17 18 2", "c7 18 2"],
    "map-pin": ["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", "c12 10 3"],
    "shield-check": ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", "m9 12 2 2 4-4"],
    gear: ["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", "c12 12 3"],
    clock: ["c12 12 10", "M12 6v6l4 2"],
    users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "c9 7 4", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
    target: ["c12 12 10", "c12 12 6", "c12 12 2"],
    eye: ["M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", "c12 12 3"],
    phone: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"],
    mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "m22 6-10 7L2 6"],
    "chevron-down": ["m6 9 6 6 6-6"],
    check: ["M20 6 9 17l-5-5"],
    menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
    x: ["M18 6 6 18", "m6 6 12 12"],
    package: ["m7.5 4.27 9 5.15", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z", "m3.3 7 8.7 5 8.7-5", "M12 22V12"],
    bike: ["c5.5 17.5 3.5", "c18.5 17.5 3.5", "c15 5 1", "M12 17.5V14l-3-3 4-3 2 3h2"],
    van: ["M3 17V7a2 2 0 0 1 2-2h10l4 5h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1", "M15 5v5h4", "M9 18h6", "c7 18 2", "c17 18 2"]
  };
  var NS = "http://www.w3.org/2000/svg";

  function drawIcon(svg) {
    var name = svg.getAttribute("data-icon");
    var parts = ICONS[name];
    if (!parts) return;
    var size = svg.getAttribute("width") || "24";
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", size);
    svg.setAttribute("height", svg.getAttribute("height") || size);
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", svg.getAttribute("stroke-width") || "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    if (!svg.hasAttribute("aria-label")) svg.setAttribute("aria-hidden", "true");
    svg.classList.add("icon");
    parts.forEach(function (d) {
      var el;
      if (d.charAt(0) === "c") {
        var a = d.slice(1).split(" ");
        el = document.createElementNS(NS, "circle");
        el.setAttribute("cx", a[0]); el.setAttribute("cy", a[1]); el.setAttribute("r", a[2]);
      } else {
        el = document.createElementNS(NS, "path");
        el.setAttribute("d", d);
      }
      svg.appendChild(el);
    });
  }
  document.querySelectorAll("svg[data-icon]").forEach(drawIcon);

  /* ---- Mobile navigation ---- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      var svg = toggle.querySelector("svg");
      svg.textContent = "";
      svg.setAttribute("data-icon", open ? "x" : "menu");
      drawIcon(svg);
    });
  }

  /* ---- Services dropdown ---- */
  document.querySelectorAll(".has-menu").forEach(function (item) {
    var btn = item.querySelector("[aria-haspopup]");
    function setOpen(open) {
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    }
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      setOpen(!item.classList.contains("is-open"));
    });
    document.addEventListener("click", function (e) {
      if (!item.contains(e.target)) setOpen(false);
    });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { setOpen(false); btn.focus(); }
    });
  });

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Pre-select a service from ?service= on the contact page ---- */
  var select = document.getElementById("service");
  if (select) {
    var wanted = new URLSearchParams(location.search).get("service");
    if (wanted) {
      Array.prototype.forEach.call(select.options, function (o) {
        if (o.value === wanted) select.value = wanted;
      });
    }
  }

  /* ---- Quote form: validate, then hand off to the visitor's email app ---- */
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var allValid = true;
      form.querySelectorAll("[required]").forEach(function (field) {
        var err = document.getElementById(field.id + "-error");
        var valid = field.checkValidity();
        field.setAttribute("aria-invalid", String(!valid));
        if (err) err.textContent = valid ? "" : (field.validity.typeMismatch ? "Please enter a valid email address." : "This field is required.");
        if (!valid && allValid) { field.focus(); allValid = false; }
      });
      if (!allValid) return;

      var fields = new FormData(form);
      var subject = "Quote request: " + (fields.get("service") || "General enquiry");
      var body = [
        "Name: " + fields.get("name"),
        "Company: " + (fields.get("company") || "-"),
        "Email: " + fields.get("email"),
        "Phone: " + (fields.get("phone") || "-"),
        "Service: " + (fields.get("service") || "-"),
        "",
        fields.get("message")
      ].join("\n");
      var to = form.getAttribute("data-to");
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      var status = document.getElementById("form-status");
      if (status) status.textContent = "Thank you. Your email app should open with your request ready to send. You can also call us on +63 906 443 1326.";
    });
  }
})();
