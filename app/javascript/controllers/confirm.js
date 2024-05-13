document.addEventListener("turbo:load", function() {
  document.querySelectorAll("[data-confirm]").forEach(function(element) {
    element.addEventListener("click", function(event) {
      const message = element.getAttribute("data-confirm");
      if (!confirm(message)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });
  });
});
