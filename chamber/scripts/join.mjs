import { setTimestampValue } from "./timestamp.mjs";
import { openDialogModal, closeDialogModal } from "./dialog.mjs";


const npDialog = document.querySelector('#non-profit-button');
const npDialogClose = document.querySelector('#non-profit-close');

const bronzeDialog = document.querySelector('#bronze-button');
const bronzeDialogClose = document.querySelector('#bronze-close');

const silverDialog = document.querySelector('#silver-button');
const silverDialogClose = document.querySelector('#silver-close');

const goldDialog = document.querySelector('#gold-button');
const goldDialogClose = document.querySelector('#gold-close');



npDialog.addEventListener('click', () => {
    openDialogModal("non-profit-dialog");
});
npDialogClose.addEventListener('click', () => {
    closeDialogModal("non-profit-dialog"); 
});

bronzeDialog.addEventListener('click', () => {
    openDialogModal("bronze-dialog");
});
bronzeDialogClose.addEventListener('click', () => {
    closeDialogModal("bronze-dialog");
});

silverDialog.addEventListener('click', () => {
    openDialogModal("silver-dialog");
});
silverDialogClose.addEventListener('click', () => {
    closeDialogModal("silver-dialog");
});

goldDialog.addEventListener('click', () => {
    openDialogModal("gold-dialog");
});
goldDialogClose.addEventListener('click', () => {
    closeDialogModal("gold-dialog");
});



setTimestampValue("timestamp");