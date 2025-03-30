// 获取DOM元素
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const compressionSettings = document.getElementById('compressionSettings');
const previewArea = document.getElementById('previewArea');
const originalPreview = document.getElementById('originalPreview');
const compressedPreview = document.getElementById('compressedPreview');
const originalSize = document.getElementById('originalSize');
const compressedSize = document.getElementById('compressedSize');
const qualitySlider = document.getElementById('quality');
const qualityValue = document.getElementById('qualityValue');
const compressBtn = document.getElementById('compressBtn');
const downloadBtn = document.getElementById('downloadBtn');


// 当前处理的图片文件
let currentFile = null;

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 显示图片预览
function showImagePreview(file, imgElement) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// 压缩图片
async function compressImage(file) {
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        quality: qualitySlider.value / 100
    };

    try {
        const compressedFile = await imageCompression(file, options);
        return compressedFile;
    } catch (error) {
        console.error('压缩失败:', error);
        alert('图片压缩失败，请重试');
        return null;
    }
}

// 处理文件上传
function handleFileUpload(file) {
    if (!file.type.match('image.*')) {
        alert('请上传图片文件！');
        return;
    }

    currentFile = file;
    showImagePreview(file, originalPreview);
    originalSize.textContent = formatFileSize(file.size);
    
    compressionSettings.style.display = 'block';
    previewArea.style.display = 'block';
}

// 事件监听器
uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#007AFF';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#E5E5E5';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#E5E5E5';
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
});

qualitySlider.addEventListener('input', (e) => {
    qualityValue.textContent = `${e.target.value}%`;
});

compressBtn.addEventListener('click', async () => {
    if (!currentFile) return;

    compressBtn.disabled = true;
    compressBtn.textContent = '压缩中...';

    const compressedFile = await compressImage(currentFile);
    if (compressedFile) {
        showImagePreview(compressedFile, compressedPreview);
        compressedSize.textContent = formatFileSize(compressedFile.size);
        downloadBtn.disabled = false;
    }

    compressBtn.disabled = false;
    compressBtn.textContent = '开始压缩';
});

// 初始化时禁用下载按钮
downloadBtn.disabled = true;

downloadBtn.addEventListener('click', () => {
    if (!compressedPreview.src) return;

    const link = document.createElement('a');
    link.download = `compressed_${currentFile.name}`;
    link.href = compressedPreview.src;
    link.click();
}); 