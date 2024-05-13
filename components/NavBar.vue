<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home <Icon name="streamline-emojis:rooster" color="black" size="30px"/></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About <Icon name="streamline-emojis:old-man-2" color="black" size="30px" /></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/users">Usuarios (fetch)</NuxtLink>
            </li>
        </ul>
        <button 
            class="user"
            @click="panelActive = !panelActive"><img src="https://s1.elespanol.com/2023/03/30/actualidad/752435488_232070376_1280x1706.jpg"></button> 
        <div
            class="panel"
            v-show="panelActive">
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    const panelActive = ref(false)
</script>

<style lang="postcss">
    nav{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding: 0 30px
    }
    ul{
        @apply flex p-4;
        
        li{
            @apply p-4;
        }
    }
    .user{
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50px;
        top: 20%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .panel{
        position: absolute;
        right: 0;
        top: 88px;
        background-image: url(https://yofuiaegb.com/wp-content/uploads/2012/10/mr-proper.jpg);
        width: 20%;
        height: 200px;
    }
</style>