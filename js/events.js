//define functions here

$(document).ready(function(){

// call functions here
  getIt();
<<<<<<< HEAD
  frameIt();
  pressIt();
  submitIt();
=======
>>>>>>> fde85bd2e94af1c1b98cd0d363b59db0637786df
});

function getIt() {
  $('p').on('click', alert("Hey!"));
}

function frameIt() {
<<<<<<< HEAD
  $('img').on('load', function() {
=======
  $('document').on('load', function() {
>>>>>>> fde85bd2e94af1c1b98cd0d363b59db0637786df
    $("img").addClass('tasty')
  });
  
}

function pressIt() {
<<<<<<< HEAD
  $('#typing').on('keydown', function(key) {
=======
  $('document').on('keydown', function(key) {
>>>>>>> fde85bd2e94af1c1b98cd0d363b59db0637786df
    if (key.which == 71) {
      alert('You have pressed the G Key!');
    }
  })
}

function submitIt() {
<<<<<<< HEAD
  $("form").on('submit', function() {
      alert("Your form is going to be submitted now.");
=======
  $('document').on('submit', function() {
    if ($("#typing").val()) {
      alert("Your form is going to be submitted now.");
    }
>>>>>>> fde85bd2e94af1c1b98cd0d363b59db0637786df
  })
  
}