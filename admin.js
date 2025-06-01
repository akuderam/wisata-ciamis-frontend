const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Hapus kelas aktif dari semua menu
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Sembunyikan semua section
    sections.forEach(sec => sec.classList.add('hidden'));

    // Tampilkan section yang sesuai
    const target = item.getAttribute('data-section');
    document.getElementById(target).classList.remove('hidden');
  });
});
