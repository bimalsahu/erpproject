console.log("Working");



$(document).ready(function() {
    $("#viewproject").hide();
    getProjects();

    function getProjects() {

        $("#table").empty();
        $.get("http://localhost:8080/api/projects/", function (data, status) {
            console.log(data);
            $("#table").append($("<thead>").append($("<th>").append("Project Id"))
                .append($("<th>").append("Project Name"))
                .append($("<th>").append("Start Date"))
                .append($("<th>").append("End Date"))
                .append($("<th>").append("Project Type")))
            for (i = 0; i < data.length; i++) {
                $("#table").append($("<tr>")
                    .append($("<td>").append(i + 1))
                    .append($("<td>").append(data[i].projectId))
                    .append($("<td>").append(data[i].projectName))
                    .append($("<td>").append(data[i].projectStartDate))
                    .append($("<td>").append(data[i].projectEndDate))
                    .append($("<td>").append(data[i].projectType))
                    .append($("<td>").append(`
                           <i class='fas fa-eye viewDetails' data-aid="` + data[i].airlineId + `"></i>
                           <i class="far fa-edit editProject" data-bs-toggle="modal" data-bs-target="#second_form" data-aid="` + data[i].projectId + `"></i>
                           <i class="fas fa-trash deleteProject" data-aid="` + data[i].projectId + `"></i>
                       `)));
            }
            loadButtons1();
        });
    }


    //Find projectById

    function getOneProject(id) {

        //console.log("Project id " +id);
        $.ajax({
            url: 'http://localhost:8080/api/project/id' + id,
            method: 'get',
            success: function (data) {
                $("#update_projectId").val(data.projectId);
                $("#update_projectName").val(data.projectName);
                $("#update_projectStartDate").val(data.projectStartDate);
                $("#update_projectEndDate").val(data.projectEndDate);
                $("#update_projectType").val(data.projectType);
                $("#p_id").val(data.projectId);
            }
        });
    }

    //done finding by id


    //Updating the project
    $("#updateForm").on("click", function (e) {
        let data = {
            projectId: $("#update_projectId").val(),
            projectName: $("#update_projectName").val(),
            projectStartDate: $("#update_projectStartDate").val(),
            projectEndDate: $("#update_projectEndDate").val(),
            projectType: $("#update_projectType").val()
        }
        //console.log(data);
        updateProject($("#a_id").val(), data);
    });

    function updateProject(id, data) {
        $.ajax({
            url: 'http://localhost:8080/api/project/id' + id,
            headers: {
                'Content-Type': 'application/json'
            },
            type: 'PUT',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (data) {
                //console.log(data);
                getProjects();
                $("#projectId").val("");
                $("#projectName").val("");
                $("#projectStartDate").val("");
                $("#projectEndDate").val("");
                $("#projectType").val("");
            },
            error: function () {
                console.log("Error");
            }
        });
    }

    //updating done


    //add Project
    $("#AddPro").on("click", function (e) {
        let data = {
            projectId: $("#projectId").val(),
            projectName: $("#projectName").val(),
            projectStartDate: $("#projectStartDate").val(),
            projectEndDate: $("#projectEndDate").val(),
            projectType: $("#projectType").val()
        }
        addProject(data);
    });

    function addProject(data) {
        $.ajax({
            url: "http://localhost:8080/api/addproject",
            headers: {
                'Content-Type': 'application/json'
            },
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (data) {
                // console.log(data);
                getProjects();
                $("#projectId").val("");
                $("#projectName").val("");
                $("#projectStartDate").val("");
                $("#projectEndDate").val("");
                $("#projectType").val("");
            },
            error: function () {
                console.log("Error");
            }
        });
    }

    //done adding

    //delete project
    function deleteProject(id) {
        $.ajax({
            url: 'http://localhost:8080/airlines/delete/' + id,
            type: 'DELETE',
            dataType: 'json',
            success: function (data) {
                getProjects();
            },
            error: function () {
                getProjects();
            }
        });
    }

    //delete project done

    //load buttons
    function loadButtons1() {

        $(".editProject").click(function (e) {
            getOneProject($($(this)[0]).data("aid"));
            e.preventDefault();
        });


        $(".deleteProject").click(function (e) {
            deleteProject($($(this)[0]).data("aid"));
            e.preventDefault();
        });

        $(".viewDetails").click(function (e) {
            console.log("in view");
            $("#parent").hide();
            $("#viewproject").show();
            e.preventDefault();
        });


    }

    //done loading buttons for project




    //view module
    function viewModule(id) {
        $("#table1").empty();

        $.get("http://localhost:8080/flights/listAirlinesBy/" + id, function (data, status) {
            console.log(data);
            $("#table1").append($("<thead>").append($("<th>").append("No"))
                .append($("<th>").append("Module Id"))
                .append($("<th>").append("Module Name"))
                .append($("<th>").append("Module StartDate"))
                .append($("<th>").append("Module DeveloperName"))
                .append($("<th>").append("Module EndDate"))
                .append($("<th>").append("Module EffortEstimate"))
                .append($("<th>").append("Module Type"))
                .append($("<th>").append("Action")))
            for (i = 0; i < data.length; i++) {
                $("#table1").append($("<tr>")
                    .append($("<td>").append(i + 1))
                    .append($("<td>").append(data[i].moduleId))
                    .append($("<td>").append(data[i].moduleName))
                    .append($("<td>").append(data[i].moduleStartDate))
                    .append($("<td>").append(data[i].moduleDeveloperName))
                    .append($("<td>").append(data[i].moduleEndDate))
                    .append($("<td>").append(data[i].moduleEffortEstimate))
                    .append($("<td>").append(`
                           <i class="far fa-edit editModule" data-bs-toggle="modal" data-bs-target="#second_form1" data-fid="` + data[i].flightId + `"></i>
                           <i class="fas fa-trash deleteModule" data-fid="` + data[i].moduleId + `"></i>
                       `)));
            }
            loadButtons2();
        });
    }
});
