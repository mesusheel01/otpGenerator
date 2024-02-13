function generateOtp(){
    var otpLen = 6;
    const otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otp-box").innerText = `${otp}`;
}
document.getElementById("btn").addEventListener("click",generateOtp);
window.addEventListener("load",generateOtp);