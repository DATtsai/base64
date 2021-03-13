let urlInput = document.getElementById('textarea');
let submit = document.getElementById('submit');
let result = document.getElementById('result');

submit.addEventListener('click', function(e){
    e.preventDefault();
    let text = urlInput.value;
    // console.log(text);
    let urlArr = text.split('\n');
    // console.log(urlArr);
    let str = '';
    urlArr.forEach((item) => {
        let encode = window.btoa(item);
        console.log(encode);
        str+=`<li>${encode}</li>`;
    });
    result.innerHTML = str;
})