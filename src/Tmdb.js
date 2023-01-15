/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '5192c7a5c5ae4324d3cb3ce5ee4fd715';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFeach = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}


export default {
  getHomeList: async () =>{
    return [
      {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFeach(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFeach(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFeach(`/movie/top_rated?language=pt_BR&api_key=${API_KEY}`)
      },

      {
        slug: 'action',
        title: 'Ação',
        items: await basicFeach(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },


      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFeach(`/discover/movie?with_genres35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFeach(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFeach(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },

      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFeach(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ];
  },
  getMovieInfo: async (movieId,type) =>{
    let info = {};

    if(movieId){
      switch(type){
        case 'movie':
          info = await basicFeach(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
          info = await basicFeach(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        default:
          info = null;
        break;
      }
    }


    return info;
  }
}