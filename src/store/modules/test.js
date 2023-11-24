const state = {
    token: "test",
};

const getters = {
    getToken(state) {
        return state.token;
    }
};

export default {
    namespaced: true,
    state,
    getters,
}