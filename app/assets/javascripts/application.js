// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .
$(function(){

  $('#showImg').change(
    function () {
      if (!this.files.length) {
        return;
      }

      var file = $(this).prop('files')[0];
      var fr = new FileReader();
      $('.cover-image-upload').css('background-image', 'none');
        fr.onload = function() {
          $('.cover-image-upload').css('background-image', 'url(' + fr.result + ')');
        }
        fr.readAsDataURL(file);
        $(".cover-image-upload img").css('opacity', 0);
    }
  );


  // $(".subImg").on('click',function(){
  //   console.log($(this).closest("li").index() + 1);
  // })


  $(".subImg").change(

    function () {

      if (!this.files.length) {
        return;
      }

      var index = $(this).closest("li").index() + 1;
      var order = 'nth-child('+ index +')'
      var file = $(this).prop('files')[0];
      var fr = new FileReader();
      $(".proto-sub-list li:" + order).children('.image-upload').css({'background-image': 'none','background-size': '100%'});
        fr.onload = function() {
          $(".list-group li:" + order).children('.image-upload').css('background-image', 'url(' + fr.result + ')');
        }
        fr.readAsDataURL(file);
        $(".proto-sub-list li:" + order).children(".image-upload img").css('opacity', 0);
    }
  );





});



