function timKiemNangCao() {
  var tim_kiem_nang_cao = document.getElementById("tim-kiem-nang-cao");
  var tim_kiem_co_ban = document.getElementById("tim-kiem-co-ban");
  tim_kiem_nang_cao.style.display = "flex";
  tim_kiem_co_ban.style.display = "none";
}

function timKiemCoBan() {
  var tim_kiem_nang_cao = document.getElementById("tim-kiem-nang-cao");
  var tim_kiem_co_ban = document.getElementById("tim-kiem-co-ban");
  tim_kiem_nang_cao.style.display = "none";
  tim_kiem_co_ban.style.display = "flex";
}

//muc tieu du an
//=> fix hight textarea
var textAreaOne = document.getElementById('textareaCuttomOne');
var textAreaTow = document.getElementById('textareaCuttomTow');
if (textAreaOne) {
  textAreaTow.addEventListener('keydown', autosize);
  textAreaOne.addEventListener('keydown', autosize);
}

function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}

//dropdown xem so ban ghi
var btnDropdown = document.getElementById("dropdown-cuttom");

function onClickDropdown() {
  btnDropdown.classList.toggle("show");
}

if (btnDropdown) {
  window.onclick = function (event) {
    // if (!event.target.matches('.btn-dropdown')) 
    if (!$(event.target).hasClass('btn-dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-cuttom");
      var i;

      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        // if (!event.target.matches('.slcDropodown'))
        if (!$(event.target).hasClass('slcDropodown')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
}

// them moi phan ky thuc hien
// ke hoach bo tri von
$(document).ready(function () {
  var counter = 0;
  $("#addrow").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="number" class="text-center form-control"  placeholder="Năm"  class="form-control date" name="nam' + counter + '"/></td>';
    cols += '<td><input type="number" class="text-center form-control" placeholder="Tháng" min="1" max="12" name="thang' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSach' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSachKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ODA' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nguonVonNuocNgoaiKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="tongSo' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="soQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="date" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ghiChu' + counter + '"/></td>';
    cols += '<td class="text-center"><a href="javascript:void(0)" class="ibtnDel"><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list").append(newRow);
    counter++;
  });
  $("table.order-list").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});

//khoi luong thuc hien
$(document).ready(function () {
  var counter = 0;
  $("#addrowKhoiLuongThucHien").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="number" class="text-center form-control" placeholder="Năm"  class="form-control date" name="nam' + counter + '"/></td>';
    cols += '<td><input type="number" class="text-center form-control w-auto" placeholder="Tháng" min="1" max="12" name="thang' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSach' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSachKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ODA' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nguonVonNuocNgoaiKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="tongSo' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="soQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td class="text-center"><a href="javascript:void(0)" class="ibtnDel"><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list-khoi-luong-thuc-hien").append(newRow);
    counter++;
  });
  $("table.order-list-khoi-luong-thuc-hien").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});

//giai ngan von
$(document).ready(function () {
  var counter = 0;
  $("#addrowGiaiNganVon").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="number" class="text-center form-control" placeholder="Năm"  class="form-control date" name="nam' + counter + '"/></td>';
    cols += '<td><input type="number" class="text-center form-control" placeholder="Tháng" min="1" max="12" name="thang' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSach' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSachKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ODA' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nguonVonNuocNgoaiKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="tongSo' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="soQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td class="text-center"> <a href="javascript:void(0)" class="ibtnDel"> <i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list-giai-ngan-von").append(newRow);
    counter++;
  });
  $("table.order-list-giai-ngan-von").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});

//khoi luong thuc hien thuc te
$(document).ready(function () {
  var counter = 0;
  $("#addrowKhoiLuongThucHienThucTe").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="number" class="text-center form-control" placeholder="Năm"  class="form-control " name="nam' + counter + '"/></td>';
    cols += '<td><input type="number" class="text-center form-control" placeholder="Tháng" min="1" max="12" name="thang' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSach' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="nganSachKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ODA' + counter + '"/></td>';
    cols += '<td><input type="date" class="form-control" name="tongSo' + counter + '"/></td>';
    cols += '<td><select id="inputState" class="form-control w-auto"><option selected>Chậm tiến độ</option><option>Đúng tiến độ</option></select></td>';

    cols += '<td><input type="text" class="form-control" name="soQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td class="text-center"><a href="javascript:void(0)" class="ibtnDel"><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list-khoi-luong-thuc-hien-thuc-te").append(newRow);
    counter++;
  });
  $("table.order-list-khoi-luong-thuc-hien-thuc-te").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});

