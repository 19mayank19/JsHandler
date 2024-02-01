const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
    window.handleNativeNavigation("upi://pay?a=a")
})