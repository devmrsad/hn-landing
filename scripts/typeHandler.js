if (typeof Typewriter !== "undefined") {
    typeWriterHeroTitle = new Typewriter(
        document.querySelector(".hero-title"),
        {
            loop: true,
            delay: 75,
        }
    );

    typeWriterHeroTitle
        .typeString(" تبریک خودکار تولد <span class='highlight'>دانش‌آموزان</span>")
        .pauseFor(1000)
        .deleteChars(30)
        .typeString("ارسال پیام تبریک در کانال <span class='highlight'>ایتا</span>")
        .pauseFor(1000)
        .deleteChars(32)
        .typeString("بصورت  هوشمند و خودکار")
        .pauseFor(1000)
        .deleteChars(-1)
        .start();
}
else {
    document.querySelector(".hero-title").innerHTML = "تبریک خودکار تولد <span class='highlight'>دانش‌آموزان</span>";
}