<template>
    <div class="card">
        <div class="card-header">История заказов</div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Номер заказа</th>
                    <th scope="col">Покупатель</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Скидка</th>
                    <th scope="col">Модули</th>
                    <th scope="col">Статус заказа</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="item in orders">
                    <td>{{item.id}}</td>
                    <td>{{item.user.userName}}</td>
                    <td>{{item.totalCast}}</td>
                    <td>{{item.sale}}</td>
                    <td><p v-for="module in item.sales">{{module.module.name}}</p></td>
                    <td>{{item.isSale ? 'Продан' : 'Не оплачен'}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import Api from '/src/components/db'
    export default {
        name: "History",
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
            async getOrders() {
                try {
                    let {data} = await Api.Get('orders/history');
                    this.orders = data;
                } catch (e) {
                    console.log(e)
                }
            },
        },
    };
</script>