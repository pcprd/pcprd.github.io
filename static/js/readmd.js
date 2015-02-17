function readmd(url) {
  $.get(url, function(data) {
    $("#main-content").html(marked(data));
  });
}

$(document).ready(function(){
    $(".page-link").click(function(event){
      var base = "https://pcprd.github.io/";
      var file = $(this).attr("id");
      readmd(base + file);
    });
});
