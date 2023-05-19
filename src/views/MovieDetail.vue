<template>
    <div class="movie-detail">    
        <h2>{{selectedMovie.Title}}</h2>
        <p>{{ selectedMovie.year }}</p>
        <img :src="selectedMovie.Poster" alt="Movie Poster" class="featured-img"/>
        <p>{{ selectedMovie.Plot }}</p>
    </div>
</template>

<script>


import { mapState } from 'vuex';

export default {

    computed:{
        ...mapState(['selectedMovie'])
    },

    data() {
        return {
        }
    },
    mounted() {
        console.log(this.$route.params);
    },
    beforeMount() {
        this.$store.dispatch('updateSelectedMovie',this.$route.params.id);        
        console.log("before Mounted");
    },
}
</script>

<style lang="scss" scoped>
    .movie-detail{
        padding: 16px;

        h2{
            color:#FFF;
            font-size: 28px;
            font-weight: 600px;
            margin-bottom: 16px;
        }

        .featured-img{
            display: block;
            max-width: 200px;
            margin-bottom: 16px;
        }

        p{
            color:#FFF;
            font-size: 18px;
        }
    }
</style>