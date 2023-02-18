import { heroes } from "./data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const heroId = '5d86371fd55e2e2a30fe1cc4x';
    // si no lo encuentra retorna un undefined

    
    const renderHero = (hero) => {
        element.innerHTML = hero?.name;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <br/><h3>Error: ${error}</h3>
        `;
    }

    findHero(heroId)
        .then(renderHero)
        .catch(renderError);
}



/**
 * 
 * @param {String} heroID 
 * @returns {hero?}
 */
const findHero = async (heroID) => {
    const hero = heroes.find(hero => hero.id === heroID);

    if (!hero) throw new Error(`heroiId ${heroID} not found`)

    return hero;
}


