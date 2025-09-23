const buttons = document.querySelectorAll('.occ button');
const products = document.querySelectorAll('.product');

buttons.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const target = btn.getAttribute('data-target');

        products.forEach(p => p.classList.remove('active'));

        document.getElementById(target).classList.add('active');

        buttons.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');
    });
});