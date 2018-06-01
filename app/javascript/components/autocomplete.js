// TO DO: Needs control flow to only happen on URLs where needed

function autocomplete() {
  var fields = document.querySelectorAll('.autocomplete');

  fields.forEach(function(field) {
    if (field) {
      var autocomplete = new google.maps.places.Autocomplete(field, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(field, 'keydown', function(e) {
        if (e.key === "Enter"){}
      });
      $(field).change((e) => {
        setTimeout(() => {
          e.currentTarget.parentNode.submit()
        }, 500)
      })
    }
  })
}

export { autocomplete };
