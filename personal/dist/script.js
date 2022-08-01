const sections = document.querySelectorAll('section')

window.addEventListener('scroll', checkSections)

checkSections()

function checkSections(){
    const triggerBottom = window.innerHeight / 5 * 4

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top

        if(sectionTop < triggerBottom){
            section.classList.add('show')
        } else{
            section.classList.remove('show')
        }
    })
}

document.getElementsByClassName(".copy-text").onclick = function() {
    this.select();
    document.execCommand('copy');
    alert(window.getSelection().toString());
  }