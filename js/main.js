let headerBtn = document.getElementById('headerBtn');
let modalBox = document.getElementById('modalBox');
let closeBtn = document.getElementById('closeBtn');
let nextBtn = document.getElementById('next');
let hero = document.getElementById('hero1');

headerBtn.addEventListener('click',function(){
  modalBox.classList.add('show')
});
closeBtn.addEventListener('click', function(){
  modalBox.classList.remove('show')
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("goTop").style.display='block';
  } else {
    document.getElementById("goTop").style.display='none';
  }
}
nextBtn.addEventListener('click', function(){
  hero.classList.add('none')
})

