<template>
    <button class="btn btn-primary" type="button" @click="buttonClick" :class="color">{{ text }}</button>
</template>

<script>
export default ({
    props:{
        text:{
            type: String,
            default: ""
        },
        color:{
            type: String,
            default: ""
        }
    },
    methods:{
        buttonClick(){
            this.$emit('emitClick')
        }
    }
})
</script>

<style scoped>
.red{
    background: red;
}
.green{
    background: green;
}

.grey{
    background: grey;
}
</style>