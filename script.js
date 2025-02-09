function moveAway() {
    const btn = document.getElementById("no");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    btn.style.top = Math.random() * (window.innerHeight - 100) + "px";
}

function showSurprise() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yay! 🎉 I knew you'd say YES! 💖</h1>
            <img src="https://your-s3-bucket.s3.amazonaws.com/surprise.gif" width="300px">
            <p>Can't wait for our special Valentine's date! 😘</p>
        </div>
    `;
}
