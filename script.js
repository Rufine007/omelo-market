document.getElementById('year').textContent = new Date().getFullYear();
const categoryButtons = document.querySelectorAll('.category');
const cards = document.querySelectorAll('.product-card');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});
document.querySelectorAll('.demo-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    alert('Este é um card demonstrativo. Para publicar, substitua este botão pelo seu link de afiliado aprovado e verificado.');
  });
});
