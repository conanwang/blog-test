document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(function (codeBlock) {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.textContent = 'copy';

        copyButton.addEventListener('click', async function () {
            const textToCopy = codeBlock.textContent;
            try {
                await navigator.clipboard.writeText(textToCopy);
                copyButton.textContent = 'copyed';
                setTimeout(() => {
                    copyButton.textContent = 'copy';
                }, 2000);
            } catch (err) {
                console.error('copy fail: ', err);
            }
        });

        const preElement = codeBlock.parentNode;
        preElement.style.position = 'relative';
        preElement.appendChild(copyButton);
    });
});