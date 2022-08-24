var categories = JSON.parse(sessionStorage.getItem('categories'));
var dropDownEI = document.getElementById('pCategory');

var option = document.createElement('option');
option = document.createElement('option');
option.setAttribute('selected', true);
option.setAttribute('disabled', 'disabled');
option.text = 'Select Category';
dropDownEI.append(option);

categories.forEach((element) => {
  if (element != null) {
    option = document.createElement('option');
    option.setAttribute('data-id', element.id);
    option.value = element.category_name;
    option.text = element.category_name;
    dropDownEI.append(option);
  }
});

async function editProduct(event) {
  event.preventDefault();

  var formData = new FormData();
  var id = document.querySelector('#pName').getAttribute('data-id');
  const picture_url = document.querySelector('input[type="file"]');
  var product_name = document.querySelector('#pName').value.trim('');
  var price = document.querySelector('#pPrice').value.trim('');
  var desired_price = document.querySelector('#pDesiredPrice').value.trim('');
  var quantity = document.querySelector('#pQuantity').value.trim('');
  var product_note = document.querySelector('#pProductNote').value.trim('');
  var category_id = document
    .querySelector('#pCategory')
    .options[document.querySelector('#pCategory').selectedIndex].getAttribute(
      'data-id'
    );
  var tagIds = new Array(
    document
      .querySelector('#pPriority')
      .options[document.querySelector('#pPriority').selectedIndex].getAttribute(
        'data-id'
      )
  );
  formData.append('product_name', product_name);
  formData.append('price', price);
  formData.append('desired_price', desired_price);
  formData.append('quantity', quantity);
  formData.append('product_note', product_note);
  formData.append('category_id', category_id);
  formData.append('tagIds[]', tagIds);
  formData.append('image', picture_url.files[0]);

  const response = await fetch(`/api/products/${id}`, {
    method: 'put',
    body: formData,
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#edit-product').addEventListener('submit', editProduct);
