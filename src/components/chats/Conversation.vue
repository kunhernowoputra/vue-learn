<script>
    /* eslint-disable */
    export default {
        props: ['users']
    }
</script>
<template>
    <div>
        <div class="conversation box" v-for="(user, index) in users" :key="index">
            <div class="article">
                <div class="media-content">
                    <strong>{{user.name}}</strong>
                    <br>
                    {{user.text}}
                    <br>
                    <small class="timestamp">
                        <span class="icon">
                            <i class="fa fa-clock-o"></i>
                        </span>
                        {{user.timestamp}}
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>
