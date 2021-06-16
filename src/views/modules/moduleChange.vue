<template>
    <div class="card">
    <div class="card-header">{{title}}</div>
    <div class="card-body">
        <input type="text" required v-model="data.name" class="form-control mb-2" placeholder="Название" aria-label="Username" aria-describedby="basic-addon1">
        <input type="text" required v-model="data.description" class="form-control mb-2" placeholder="Описание" aria-label="Username" aria-describedby="basic-addon1">
        <input type="text" required v-model="data.price" class="form-control mb-2" placeholder="Цена" aria-label="Username" aria-describedby="basic-addon1">
        <div class="field">
            <input @change="processFile($event)" type="file" class="input orm-control mb-2">
        </div>
        <div v-if="invalidValidation" style="color: red" class="mb-2"><label><small>Пожалуйста заполните все поля</small></label></div>
        <button type="button" @click="save" class="btn btn-success">
            Сохранить
        </button>
    </div>
    </div>
</template>
<script>
    import Api from '/src/components/db'

    export default {
        data() {
            return {
                invalidValidation : false,
                title: '',
                data : {
                    name: '',
                    description: '',
                    price: '',
                    photo: null
                },
            }
        },
        mounted() {
            if (this.$route.params.moduleId) {
                this.getModule();
            }
            if (this.$route.params.moduleId) {
                this.title = 'Редактирование модуля';
            } else {
                this.title = 'Создание модуля';
            }
        },
        components: {
          Api
        },
        methods: {
            processFile(event) {
                this.data.photo = event.target.files[0]
            },
            async editModule() {
                this.invalidValidation = false;
                if (!this.data.name || !this.data.description || !this.data.price) {
                    this.invalidValidation = true;
                    return
                }
                let formData = new FormData();
                formData.append('name', this.data.name);
                formData.append('description', this.data.description);
                formData.append('price', this.data.price);
                if (this.data.photo) {
                    formData.append('photo', this.data.photo);
                }
                try {
                    await Api.Put('modules/' + this.$route.params.moduleId, formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            }
                        });
                    this.$router.push({name: 'modulesDirectory'});
                } catch (e) {
                    console.log(e)
                }
            },
            async createModule() {
                this.invalidValidation = false;
                if (!this.data.name || !this.data.description || !this.data.price) {
                    this.invalidValidation = true;
                    return
                }
                let formData = new FormData();
                formData.append('name', this.data.name);
                formData.append('description', this.data.description);
                formData.append('price', this.data.price);
                if (this.data.photo) {
                    formData.append('photo', this.data.photo);
                }
                try {
                    await Api.Post('modules', formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            }
                        });
                    this.$router.push({name: 'modulesDirectory'});
                } catch (e) {
                    console.log(e)
                }
            },
            async getModule() {
                try {
                    let {data} = await Api.Get('modules/' + this.$route.params.moduleId);
                    this.data = data;
                } catch (e) {
                    console.log(e)
                }
            },
            save() {
                if (this.$route.params.moduleId) {
                    this.editModule();
                } else {
                    this.createModule();
                }
            }
        },
    }
</script>
