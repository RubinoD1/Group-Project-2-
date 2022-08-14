async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById('post_title').value;
  const post_content = document.getElementById('post_content').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}


let category=JSON.parse(document.getElementById('abc').getAttribute('data'));
let left_list=document.getElementById('left_list');
for (var i = 0; i < category.length; i++) {
    var list_item = document.createElement("a");
    list_item.className="title";
    list_item.setAttribute("href","/categories/"+category[i].id);
    list_item.innerHTML = category[i].category_name;
    left_list.appendChild(list_item);
  }


document.getElementById('header_title').value="Your Dashboard";
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
