// JavaScript para manejar la funcionalidad de la aplicación

const photoGallery = document.getElementById("photo-gallery");
const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");

fileInput.addEventListener("change", handleFileUpload);
uploadButton.addEventListener("click", openFileInput);

function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (file) {
        const imageURL = URL.createObjectURL(file);
        displayPhoto(imageURL);
    }
}

function displayPhoto(imageURL) {
    const photo = document.createElement("img");
    photo.className = "photo";
    photo.src = imageURL;
    photoGallery.appendChild(photo);
}

function openFileInput() {
    fileInput.click();
}
function returnToMain() {
    // Oculta las secciones de fotos
    document.getElementById('new-love-photo-section').style.display = 'none';
    document.getElementById('new-sold-photo-section').style.display = 'none';

    // Muestra el contenedor de contraseña
    document.getElementById('password-container').style.display = 'block';
}
function showLovePhotos() {
    // Oculta ambas secciones de fotos
    document.getElementById('new-love-photo-section').style.display = 'block';
    document.getElementById('new-sold-photo-section').style.display = 'none';
}

function showSoldPhotos() {
    // Oculta ambas secciones de fotos
    document.getElementById('new-love-photo-section').style.display = 'none';
    document.getElementById('new-sold-photo-section').style.display = 'block';
}
function showLovePhotos() {
    // Ocultar la sección de "Vendidas" si está visible
    document.getElementById('new-sold-photo-section').style.display = 'none';

    document.getElementById('photo-gallery').style.display = 'none';
    const lovePhotoSection = document.getElementById('new-love-photo-section');
    lovePhotoSection.style.display = 'block';
    lovePhotoSection.innerHTML = ""; // Limpiamos cualquier contenido anterior

    // Agrega las URLs de las fotos que deseas mostrar después de presionar "Fotos con mi amor"
    const lovePhotoURLs = [
        'https://previews.dropbox.com/p/thumb/ACCd7pq6GdAdoPR4T7l2NDVsw0vG_YNCKUqiQ0L1vQDMNkcj9T-V8dhAXBQ8S0tkUK3J0QVNtO-9f9YiI70PZnq2COdwaaPJJhOac2qDLyT4CEV8kpx7YAHxYKoP8C7iyocPJBcjuZZp66818SvXDL_wVBtGeTvWU33YPTuGf9O6syCMe1YAQcjJfdODBOKu-qY_yPqBZvyqZT6CTd19_PCJpFoXaMAd6laJlFRnBF8H5flYrNKcU4q1Vzwuj-ut-Mp63nJuGu6RM4ugbZe7TSkTZcSh9155s0-9OxGZnHjFacrOiar3DRsEw9G5LcV-jNxfyU1moWdm6QA4j9x-M1uD/p.jpeg',
        'URL-DE-TU-FOTO-12.jpg',
        'URL-DE-TU-FOTO-13.jpg',
        'URL-DE-TU-FOTO-14.jpg',
        'URL-DE-TU-FOTO-15.jpg',
        'URL-DE-TU-FOTO-16.jpg',
        'URL-DE-TU-FOTO-17.jpg',
        'URL-DE-TU-FOTO-18.jpg',
        'URL-DE-TU-FOTO-19.jpg',
        'URL-DE-TU-FOTO-20.jpg'
    ];

    for (let i = 0; i < lovePhotoURLs.length; i++) {
        const img = document.createElement('img');
        img.src = lovePhotoURLs[i];
        img.alt = `Foto ${i + 11}`;
        lovePhotoSection.appendChild(img);

        // Agrega un salto de línea después de cada tercer elemento
        if ((i + 11) % 3 === 0) {
            lovePhotoSection.appendChild(document.createElement('br'));
        }
    }

    // Centra la décima foto
    lovePhotoSection.style.textAlign = 'center';
    const lastImage = lovePhotoSection.lastChild.previousSibling; // Obtén la última imagen agregada
    lastImage.style.margin = '0 auto';
}
// Funciones para mostrar las secciones de fotos en el mismo apartado
function showLovePhotos() {
    // ... (código anterior)

    // Establecer el ancho máximo para las imágenes en "Fotos con mi amor"
    const lovePhotoImages = lovePhotoSection.getElementsByTagName('img');
    for (let i = 0; i < lovePhotoImages.length; i++) {
        lovePhotoImages[i].style.maxWidth = '300px'; // Ajusta el ancho máximo según tus preferencias
    }
}

