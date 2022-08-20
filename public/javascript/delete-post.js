async function deleteFormHandler(event) {
  event.preventDefault();
  let url="/shopping/"+document.getElementById('delete_post').getAttribute('data');
  console.log(url);
  const response = await fetch(url, {
    method: 'DELETE'
  })
  
  document.location.replace('/dashboard');

}

document.getElementById('delete_post').addEventListener('click', deleteFormHandler);
