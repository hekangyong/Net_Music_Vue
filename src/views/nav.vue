<template>
    <div class="nav">
        <div class="header_nav">
            <div class="logoMusic">
                <router-link to="/" class="logo_title">Browse Music</router-link>
            </div>
        </div>
        <div class="nav-all">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav'
}
</script>

<style lang="scss" scoped>
.nav{
    float: left;
    width: 320px;
    height: 100%;
    background-color: #0e1130;
}
.logoMusic{
    padding: 30px;
}
.logo_title{
    font-size: 21px;
    color: #fff;
    text-decoration: none;
    font-weight: 200;
    letter-spacing: .5px;
}
</style>

