<template>
    <div class="card">
        <div class="card-header">Заказы</div>
        <div class="card-body">
            <button type="button" @click="createOrder" class="btn btn-success btn-sm">
                Добавить заказ
            </button>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Номер заказа</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Покупатель</th>
                    <th scope="col">Модули</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="item in orders">
                    <td>{{item.id}}</td>
                    <td>{{item.totalPrice}}</td>
                    <td>{{item.user.userName}}</td>
                    <td><p v-for="module in item.sales">{{module.module.name}}</p></td>
                    <td>
                        <button v-if="!item.isSale" type="button" @click="buyOrder(item.id)" class="btn btn-success my-2 btn-sm">
                            Купить
                        </button>
                        <button type="button" @click="deleteOrder(item.id)" class="btn btn-danger btn-sm">
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
        name: "Orders",
        data() {
            return {
                orders: [],
            };
        },
        components: {
            Api,
        },
        mounted() {
            this.getOrders();
        },
        methods: {
            createOrder() {
                this.$router.push({name: 'orderCreate'});
            },
            async deleteOrder(id) {
                try {
                    this.modules = await Api.Delete('orders/' + id);
                    this.getOrders();
                } catch (e) {
                    console.log(e)
                }
            },
            buyOrder(id) {
                this.$router.push({name: 'buyOrder', params: {orderId: id}});
            },
            async getOrders() {
                try {
                    let {data} = await Api.Get('orders');
                    this.orders = data
                } catch (e) {
                    console.log(e)
                }
            },
        },
    };
</script>