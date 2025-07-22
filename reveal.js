//Animação de scroll com ScrollReveal.js

window.revelar = ScrollReveal({reset: true})

//hero-text
revelar.reveal('.hero-text', 
{
  duration: 2000,
  distance: '90px',
  origin: 'bottom',
})

//hero-image
revelar.reveal('.hero-image', 
    {
      duration: 2000,
      distance: '90px',
      origin: 'bottom',
      delay: 500,
    })

//sobre
revelar.reveal('.sobre', 
    {
      duration: 2000,
      distance: '90px',
      origin: 'bottom',
    })

//skills
revelar.reveal('.skills',
    {
      duration: 2000,
      distance: '90px',
      origin: 'bottom',
    })

//projetos
revelar.reveal('.projects', 
    {
      duration: 2000,
      distance: '90px',
      origin: 'bottom',
    })

//projetos-list
revelar.reveal('.projects-list', 
    {
      duration: 2000,
      distance: '90px',
      origin: 'bottom',
    })


//contatos
revelar.reveal('.contact', 
    {
      duration: 2000,
      distance: '90px',
      origin: 'bottom',
    })

//footer
revelar.reveal('.footer', 
    {
      duration: 2000,
      distance: '90px',
      origin: 'bottom',
    })