document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 0 30px #ff4d4d';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    });
});
