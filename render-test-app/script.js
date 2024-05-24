// public/script.js
document.getElementById('greetButton').addEventListener('click', () => {
    fetch('/api/greet')
      .then(response => response.json())
      .then(data => {
        document.getElementById('greetMessage').textContent = data.message;
      });
  });
  