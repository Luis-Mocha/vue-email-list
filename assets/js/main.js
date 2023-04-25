const {createApp} = Vue

createApp({
    data() {
        return {
            // variabili Vue3
             
        }
    },

    created() { 
        //cicli di vita dei componenti di applicazioni Vue. Vengono eseguite azioni al caricamento dei componenti
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (response) {
            const result = response.data;
            console.log(response, result);
        });
        
    },

    methods: {
        // funzioni Vue3
        
        
         
    }
}).mount('#app')

// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.