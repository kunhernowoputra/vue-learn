<script>
import ChatAside from '@/components/chats/Aside'
import ChatScreen from '@/components/chats/Screen'
import ChatConversation from '@/components/chats/Conversation'
/* eslint-disable */
export default {
    components: {
        ChatAside, ChatScreen, ChatConversation
    },
    computed: {
        users () {
            let userOnline = this.$store.state.users
            return userOnline
        }
    }
}
</script>
<template>
    <div class="columns is-gapless">
        <div class="column is-one-quarter">
            <chat-aside>
                <p slot="title">Users Online {{users.length}}</p>
                <li v-for="(user, index) in users" key="index">
                    <a href="">{{user.name}}</a>
                </li>
            </chat-aside>
        </div>
        <div class="column">
            <chat-screen>
                <chat-conversation :users="users"></chat-conversation>
            </chat-screen>
        </div>
        <div class="column is-one-quarter">
            <chat-aside>
                <p slot="title">Toolbar</p>
            </chat-aside>
        </div>
    </div>
</template>
<style scoped>
</style>
