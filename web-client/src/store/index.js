import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import subject from "./modules/subject";
import notification from "./modules/notification";
import action from "./modules/action";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        subject,
        notification,
        action
    }
});
