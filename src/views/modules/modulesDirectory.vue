<template>
    <div class="card">
        <div class="card-header">Модули</div>
        <div class="card-body">
            <button type="button" @click="createModule" class="btn btn-success btn-sm">
                Добавить модуль
            </button>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Название модуля</th>
                    <th scope="col">Описание модуля</th>
                    <th scope="col">Цена модуля</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="item in modules">
                    <td>{{item.name}}</td>
                    <td>{{item.description}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button type="button" @click="showModule(item.id)" class="btn btn-primary btn-sm me-2">
                            Просмотреть
                        </button>

                        <button type="button" @click="editModule(item.id)" class="btn btn-primary btn-sm me-2">
                           Редактировать
                        </button>

                        <button type="button" @click="deleteModule(item.id)" class="btn btn-danger btn-sm">
                            Удалить
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import Api from '/src/components/db'
    export default {
        name: "Modules",
        data() {
            return {
                modules: [],
            };
        },
        components: {
            Api,
        },
        mounted() {
            this.getModules();
        },
        methods: {
            showModule(id) {
                this.$router.push({name: 'moduleShow', params: {moduleId: id}});
            },
            editModule(id) {
                this.$router.push({name: 'moduleEdit', params: {moduleId: id}});
            },
            createModule() {
                this.$router.push({name: 'moduleCreate'});
            },
            async deleteModule(id) {
                try {
                    this.modules = await Api.Delete('modules/' + id);
                    this.getModules();
                } catch (e) {
                    console.log(e)
                }
            },
            async getModules() {
                try {
                    let {data} = await Api.Get('modules');
                    this.modules = data
                } catch (e) {
                    console.log(e)
                }
            },
        },
    };
</script>