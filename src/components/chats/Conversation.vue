<script>
    /* eslint-disable */
    export default {
        props: ['users']
    }
</script>
<template>
    <div class="is-clearfix">
        <article class="media" v-for="(user, index) in users" :key="index">
            <figure class="media-left">
                <p class="image is-48x48">
                    <img src="~@/assets/logo.png" alt="Image">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        {{user.text}}
                        <br>
                        <small><a>{{user.timestamp}}</a></small>
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>
<style scoped>
</style>
