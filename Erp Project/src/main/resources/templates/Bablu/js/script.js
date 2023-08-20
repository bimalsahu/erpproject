$(document).ready(function () {
  getallproject();
  getmodulelistindropdown();
});

function getmodulelistindropdown() {
  $.ajax({
    url: "http://localhost:8080/api/projects/",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      var html = "";
      $.each(data, function (key, value) {
        html +=
          "<option value=" +
          value.projectid +
          ">" +
          value.projectName +
          "</option>";
      });
      $("#projectlist").html(html);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function getmodulelistforproject(id) {
  $.ajax({
    url: "http://localhost:8080/api/modules/" + id + "/project",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      var html = "";
      $.each(data, function (key, value) {
        html += "<tr>";
        html += "<td>" + value.moduleName + "</td>";
        html += "<td>" + value.moduleStartDate + "</td>";
        html += "<td>" + value.moduleDeveloperName + "</td>";
        html += "<td>" + value.moduleEndDate + "</td>";
        html += "<td>" + value.moduleEffortEstimate + "</td>";

        html += "</tr>";
      });
      $("#modulelistforproject").html(html);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

$("#submitdata").on("click", function (e) {
  e.preventDefault();
  var projectId = $("#projectId").val();
  var projectName = $("#projectName").val();
  var projectStartDate = $("#projectStartDate").val();
  var projectEndDate = $("#projectEndDate").val();
  var projectType = $("#projectType").val();
  if (
    projectName == "" ||
    projectStartDate == "" ||
    projectEndDate == "" ||
    projectType == "" ||
    projectType == null
  ) {
    alert("Please fill all the fields 🚫🚫🚫");
    return false;
  }
  var project = {
    projectid: projectId,
    projectName: projectName,
    projectStartDate: projectStartDate,
    projectEndDate: projectEndDate,
    projectType: projectType,
  };
  $.ajax({
    url: "http://localhost:8080/api/projects",
    type: "POST",
    data: JSON.stringify(project),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      console.log(data.data);
      getallproject();
      getmodulelistindropdown();
      Toastify({
        text: "Project added✅",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0000, #000000)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    },
    error: function (err) {
      console.log(err);
      // document.write(
      //   "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      // );
      // alert(
      //   "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      // );
    },
  });
});

function deleteproject(id) {
  $.ajax({
    url: "http://localhost:8080/api/projects/" + id,
    type: "DELETE",
    dataType: "json",
    success: function (data) {
      console.log(data);
      getallproject();
      getmodulelistindropdown();
      Toastify({
        text: "Project Deleted💀💀💀",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0000, #000000)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    },
    error: function (err) {
      console.log(err);
      // alert(
      //   "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      // );
    },
  });
}

function getallproject() {
  $.ajax({
    url: "http://localhost:8080/api/projects/",
    type: "GET",
    dataType: "json",
    success: function (data) {
      //console.log(data);
      var html = "";
      $.each(data, function (key, value) {
        html += "<tr>";
        html += "<td>" + value.projectid + "</td>";
        html += "<td>" + value.projectName + "</td>";
        html += "<td>" + value.projectStartDate + "</td>";
        html += "<td>" + value.projectEndDate + "</td>";
        html += "<td>" + value.projectType + "</td>";
        html +=
          '<td><button type="button" class="btn btn-outline-primary" onclick="editproject(' +
          value.projectid +
          ')"><i class="far fa-edit"></i></button> <button type="button" class="btn btn-outline-danger" onclick="deleteproject(' +
          value.projectid +
          ')"><i class="far fa-trash-alt"></i></button><button class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="getmodulelistforproject(' +
          value.projectid +
          ')"><i class="fa fa-eye" aria-hidden="true"></i></button></td>';
        html += "</tr>";
      });
      $("#tb").html(html);
    },
    error: function (err) {
      console.log(err);
      // alert(
      //   "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      // );
    },
  });
}

function editproject(id) {
  $.ajax({
    url: "http://localhost:8080/api/projects/" + id,
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#projectId").val(data.projectid);
      $("#projectName").val(data.projectName);
      $("#projectStartDate").val(data.projectStartDate);
      $("#projectEndDate").val(data.projectEndDate);
      $("#projectType").val(data.projectType);
      Toastify({
        text: "Project Now you can edit✏️✏️✏️",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0000, #000000)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    },
    error: function (err) {
      console.log(err);
      // alert(
      //   "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      // );
    },
  });
}
//Start of Modules
$(document).ready(function () {
  getallmodule();
});
$("#submitdata2").on("click", function (e) {
  e.preventDefault();
  var moduleId = $("#moduleId").val();
  var moduleName = $("#moduleName").val();
  var moduleStartDate = $("#moduleStartDate").val();
  var moduleDeveloperName = $("#moduleDeveloperName").val();
  var moduleEndDate = $("#moduleEndDate").val();
  var moduleEffortEstimate = $("#moduleEffortEstimate").val();
  var moduleprojectId = $("#projectlist").val();
  if (
    moduleName == "" ||
    moduleStartDate == "" ||
    moduleDeveloperName == "" ||
    moduleEndDate == "" ||
    moduleEffortEstimate == "" ||
    moduleprojectId == ""
  ) {
    alert("Please fill all the fields 🚫🚫🚫");
    return false;
  }
  var module = {
    moduleId: moduleId,
    moduleName: moduleName,
    moduleStartDate: moduleStartDate,
    moduleDeveloperName: moduleDeveloperName,
    moduleEndDate: moduleEndDate,
    moduleEffortEstimate: moduleEffortEstimate,
    projectEntity: moduleprojectId,
  };
  $.ajax({
    url: "http://localhost:8080/api/modules",
    type: "POST",
    data: JSON.stringify(module),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      console.log(data.data);
      getallmodule();
      Toastify({
        text: "Module added✅",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0000, #000000)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    },
    error: function (err) {
      console.log(err);
      document.write(
        "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      );
      alert(
        "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      );
    },
  });
});

function deletemodule(id) {
  $.ajax({
    url: "http://localhost:8080/api/modules/" + id,
    type: "DELETE",
    dataType: "json",
    success: function (data) {
      console.log(data);
      getallmodule();
      Toastify({
        text: "Module deleted💀💀💀",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0000, #000000)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function getallmodule() {
  $.ajax({
    url: "http://localhost:8080/api/modules/",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      var html = "";
      $.each(data, function (key, value) {
        html += "<tr>";
        html += "<td>" + value.moduleId + "</td>";
        html += "<td>" + value.moduleName + "</td>";
        html += "<td>" + value.moduleStartDate + "</td>";
        html += "<td>" + value.moduleDeveloperName + "</td>";
        html += "<td>" + value.moduleEndDate + "</td>";
        html += "<td>" + value.moduleEffortEstimate + "</td>";
        html +=
          '<td><button type="button" class="btn btn-outline-primary" onclick="editmodule(' +
          value.moduleId +
          ')"><i class="far fa-edit"></i></button><button type="button" class="btn btn-outline-danger" onclick="deletemodule(' +
          value.moduleId +
          ')"><i class="far fa-trash-alt"></i></button></td>';
        html += "</tr>";
      });
      $("#tb1").html(html);
    },
    error: function (err) {
      console.log(err);
      alert(
        "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      );
    },
  });
}

function editmodule(id) {
  $.ajax({
    url: "http://localhost:8080/api/modules/" + id,
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#moduleId").val(data.moduleId);
      $("#moduleName").val(data.moduleName);
      $("#moduleStartDate").val(data.moduleStartDate);
      $("#moduleDeveloperName").val(data.moduleDeveloperName);
      $("#moduleEndDate").val(data.moduleEndDate);
      $("#moduleEffortEstimate").val(data.moduleEffortEstimate);
      Toastify({
        text: "Module Now you can edit✏️✏️✏️",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0000, #000000)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    },
    error: function (err) {
      console.log(err);
      alert(
        "💀💀💀 Error Connecting To Server 🚫🚫  ! Please Check Network Connection or Wait for Sometime!"
      );
    },
  });
}
//The End of Modules
