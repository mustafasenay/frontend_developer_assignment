<template>
    <div>
        <router-link 
            to = "/"
            tag = "button"
            class = "btn btn-outline-primary p-3 m-3">
            Anasayfaya Dön
        </router-link>
        <h4 class="text-center">HABERLER</h4>
                <div class="row border p-3 m-3 d-flex align-items-center"  v-for="item in newsJson" :key="item.id">
                    <div class="col-xxl-3 col-md-3 text-center">
                        <img src="../assets/1.png" alt="" class="w-100 p-3">
                    </div>
                    <div class="col-xxl-9 col-md-9 mt-3">
                        <h6 class="fs-8">{{item.title}}</h6>
                        <p class="fs-8">{{item.description}}</p>
                    </div>
                </div>
            </div>
</template>

<script>
import news from "../data/news.json"
export default {
    data(){
        return {
            newsJson : news,
        }
    },
}
</script>

<style scoped>
    .birthday-card-box{
        border: 1px solid black;
        margin: 5px;
        padding: 15px;
        border-radius: 25px;
    }
</style>