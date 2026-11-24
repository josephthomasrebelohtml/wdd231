const timestamp = new Date();

export function setTimestampValue(id) {
    document.querySelector(`#${id}`).value = timestamp.toLocaleDateString("en-US");
}