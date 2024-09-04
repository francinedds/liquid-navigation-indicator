const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () => {
  	const scrollDown = window.scrollY

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// Caso não queira a parte em scroll, delete a section 'container' do html
// ative o código abaixo 

// const navLink = document.querySelectorAll('.nav-link')

// function activeLink(){
//     navLink.forEach((item) => item.classList.remove('active-link'));
//     this.classList.add('active-link');
// }

// navLink.forEach((item) => item.addEventListener('click', activeLink));