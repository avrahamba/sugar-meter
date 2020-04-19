<template>
<section class="add-test">
    <input type="number" v-model="sugar">
    <select v-model="timeInDay">
        <option value="1">צום</option>
        <option value="2">אחרי ארוחת בוקר</option>
        <option value="3">לפני ארוחת צהריים</option>
        <option value="4">אחרי ארוחת צהריים</option>
        <option value="5">לפני ארוחת ערב</option>
        <option value="6">אחרי ארוחת ערב</option>
        <option value="7">לפני השינה</option>
    </select>
    <select v-model="toDay">
        <option value="1">היום</option>
        <option value="2">אתמול</option>
    </select>
    <button @click="addTest">הוסיפי בדיקה</button>
</section>
</template>

<script>
export default {
    data() {
        return {
            sugar: 100,
            timeInDay:1,
            toDay:1
        }
    },
    methods: {
        addTest() {
            this.$store.dispatch({
                type: "addTest",
                sugar: this.sugar,
                timeInDay:this.timeInDay,
                toDay:this.toDay
            })
            .then(()=>{
                this.$router.push('/details')
            })
        }
    }
}
</script>

<style>

</style>
