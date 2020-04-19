<template>
<div id="app">
    <header>
        <router-link to="/">
            <img class="link-img" src="@/assets/blad-test.svg">
        </router-link>
        <router-link to="/details">
            <img class="link-img" src="@/assets/View-Details.svg">
        </router-link>
    </header>
    <router-view />
</div>
</template>

<style lang="scss">
.link-img {
    width: 100px;
}
</style>
