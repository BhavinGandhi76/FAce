Webcam.set({
    width:350 , height:300 
});

Webcam.attach("camera");
 
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("Result").innerHTML= "<img id='captured_image' src=" + data_uri + ">";
    });
}
    console.log("ML5 version = ", ml5.version);
    classifier = ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/RnaEguZ9c/model.json", modelloaded);
    function modelloaded(){
     console.log("model loaded");
    }