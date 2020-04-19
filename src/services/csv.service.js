
const createCsv = (tests) => {

    tests = tests.map(test => {
        let day = new Date(test.day);
        day = `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`;
        return {
            day, sugar: test.sugar, timeInDay: test.timeInDay
        }
    })


    const testsDay = tests.reduce((acc, test) => {
        const idx = acc.findIndex(day => day.day === test.day)
        if (idx === -1) {
            acc.push({ day: test.day, tests: [{ sugar: test.sugar, timeInDay: test.timeInDay }] })
        } else {
            acc[idx].tests.push({ sugar: test.sugar, timeInDay: test.timeInDay })
        }
        return acc
    }, [])


    let strCsv = `תאריך, צום, אחרי-ארוחת-בוקר, לפני-ארוחת-צהריים, אחרי-ארוחת-צהריים, לפני-ארוחת-ערב, אחרי-ארוחת-ערב, לפני-השינה `;
    testsDay.forEach(day => {
        strCsv += `\r\n${day.day},`
        day.tests.reverse();
        let timeInDay = day.tests[0].timeInDay;

        day.tests.forEach(test => {
            const testBetween = test.timeInDay - timeInDay
            for (let i = 0; i < testBetween; i++) {
                strCsv += ',';
            }
            strCsv += test.sugar;
            timeInDay = test.timeInDay;
        })
        strCsv += ','
    });
    let fakeLink = document.createElement('a');
    // fakeLink.href = `data:application/${strCsv}`;
    fakeLink.href = `data:text/csv;charset=utf-8,${encodeURI(strCsv)}`;
    fakeLink.click()
    // <a href="data:application/octet-stream;charset=utf-16le;base64,//5mAG8AbwAgAGIAYQByAAoA">text file</a>
    console.log('strCsv :', strCsv);
}


export const csvService = {
    createCsv
}




