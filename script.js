// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Storage API
const storageKeyInput = document.getElementById('storageKey');
const storageValueInput = document.getElementById('storageValue');
const storageResult = document.getElementById('storageResult');

document.getElementById('setLocalStorage').addEventListener('click', () => {
    localStorage.setItem(storageKeyInput.value, storageValueInput.value);
    storageResult.textContent = `Set '${storageKeyInput.value}' in Local Storage.`;
});

document.getElementById('getLocalStorage').addEventListener('click', () => {
    const value = localStorage.getItem(storageKeyInput.value);
    storageResult.textContent = `Value for '${storageKeyInput.value}': ${value}`;
});

document.getElementById('setSessionStorage').addEventListener('click', () => {
    sessionStorage.setItem(storageKeyInput.value, storageValueInput.value);
    storageResult.textContent = `Set '${storageKeyInput.value}' in Session Storage.`;
});

document.getElementById('getSessionStorage').addEventListener('click', () => {
    const value = sessionStorage.getItem(storageKeyInput.value);
    storageResult.textContent = `Value for '${storageKeyInput.value}': ${value}`;
});

// Geolocation API
const locationResult = document.getElementById('locationResult');
document.getElementById('getLocation').addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            locationResult.textContent = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
        }, error => {
            locationResult.textContent = `Error: ${error.message}`;
        });
    } else {
        locationResult.textContent = 'Geolocation is not available.';
    }
});

// Camera API
const cameraFeed = document.getElementById('cameraFeed');
document.getElementById('startCamera').addEventListener('click', async () => {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraFeed.srcObject = stream;
            cameraFeed.style.display = 'block';
        } catch (error) {
            alert('Could not access the camera: ' + error.message);
        }
    } else {
        alert('Camera API is not available.');
    }
});

// Push Notifications
const pushStatus = document.getElementById('pushStatus');
document.getElementById('requestPush').addEventListener('click', async () => {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            pushStatus.textContent = 'Push permission granted.';
            // You would typically then get the subscription and send it to your server
        } else {
            pushStatus.textContent = 'Push permission denied.';
        }
    } else {
        pushStatus.textContent = 'Push notifications not supported.';
    }
});