function showSoldPhotos() {
    // ... (código anterior)

    // Establecer el ancho máximo para las imágenes en "Vendidas"
    const soldPhotoImages = soldPhotoSection.getElementsByTagName('img');
    for (let i = 0; i < soldPhotoImages.length; i++) {
        soldPhotoImages[i].style.maxWidth = '300px'; // Ajusta el ancho máximo según tus preferencias
    }
}
// Función para mostrar las secciones de fotos en el mismo apartado
function showLovePhotos() {
    document.getElementById('photo-gallery').style.display = 'none';
    const lovePhotoSection = document.getElementById('new-love-photo-section');
    lovePhotoSection.style.display = 'block';
    lovePhotoSection.innerHTML = ""; // Limpiamos cualquier contenido anterior

    // Agrega las URLs de las 10 fotos que deseas mostrar en "Fotos con mi amor"
    const lovePhotoURLs = [
        'https://i.ibb.co/mXKPLQ6/IMG-1950.jpg',
        // ... URLs de tus fotos ...
    ];

    for (let i = 0; i < lovePhotoURLs.length; i++) {
        const img = document.createElement('img');
        img.src = lovePhotoURLs[i];
        img.alt = `Foto ${i + 1}`;
        img.style.maxWidth = '300px'; // Ajusta el ancho máximo según tus preferencias
        lovePhotoSection.appendChild(img);

        // Agrega un salto de línea después de cada tercer elemento
        if ((i + 1) % 3 === 0) {
            lovePhotoSection.appendChild(document.createElement('br'));
        }
    }

    // Centra la décima foto
    lovePhotoSection.style.textAlign = 'center';
}

// Función para mostrar las secciones de fotos en el mismo apartado
function showSoldPhotos() {
    document.getElementById('photo-gallery').style.display = 'none';
    const soldPhotoSection = document.getElementById('new-sold-photo-section');
    soldPhotoSection.style.display = 'block';
    soldPhotoSection.innerHTML = ""; // Limpiamos cualquier contenido anterior

    // Agrega las URLs de las 10 fotos que deseas mostrar en "Vendidas"
    const soldPhotoURLs = [
        // ... URLs de tus fotos ...
    ];

    for (let i = 0; i < soldPhotoURLs.length; i++) {
        const img = document.createElement('img');
        img.src = soldPhotoURLs[i];
        img.alt = `Foto ${i + 11}`;
        img.style.maxWidth = '300px'; // Ajusta el ancho máximo según tus preferencias
        soldPhotoSection.appendChild(img);

        // Agrega un salto de línea después de cada tercer elemento
        if ((i + 11) % 3 === 0) {
            soldPhotoSection.appendChild(document.createElement('br'));
        }
    }

    // Centra la décima foto
    soldPhotoSection.style.textAlign = 'center';
}
// Función para mostrar las secciones de fotos en el mismo apartado
function showLovePhotos() {
    document.getElementById('photo-gallery').style.display = 'none';
    const lovePhotoSection = document.getElementById('new-love-photo-section');
    lovePhotoSection.style.display = 'block';
    lovePhotoSection.innerHTML = ""; // Limpiamos cualquier contenido anterior

    // Agrega las URLs de las 10 fotos que deseas mostrar en "Fotos con mi amor"
    const lovePhotoURLs = [
        'https://i.ibb.co/mXKPLQ6/IMG-1950.jpg',
        // ... URLs de tus fotos ...
    ];

    for (let i = 0; i < lovePhotoURLs.length; i++) {
        const img = document.createElement('img');
        img.src = lovePhotoURLs[i];
        img.alt = `Foto ${i + 1}`;
        img.style.maxWidth = '30%'; // Ajusta el ancho máximo al 30% del contenedor
        img.style.margin = '10px'; // Agrega un margen para separar las imágenes
        lovePhotoSection.appendChild(img);

        // Agrega un salto de línea después de cada tercer elemento
        if ((i + 1) % 3 === 0) {
            lovePhotoSection.appendChild(document.createElement('br'));
        }
    }

    // Centra la décima foto
    lovePhotoSection.style.textAlign = 'center';
}
