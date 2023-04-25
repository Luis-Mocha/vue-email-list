const {createApp} = Vue

createApp({
    data() {
        return {
            // variabili Vue3
            email: {},
            emailList: [],
            showEmail: false,
        }
    },

    created() { 
        //cicli di vita dei componenti di applicazioni Vue. Vengono eseguite azioni al caricamento dei componenti
        this.getEmail()
    },

    methods: {
        // funzioni Vue3
        getEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    let result = res.data.response;
                    // console.log(res, result);
                    this.email = result;
                    // console.log(this.email);
                    this.emailList.push(this.email)
                    
                })
            } 
        },
        showEmails () {
            this.showEmail = true;
        }
        
    }
}).mount('#app')

// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.