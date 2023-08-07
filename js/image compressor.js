
function compressImage() {
  const imageInput = document.getElementById('image-input');
  const compressedImage = document.getElementById('compressed-image');
  const downloadLink = document.getElementById('download-link');

  if (!imageInput.files.length) {
    alert('Please select an image.');
    return;
  }

  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();
    img.src = event.target.result;

    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Calculate the new image width and height to fit within 800x800
      const maxWidth = 800;
      const maxHeight = 800;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      // Convert canvas to base64 encoded data URL with JPEG format and 80% quality
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);

      // Display the compressed image
      compressedImage.src = compressedDataUrl;
      compressedImage.style.display = 'block';

      // Set the download link to the compressed image data URL
      downloadLink.href = compressedDataUrl;
      downloadLink.style.display = 'block';
    };
  };

  reader.readAsDataURL(file);
}
