import { HEROES } from './mock-heroes.js';

class HeroService {

    getHeroes() {
        return Promise.resolve(HEROES);
    }

}

export default new HeroService();
