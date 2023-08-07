let qrCodeInstance = null;

function generateQRCode() {
    const inputData = document.getElementById('inputData').value.trim();
    if (!inputData) {
        alert("Please enter text or URL to generate the QR code.");
        return;
    }

    const qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = ''; // Clear any previous QR codes

    qrCodeInstance = new QRCode(qrCodeDiv, {
        text: inputData,
        width: 300,
        height: 300,
    });
}

function downloadQRCode() {
    if (!qrCodeInstance) {
        alert("Please generate a QR code first.");
        return;
    }

    const qrCanvas = document.querySelector("#qrcode canvas");
    const downloadLink = document.createElement("a");

    qrCanvas.toBlob(function (blob) {
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "qr_code.png";
        downloadLink.click();
        URL.revokeObjectURL(url);
    });
}