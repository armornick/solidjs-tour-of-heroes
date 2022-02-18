import { HEROES } from './mock-heroes.js';

class HeroService {

    getHeroes() {
        return HEROES;
    }

}

export default new HeroService();
