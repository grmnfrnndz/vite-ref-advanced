
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentComponent = (element) => {
    const html = `
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        API_KEY: ${import.meta.env.VITE_API_KEY} <br/>
    `;

    element.innerHTML = html;
}

