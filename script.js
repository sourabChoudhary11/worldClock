
let url = 'music.mp3';
let audio = new Audio(url);
let condition = true;

// Set Interval for Updating the time

setInterval(() => {
    let d = new Date();
    // Set time for India
    India.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata'
    }).split(', ')[1];

    // Set time for Australia
    Australia.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Australia/Sydney'
    }).split(', ')[1];

    // Set time for America
    America.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'America/Chicago'
    }).split(', ')[1];

    // Alarm Setup according to our Region Time

    let indiaHours = d.getHours().toString();
    let alarmHours;
    let indiaMinutes = d.getMinutes().toString();
    let alarmMinutes;
    if(Time.value!==''){
        alarmMinutes = Time.value.split(':')[1].charAt(0)==='0'?Time.value.split(':')[1].replace('0',''):Time.value.split(':')[1];
        alarmHours = Time.value.split(':')[0].charAt(0)==='0'?Time.value.split(':')[0].replace('0',''):Time.value.split(':')[0];
    }
        
    // console.log(d.getHours().toString(), indiaMinutes)
    // console.log(alarmHours, alarmMinutes)

    if(indiaHours===alarmHours && indiaMinutes===alarmMinutes && condition===true){
        // console.log('Alarm Occur');
        condition = false;
        Stop.disabled = false;
        audio.loop= true;
        audio.play();
        setTimeout(()=>{
            condition=true;
        },60000)
    }
},1000)

function stopAlarm(){
    audio.pause();
    Stop.disabled=true;
}
