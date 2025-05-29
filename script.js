document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Переключение мобильного меню
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Закрытие меню при клике на ссылку (для мобильных)
    navLinks.forEach(link => {
        link.addEvenListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Плавный скролл к секциям
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            const targetId = this.getAttribute('href'); // Получаем ID целевой секции
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Высота хедера для корректного смещения
                const headerOffset = document.querySelector('.main-header').offsetHeight || 0;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Плавная прокрутка
                });
            }
        });
    });
});