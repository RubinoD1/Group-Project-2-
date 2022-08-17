var wishList = {
  name: '',
  wish_list: '',
};

// Open the model
function createHandler() {
  $('.modal').modal('show');
}

// Close the model
function closeHandler() {
  $('.modal').modal('hide');
}

// Naming the list
function creatingList() {
  let listName = document.getElementById('listname').value;
  if (listName != '') {
    wishList = [];
    wishList.name = listName;
    $('.modal').modal('hide');
  } else {
    alert('The List Name cannot be blank');
  }
}

// Close the Model
function closeHandler() {
  $('.modal').modal('hide');
}

// View the list content
async function viewList() {
  const email = sessionStorage.getItem('email');
  if (email) {
    const response = await fetch('/api/lists/0', {
      method: 'post',
      body: JSON.stringify({
        email,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          alert(response.statusText);
        }
      })
      .then((data) => {
        var container = document.getElementById('viewItem');
        var wish_list = [];
        container.innerHTML = '';
        document.querySelector('.cutom-row').style.display = 'none';
        data.message.forEach((element) => {
          var elementParent = document.createElement('div');
          elementParent.className = 'col-10 col-md-6 col-lg-4 col m-2';
          elementParent.innerHTML = element.wish_list;
          container.append(elementParent);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Add to List
function addToList(event) {
  wishList.wish_list = event.target.parentElement;
  saveHandler();
}

async function saveHandler() {
  const email = sessionStorage.getItem('email');
  const lists = wishList.wish_list.outerHTML;
  console.log(lists);
  if (email) {
    const response = await fetch('/api/lists/', {
      method: 'post',
      body: JSON.stringify({
        email,
        lists,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert(response.statusText);
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById('create-list').addEventListener('click', createHandler);
document.querySelector('#right_list').addEventListener('click', addToList);
document.getElementById('mdclose').addEventListener('click', closeHandler);
document.getElementById('mdsave').addEventListener('click', creatingList);
document.getElementById('view-list').addEventListener('click', viewList);
