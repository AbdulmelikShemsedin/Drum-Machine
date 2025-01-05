const array = $('.drum-pad');
let power = true;

$('#power').click(() => {
    power = !power;
    if(power) {
        $('#power').addClass('off');
        powerOn();
    } else {
        $('#power').removeClass('off');
        powerOff();
    }
})

const powerOn = () => {
    [...array].map((el, i) => {
        $(el).off('click').click(() => {
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

const powerOff = () => {
    [...array].map((el) => {
        $(el).off('click');
    });
    $(document).off('keydown');
}

powerOn();
