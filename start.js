document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();

  const input = document.getElementById("input");
  const name = input.value.trim();

  if (!name) {
    alert("이름을 입력해주세요!");
    input.focus();
    return;
  }

  localStorage.setItem("userName", name);
  window.location.href = "/avatar-01/main.html";
});
