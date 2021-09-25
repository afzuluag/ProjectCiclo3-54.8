const app = Vue.createApp({
    data(){
        return{
            closeModal: "X",
            nameCartel: "Peliculas en Cartelera"

        }
    }
});

app.mount("#main");



async function consultarApi() {

    let urlApiLocal = './json/data.json'
    try {
        let responseText = await fetch(urlApiLocal, { method: 'GET' });
         //console.log(responseText);
        let responseJson = await responseText.json();
         //console.log(responseJson);
        pintarInfoCartel(responseJson);
        pintarInfoGestion(responseJson);
        return responseJson.movies;
    } catch (error) {
        console.log(error)
    }
}
consultarApi();

const pintarInfoCartel = info => {
    movie1 = document.getElementById('movie1');
    movie2 = document.getElementById('movie2');
    movie3 = document.getElementById('movie3');
    movie4 = document.getElementById('movie4');
    movie5 = document.getElementById('movie5');

    movie1_modal = document.getElementById('movie1_modal');
    movie2_modal = document.getElementById('movie2_modal');
    movie3_modal = document.getElementById('movie3_modal');
    movie4_modal = document.getElementById('movie4_modal');
    movie5_modal = document.getElementById('movie5_modal');

    if (movie1) {
        movie1.children[0].src = info.movies[0].image;
        movie1_modal.children[0].src = info.movies[0].image;
  
        //movie1.children[1].innerText = info.movies[0].titulo;
        // movie1.children[2].innerText = info.movies[0].descripcion;

        movie2.children[0].src = info.movies[1].image;
        movie2_modal.children[0].src = info.movies[1].image;
        
        movie3.children[0].src = info.movies[2].image;
        movie3_modal.children[0].src = info.movies[2].image;
        
        movie4.children[0].src = info.movies[3].image;
        movie4_modal.children[0].src = info.movies[3].image;
        
        movie5.children[0].src = info.movies[4].image;
        movie5_modal.children[0].src = info.movies[4].image;

    }

};

const pintarInfoGestion = info => {
    movie1 = document.getElementById('movie1_gestion');
    movie2 = document.getElementById('movie2_gestion');
    movie3 = document.getElementById('movie3_gestion');
    movie4 = document.getElementById('movie4_gestion');
    movie5 = document.getElementById('movie5_gestion');

    if (movie1) {
    
        movie1.children[0].src = info.movies[0].image;
        movie1.children[1].children[0].innerText = info.movies[0].title;
        // movie1.children[2].innerText = info.movies[0].descripcion;

        movie2.children[0].src = info.movies[1].image;
        movie2.children[1].children[0].innerText = info.movies[1].title;

        movie3.children[0].src = info.movies[2].image;
        movie3.children[1].children[0].innerText = info.movies[2].title;

        movie4.children[0].src = info.movies[3].image;
        movie4.children[1].children[0].innerText = info.movies[3].title;

        movie5.children[0].src = info.movies[4].image;
        movie5.children[1].children[0].innerText = info.movies[4].title;

    }

};

