(() => {
  const input = document.getElementById('selectedFile');
  const button = document.getElementById('button');
  const source = document.querySelector('source');

  input.addEventListener('change', () => {
    source.src = URL.createObjectURL(input.files[0]);
    button.style.visibility = 'hidden';
  });

  document.addEventListener('x-dl8-evt-exit', () => {
    source.src = null;
    button.style.visibility = 'visible';
  });
})();
