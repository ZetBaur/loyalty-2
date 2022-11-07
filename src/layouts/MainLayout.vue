<template>
    <div class="wrapper">
        <TheMenu />

        <div class="main">
            <TheHeader />

            <div class="content"><RouterView /></div>
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    background-color: $custom-black;
    min-height: 100vh;
    display: flex;
}

.main {
    display: flex;
    flex-direction: column;
    border-radius: 25px 0 0 25px;
    overflow: hidden;
    width: 100%;
    padding: 20px;
    background: white;
}

.content {
    height: 100%;
}
</style>
