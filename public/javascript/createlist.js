// var wishList = {
//   name: '',
//   wish_list: '',
// };

// // Open the model
// function createHandler() {
//   $('.modal').modal('show');
// }

// // Close the model
// function closeHandler() {
//   $('.modal').modal('hide');
// }

// // Naming the list
// function creatingList() {
//   let listName = document.getElementById('listname').value;
//   if (listName != '') {
//     wishList = [];
//     wishList.name = listName;
//     $('.modal').modal('hide');
//   } else {
//     alert('The List Name cannot be blank');
//   }
// }

// // Close the Model
// function closeHandler() {
//   $('.modal').modal('hide');
// }

// // View the list content
// async function viewList() {
//   const email = sessionStorage.getItem('email');
//   if (email) {
//     const response = await fetch('/api/lists/0', {
//       method: 'post',
//       body: JSON.stringify({
//         email,
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((response) => {
//         if (response) {
//           return response.json();
//         } else {
//           alert(response.statusText);
//         }
//       })
//       .then((data) => {
//         var container = document.getElementById('viewItem');
//         var wish_list = [];
//         container.innerHTML = '';
//         document.querySelector('.cutom-row').style.display = 'none';
//         data.message.forEach((element) => {
//           var elementParent = document.createElement('div');
//           elementParent.className = 'col-10 col-md-6 col-lg-4 col m-2';
//           elementParent.innerHTML = element.wish_list;
//           container.append(elementParent);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// // Add to List
// function addToList(event) {
//   wishList.wish_list = event.target.parentElement;
//   saveHandler();
// }

// async function saveHandler() {
//   const email = sessionStorage.getItem('email');
//   const lists = wishList.wish_list.outerHTML;
//   console.log(lists);
//   if (email) {
//     const response = await fetch('/api/lists/', {
//       method: 'post',
//       body: JSON.stringify({
//         email,
//         lists,
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     }).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         alert(response.statusText);
//       }
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

// document.getElementById('create-list').addEventListener('click', createHandler);
// document.querySelector('#right_list').addEventListener('click', addToList);
// document.getElementById('mdclose').addEventListener('click', closeHandler);
// document.getElementById('mdsave').addEventListener('click', creatingList);
// document.getElementById('view-list').addEventListener('click', viewList);

var product_id = [];
var list_name = '';
var counter = 0;
var list_id = '';

// Open the model
function createHandler() {
  debugger;
  $('.modal').modal('show');
}

// Close the model
function closeHandler() {
  $('.modal').modal('hide');
}

// Naming the list
async function creatingListHandler() {
  debugger;
  document.getElementById('btn-save-list').style.display = 'inline-block';
  list_name = document.getElementById('listname').value;
  if (list_name != '') {
    const response = await fetch('/api/lists/', {
      method: 'post',
      body: JSON.stringify({
        list_name,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        alert(err);
      });

    if (response.errors === undefined) {
      list_id = response.id;
      alert('List Created');
      $('.modal').modal('hide');
      document.getElementById('listname').value = '';
    } else {
      alert(response.errors[0].type);
    }
  } else {
    alert('The List Name cannot be blank');
  }
}

// Close the Model
function closeListHandler() {
  $('.modal').modal('hide');
}

// View the list content
async function viewList() {
  debugger;
  const response = await fetch('/api/lists/0', {
    method: 'GET',
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

// Add to List
async function addToList(event) {
  if (event.target.tagName.toLowerCase() !== 'i') {
    var product_id = event.target.parentNode.getAttribute('data-product-id');
    if (!isEmpty() && list_id != '') {
      const response = await fetch('/api/lists/list-product', {
        method: 'post',
        body: JSON.stringify({
          product_id,
          list_id,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        counter++;
        alert(`Item Added to ${document.getElementById('listname').value} `);
        document.getElementById('btn-save-list').innerHTML = '';
        document.getElementById(
          'btn-save-list'
        ).innerHTML = `<span> Click to Save ${counter} Items</span>`;
      } else {
        alert(response.statusText);
      }
    }
  }
}

// Save Handler
async function saveHandler() {
  debugger;
  document.getElementById('btn-save-list').style.display = 'none';
  wish_list = [];
  counter = 0;
  list_name = '';
  list_id = '';
  document.getElementById('btn-save-list').innerHTML = '';
  alert('Data is saved');
  document.location.replace('/dashboard');
}

// Checking if the List name is Empty
function isEmpty() {
  debugger;
  if (list_name === '') {
    alert('Create a List!!!');
    return true;
  }
  return false;
}

document.getElementById('create-list').addEventListener('click', createHandler);
document.querySelector('#right_list').addEventListener('click', addToList);
document.getElementById('mdclose').addEventListener('click', closeListHandler);
document
  .querySelector('#mdsave')
  .addEventListener('click', creatingListHandler);
document.getElementById('view-list').addEventListener('click', viewList);

document.getElementById('btn-save-list').addEventListener('click', saveHandler);