//tong muc dau tu
$(document).ready(function () {
  var counter = 0;
  $("#addrowTongMucDauTu").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="text" class="center-row-table form-control"  class="form-control" name="hangMuc' + counter + '"/></td>';
    cols += '<td><input type="text" class="center-row-table form-control"  name="vonTrongNuocNganSach' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="vonTrongNuocVonChu' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="vonTrongNuocVonVay' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="vonTrongNuocKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="vonNuocNgoaiODA' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="vonNuocNgoaiKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="tongSo' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control w-auto" name="ghiChu' + counter + '"/></td>';
    cols += '<td class="center-row-table"><a href="javascript:void(0)" class="ibtnDel"><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list-tong-muc-dau-tu").append(newRow);
    counter++;
  });
  $("table.order-list-tong-muc-dau-tu").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});

//autocomplete phân kỳ thực hiện
$(document).ready(function () {
  $('.js-example-basic-single').select2({
    width: '100%',
    theme: "bootstrap"
  });
});

// click vào tag thay đổi id btn submit
function onAddIdDefault() {
  $('.btn.btn-primary.btnModalFooter').attr('id', 'btnKeHoachBoTriVon');
}

function onAddIdBtnKeHoachBoTriVon() {
  $('.btn.btn-primary.btnModalFooter').removeAttr('id');
  $('.btn.btn-primary.btnModalFooter').attr('id', 'btnKeHoachBoTriVon');
}

function onAddIdBtnKhoiLuongThucHien() {
  $('.btn.btn-primary.btnModalFooter').removeAttr('id');
  $('.btn.btn-primary.btnModalFooter').attr('id', 'btnKhoiLuongThucHien');
}

function onAddIdBtnGiaiNganVon() {
  $('.btn.btn-primary.btnModalFooter').removeAttr('id');
  $('.btn.btn-primary.btnModalFooter').attr('id', 'btnGiaiNganVon');
}

function onAddIdBtnKhoiLuongThucHienThucTe() {
  $('.btn.btn-primary.btnModalFooter').removeAttr('id');
  $('.btn.btn-primary.btnModalFooter').attr('id', 'btnKhoiLuongThucHienThucTe');
}

//quan ly danh muc
$(document).ready(function () {
  var counter = 0;
  $("#addrowQuanLyDanhMuc").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="text" class="form-control" name="ODA' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control w-100" name="nguonVonNuocNgoaiKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="tongSo' + counter + '"/></td>';
    cols += '<td class="text-center"><a href="javascript:void(0)" class="ibtnDel"><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list-quan-ly-danh-muc").append(newRow);
    counter++;
  });
  $("table.order-list-quan-ly-danh-muc").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});

//quan ly nhom nguoi dung
$(document).ready(function () {
  var counter = 0;
  $("#addrowQuanLyNhomNguoiDung").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="text" class="form-control" name="ODA' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control w-100" name="nguonVonNuocNgoaiKhac' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="tongSo' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="ngayQuyetDinh' + counter + '"/></td>';
    cols += '<td class="text-center"><a href="javascript:void(0)" class="ibtnDel"><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list-quan-ly-nhom-nguoi-dung").append(newRow);
    counter++;
  });
  $("table.order-list-quan-ly-nhom-nguoi-dung").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});

// xu ly chon file
$(document).ready(function () {
  $('.btn-openFileInput').click(function () {
    $('#offers-file').click();
  });
  $(function () {
    var inputFile = $('#offers-file');
    var myfiles = [];
    var filesContainer = $('.file-result');
    inputFile.change(function () {
      var newFiles = [];

      for (var index = 0; index < inputFile[0].files.length; index++) {
        var file = inputFile[0].files[index];
        newFiles.push(file);
        myfiles.push(file);
      }

      newFiles.forEach(function (file, index) {
        var content = '';
        content += "<li class='list-group-item'>".concat(file.name, " <a href=\"\" data-index=\"")
          .concat(myfiles.length + index,
            "\" class=\"remove-file-item float-right\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></li>"
          );
        filesContainer.append(content);
      });
      $(document).on('click', '.remove-file-item', function (event) {
        event.preventDefault();
        var index = $(this).data('index');
        myfiles.splice(index, 1);
        $("[data-index=".concat(index, "]")).parent().remove();
      });
    });
  });
});

//du an dau tu
$(document).ready(function () {
  var counter = 0;
  $("#addrowDuAnDauTu").on("click", function () {
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td><input type="text" class="form-control" /></td>';
    cols += '<td><input type="text" class="form-control w-100"/></td>';
    cols += '<td><input type="text" class="form-control" /></td>';
    cols += '<td class="text-center"><a href="javascript:void(0)" class="ibtnDel"><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"title="Xóa"></i></a>&nbsp;</td>';
    newRow.append(cols);
    $("table.order-list-du-an-dau-tu").append(newRow);
    counter++;
  });
  $("table.order-list-du-an-dau-tu").on("click", ".ibtnDel", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
  });
});