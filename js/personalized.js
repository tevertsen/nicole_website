$('.carousel').carousel({
    interval: 4000
});

$('.carousel').carousel('cycle');

function footerDate() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("footer_text").innerHTML = '<span class="copyright text-center">&copy; ' + n + ' Nicole Evertsen Photography</span>';
}

//This js is to enlarge images
$("#pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});