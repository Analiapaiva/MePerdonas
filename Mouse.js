document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.button.yes');
    const noButton = document.querySelector('.button.no');
    let scaleFactor = 1.5; // Escala inicial para el botón "Sí"

    noButton.addEventListener('click', () => {
        scaleFactor += 0.2; // Incrementa la escala en cada clic en "No"
        yesButton.style.transform = `scale(${scaleFactor})`; // Agranda el botón "Sí" con el nuevo factor
        noButton.style.transform = 'scale(0.7)';  // Achica el botón "No"
        alert('¿Por qué no me perdonas?'); // Mostrar la alerta
    });

    yesButton.addEventListener('click', () => {
        alert('Gracias por perdonarme'); // Mostrar la alerta de agradecimiento
        // Reinicia los tamaños de los botones a sus estados originales si se desea
        yesButton.style.transform = 'scale(1)';  
        noButton.style.transform = 'scale(1)';
        scaleFactor = 1.5; // Reinicia el factor de escala para el próximo clic en "No"
    });
});
