// video play
$('#play-video').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<video id="bg-video" muted playsinlide><source src="./video/TVC.mp4"></video>');
});


// pagination

