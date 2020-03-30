$(function() {
  $(".sortable").sortable();
  $(".draggable").draggable({
    connectToSortable: ".sortable",
    revert: "invalid"
  });
});
