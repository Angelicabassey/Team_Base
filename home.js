function toggleMenu(){
    var menu = document.querySelector('#navContainer');
    menu.style.display = (menu.style.display === 'block' || menu.style.display === '') ? 'none' : 'block';
}
function closeItem() {
    var item = document.getElementById('navContainer');
    item.style.display = 'none';
}