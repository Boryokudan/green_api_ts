function getSettings() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const responseArea = document.getElementById("responseArea");
            responseArea.value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function getStateInstance() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const responseArea = document.getElementById("responseArea");
            responseArea.value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

document.getElementById("sendMessageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

    const phoneNumber = document.getElementById("msgPhoneNumber").value + "@c.us";
    const messageContent = document.getElementById("messageContent").value;

    const postData = {
        chatId: phoneNumber,
        message: messageContent
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        const responseArea = document.getElementById("responseArea");
        responseArea.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

document.getElementById("sendFileByUrlForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;

    const phoneNumber = document.getElementById("filePhoneNumber").value + "@c.us";
    const url = document.getElementById("url").value;
    const fileName = url.substring(url.lastIndexOf("/") + 1);

    const postData = {
        chatId: phoneNumber,
        urlFile: url,
        fileName: fileName
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        const responseArea = document.getElementById("responseArea");
        responseArea.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});