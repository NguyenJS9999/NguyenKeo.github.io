const DOMAIN = "https://ffake-rest-api-nodejs.herokuapp.com";
// const DOMAIN = "http://localhost:3000";

$(function () {
  let tbRow = $("#table-content");
  getData();

  $("#open-form").click(function () {
    window.location.href = "add-form.html";
  });

  $("#go-index").click(function () {
    window.location.href = "index.html";
  });

  $("#back-home").click(function () {
    window.location.href = "index.html";
  });

  //Add more users
  let alertMsg = $("#alert-msg");

  $("#add-student").on("click", function (event) {
    event.preventDefault();
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let birthday = $("#birthday").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    let user = {
      firstName: fname,
      lastName: lname,
      birthday: birthday,
      email: email,
      phone: phone,
    };

    console.log(user);
    if (
      fname == "" ||
      lname == "" ||
      birthday == "" ||
      email == "" ||
      phone == ""
    ) {
      alertMsg.html("Please fill in all required fields!");
    } else {
      $.ajax({
        method: "POST",
        url: DOMAIN + "/users",
        data: user,
        success: function (newUser) {
          tbRow.after(`
              <tr>
                <th scope = "row"> ${newUser.firstName} ${newUser.lastName}</th >
                  <td>${newUser.birthday}</td>
                  <td>${newUser.email}</td>
                  <td>${newUser.phone}</td>
                  <td>
                      <button  type="button" class="edit-btn btn-info edit"> <i class="fas fa-edit"></i> Chỉnh sửa</button>
                      <button  type="button" class="edit-btn btn-danger remove"> <i class="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                  </td>
              </tr>`);
          alertMsg.html("Successfully added!");
        },
      });
    }
  });

  function getData() {
    $.ajax({
      method: "GET",
      url: DOMAIN + "/users",
      success: function (users) {
        $.each(users, function (i, user) {
          tbRow.after(`
          <tr>
            <th scope = "row">${user.firstName} ${user.lastName}</th >
              <td>${user.birthday}</td>
              <td>${user.email}</td>
              <td>${user.phone}</td>
              <td>
                  <button data-id='${user.id}'  type="button" class="edit-btn btn-info edit"> <i class="fas fa-edit"></i> Chỉnh sửa</button>
                  <button data-id=${user.id}  type="button" class="edit-btn btn-danger remove"> <i class="fa fa-trash" aria-hidden="true"></i> Xóa</button>
              </td>
          </tr>`);
        });

        loadBtn();
      },
      error: function () {
        alert("Error loading data");
      },
    });
  }

  function loadBtn() {
    const userId = $(this).data("id");

    $(".edit").on("click", function (e) {
      $(".edit-form").removeClass("hide");
      $(".main").addClass("hide");
      getUserInfo(userId);
      updateUser(userId);
      e.preventDefault();
    });

    $(".remove").on("click", function (e) {
      deleteUser(userId);
      e.preventDefault();
    });
  }

  // Delete user
  function deleteUser(id) {
    $.ajax({
      url: DOMAIN + "/users/" + id,
      method: "DELETE",
    }).done(function (data) {
      console.log(data);
      location.reload();
    });
  }

  // Edit user
  function getUserInfo(id) {
    $.ajax({
      url: DOMAIN + "/users/" + id,
      method: "GET",
      success: function (data) {
        $("#fname").val(data.firstName);
        $("#lname").val(data.lastName);
        $("#birthday").val(data.birthday);
        $("#email").val(data.email);
        $("#phone").val(data.phone);
      },
    });
    // Có thể lấy luôn thông tin user theo id, dựa vào danh sách users đã lấy từ đầu.
  }

  function updateUser(id, data) {
    let updateMsg = $("#update-msg");
    $("#editBtn").on("click", function (e) {
      e.preventDefault();
      $.ajax({
        url: DOMAIN + "/users/" + id,
        method: "PUT",
        data: {
          firstName: $("#fname").val(),
          lastName: $("#lname").val(),
          birthday: $("#birthday").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
        },
        success: function (data) {
          console.log(data);
          updateMsg.html("Updated!");
        },
      });
    });
  }
});
