// Links for App Gallery and Google Drive
const globalLinkForAppGallery = "https://appgallery.huawei.com/#/app/C111419609";
const globalLinkForGoogleDrive = "https://drive.google.com/file/d/1f1xsv4SOrN3fAb94MSJFH6fAbUB2xT0G/view?usp=sharing";

// Buttons for App Gallery and Google Drive
const globalLinkForAppGalleryBtn = document.getElementById("appGallery");
const globalLinkForGoogleDriveBtn = document.getElementById("googleDrive");

// Event Listeners for App Gallery and Google Drive
globalLinkForAppGalleryBtn.addEventListener("click", () => {
  window.open(globalLinkForAppGallery, "_blank");
});

globalLinkForGoogleDriveBtn.addEventListener("click", () => {
  window.open(globalLinkForGoogleDrive, "_blank");
});