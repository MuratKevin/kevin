const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

window.addEventListener("DOMContentLoaded", function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("project-content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "index2.html", true);
  xhttp.send();
});

$(document).ready(function() {
	$('.nav-link').click(function() {
	  $('.nav-link').removeClass('active');
	  $(this).addClass('active');
	  var target = $(this).data('target');
	  $('.page-section').removeClass('active');
	  $('#' + target).addClass('active');
	});
  
	$('.menu-toggle').click(function() {
	  $('.sidebar').toggleClass('active');
	  $(this).toggleClass('active');
	});
  
	$('.login-button').click(function() {
	  $('.login-modal').addClass('active');
	});
  
	$('.close-button').click(function() {
	  $('.login-modal').removeClass('active');
	});
});
