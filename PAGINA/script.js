// Selecciona el input del buscador dentro del hero
const searchInput = document.querySelector('.search-box input');

// Selecciona todas las tarjetas del catálogo
const cards = document.querySelectorAll('.catalogo-card');

// Escucha cada vez que el usuario escribe algo en el buscador
searchInput.addEventListener('input', () => {
    // Convierte lo que escribe el usuario a minúsculas para comparar
    const query = searchInput.value.toLowerCase();

    // Recorre todas las tarjetas
    cards.forEach(card => {
        // Obtiene el título de la tarjeta (h3)
        const title = card.querySelector('h3').textContent.toLowerCase();

        // Obtiene la descripción (p dentro del overlay)
        const description = card.querySelector('p').textContent.toLowerCase();

        // Si el título o la descripción incluyen lo que el usuario escribió
        if (title.includes(query) || description.includes(query)) {
            card.style.display = 'block'; // se muestra
        } else {
            card.style.display = 'none';  // se oculta
        }
    });
});
