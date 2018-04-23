navigator.mediaDevices.enumerateDevices().then((devices) => {
    let options = '<option id="">Selecione uma Webcam</option>'
    devices.forEach((device) => {
        if (device.kind === 'videoinput') {
            options += '<option id="' + device.deviceId + '">' + device.label + '</option>'
        }
    });

    document.querySelector('#videoSelect').innerHTML = options;
})

document.querySelector('#videoSelect').addEventListener('change', function (e) {
    startVideo(e.target.value);
})

startVideo = (id) => {
    let config = {
        video: {deviceId: id},
        audio: false
    }

    let element = document.querySelector('video');

    let success = (stream) => {
        element.src = window.URL.createObjectURL(stream);
    }

    navigator.getUserMedia(config, success, (err) => console.log(err));
}
