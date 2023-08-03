nosex=0;nosey=0;
function preload(){
    clownNose=loadImage("https://i.postimg.cc/fTHg5Qpf/Clown-Nose-PNG-Image.png");

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y-10;
        console.log("noseX= "+nosex);
        console.log("noseY= "+nosey);
    }
}

 function modelLoaded(){
   console.log("poseNet is Initialized");
 }

function draw(){
    image(video,0,0,300,300);
     image(clownNose,nosex,nosey,30,30);


}
function TakeSnapshot(){
    save('MyFilterImage.png');
}
