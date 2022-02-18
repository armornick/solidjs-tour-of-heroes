import MessagesService from './messages-service';
import { HEROES } from './mock-heroes.js';

class HeroService {

    getHeroes() {
        MessagesService.show('fetching heroes');
        return Promise.resolve(HEROES);
    }

}

export default new HeroService();
