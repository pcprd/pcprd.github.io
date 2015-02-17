function readmd(url) {
  $.get(url, function(data) {
    $("#main-content").html(marked(data));
  });
}
