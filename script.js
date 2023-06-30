//your JS code here. If required.
function updateTextWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

updateTextWithPromise().then((message) => {
  const outputElement = document.getElementById("output");
  outputElement.textContent = message;
});