const infoBtn = document.getElementById('infoBtn');
        const downloadBtn = document.getElementById('downloadBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeModal = document.getElementById('closeModal');

        // Abrir modal de información
        infoBtn.addEventListener('click', () => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Cerrar modal de información
        closeModal.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Cerrar modal al hacer clic fuera del contenido
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Acción del botón de descarga
        downloadBtn.addEventListener('click', () => {
            // // En un caso real, aquí iría el enlace de descarga
            // alert('¡Gracias por tu interés en AppSync! En una implementación real, este botón descargaría el archivo APK o redirigiría a Google Play Store.');
            
            // // Simulación de descarga
            // downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Descargando...';
            // downloadBtn.disabled = true;
            
            // setTimeout(() => {
            //     downloadBtn.innerHTML = '<i class="fab fa-android"></i> ¡Descarga completada!';
            //     setTimeout(() => {
            //         downloadBtn.innerHTML = '<i class="fab fa-android"></i> Descargar para Android';
            //         downloadBtn.disabled = false;
            //     }, 2000);
            // }, 1500);


            window.open('https://servidorconsultavehicular-production.up.railway.app/appConsultaVehicular', '_blank');


        });

        // Efecto de animación al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.hero-content').style.opacity = '0';
            document.querySelector('.hero-content').style.transform = 'translateY(20px)';
            document.querySelector('.hero-image').style.opacity = '0';
            document.querySelector('.hero-image').style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                document.querySelector('.hero-content').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                document.querySelector('.hero-content').style.opacity = '1';
                document.querySelector('.hero-content').style.transform = 'translateY(0)';
                
                document.querySelector('.hero-image').style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
                document.querySelector('.hero-image').style.opacity = '1';
                document.querySelector('.hero-image').style.transform = 'translateY(0)';
            }, 300);
        });