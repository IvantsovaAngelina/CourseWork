/*var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

for(let li of trOne.querySelectorAll('li')){
  let span = document.createElement('span')
  span.classList.add('show');
  li.prepend(span);
  span.append(span.nextSibling)
}

trOne.onclick = function(event){
  console.log(event.target.tagName);
  if(event.target.tagName != 'SPAN') return;

  let childrenContainer = event.target.parentNode.querySelector('ul');

  if(!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;

  if(childrenContainer.hidden){
    event.target.classList.add('show');
    event.target.classList.remove('hide');
      
  }
  else{
    event.target.classList.add('hide');
    event.target.classList.remove('show');
  }
}

let coll = document.getElementsByClassName('collapsible');
for(let i = 0; i < coll.length; i++){
  coll[i].addEventListener('click', function(){
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else{
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  })
}*/