$(document).ready(function()
{
    $('.menuHamburguer').click(function()
    {
        $('nav').slideToggle()
    })


    $('.about').click(function()
    {
        const destino1 = $('#sobreMim')

        $('html').animate(
            {
                scrollTop: destino1.offset().top
            },1000)
    })


    
    $('.contact').click(function()
    {
        const destino2 = $('#contato')

        $('html').animate(
            {
                scrollTop: destino2.offset().top
            },2000)
    })

    $('.certificate').click(function()
    {
        const destino3 = $('#certifications')

        $('html').animate(
            {
                scrollTop: destino3.offset().top
            },2000)
    })
})