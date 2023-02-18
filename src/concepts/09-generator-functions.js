/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    
    const myGenId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click Me!!!';
    element.append(button);

    const renderButton = () => {
        const {value} = myGenId.next();
        button.innerText = `Click: [${value}]`;
    }

    button.addEventListener('click', (event) => {
        renderButton();
    });

}



function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}






// function* myFirstGeneratorFunction() {
//     yield 'valor 1';
//     yield 'valor 2';
//     yield 'valor 3';
//     yield 'valor 4';
//     return 'valor 5';
//     yield 'valor 6';
// }

