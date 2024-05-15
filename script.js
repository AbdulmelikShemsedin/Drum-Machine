const array = $('.drum-pad');
let power = true;

$('#power').click(() => {
    power = !power;
})

if(power){
    [...array].map((el, i) => {
        $(el).click(() => {
            $('.clip')[i].play();
            $('.song-name').html(`<p>${el.id}</p>`)
        })

        $(document).keydown((e) => {
            if(e.key.toUpperCase() === el.innerText){
                $('.clip')[i].play();
                $('.song-name').html(`<p>${el.id}</p>`);
                $(el).addClass('active');
                setTimeout(() => $(el).removeClass('active'), 100)
                
            }
        })
    })
}