//Xóa sản phẩm
// $(".xoasp"): lấy về cái nút có class là xoasp
$(".xoasp").click(function() { 
  if(confirm('Bạn có chắc muốn xóa không?'))
  {
    $(this).parent().parent().remove(); 
  }
});