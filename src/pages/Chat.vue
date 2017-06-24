<script>
import ChatAside from '@/components/chats/Aside'
/* eslint-disable */
export default {
    components: {
        ChatAside
    }
}
</script>
<template>
    <div class="columns is-gapless">
        <div class="column is-one-quarter">
            <chat-aside>
                <p slot="title">Users Online</p>
                <li><a href="">Alida Anggreini</a></li>
                <li><a href="">Ayu Cornelia</a></li>
            </chat-aside>
        </div>
        <div class="column">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Chats Room</p>
                </header>
                <div class="card-content">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src="http://bulma.io/images/placeholders/96x96.png">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                    <br>
                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                </p>
                            </div>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src="http://bulma.io/images/placeholders/96x96.png">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                    <br>
                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <footer class="card-footer">
                    <input type="text" class="input is-large">
                </footer>
            </div>
        </div>
        <div class="column is-one-quarter">
            <chat-aside>
                <p slot="title">Users Online</p>
                <li><a href="">Alida Anggreini</a></li>
                <li><a href="">Ayu Cornelia</a></li>
            </chat-aside>
        </div>
    </div>
</template>
<style scoped>
</style>
