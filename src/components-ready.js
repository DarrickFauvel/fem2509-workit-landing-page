await Promise.allSettled{
    customElements.whenDefined(['wc-button'])

    document.body.classList.add('ready')
}