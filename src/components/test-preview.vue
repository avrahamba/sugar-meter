<template>
  <section class="test-preview">
    <span>{{date}} </span>
    <span>{{test.sugar}} </span>
    <span>{{inDay}}</span>
  </section>
</template>

<script>
export default {
props:{
    test:Object
},
computed: {
    date(){
        const day = new Date(this.test.day)
        return `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`
    },
    inDay(){
        switch (this.test.timeInDay){
            case 1: case '1': return 'צום'; break;
            case 2: case '2':  return 'אחרי ארוחת בוקר'; break;
            case 3: case '3':  return 'לפני ארוחת צהריים'; break;
            case 4: case '4':  return 'אחרי ארוחת צהריים'; break;
            case 5: case '5':  return 'לפני ארוחת ערב'; break;
            case 6: case '6':  return 'אחרי ארוחת ערב'; break;
            case 7: case '7':  return 'לפני השינה'; break;
        }
        return ''
    }
},
}
</script>

<style>

</style>