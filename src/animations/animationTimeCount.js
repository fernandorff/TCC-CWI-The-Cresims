export const animationTimeCount = (time, text) => {
    let count = 0
    while (count <= (time / 1000)) {
        console.clear()
        console.log(`${text}`);
        console.log(`${count} / ${time / 1000}`);
        count = timeCount(count)
    }
}

const timeCount = (count) => {
    for (let index = 0; index < 2000000000; index++) {
    }

    return ++count
}