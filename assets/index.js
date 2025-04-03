// Проверяем, поддерживает ли браузер сервис-воркеры
if ('serviceWorker' in navigator) {
    // Ждем, пока страница полностью загрузится
    window.addEventListener('load', () => {
        // Регистрируем сервис-воркер
        navigator.serviceWorker.register('/serviceworker.js')
            .then(registration => {
                console.log('Service Worker зарегистрирован с областью:', registration.scope);
            })
            .catch(error => {
                console.log('Регистрация Service Worker не удалась:', error);
            });
    });
}
