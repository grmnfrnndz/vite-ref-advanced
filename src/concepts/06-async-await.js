import { heroes } from "./data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    const heroId = '5d86371fd55e2e2a30fe1cc3x';
    const heroId2 = '5d86371fd55e2e2a30fe1ccb1';

    // captura del error con try-catch
    try {
        // comun desestrcuturar los objectos obtenidos - es lo normal
        const hero = await findHero(heroId);
        const hero2 = await findHero(heroId2);
        element.innerHTML = `${hero?.name} / ${hero2?.name}`;
    } catch (err) {
        element.innerHTML = err;
    }
}





const findHero = async (heroId) => {
    const hero = heroes.find(hero => hero.id === heroId);

    if (!hero) throw new Error(`heroID ${heroId} not found`);

    return hero;
}