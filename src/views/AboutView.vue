<script setup>

</script>

<template>
    <div>
        <h2>About Page</h2>
        <RouterLink :to="{ name: 'team1' }" activeClass="active">Team1</RouterLink> |
        <RouterLink :to="{ name: 'team2' }" activeClass="active">Team2</RouterLink>
        <hr />
        <RouterView></RouterView>
    </div>
</template>

<style lang="css" scoped>
.active {
    color: brown;
    text-decoration: none;
}
</style>