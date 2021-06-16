<template>
    <div class="card">
    <div class="card-header">Создание заказа</div>
    <div class="card-body">

        <label>Выберите модуль</label>
        <select v-model="selectedModule" required class="form-select mb-2" aria-label="Default select example">
            <option value="" selected disabled>Выберите модуль</option>
            <option v-for="value in modules" :value="value">{{value.name}}</option>
        </select>
        <button type="button" @click="add" class="btn btn-success">
            Добавить модуль
        </button>
        <hr/>
        <h1>Выбранные модули</h1>
        <p v-for="module in selectedModules">{{module.name}}</p>
        <div v-if="invalidValidation" style="color: red" class="mb-2"><label><small>Пожалуйста выберите хотябы 1 модуль</small></label></div>
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
                selectedModules: [],
                selectedModule: null,
                modules : [],
            }
        },
        mounted() {
            this.getModules();
        },
        components: {
          Api
        },
        methods: {
            save() {
                this.invalidValidation = false;
                if (!this.selectedModules || !this.selectedModules.length > 0) {
                    this.invalidValidation = true;
                    return
                }
                try {
                    Api.Post('orders', this.selectedModules);
                    this.$router.push({name: 'ordersDirectory'});
                } catch (e) {
                    console.log(e)
                }
            },
            add() {
                if (this.selectedModule !== null) {
                    this.selectedModules.push(this.selectedModule);
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
    }
</script>
