var addBtn = document.getElementById("addList");
var deleteBtn = document.getElementById("deleteList");

var student_Name = document.getElementById("studentName");
var mathsMarks = document.getElementById("mathsMarks");
var urduMarks = document.getElementById("urduMarks");
var englishMarks = document.getElementById("englishMarks");
var scienceMarks = document.getElementById("scienceMarks");
var tableData = document.getElementById("tableData");

deleteBtn.addEventListener("click", function () {
  tableData.innerHTML = "";
  tableData.innerHTML = ` <tr>
    <th>Student Name</th>
    <th>Maths</th>
    <th>Urdu</th>
    <th>English</th>
    <th>Science</th>
    <th>Marks Obtained</th>
    <th>Total Marks</th>
    <th>Percentage</th>
    <th>Grade</th>
  </tr>
  <tr>
    
    <td id="markSheetName"></td>
    <td id="markSheetMaths"></td>
    <td id="markSheetUrdu"></td>
    <td id="markSheetEnglish"></td>
    <td id="markSheetScience"></td>
    <td id="markSheetObtainedMarks"></td>
    <td id="markSheetTotalMarks"></td>
    <td id="markSheetPercentage"></td>
    <td id="markSheetGrade"></td>
  </tr>`;
});
addBtn.addEventListener("click", function () {
  var markSheetName = document.getElementById("markSheetName");
  var markSheetMaths = document.getElementById("markSheetMaths");
  var markSheetUrdu = document.getElementById("markSheetUrdu");
  var markSheetEnglish = document.getElementById("markSheetEnglish");
  var markSheetScience = document.getElementById("markSheetScience");
  var markSheetObtainedMarks = document.getElementById(
    "markSheetObtainedMarks"
  );
  var markSheetPercentage = document.getElementById("markSheetPercentage");
  var markSheetTotalMarks = document.getElementById("markSheetTotalMarks");
  var markSheetGrade = document.getElementById("markSheetGrade");
  var markSheetTable = document.getElementById("markSheetTable");

  markSheetName.innerText = student_Name.value;
  markSheetMaths.innerText = mathsMarks.value;
  markSheetUrdu.innerText = urduMarks.value;
  markSheetEnglish.innerText = englishMarks.value;
  markSheetScience.innerText = scienceMarks.value;
  marksObtained =
    parseInt(mathsMarks.value) +
    parseInt(urduMarks.value) +
    parseInt(englishMarks.value) +
    parseInt(scienceMarks.value);
  markSheetObtainedMarks.innerText = marksObtained;
  markSheetTotalMarks.innerText = 400;
  percentage = (marksObtained / 400) * 100;
  markSheetPercentage.innerText = percentage;
  if (percentage >= 80) {
    markSheetGrade.innerText = "A+";
  } else if (percentage >= 70) {
    markSheetGrade.innerText = "A";
  } else if (percentage >= 60) {
    markSheetGrade.innerText = "B";
  } else if (percentage >= 50) {
    markSheetGrade.innerText = "C";
  } else if (percentage >= 40) {
    markSheetGrade.innerText = "D";
  } else if (percentage >= 33) {
    markSheetGrade.innerText = "E";
  } else if (percentage >= 0) {
    markSheetGrade.innerText = "F";
  }

  student_Name.value = "";
  mathsMarks.value = "";
  urduMarks.value = "";
  englishMarks.value = "";
  scienceMarks.value = "";
});
