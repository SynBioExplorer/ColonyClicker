// Remove: const { ipcRenderer } = require('electron'); as it's not needed with contextIsolation

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const endSessionBtn = document.getElementById('endSessionBtn');
const imageInfo = document.getElementById('imageInfo'); // For displaying current image count
let images = []; // To store uploaded files
let currentIndex = -1; // Initialized to -1 to handle initial load correctly
let annotations = {}; // Object to store annotations for each image by index
let currentImg = null; // To store the current image for redrawing
console.log('canvas:', canvas);
console.log('nextBtn:', nextBtn);
console.log('prevBtn:', prevBtn);
console.log('endSessionBtn:', endSessionBtn);
console.log('imageInfo:', imageInfo);

// Followed by your existing addEventListener calls

document.getElementById('imageUpload').addEventListener('change', function(event) {
    images = Array.from(event.target.files);
    annotations = {}; // Reset annotations when new images are loaded
    if (images.length) {
        currentIndex = 0; // Start from the first image
        displayImage(images[currentIndex]); // Display the first image initially
    }
});

canvas.addEventListener('pointerdown', handleAnnotation);

function handleAnnotation(event) {
    event.preventDefault(); // Prevents the default action to ensure consistent behavior
    if (images.length === 0 || currentIndex === -1) return; // Do nothing if no images are loaded or index is not set

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (!annotations[currentIndex]) {
        annotations[currentIndex] = [];
    }
    annotations[currentIndex].push({x, y});

    redrawCanvas();
    updateCountDisplay(); // Update the counter display
}
function updateCountDisplay() {
    // Assuming 'countDisplay' is the ID of the element showing the count
    const countDisplay = document.getElementById('countDisplay');
    const currentCount = annotations[currentIndex] ? annotations[currentIndex].length : 0;
    countDisplay.innerText = 'Count: ' + currentCount;
}

prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        displayImage(images[currentIndex]);
    }
});

nextBtn.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        displayImage(images[currentIndex]);
    }
});

endSessionBtn.addEventListener('click', function() {
    window.electronAPI.saveAnnotatedImages(prepareAnnotatedImagesForSaving());
    annotations = {}; // Reset annotations after saving
    currentIndex = -1; // Reset index to indicate session end
    updateImageInfo(); // Update the image counter display
});

function displayImage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            currentImg = img; // Update currentImg to the newly loaded image
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            updateImageInfo(); // Update the image counter when displaying a new image
            redrawCanvas(); // Redraw annotations for the new image
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImg, 0, 0);
    const currentAnnotations = annotations[currentIndex] || [];
    currentAnnotations.forEach(({x, y}, index) => {
        ctx.font = '8px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText(index + 1, x, y); // Number annotations sequentially
    });
}

function updateImageInfo() {
    if (currentIndex >= 0 && images.length > 0) {   
        imageInfo.innerText = `${currentIndex + 1}/${images.length} pictures`;
    } else {
        imageInfo.innerText = `0/0 pictures`; // Default text when no images are loaded
    }
}

function prepareAnnotatedImagesForSaving() {
    return Object.keys(annotations).map(index => {
        const filename = images[index].name;
        const baseFilename = filename.replace(/\.[^/.]+$/, "");
        const extension = filename.split('.').pop();
        const countCFU = annotations[index].length;
        const annotatedFilename = `${baseFilename}_${countCFU}CFU.${extension}`;
        return { filename: annotatedFilename, dataURL: canvas.toDataURL('image/png') };
    });
}
