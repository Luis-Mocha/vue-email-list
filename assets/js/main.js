const {createApp} = Vue

createApp({
    data() {
        return {
            // variabili Vue3
            email: {},
            emailList: [],
        }
    },

    created() { 
        //cicli di vita dei componenti di applicazioni Vue. Vengono eseguite azioni al caricamento dei componenti
        
        
    },

    methods: {
        // funzioni Vue3
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                let result = res.data.response;
                console.log(res, result);
                this.email = result;
                console.log(this.email);

                this.emailList.push(this.email)
            });
        }
    }
}).mount('#app')

// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.