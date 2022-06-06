<template>
    <div>
        <router-link 
            to = "/"
            tag = "button"
            class = "btn btn-outline-primary p-3 m-3">
            Anasayfaya Dön
        </router-link>
        <h1 class="text-center">ARAMIZA KATILANLAR</h1>
        <div class="row d-flex justify-content-center">
            <div class="col-xl-4">
                <div class="birthday-card-box" v-for="data in employeesJson" :key="data.id">
                    <div class="row">
                        <div class="col-xl-3">
                            <img :src="data.avatar" alt="" class="p-5">
                        </div>
                        <div class="col-xl-9">
                            <p><strong>İsim Soyisim : </strong>{{data.first_name}} {{data.last_name}}</p>
                            <p><strong>Ünvanı : </strong>{{data.title}}</p>
                            <p><strong>Email Adresi : </strong>{{data.email}}</p>
                            <p><strong>Başlangıç Tarihi : </strong>{{data.start_date_of_employement}}</p>
                            <p><strong>Telefon No : </strong>{{data.phone_number}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import employees from "../data/employees.json"
export default {
    data(){
        return {
            employeesJson : employees,
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