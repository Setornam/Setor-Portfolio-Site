window.onload = ()=> {
    const transition_el = document.querySelector('.transition');
    const links = document.querySelectorAll('.links');

    setTimeout(() =>{
        transition_el.classList.remove('is-active');
    },500);

    for (let i = 0; i < links.length; i++){
        const link = links[i];

        link.addEventListener('click', e=>{
            e.preventDefault();
            let target = e.link.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = link;
            }, 900)
        });
    }
}



