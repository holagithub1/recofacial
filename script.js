// Navegación dinámica
const menuItems = document.querySelectorAll('.menu-item');
const views = document.querySelectorAll('.view');

menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        // Remover clase 'active' de todos los enlaces
        menuItems.forEach(menu => menu.classList.remove('active'));

        // Agregar clase 'active' al elemento clicado
        this.classList.add('active');

        // Cambiar vistas
        const viewToShow = this.getAttribute('data-view');
        if (viewToShow) {
            views.forEach(view => view.classList.remove('active'));
            document.getElementById(`${viewToShow}View`).classList.add('active');
        }
    });
});

// Gráfico de línea
const ctx = document.getElementById('lineChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Incidencias',
            data: [10, 20, 15, 40, 25, 30],
            backgroundColor: 'rgba(255, 204, 0, 0.2)',
            borderColor: 'rgba(255, 204, 0, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff'
                }
            },
            y: {
                ticks: {
                    color: '#ffffff'
                }
            }
        }
    }
});
