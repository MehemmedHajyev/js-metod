// const onSearch = () => {
// const input =document.querySelector('#search');
// const filter =input.value.toUpperCase()

// const list =document.querySelectorAll('#list li')

// list.forEach((el)=>{
//     const text =el.textContent.toLowerCase();

//     el.style.display=text.includes(filter) ? "":'none';
// })
// }


function onSearch() {
    const input = document.querySelector('#search');
    const InputInValuue = input.value.toUpperCase();
    const list = document.querySelectorAll('#list li');
    const notFoundMessage = document.querySelector('#not-found');

    let found = false;

    list.forEach((el) => {
        const text = el.textContent.toUpperCase();
        const isMatch = text.includes( InputInValuue);
        el.style.display = isMatch ? 'list-item' : 'none';

        if (isMatch) {
            found = true;
        }
    });

    notFoundMessage.style.display = found ? 'none' : 'block';
}

document.querySelector('#search').addEventListener('input', onSearch);
