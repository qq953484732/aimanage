<template>
    <div class="AmPersonalInfo">
        <am-personal-info-con :personalInfo="personalInfo" :user="user"></am-personal-info-con>
    </div>
</template>

<script>
    import url from "../../apis/url";
    import axios from "axios";
    import AmPersonalInfoCon from './AmPersonalInfoModule/AmPersonalInfoCon'
    export default {
        name: "AmPersonalInfo",
        components:{
            AmPersonalInfoCon,
        },
        data(){
            return{
                personalInfo: [],
                user: []
            }
        },
        methods: {
            grtPersonalInfo(){
                let key = sessionStorage.getItem("aimanage");
                axios.get(url.url+"/getPersonalInfo",{
                    params:{
                        key
                    }
                }).then(res=>{
                        this.personalInfo = res.data.data.personalInfo
                        this.user = res.data.data.personalInfo.user
                        // console.log(this.user)
                    })
            }
        },
        mounted() {
            this.grtPersonalInfo();
        }
    }
</script>

<style scoped>

</style>
