export function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}


export function getHeaders(){
    const headers = {
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
    return headers
}

export function getPostTime(datetime){
    // Mon Nov 09 2020 21:59:43 GMT+0600 (Bangladesh Standard Time)
    let string = new Date(datetime).toString()
    string = string.split("GMT")[0].trim();
    return string
}