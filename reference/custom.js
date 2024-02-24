const renderHuehnchenSlider = () => {
    const huehnchensliderSettings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        speed: 1000
    };
    $("#huehnchenslider .inner").slick(huehnchensliderSettings);
}
renderHuehnchenSlider();

const renderSegelfest2022Gallery = () => {
    const images = [
        "DSC04257", "DSC04427", "DSC04448", "DSC04450", "DSC04452", "DSC04454", "DSC04455", "DSC04457", "DSC04458",
        "DSC04460", "DSC04462", "DSC04464", "DSC04465", "DSC04469", "DSC04470", "DSC04475", "DSC04476", "DSC04479",
        "DSC04482", "DSC04484", "DSC04485", "DSC04486", "DSC04494", "DSC04496", "DSC04512"
    ];
    const gallery = document.getElementById("gallery-segelfest2022");
    const title = "Chicken Dinner live @ Segelfest 2022";

    images.forEach(image => {
        const filename = `images/slideshow-segelfest2022/${image}.jpeg`;

        let img = document.createElement("img")
        img.className = "d-block";
        img.src = filename;
        img.alt = title;

        let a = document.createElement("a");
        a.className = "d-block";
        a.href = filename;
        a.dataset.title = title;
        a.dataset.lightbox = "segelfest2022";
        a.appendChild(img);
        gallery.appendChild(a);
    });

    // https://lokeshdhakar.com/projects/lightbox2/
    lightbox.option({
        resizeDuration: 400,
        fadeDuration: 200,
        disableScrolling: true
    });
};
renderSegelfest2022Gallery();
