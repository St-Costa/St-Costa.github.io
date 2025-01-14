folder = ""

if (window.location.pathname.endsWith("index.html")) {
    folder = "./style/"
}
else {
    folder = "../style/"
}

document.write(`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${folder}night_mode.css">
    <link rel="stylesheet" href="${folder}styling.css">
    <link rel="stylesheet" href="${folder}footer.css">
    <link rel="stylesheet" href="${folder}phone.css">
    <meta property="og:title" content="Stefano Costa's Webpage">
    <meta property="og:description" content="Stefano Costa's personal website, featuring his scientific research, publications, and projects">
    <meta property="og:image" content="https://st-costa.github.io//img/preview_image.jpg">
    <meta property="og:url" content="https://st-costa.github.io/">
`);