addEventListener('message', function(event) {
    switch (event.data) {
        default:
            postMessage('default');
    }
    console.log('event', event);
});