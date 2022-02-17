// Inizializzo app Vue
const app = new Vue (

    {
        el: '#app',

        data: {
            mail : [],
        },

        methods: {

        },

        mounted(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                for(let i=0; i <10; i++){
                    this.mail.push(response.data.response);
                }
            });
        }

    }

);