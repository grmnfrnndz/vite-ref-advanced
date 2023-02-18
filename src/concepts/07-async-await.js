/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element) => {

    // console.time y console.timeEnd 
    // el valor utilizado "Inicio" hace refrencia a ese contador

    console.time('Inicio');
    // la ejecucion en este caso es la suma de todos los tiempos
    // const value1 = await slowPromise();
    // const value2 = await midiumPromise();
    // const value3 = await fastPromise();

    // controlar error por medio de try

    // se ejecutan todas las promesas en independiente - el valor maximo es resultado del console.time
    const [value1, value2, value3] = await Promise.all([slowPromise(), midiumPromise(), fastPromise()])
    element.innerHTML = ` ${value1} - ${value2} - ${value3}`;
    console.timeEnd('Inicio');
}



const slowPromise = () => new Promise(resolve => {
    setTimeout(() =>{
        resolve('Slow Promise');
    }, 2000) 
});

const midiumPromise = () => new Promise(resolve => {
    setTimeout(() =>{
        resolve('Midium Promise');
    }, 1500) 
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() =>{
        resolve('Fast Promise');
    }, 1000) 
});