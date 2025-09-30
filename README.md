# PWA Web API Tester

This is a simple Progressive Web App (PWA) designed to test various Web APIs. It's a demonstration of how PWAs can access device features and provide a native-app-like experience.

## Features

The app includes testers for the following Web APIs:

*   **Storage API:** Test `localStorage` and `sessionStorage` by setting and getting key-value pairs.
*   **Geolocation API:** Get your current geographical coordinates.
*   **Camera API:** Access your device's camera and display the feed.
*   **Push Notifications:** Request permission for push notifications.

## How to Use

1.  Clone or download this repository.
2.  Serve the files using a simple HTTP server. For example, you can use Python's built-in server:
    ```bash
    python -m http.server
    ```
3.  Open the app in your web browser. You can test the PWA features, including installing it to your home screen.

## File Structure

*   `index.html`: The main HTML file.
*   `style.css`: The stylesheet for the app.
*   `script.js`: The JavaScript code that handles the API interactions.
*   `sw.js`: The service worker that enables offline functionality and push notifications.
*   `manifest.json`: The web app manifest file.
*   `icon.svg`: The application icon.

## Contributing

Feel free to fork this repository and add more API testers!