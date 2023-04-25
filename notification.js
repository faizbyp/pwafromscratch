const button = document.querySelector('button');

button.addEventListener('click', () => {
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
      const notification = new Notification('Contoh', {
        body: "Cek 123",
        icon: "logo.png"
      });
      notification.addEventListener("error", e => {
        alert("error");
      })
    }
  })
});

const syncStatus = navigator.permissions.query({
  name: 'periodic-background-sync',
});
if (syncStatus.state === 'granted') {
  console.log("Background Sync Granted");
} else {
  console.error("Background Sync Denied");
}
