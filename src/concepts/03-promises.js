import { heroes } from "./data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const heroId = '5d86371f97c29d020f1e1f6d';
    const heroId2 = '5d86371fd55e2e2a30fe1ccb2';

    const renderHero = (hero) => {andres343242
        element.innerHTML = hero.name;
    }

    const renderTwoHero = (hero, hero2) => {
        element.innerHTML = `
            <h2>Hero: ${hero.name}</h3>
            <h3>Hero2: ${hero2.name}</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <br/><h3>Error: ${error}</h3>
        `;
    }

    // forma 1

    // fidnHero(heroId)
    //     .then((hero) => {
            
    //         fidnHero(heroId2)
    //         .then(hero2 => renderTwoHero(hero, hero2))
    //         .catch(renderError)

    //     })
    //     .catch(renderError);



    // forma 2
    // let hero1;

    // findHero(heroId)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(heroId2);
    //     }).then(hero => {
    //         renderTwoHero(hero1, hero);
    //     })
    //     .catch(renderError);




    // forma 3
    // se utiliza desestructuracion de un arreglo hero1, hero2
    // estos inicialmente puede ser utilizados por las direcciones en el arreglo [0] y [1]
    // recomendable y facil de entender

    Promise.all([findHero(heroId), findHero(heroId2)])
    .then(([hero1, hero2]) => {
        renderTwoHero(hero1, hero2);
    })
    .catch(renderError);

}


/**
 * 
 * @param {String} heroId 
 * @returns {Promise<Object>} 
 */
const findHero = (heroId) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === heroId);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Promise: hero with heroId ${heroId} not found`);
    });
}
