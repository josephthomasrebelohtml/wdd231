export function openDialogModal(dialogId) {
    document.querySelector(`#${dialogId}`).showModal();
}

export function closeDialogModal(dialogId) {
    document.querySelector(`#${dialogId}`).close();
}