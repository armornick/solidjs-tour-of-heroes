/*
    Toastify:
    https://github.com/apvarun/toastify-js
*/
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js';

const TIMEOUT = 3000;

class MessagesService {

    show(message) {
        Toastify({
            text: message,
            duration: TIMEOUT
        })
        .showToast();
    }

}

export default new MessagesService();
