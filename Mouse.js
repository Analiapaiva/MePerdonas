document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.button.yes');
    const noButton = document.querySelector('.button.no');
    let scaleFactor = 1.5; // Escala inicial para el botón "Sí"

    noButton.addEventListener('click', () => {
        scaleFactor += 0.2; // Incrementa la escala en cada clic en "No"
        yesButton.style.transform = `scale(${scaleFactor})`; // Agranda el botón "Sí" con el nuevo factor
        noButton.style.transform = 'scale(0.7)';  // Achica el botón "No"
        alert('Perdoname Porfis 🙏'); // Mostrar la alerta con un emoji
    });

    yesButton.addEventListener('click', () => {
        // Mostrar la alerta de agradecimiento con un emoji
        alert('Gracias por perdonarme!!! 😄');
        // Ocultar los botones después de la alerta
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    });
});
