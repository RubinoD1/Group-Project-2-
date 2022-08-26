async function createCategory(event) {
  event.preventDefault();
  const category_name = document.querySelector('#category-name').value;
  const categoryResponse = await fetch('/api/categories', {
    method: 'post',
    body: JSON.stringify({
      category_name,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (categoryResponse.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#create-category')
  .addEventListener('submit', createCategory);
