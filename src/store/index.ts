import axios from 'axios';
import env from '@/env'
import { createStore } from 'vuex'

export default createStore({
  state: {
    movies:[],
    selectedMovie:{}
  },
  mutations: {
    mutateMovies(state,movies){
      state.movies = movies; 
    },
    mutateSelectedMovie(state,movie)
    {
      state.selectedMovie = movie;
    }
  },
  actions: {
    updateMovies({commit},search)
    {
       axios.get(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search}`)
         .then((res) => {
           commit('mutateMovies',res.data.Search);
         })
    },
    updateSelectedMovie({commit},movieID){
        axios.get(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${movieID}&plot=full`)
        .then((res) => {
          console.log(res.data);
          commit('mutateSelectedMovie',res.data);
        })
    }
  },
  getters: {

  },
  modules: {
  }
})
