if (typeof Typewriter !== "undefined") {
    typeWriterHeroTitle = new Typewriter(
        document.querySelector(".hero-title"),
        {
            loop: true,
            delay: 50,
        }
    );

    typeWriterHeroTitle
        .typeString("ارسال پیام تولد <span class='highlight'>دانش‌آموزان</span>")
        .pauseFor(1000)
        .deleteChars(16)
        .typeString("تبریک در کانال <span class='highlight'>ایتا</span>")
        .pauseFor(1000)
        .deleteChars(19)
        .typeString("بصورت خودکار")
        .pauseFor(1000)
        .deleteChars(-1)
        .start();
}
else {
    document.querySelector(".hero-title").innerHTML = "تبریک خودکار تولد <span class='highlight'>دانش‌آموزان</span>";
}