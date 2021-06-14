<template>
    <div class="text-center">
        <main class="form-signin" style="width: 30%; margin: 0 auto">
            <form>
                <img class="mb-4" src="../../assets/main-logo.png" alt="" width="72" height="57">
                <h1 class="h3 mb-3 fw-normal">Пожалуйста зарегистрируйтесь</h1>

                <div class="form-floating">
                    <input type="email" v-model="data.email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating">
                    <input type="text" v-model="data.userName" class="form-control" placeholder="name@example.com">
                    <label for="floatingInput">Имя</label>
                </div>
                <div class="form-floating">
                    <input type="password" v-model="data.password" class="form-control" id="floatingPassword" placeholder="Пароль">
                    <label for="floatingPassword">Пароль</label>
                </div>

                <div v-if="invalidValidation" class="mb-2 validation-failed"><label><small>Пожалуйста заполните все поля</small></label></div>
                <div v-if="invalidData" class="mb-2 validation-failed"><label><small>Неверные данные</small></label></div>

                <button @click="register" class="w-100 btn btn-lg btn-primary mt-3" type="button">Зарегистрироваться</button>
            </form>
        </main>
    </div>
</template>
<script>
    import Api from '/src/components/db'

    export default {
        data() {
            return {
                invalidValidation : false,
                invalidData : false,
                data : {
                    email: '',
                    password: '',
                    userName: '',
                },
            }
        },
        components: {
            Api
        },
        methods: {
            async register() {
                this.invalidValidation = false;
                this.invalidData = false;
                if (!this.data.email || !this.data.password || !this.data.userName) {
                    this.invalidValidation = true;
                    return
                }
                try {
                    let {data} = await Api.Post('account/registration', this.data);
                    localStorage.setItem('userAuth', data.accessToken)
                    localStorage.setItem('role', data.role)
                    window.location = '/';
                } catch (e) {
                    this.invalidData = true;
                    console.log(e)
                }
            },
        },
    }
</script>
<style>
    .validation-failed {
        color: red;
    }
</style>