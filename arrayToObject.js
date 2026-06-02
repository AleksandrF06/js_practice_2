const array = [
    { name: 'width', value: 123 },
    { name: 'height', value: 222 }
    ];
// {width: 123, height: 222} - должно получиться из массива выше



function arrayToObject(array) {
    const object = {}
    for (let key of array) {
        object[key.name] = key.value
    }
    return object
}

console.log(arrayToObject(array))