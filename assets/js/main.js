const {createApp} = Vue

createApp({
    data() {
        return {
            // variabili Vue3
            emailList: [],
            showEmail: false,
            numInput: 10,
        }
    },

    created() { 
        //cicli di vita dei componenti di applicazioni Vue. Vengono eseguite azioni al caricamento dei componenti
        // this.getEmail(this.numInput)
    },

    methods: {
        // funzioni Vue3
        getEmail(variabile) {
            for (let i = 1; i <= variabile; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    let result = res.data.response;
                    // console.log(res, result);
                    this.emailList.push(result)
                })
            } 
        },

        showEmails () {
            this.emailList = []

            if (this.showEmail === false) {
                this.showEmail = true;
                this.getEmail(this.numInput)
            } else {
                this.getEmail(this.numInput)
            }
        }
        
    }
}).mount('#app')

// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.