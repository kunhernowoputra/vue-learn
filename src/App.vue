<script>
/* eslint-disable */
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyD7IJqDuafsgJedfJhIIrC471mHjjkSjOI",
    authDomain: "vue-learn-c6979.firebaseapp.com",
    databaseURL: "https://vue-learn-c6979.firebaseio.com",
    projectId: "vue-learn-c6979",
    storageBucket: "vue-learn-c6979.appspot.com",
    messagingSenderId: "434089081705"
};
let app = Firebase.initializeApp(config);
let db = app.database()
export default {
}
</script>
<template>
    <div id="app">

        <router-view></router-view>
    </div>
</template>
<style scoped>
</style>
