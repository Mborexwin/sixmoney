// Crear el objeto de audio base
const keySound = new Audio("teclado.mp3");

// Función para reproducir sonido sin que se corte el anterior
function playKeySound() {
  const sound = keySound.cloneNode(teclado.mp3); // clonar audio
  sound.play(teclado.mp3);
}

function typeWriter() {
  if (index < text.length) {
    messageEl.textContent += text.charAt(index);

    // reproducir sonido
    playKeySound(teclado.mp3);

    index++;
    setTimeout(typeWriter, 100); // velocidad de escritura
  } else {
    btn.style.display = "inline-block"; // mostrar botón al final
  }
}
