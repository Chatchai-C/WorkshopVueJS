<template>
    <div>
        <h1>Hello world</h1>
        <h1>{{ name }}</h1>
        <testprops :name="name" />
        <v-btn color="success" @click="callalert()">BT</v-btn>
        <v-btn color="success" @click="show = !show">Button</v-btn>
        <div v-if="show">
            <cardimg />
        </div>
        <!-- <h1 v-for="(item,index) in items" :key="index">
            {{item.message}}
        </h1> -->
        <v-row>
            <v-col cols="3" v-for="(item, index) in items" :key="index">
                <div>
                    <v-card width="300">
                        <v-img :src="item.imglink"></v-img>
                        <v-card-title primary-title>
                            {{ item.message }}
                        </v-card-title>
                        <v-card-action>
                            <v-btn color="success" @click="callAlertParam(item.message)">
                                Click me
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12">
                <h1>{{value1}}</h1>        
                <v-text-field
                    name="name"
                    label="กรอกรายละเอียด"
                    id="id"
                    v-model="value1"
                >
                </v-text-field>
                <v-btn color="success" @click="setLocalStorage()">set</v-btn>
                <v-btn color="success" @click="removeLocalStorage()">remove</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { EventBus } from '../../EventBus';
import cardimg from "../components/Cardimg.vue";
import testprops from "../components/TestProps.vue";
export default {
    components: {
        cardimg,
        testprops,
    },
    data() {
        return {
            name: "Chatchai",
            show: false,
            items: [
                {
                    message: "Foo",
                    imglink:
                        "https://i.ppy.sh/54246a51813a6de3a334b9100dd1e3fab5e65b88/68747470733a2f2f696d6775722d617263686976652e7070792e73682f677a52444c56642e706e67",
                },
                {
                    message: "Bar",
                    imglink:
                        "https://i.ppy.sh/54246a51813a6de3a334b9100dd1e3fab5e65b88/68747470733a2f2f696d6775722d617263686976652e7070792e73682f677a52444c56642e706e67",
                },
                {
                    message: "Foo",
                    imglink:
                        "https://i.ppy.sh/54246a51813a6de3a334b9100dd1e3fab5e65b88/68747470733a2f2f696d6775722d617263686976652e7070792e73682f677a52444c56642e706e67",
                },
                {
                    message: "Bar",
                    imglink:
                        "https://i.ppy.sh/54246a51813a6de3a334b9100dd1e3fab5e65b88/68747470733a2f2f696d6775722d617263686976652e7070792e73682f677a52444c56642e706e67",
                },
            ],
        };
    },

    mounted() {
        EventBus.$on("CallAlertmain", this.callalert);
    },
    beforeDestroy() {
        EventBus.$off("CallAlertmain", this.callalert);
    },
    methods:{
        callalert() {
            alert("Hello world");
        },
        callAlertParam(item){
            alert(item);
        },
        setLocalStorage() {
            localStorage.setItem("User", this.value1)
            this.$cookies.set("User", this.value1, "60s");
        },
        removeLocalStorage() {
            localStorage.removeItem("User");
        }
    }
};
</script>

<style></style>
