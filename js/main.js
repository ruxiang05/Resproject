var showWidth = 1;

if(showWidth === 1){
  $(document).ready(function(){
    $(window).resize(function(){
      var width = $(window).width();
      document.getElementById('output_width').innerHTML="Window Width: " + width;
    });
  });
}
