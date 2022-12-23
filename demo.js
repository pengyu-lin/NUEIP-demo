$(document).ready(function () {
  AjaxObject.prototype.cnname = "";
  AjaxObject.prototype.enname = "";
  AjaxObject.prototype.sex = "";
  AjaxObject.prototype.id = 0;
  AjaxObject.prototype.email = "";
  AjaxObject.prototype.phone = "";
  AjaxObject.prototype.alertt = function () {
    alert("Alert:");
  };
  AjaxObject.prototype.getall = function () {
    response =
      '[{"s_sn":"35","cnname":"邱小甘","enname":"Peter","sex":"0","email":"peter@123.com","phone":"0123456789"},{"s_sn":"49","cnname":"蔡凡昕","enname":"Allen","sex":"0","email":"allen@123.com","phone":"0123456789"},{"s_sn":"50","cnname":"趙雪瑜","enname":"Sharon","sex":"0","email":"sharon@123.com","phone":"0123456789"},{"s_sn":"51","cnname":"賴佳蓉","enname":"Yoki","sex":"1","email":"yoki@123.com","phone":"0123456789"}]';
    refreshTable(JSON.parse(response));
  };
  AjaxObject.prototype.add = function () {
    response =
      '[{"s_sn":"35","cnname":"邱小甘","enname":"Peter","sex":"0","email":"peter@123.com","phone":"0123456789"},{"s_sn":"49","cnname":"蔡凡昕","enname":"Allen","sex":"0","email":"allen@123.com","phone":"0123456789"},{"s_sn":"50","cnname":"趙雪瑜","enname":"Sharon","sex":"0","email":"sharon@123.com","phone":"0123456789"},{"s_sn":"51","cnname":"賴佳蓉","enname":"Yoki","sex":"1","email":"yoki@123.com","phone":"0123456789"},{"s_sn":"52","cnname":"新增帳號","enname":"NewAccount","sex":"1","email":"new@123.com","phone":"0123456789"}]';
    refreshTable(JSON.parse(response));
  };
  AjaxObject.prototype.modify = function () {
    response =
      '[{"s_sn":"49","cnname":"蔡凡昕","enname":"Allen","sex":"0","email":"allen@123.com","phone":"0123456789"}]';
    refreshTable(JSON.parse(response));
  };
  AjaxObject.prototype.modify_get = function () {
    response =
      '[{"s_sn":"35","cnname":"邱小甘","enname":"Peter","sex":"0","email":"peter@123.com","phone":"0123456789"},{"s_sn":"49","cnname":"蔡凡昕","enname":"Allen","sex":"0","email":"allen@123.com","phone":"0123456789"},{"s_sn":"50","cnname":"趙雪瑜","enname":"Sharon","sex":"0","email":"sharon@123.com","phone":"0123456789"},{"s_sn":"51","cnname":"賴佳蓉","enname":"Yoki","sex":"1","email":"yoki@123.com","phone":"0123456789"}]';
    initEdit(JSON.parse(response));
  };
  AjaxObject.prototype.search = function () {
    response =
      '[{"s_sn":"35","cnname":"邱小甘","enname":"Peter","sex":"0","email":"peter@123.com","phone":"0123456789"}]';
    refreshTable(JSON.parse(response));
  };
  AjaxObject.prototype.delete = function () {
    response =
      '[{"s_sn":"35","cnname":"邱小甘","enname":"Peter","sex":"0","email":"peter@123.com","phone":"0123456789"},{"s_sn":"49","cnname":"蔡凡昕","enname":"Allen","sex":"0","email":"allen@123.com","phone":"0123456789"}]';
    refreshTable(JSON.parse(response));
  };

  var url = "ajax/ajaxCard";
  var ajaxobj = new AjaxObject(url, "json");
  ajaxobj.getall();

  // 新增
  // $("#addform").submit((e) => {
  //   e.preventDefault();
  //   var url = "ajax/ajaxCard";
  //   var cnname = $("#addcnname").val();
  //   var enname = $("#addenname").val();
  //   var sex = $('input:radio:checked[name="addsex"]').val();
  //   var email = $("#email").val();
  //   var phone = $("#phone").val();
  //   var ajaxobj = new AjaxObject(url, "json");
  //   ajaxobj.cnname = cnname;
  //   ajaxobj.enname = enname;
  //   ajaxobj.sex = sex;
  //   ajaxobj.email = email;
  //   ajaxobj.phone = phone;
  //   ajaxobj.add();
  //   $("#addButtonModal").modal("hide");
  // });
  //重新填寫
  $("#resetData").click(function () {
    $("#addform")[0].reset();
  });
  $("#resetSearchData").click(function () {
    $("#searchform")[0].reset();
  });
  $("#resetModifyData").click(function () {
    $("#modifyform")[0].reset();
  });
  // 搜尋
  $("#searchData").click(function () {
    var url = "ajax/ajaxCard";
    var cnname = $("#secnname").val();
    var enname = $("#seenname").val();
    var sex = $('input:radio:checked[name="sesex"]').val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var ajaxobj = new AjaxObject(url, "json");
    ajaxobj.cnname = cnname;
    ajaxobj.enname = enname;
    ajaxobj.sex = sex;
    ajaxobj.email = email;
    ajaxobj.phone = phone;
    ajaxobj.search();
    $("#searchButtonModal").modal("hide");
  });

  // 修改
  $("#modifybutton").click(function () {
    var ajaxobj = new AjaxObject(url, "json");
    ajaxobj.modify_get();
  });
  //確認修改
  $("#modifyData").click(function () {
    var modifyid = $("#cardtable").attr("id").substring(12);
    console.log(modifyid);
    var url = "ajax/ajaxCard";
    var cnname = $("#mocnname").val();
    var enname = $("#moenname").val();
    var sex = $('input:radio:checked[name="mosex"]').val();
    var ajaxobj = new AjaxObject(url, "json");
    ajaxobj.cnname = cnname;
    ajaxobj.enname = enname;
    ajaxobj.sex = sex;
    ajaxobj.id = modifyid;
    ajaxobj.modify();
    $("#modifyModal").modal("hide");
  });
  //確認刪除
  $("#confirmDelete").click(function () {
    var deleteid = $(this).attr("id").substring(12);
    var url = "ajax/ajaxCard";
    var ajaxobj = new AjaxObject(url, "json");
    ajaxobj.id = deleteid;
    ajaxobj.delete();
    $("#deleteModal").modal("hide");
  });

  // 自適應視窗
  $(window).resize(function () {
    var wWidth = $(window).width();
    var dWidth = wWidth * 0.4;
    var wHeight = $(window).height();
    var dHeight = wHeight * 0.4;
    $("#dialog-confirm").dialog("option", "width", dWidth);
    $("#dialog-confirm").dialog("option", "height", dHeight);
  });

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
  const rows = Array.from(document.querySelectorAll("tr"));
  function slideIn(row, index) {
    row.classList.add("slide-out");
    setTimeout(function () {
      row.classList.remove("slide-out");
    }, (index + 5) * 200);
  }

  rows.forEach(slideIn);
});

