html2canvas(element).then(function (canvas) {
  // <a> 요소를 만들고, 이미지 데이터를 변환해서 주소로 지정한다
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "avatar.png";
  // <a> 태그를 자바스크립트로 클릭한다
  link.click();
});
