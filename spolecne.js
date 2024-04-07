//-----------3-------------//
const menuButton = document.querySelector('#menu-tlacitko')

function humburgerFunction() {
    const polozky = document.querySelector('#menu-polozky')

    if (polozky.classList.contains('show')) {
        polozky.classList.remove('show')
        menuButton.innerHTML = '<i class="fas fa-bars"></i>'
    } else {
        polozky.classList.add('show')
        menuButton.innerHTML = '<i class="fas fa-xmark"></i>'
    }
}

menuButton.addEventListener('click', humburgerFunction)
