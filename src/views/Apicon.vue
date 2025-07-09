<template>
    <div>
        <h1>
            API Test
        </h1>
        <v-row>
            <v-col cols="3" v-for="(item, index) in apidata" :key="index">
                <div>
                    <v-card width="300">
                        <v-img src="https://i.ppy.sh/54246a51813a6de3a334b9100dd1e3fab5e65b88/68747470733a2f2f696d6775722d617263686976652e7070792e73682f677a52444c56642e706e67">
                        </v-img>
                        <v-card-title primary-title>
                            {{ item.name }}
                        </v-card-title>
                        <v-card-action>
                            <v-btn color="success" @click="callAlertParam(item.message)">
                                Click me
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            apidata: []
        }
    },
    
    created() {
        this.getData();
    },

    methods: {
        getData() {
            this.axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
                console.log(response.data);
                this.apidata = response.data;
            })
        }
    }

}
</script>

<style>

</style>