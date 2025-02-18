document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.roadmap-point');
    const infoBox = document.querySelector('.roadmap-info');

    points.forEach(point => {
        point.addEventListener('mouseenter', function() {
            // Récupérer l'info du point
            const info = this.getAttribute('data-info');
            
            // Positionner et afficher l'info
            infoBox.textContent = info;
            infoBox.style.display = 'block';
            
            // Calculer la position
            const pointRect = this.getBoundingClientRect();
            const roadmapRect = document.querySelector('.roadmap').getBoundingClientRect();
            const leftPosition = pointRect.left - roadmapRect.left;
            
            infoBox.style.left = leftPosition + 'px';
        });

        point.addEventListener('mouseleave', function() {
            infoBox.style.display = 'none';
        });
    });
});