module.exports = {
    token: {
        generate: require("./token/generate"),
        verify: require("./token/verify")
    },
    modules: {
        passwordEncode: require("./modules/passwordEncode"),
        passwordCompare: require("./modules/passwordCompare")
    }
}