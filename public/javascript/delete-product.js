// Delete Product
async function deleteFormHandler(event) {
  event.preventDefault();

  const id =
    event.target.parentElement.parentElement.parentElement.getAttribute(
      'data-product-id'
    );

  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#btn-delete')
  .addEventListener('click', deleteFormHandler);
