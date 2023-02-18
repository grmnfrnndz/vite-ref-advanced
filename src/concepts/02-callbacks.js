import { heroes } from "./data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const heroId = '5d86371f25a058e5b1c8a65e';
    const heroId2 = '5d86371fd55e2e2a30fe1cc3';
    findHero(heroId, (error, hero) => {
        if (error) {
           element.innerHTML = error;
           return;
        }
        
        // element.innerHTML = hero?.name || `${heroId} no existe`;


        findHero(heroId2, (error, hero2) => {
            if (error) {
               element.innerHTML = error;
               return;
            }
            element.innerHTML = `${hero.name} / ${hero2.name}`;
        });
    

    });

}

/**
 * 
 * @param {String} heroId 
 * @param {(error?: String, hero: Object) => void } callbacks 
 */
const findHero = (heroId, callbacks) => {

    const hero = heroes.find(hero => hero.id === heroId);

    if (!hero) {
        callbacks(`hero with heroId ${heroId} not found`);
        return;
    }

    callbacks(null, hero);

}