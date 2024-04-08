console.log('ciao');
//generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
const { createApp } = Vue;

createApp({
data() {
    return {
        message: 'VUE EMAIL LIST',
        mailList: [],
    }
},

methods: {
    //creo una funzione che generi 10 mail e che le pushi all'interno dell'array mailList
    mailGenerator(n) {
        //creo un ciclo for che viene eseguito n volte
        for (let i = 0; i < n; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    //Pusho la mail nell'array
                    this.mailList.push(response.data.response)
                })
        }

        console.log(this.mailList);
    }
},

//ciò che scrivo in created() viene create nella pagina appena viene creata
created() {
    this.mailGenerator(10)
}
}).mount('#app')