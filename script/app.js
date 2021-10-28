new Vue({
    el: '#app',
    data: {
        title: "Partie 1 - VueJS",
        message: "Bonjour !",
        link: "http://www.yop.fr",
        linkName: "Google",
        inputType: "date",
        color: "black",
    },
    methods: {
        hello() {
            return this.message = "hop la !";
        }
    },
})