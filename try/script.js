function logVisitor(action) {
  fetch("https://sultan.free.nf/log.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `action=${action}`
  }).then(res => res.text()).then(console.log);
}

window.addEventListener('load', () => {
  logVisitor("دخل");
});

window.addEventListener('beforeunload', () => {
  navigator.sendBeacon("https://sultan.free.nf/log.php", new URLSearchParams({ action: "خرج" }));
});
