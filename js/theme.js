var body = document.querySelector('.color-scheme');
var themeBtn = document.querySelectorAll('.color-scheme__mode-changer');
var themeLightBtn = document.querySelector('svg:first-of-type');
var themeDarkBtn = document.querySelector('svg:nth-of-type(2)');

for(var i = 0; i < themeBtn.length; i++){
themeBtn[i].addEventListener('click', function(){
body.classList.toggle('color-scheme--light-mode');
body.classList.toggle('color-scheme--dark-mode');

if(body.classList.contains("color-scheme--dark-mode")){
	themeDarkBtn.style.display= "none";
	themeLightBtn.style.display= "block";

}else{
	themeDarkBtn.style.display= "block";
	themeLightBtn.style.display= "none";
}
});
}