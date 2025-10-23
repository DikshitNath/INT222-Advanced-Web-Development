import {EventEmitter} from 'events';
import fs from 'fs';
// const booking = new EventEmitter();

// booking.on('booked', (user)=>{
//     console.log(`Email sent to ${user}`);
// })

// booking.on('booked', (user)=>{
//     console.log(`Ticket generated for ${user}`);
// })

// booking.on('booked', (user, seaType)=>{
//     console.log(`Seat booked for ${user} on ${seaType}`);
// })

// booking.emit('booked', 'Dikshit', 'Economy');
// booking.emit('booked', 'Srijan', 'Premium');
// booking.emit('booked', 'Aisharya', 'Economy');

const calculate = new EventEmitter();

calculate.on('CGPA', (user, sub1, sub2, sub3) => {
    console.log(`CGPA is calculated for ${user}`);
    let cgpa = (sub1 + sub2 + sub3)/3;
    console.log(`CGPA is ${cgpa}`);
    fs.writeFile('CGPA.txt', cgpa.toString(), (err) => {
        if (err) return console.log(err);
        console.log('CGPA has been stored successfully');
    })
});


calculate.emit('CGPA', 'Dikshit', 10, 7, 8);