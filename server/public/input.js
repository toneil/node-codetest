const socket = new WebSocket('ws://localhost:8080')
socket.addEventListener('open', function (event) {
});

console.log('socket ', socket)

socket.addEventListener('message', function (event) {
    const el = document.createElement("div");
    const message = JSON.parse(event.data)
    $(el)
      .text(message.message)
      .addClass("message")
      .addClass(message.fromMe ? "me" : "other");
    $("#message-list").prepend(el);
});

(() => {

  $(document).ready(() => {
    $("#message-input").keyup(e => {
      if (e.key === "Enter") {
        socket.send(e.target.value);
        $("#message-input").val("");
      }
    });
  });
})();
