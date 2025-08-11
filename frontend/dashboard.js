const token = localStorage.getItem('token');
if (!token) {
  window.location.href = 'index.html';
}

async function fetchData() {
  try {
    const farmersRes = await fetch(`${BACKEND_URL}/api/farmers`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const farmers = await farmersRes.json();
    const farmersList = document.getElementById('farmersList');
    farmersList.innerHTML = farmers.map(f => `<li>${f.name} - ${f.email}</li>`).join('');

    const productsRes = await fetch(`${BACKEND_URL}/api/products`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const products = await productsRes.json();
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = products.map(p => `<li>${p.title} - ₹${p.price}</li>`).join('');
  } catch (err) {
    console.error(err);
  }
}

document.getElementById('refreshBtn').addEventListener('click', fetchData);
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
});

fetchData();