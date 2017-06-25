<script>
    /* eslint-disable */
    export default {
        data: () => ({
            message: ''
        }),
        watch: {
            message (a) {
                return a
            }
        },
        methods: {
            addMessage () {
                if (this.message !== '') {
                    let data = {
                        id: 2,
                        name: "Arion",
                        text: this.message,
                        timestamp: Date()
                    }
                    this.$store.dispatch('sendMessage', data)
                    this.message = ''
                }
            }
        }
    }
</script>
<template>
        <input type="text" class="input is-large" v-model="message" @keyup.enter="addMessage">
</template>
<style scoped>
</style>
