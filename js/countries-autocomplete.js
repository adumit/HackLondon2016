$(function(){
  var subjects = [
    { value: 'Canada', data: 'Canada' },
    { value: 'England', data: 'England' },
    { value: 'France', data: 'France' },
    { value: 'Italy', data: 'Italy' },
  ];
  
  // setup autocomplete function pulling from subjects[] array
  $('#autocomplete').autocomplete({
    lookup: subjects,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});