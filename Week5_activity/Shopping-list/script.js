$(document).ready(function () {
  var writeToDo = function (todo) {
    $('#todo-list').append(`
      <!-- div id todo-list -->
      <div class="input-group mb-3" id="todo-list">
          <!-- input id todo-item -->
          <input type='text' class='form-control' value='${todo}'aria-describedby='basic-addon1' id='todo-item'readonly/>
          <div class='input-group-append'>
              <!-- span id todo-delete -->
              <span class='input-group-text bg-danger text-white todo-delete'>Delete</span>
          </div>
      </div>
      `);
  }
 



  if (localStorage.getItem('storeListItem') !== null) {
    var listItem = JSON.parse(localStorage.getItem('storeListItem'));
    for (todo of listItem) {
      writeToDo(todo);
    }
  } else {
    listItem = [];
  }

 
  var countingItems = function () {
    var numOfItems = listItem.length;
    if (numOfItems === null || numOfItems === []) {
      numOfItems = 0;
    }
    $("#countItem").html(numOfItems);
  }
  countingItems();



  $('#todo-add').on('click', function () {
    setItems();
    countingItems();
  });

  $('#todo').keypress(function (event) {
    if (event.which === 13) {
      setItems();
      countingItems();
    }
  });

  var setItems = function () {
    var todo = $('#todo').val();
    writeToDo(todo);
    listItem.push(todo);
    var storeListItem = JSON.stringify(listItem);
    localStorage.setItem('storeListItem', storeListItem);
    todo = $('#todo').val('');
  }


  $(document).on('click', '.todo-delete', function () {
    var valueInput = $(this).closest("div.input-group").find("input[class='form-control']").val();
    var indexOfValue = listItem.indexOf(valueInput);
    listItem.splice(indexOfValue, 1);
    var storeListItem = JSON.stringify(listItem);
    localStorage.setItem('storeListItem', storeListItem);
    countingItems();
    $(this).closest("div.input-group").remove();
  });

});


// html should truly only have the input bar plus add button, 
// the div that is added to the write stciont of script should include the delete text
// pressing add list must append the .val() of the user input into a div with the value and a delete button

// write a class so that all of the delete buttons that are added can work functionally as a delete button
// the delete button should however only the delete the item that the button is on and not all of the items
// to delete affect teh nearest input group class guy... see screenshot

// the colde below is taking on click of the class remove button and running the function
//inside the function it is taking that element and finding the closes id or class and then .remove(); to actually remove it.
//$(document).on('click','.removeButton',function() {
//     $(this).closest("div.row").remove();
// });

// store in local storage remember is you add an array you must save as a string join, and retrieve via split. 
//bonus keep a counter of the number of things in the list