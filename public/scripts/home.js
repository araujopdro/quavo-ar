console.log('Home page script loaded.');
// Add any additional logic for the home page here
const model_viewer_guara = document.getElementById("model-viewer-guara")
console.log(model_viewer_guara)

//model_viewer_guara.setAttribute("src", "/assets/models/guarapuavaexteriorweb.glb")
model_viewer_guara.setAttribute("src", "https://storage.googleapis.com/quavo-ar.appspot.com/static/guarapuavaexteriorweb.glb")
model_viewer_guara.setAttribute("ar", "")
model_viewer_guara.setAttribute("ar-modes", "webxr scene-viewer quick-look")
model_viewer_guara.setAttribute("camera-controls", "")
model_viewer_guara.setAttribute("touch-action", "pan-y")
model_viewer_guara.setAttribute("shadow-intensity", "1")
model_viewer_guara.setAttribute("environment-image", "legacy")
model_viewer_guara.setAttribute("camera-orbit", "45deg 65deg 2.5m")

const model_viewer_moises_marx = document.getElementById("model-viewer-moises-marx")
console.log(model_viewer_moises_marx)

//model_viewer_moises_marx.setAttribute("src", "/assets/models/mm_exteriorv2.glb")
model_viewer_moises_marx.setAttribute("src", "https://storage.googleapis.com/quavo-ar.appspot.com/static/mm_exteriorv2.glb")
model_viewer_moises_marx.setAttribute("ar", "")
model_viewer_moises_marx.setAttribute("ar-modes", "webxr scene-viewer quick-look")
model_viewer_moises_marx.setAttribute("camera-controls", "")
model_viewer_moises_marx.setAttribute("touch-action", "pan-y")
model_viewer_moises_marx.setAttribute("shadow-intensity", "1")
model_viewer_moises_marx.setAttribute("environment-image", "legacy")
model_viewer_moises_marx.setAttribute("camera-orbit", "45deg 65deg 2.5m")