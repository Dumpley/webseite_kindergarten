import AxiosCommunication from './AxiosCommunication.js';

export default {
    register(user) {
        console.log(user);
        return AxiosCommunication().post("register", user);
    },

    login(user) {
        console.log(user);
        return AxiosCommunication().post("login", user);
    },
};
