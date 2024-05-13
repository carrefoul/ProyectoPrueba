<template>
    <div>
        <header-image :source="'https://picsum.photos//1024/201?grayscale'" />
        <main class="container">
            <h1>Traer usuarios de una API</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita labore sapiente consequatur. Aliquam illo ut officiis quibusdam voluptate quia nesciunt quae! Nesciunt nisi assumenda pariatur reprehenderit voluptas dolorum velit suscipit.</p>
            <section class="container cards-section">
                <user-card
                    v-for="(user, index) in data"
                    :key="index"
                    :user="user"
                    />
            </section>
        </main>
        
    </div>
</template>

<script setup>
    const { data } = await useFetch('https://fakestoreapi.com/users', {
        lazy: true,
        server: false,
    })
</script>