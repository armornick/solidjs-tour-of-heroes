import MessagesService from './messages-service';
import { HEROES } from './mock-heroes.js';

class HeroService {

    getHeroes() {
        MessagesService.show('fetching heroes');
        return Promise.resolve(HEROES);
    }

    async getHeroById(id) {
        id = Number(id);
        const hero = HEROES.find(hero => hero.id === id);
        console.log(`hero with id ${id}: ${JSON.stringify(hero)}`);
        return hero;
    }

}

export default new HeroService();
