// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          console.log("no entra");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

jQuery(document).ready(function(){
	// Listen for the input event.
	jQuery("#contact").on('input', function (evt) {
		// Allow only numbers.
		jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g, ''));
	});
});