      var desen = document.getElementById("#canvas");    
      var contextImg = desen.getContext("2d");
      var clona;
      var imagine = new Image();
      imagine.src = "";
      document.getElementById("btn_grayScale").addEventListener("click", GrayScale);  
      document.getElementById("btn_add_text").addEventListener("click",AddText);
      document.getElementById("sourceTag").addEventListener("change", function (e) {
            let reader = new FileReader();
            reader.addEventListener('load', function (event) {
                imagine = new Image();
                clona = new Image();
                imagine.src = event.target.result;
                clona.src = event.target.result;
                imagine.onload = function () {
                
                    desen.width = imagine.width;
                    desen.height = imagine.height;
        
                    while (desen.width > 1000) {
                        desen.width = desen.width * 0.4;
                        desen.height = desen.height * 0.4;
                        imagine.width = desen.width;
                        imagine.height = desen.height;
                       
                    }
                    
                    contextImg.drawImage(imagine, 0, 0, desen.width, desen.height);
                };

            });
            reader.readAsDataURL(e.target.files[0]);
            
        });
          

          function GrayScale() {
            var Dataimg = contextImg.getImageData(0, 0, desen.width, desen.height);
            var pixeli = Dataimg.data;

            for (var i = 0; i < pixeli.length; i += 4) {
                var lightness = parseInt((pixeli[i] + pixeli[i + 1] + pixeli[i + 2]) / 3);

                pixeli[i] = lightness;
                pixeli[i + 1] = lightness;
                pixeli[i + 2] = lightness;
            }

            contextImg.putImageData(Dataimg, 0, 0);
        }

        function download() {
            var download = document.getElementById("download");
            var image = document.getElementById("#canvas").toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
            download.setAttribute("href", image);            
            }


            function AddText()
            {
             contextImg.textAllign="center";
             contextImg.fillStyle=document.getElementById("txtColor").value;       
             contextImg.fillText(document.getElementById("txt").value.trim(),30,90);
             
            }
    
      