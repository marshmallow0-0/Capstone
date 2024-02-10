//드래그 앤 드롭 함수 초기화 
function initializeDragAndDrop(dragDropAreaId, fileUploadInputId) {
    const dragDropArea = document.getElementById(dragDropAreaId);
    const fileUploadInput = document.getElementById(fileUploadInputId);

    dragDropArea.addEventListener('dragover', function (e) {
        e.preventDefault();
        // 드래그 오버 이벤트 처리
        dragDropArea.classList.add('drag-over');
    });

    dragDropArea.addEventListener('dragleave', function () {
        // 드래그 떠남 이벤트 처리
        dragDropArea.classList.remove('drag-over');
    });

    dragDropArea.addEventListener('drop', function (e) {
        e.preventDefault();
        // 드롭 이벤트 처리
        dragDropArea.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        console.log('Dropped files:', files);
        // 파일 처리 로직을 추가가능
    });

    fileUploadInput.addEventListener('change', function () {
        // 파일 선택 이벤트 처리
        const files = fileUploadInput.files;
        console.log('Selected files:', files);
        // 파일 처리 로직을 추가가능
    });
}

export default initializeDragAndDrop;