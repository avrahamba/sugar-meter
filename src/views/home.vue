<template>
<div class="home">
    <add-test></add-test>
</div>
</template>

<script>
import addTest from '../components/add-test';
// @ is an alias to /src

export default {
    name: 'Home',
    created() {
        this.$store.dispatch({ type: "loadTests" })
    },
    computed: {
        tests() {
            return this.$store.getters.tests
        }
    },
    components: {
        addTest
    }
}
</script>
