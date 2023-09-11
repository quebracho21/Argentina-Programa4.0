// Función para mostrar la vista previa de la foto de perfil
document.getElementById('photo').addEventListener('change', function () {
    const preview = document.getElementById('photo-preview');
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "#";
    }
});

// Función para mostrar información adicional al hacer clic en el botón
function mostrarInfoAdicional() {
    const infoAdicional = document.querySelector('.hidden-info');
    infoAdicional.style.display = infoAdicional.style.display === 'block' ? 'none' : 'block';
}