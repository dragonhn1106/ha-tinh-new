function onEditTaskTongMucDauTu() {
  document.getElementById('exampleModalLabel').innerHTML = "Sửa mục đầu tư";
}

function onEditTaskKeHoachBoTriVon() {
  document.getElementById('exampleModalLabel-bo-tri-von').innerHTML = "Sửa mục kế hoạch bố trí vốn";
}

function onEditTaskKhoiLuongThucHien() {
  document.getElementById('exampleModalLabel-khoi-luong-thuc-hien').innerHTML = "Sửa mục kế hoạch thực hiện";
}

function onEditTaskGiaiNganVon() {
  document.getElementById('exampleModalLabel-giai-ngan-von').innerHTML = "Sửa mục giải ngân vốn";
}

function onEditTaskKhoLuongThucHienNhiemVuThucTe() {
  document.getElementById('exampleModalLabel').innerHTML = "Sửa mục khối lượng thực hiện thực tế";
}

function onEditTaskCapPhepXayDung() {
  document.getElementById('exampleModalLabel').innerHTML = "Sửa mục cấp phép xây dựng";
}


$('#trangThaiThucTe').change(function () {
  // $('#chamTienDo').show();
  // // $('#' + $(this).val()).show();
  // $('.nguyen-nhan-khac').show();
  var status = $('#trangThaiThucTe option:selected').val();

  if (status == 'chamTienDo') {
    $('#chamTienDo').show();
  } else {
    $('#chamTienDo').hide();
  }


});
var getIdNguyenNhanChamTienDo = document.getElementById('nguyenNhanChamTienDo');
getIdNguyenNhanChamTienDo.addEventListener('click', $('#nguyenNhanChamTienDo').change(function () {
  var x = $('.nguyenNhanChamTienDo option:selected').val();
  if ($('.nguyenNhanChamTienDo option:selected').val() == 'nguyenNhanKhac') {
    $('.nguyen-nhan-khac').show();
  } else {
    $('.nguyen-nhan-khac').hide();
  }
}), true);