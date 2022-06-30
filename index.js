function calculateVolumeAndArea(gran) {
    if (gran < 0 || gran === 'string' || Number.isInteger(gran) === false) {
        console.log('При вычислении произошла ошибка');
    } else {
            let volume = gran * gran * gran;
            let area = gran  * gran * 6;
            console.log(`Объем куба:${volume}, площадь всей поверхности:${area}`);
    }

}
calculateVolumeAndArea(37);