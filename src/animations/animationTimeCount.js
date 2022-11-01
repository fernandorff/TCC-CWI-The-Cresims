export const animationTimeCount = (time) => {
    let count = 0
    while (true) {
        console.clear()
        printBanner()
        console.log(`\n\t${count} / ${time / 1000}`);

        count = timeCount(count)

        if (count > (time / 1000)) {
            break
        }
    }
}

const printBanner = () => {
    console.log(`
#########################
##                     ##
##     Carregando      ##
##                     ##
#########################`);
}

const timeCount = (count) => {
    for (let index = 0; index < 2000000000; index++) {
    }

    return ++count
}