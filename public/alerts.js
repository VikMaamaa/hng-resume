/*eslint-disable*/
//type is success or error

export const hideAlert = () => {
    // const el = document.getElementById('id07');;
    // if (el) el.style.display = 'none';
    // const el1 = document.getElementById('id09');;
    // if (el1) el1.style.display = 'none';

}

export const showAlert = (type, msg) => {
    hideAlert();
    // const markup = `<div class="alert alert--${type}">${msg}</div>`
    // var a = document.createElement("div");
    // a.class = `class="alert alert--${type}"`;
    // a.innerHTML = `${msg}`;
    // console.log(a)
    // var d = document.getElementById('alert');
    // d.className = `alert alert--${type} w3-red`
    // d.innerText = `${msg}`
    // console.log('value of d is', d)
    //     // d.insertBefore(a, d.childNodes[0]);
    //     // d.insertAdjacentHTML('beforebegin', ` < div class = "alert alert--${type}" > $ { msg } < /div>`)
    // console.log('value of d is', d)
    if (type === 'error') {
        document.getElementById('id07').style.display = 'block';
        document.getElementById('msg').innerText = `${msg}`;
    } else {
        document.getElementById('id09').style.display = 'block'
        document.getElementById('msg1').innerText = `${msg}`;
    }
    window.setTimeout(hideAlert(), 5000)
}