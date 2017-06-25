<script>
    /* eslint-disable */
    export default {
        updated () {
            let screen = this.$el.querySelector('.card-content')
            screen.scrollTop = screen.scrollHeight
        }
    }
</script>
<template>
    <div class="card screen">
        <header class="card-header">
            <p class="card-header-title">Chats Room</p>
        </header>
        <div class="card-content">
            <slot name="text"></slot>
        </div>
        <footer class="card-footer">
            <slot name="button"></slot>
        </footer>
    </div>
</template>
<style scoped>
</style>
