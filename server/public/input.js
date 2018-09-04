(() => {
  const addMessage = (text, fromMe) => {
    const message = document.createElement("div");
    $(message)
      .text(text)
      .addClass("message")
      .addClass(fromMe ? "me" : "other");
    $("#message-list").prepend(message);
  };

  $(document).ready(() => {
    $("#message-input").keyup(e => {
      if (e.key === "Enter") {
        addMessage(e.target.value, true);
        $("#message-input").val("");
      }
    });
  });
})();
