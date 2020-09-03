document.body.innerHTML = `
<div id="time" style="border:3px solid blue; text-align:center; font-size:2em; margin-bottom:10px">00:00</div>
<button id="startBtn">Start</button>
<button id="stopBtn" disabled="true">Stop</button>
`;

// Stub timers and run user function (assume it attaches events and has no other logic)
var clock = sinon.useFakeTimers();
result();

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');

// Setup event
var clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('click', true, true);

// Start timer
startBtn.dispatchEvent(clickEvent);

// Pass some time and check values
clock.tick(83050);
expect(document.getElementById('time').textContent).to.equal
('01:23', "Time was not correctly measured.");

// Stop timer
stopBtn.dispatchEvent(clickEvent);

// Pass some time and assume values haven't changed
clock.tick(50000);
expect(document.getElementById('time').textContent).to.equal
('01:23', "Stop button didn't work as expected.");

// Restart timer and assume values are back to zero
startBtn.dispatchEvent(clickEvent);
expect(document.getElementById('time').textContent).to.equal
('00:00', "Stopwatch was not reset upon restart.");

// Restore system clock
clock.restore();