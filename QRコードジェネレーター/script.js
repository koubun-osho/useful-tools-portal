let qrcode = null;

document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const downloadBtn = document.getElementById('download-btn');
    const sizeSelect = document.getElementById('size');
    const colorInput = document.getElementById('color');
    const bgColorInput = document.getElementById('bg-color');
    const outputSection = document.querySelector('.output-section');
    const qrCodeDiv = document.getElementById('qr-code');
    
    generateBtn.addEventListener('click', generateQRCode);
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            generateQRCode();
        }
    });
    
    function generateQRCode() {
        const text = textInput.value.trim();
        
        if (!text) {
            alert('テキストまたはURLを入力してください');
            return;
        }
        
        const size = parseInt(sizeSelect.value);
        const color = colorInput.value;
        const bgColor = bgColorInput.value;
        
        // Clear previous QR code
        qrCodeDiv.innerHTML = '';
        
        // Create new QR code
        qrcode = new QRCode(qrCodeDiv, {
            text: text,
            width: size,
            height: size,
            colorDark: color,
            colorLight: bgColor,
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Show output section
        outputSection.classList.add('active');
        
        // Setup download button
        setTimeout(() => {
            setupDownloadButton();
        }, 100);
    }
    
    function setupDownloadButton() {
        const canvas = qrCodeDiv.querySelector('canvas');
        if (canvas) {
            downloadBtn.style.display = 'inline-block';
            downloadBtn.onclick = function() {
                downloadQRCode(canvas);
            };
        } else {
            // For older browsers that use img instead of canvas
            const img = qrCodeDiv.querySelector('img');
            if (img) {
                downloadBtn.style.display = 'inline-block';
                downloadBtn.onclick = function() {
                    downloadQRCodeFromImg(img);
                };
            }
        }
    }
    
    function downloadQRCode(canvas) {
        const link = document.createElement('a');
        const timestamp = new Date().getTime();
        link.download = `qrcode_${timestamp}.png`;
        link.href = canvas.toDataURL();
        link.click();
    }
    
    function downloadQRCodeFromImg(img) {
        // Create canvas from img
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        downloadQRCode(canvas);
    }
    
    // Auto-generate QR code for URLs when pasted
    textInput.addEventListener('paste', function(e) {
        setTimeout(() => {
            const pastedText = textInput.value.trim();
            if (isValidURL(pastedText)) {
                generateQRCode();
            }
        }, 100);
    });
    
    function isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
});