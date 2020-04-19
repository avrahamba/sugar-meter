<template>
<section class="details">
    <button @click="exportFile">יצאי כקובץ</button>
    <test-preview v-for="test in tests" :key="test.day" :test="test"></test-preview>
</section>
</template>

<script>
import testPreview from '../components/test-preview';
import { csvService } from '../services/csv.service.js';
export default {
    computed: {
        created() {
            this.$store.dispatch({ type: 'loadTests' })
        },
        tests() {
            return this.$store.getters.tests
                .sort((a, b) => {
                    const aDay = (new Date(a.day)).getDate() + (new Date(a.day)).getMonth() * 100
                    const bDay = (new Date(b.day)).getDate() + (new Date(b.day)).getMonth() * 100
                    if (aDay === bDay) return a.timeInDay < b.timeInDay
                    return aDay < bDay
                })
        }
    },
    methods: {
        exportFile() {
            csvService.createCsv(this.tests)
        }
    },
    components: {
        testPreview
    }
}
</script>

<style>

</style>