function refreshTable(data) {
  // var HTML = '';
  $("#cardtable tbody > tr").remove();
  $.each(data, function (key, item) {
    var strsex = "";
    if (item.sex == 0) strsex = "男";
    else strsex = "女";
    var row = $("<tr></tr>");
    row.append(
      $(
        `<td class="d-block d-lg-table-cell cnname" data-th="中文名字" data-bs-placement='top' data-bs-toggle='tooltip' data-bs-title='[${strsex}] ${item.cnname} (${item.enname})'><\/td>`
      ).html(item.cnname)
    );
    row.append(
      $(
        `<td class="d-block d-lg-table-cell" data-th="英文名字" data-bs-placement='top' data-bs-toggle='tooltip' data-bs-title='[${strsex}] ${item.cnname} (${item.enname})'><\/td>`
      ).html(item.enname)
    );
    row.append(
      $("<td class='d-block d-lg-table-cell'data-th='性別'></td>").html(strsex)
    );
    row.append(
      $("<td class='d-block d-lg-table-cell'data-th='電子信箱'></td>").html(
        item.email
      )
    );
    let phoneNum =
      item.phone.slice(0, 4) +
      "-" +
      item.phone.slice(4, 7) +
      "-" +
      item.phone.slice(7);
    row.append(
      $(
        `<td class='d-block d-lg-table-cell' data-th='手機號碼' data-bs-toggle="popover" data-bs-title="聯絡方式" data-bs-content="${phoneNum}"><\/td>`
      ).html(item.phone)
    );
    row.append(
      $("<td class='d-block d-lg-table-cell' data-th='修改'></td>").html(
        '<button id="modifybutton' +
          item.s_sn +
          '" class="modifybutton btn btn-primary rounded-pill" type="button" data-bs-toggle="modal" data-bs-target="#modifyModal">修改 <i class="bi bi-pencil-square"></i></button>'
      )
    );
    row.append(
      $("<td class='d-block d-lg-table-cell' data-th='刪除'></td>").html(
        '<button id="deletebutton' +
          item.s_sn +
          '" class="deletebutton btn btn-danger rounded-pill" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal">刪除 <i class="bi bi-trash"></i></button>'
      )
    );
    $("#cardtable").append(row);
  });
}

function initEdit(response) {
  var modifyid = $("#cardtable").attr("id").substring(12);
  $("#mocnname").val(response[0].cnname);
  $("#moenname").val(response[0].enname);
  if (response[0].sex == 0) {
    $("#modifyman").prop("checked", true);
    $("#modifywoman").prop("checked", false);
  } else {
    $("#modifyman").prop("checked", false);
    $("#modifywoman").prop("checked", true);
  }
  $("#modifysid").val(modifyid);
}

/**
 *
 * @param string
 *          url 呼叫controller的url
 * @param string
 *          datatype 資料傳回格式
 * @uses refreshTable 利用ajax傳回資料更新Table
 */
function AjaxObject(url, datatype) {
  this.url = url;
  this.datatype = datatype;
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
