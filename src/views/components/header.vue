<template>
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src="../../assets/main-logo.png" width="60" height="60">
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
                <li><a v-if="userAuth && isAdmin" href="/user_directory" class="nav-link px-2 link-dark">Список пользователей</a></li>
            </ul>

            <div class="col-md-3 text-end">
                <button type="button" @click="userLogin" v-if="!userAuth" class="btn btn-outline-primary me-2">Войти</button>
                <button type="button" @click="userRegistration" v-if="!userAuth" class="btn btn-primary me-2">Зарегистрироваться</button>
                <button type="button" v-if="userAuth" @click="userLogout" class="btn btn-outline-primary me-2">Выйти</button>
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        methods: {
            userLogin() {
                this.$router.push({name: 'signIn'});
            },
            userRegistration() {
                this.$router.push({name: 'register'});
            },
            userLogout() {
                localStorage.clear();
                window.location = '/login';
            },
        },
        computed: {
            userAuth() {
                return localStorage.getItem('userAuth');
            },
            isAdmin() {
                return localStorage.getItem('role') === 'Admin';
            },
        },
    }
</script>