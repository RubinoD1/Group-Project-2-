let category = JSON.parse(document.getElementById('cat').getAttribute('data'));
console.log('html', category);
sessionStorage.setItem(
  'categories',
  document.getElementById('cat').getAttribute('data')
);
let left_list = document.getElementById('left_list');
var list_item = document.createElement('a');
list_item.className = 'title';
list_item.style.textDecoration = 'none';
list_item.setAttribute('href', '/dashboard/');
list_item.innerHTML = 'All Categories ';
left_list.appendChild(list_item);

for (var i = 0; i < category.length; i++) {
  var list_item = document.createElement('a');
  list_item.className = 'title';
  list_item.style.textDecoration = 'none';
  list_item.setAttribute('href', '/dashboard/' + category[i].id);
  list_item.innerHTML = category[i].category_name;
  left_list.appendChild(list_item);
}

function toggleHandle(event) {
  debugger;
  if (document.querySelector('.navbar').style.marginBottom === '') {
    document.querySelector('.navbar').style.marginBottom = '400px';
  } else {
    document.querySelector('.navbar').style.marginBottom = '';
  }
}
document
  .querySelector('.navbar-toggler')
  .addEventListener('click', toggleHandle);
