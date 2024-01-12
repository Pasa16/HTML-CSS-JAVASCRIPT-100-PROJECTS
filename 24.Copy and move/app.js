const copyText = document.querySelector(".copyBtn");
const copytextArea = document.querySelector(".copyArea");
const moveText = document.querySelector(".moveBtn");
const movetextArea = document.querySelector(".moveArea");

copyText.addEventListener("click", () => {
    const textToCopy = copytextArea.value;

    navigator.clipboard.writeText(textToCopy).then(() => {
        copyText.textContent = 'Text Copied!';
        setTimeout(() => {
            copyText.textContent = 'Copy Text';
        }, 2000);
    }).catch((err) => {
        console.error('Unable to copy text: ', err);
    });
});

moveText.addEventListener("click", () => {
    navigator.clipboard.readText().then((text) => {
        movetextArea.value = text;
        moveText.textContent = 'Text Pasted!';
        setTimeout(() => {
            moveText.textContent = 'Move Text';
        }, 2000);
    }).catch((err) => {
        console.error('Unable to paste text: ', err);
    });
});
 