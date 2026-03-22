function upload() {
    let fileInput = document.getElementById("imageInput");

    let formData = new FormData();
    formData.append("image", fileInput.files[0]);

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText =
            "Detected: " + data.result;
    });
}