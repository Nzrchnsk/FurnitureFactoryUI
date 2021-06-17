<template>
    <div class="card">
        <div class="card-header">Просмотр модуля</div>
        <div class="card-body">
            <button type="button" @click="back" class="btn btn-success btn-sm">
                Назад
            </button>
            <label type="text" class="form-control mb-2">{{data.name}}</label>
            <label type="text" class="form-control mb-2">{{data.description}}</label>
            <label type="text" class="form-control mb-2">{{data.price}}</label>
            <img :src="data.photo" style=" max-width: 250px" class="img-circle form-control mb-2" />
        </div>
    </div>
</template>
<script>
    import Api from '/src/components/db'

    export default {
        data() {
            return {
                data : {
                    photo: null,
                    price: '',
                    description: '',
                    name: '',
                },
            }
        },
        mounted() {
            this.getModule();
        },
        components: {
            Api
        },
        methods: {
            back(){
                this.$router.push({name: 'modulesDirectory'});
            },
            async getModule() {
                try {
                    let {data} = await Api.Get('modules/' + this.$route.params.moduleId);
                    this.data = data;
                } catch (e) {
                    console.log(e)
                }
            },
        },
    }
</script>
