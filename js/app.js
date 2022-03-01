let d_place = document.querySelector('.d-place');
let h_place = document.querySelector('.h-place');
let m_place = document.querySelector('.m-place');
let s_place = document.querySelector('.s-place');

// the foloeing number is in seconds
let time_down_target = new Date('May 30, 2022 23:59:59').getTime();
// this number is in milliseconds
//  divide by 1000 to get seconds

let count_down = setInterval(() => {
        // get now 
        // the number of ms from the start of the date until now
        let time_now = new Date().getTime();

        // get the differnece between now and the target date
        let dur_difference = time_down_target - time_now;

        // get days
        // dur_differenc / 1000(ms)/ 60(s) / 60(m) / 24(h)
        let days = Math.floor(dur_difference / (1000 * 60 * 60 * 24));
        days < 10 ? d_place.innerHTML = `0${days}` : d_place.innerHTML = days;


        // get hours
        let hours = Math.floor((dur_difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        hours < 10 ? h_place.innerHTML = `0${hours}` : h_place.innerHTML = hours;


        // get mins
        let mins = Math.floor((dur_difference % (1000 * 60 * 60) / (1000 * 60)))
        mins < 10 ? m_place.innerHTML = `0${mins}` : m_place.innerHTML = mins;


        // get seconds
        let secs = Math.floor((dur_difference % (1000 * 60) / (1000)));
        secs < 10 ? s_place.innerHTML = `0${secs}` : s_place.innerHTML = secs;

        // clear interval when
        if (dur_difference < 0) {
            clearInterval(count_down);
        }


    },
    1000);;