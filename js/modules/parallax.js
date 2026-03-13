import { throttle } from './utils.js';

export function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Сохраняем начальную позицию фона
    const initialBgPos = window.getComputedStyle(hero).backgroundPositionY || '0%';
    
    const throttledParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        const heroTop = hero.offsetTop;
        const heroHeight = hero.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Проверяем, видна ли hero-секция
        const isVisible = scrolled + windowHeight > heroTop && scrolled < heroTop + heroHeight;
        
        if (isVisible) {
            // Рассчитываем прогресс прокрутки относительно hero-секции (от 0 до 1)
            const progress = (scrolled + windowHeight - heroTop) / (heroHeight + windowHeight);
            
            // Ограничиваем прогресс от 0 до 1
            const clampedProgress = Math.max(0, Math.min(1, progress));
            
            // Плавно изменяем позицию фона от 0% до 20% (или другого значения)
            // Используем clamp, чтобы не уходить за пределы
            const bgPosition = clampedProgress * 20; // Максимум 20% смещения
            
            hero.style.backgroundPositionY = `${bgPosition}%`;
        }
    }, 16); // 60fps
    
    window.addEventListener('scroll', throttledParallax);
    // Запускаем один раз для начальной установки
    throttledParallax();
}