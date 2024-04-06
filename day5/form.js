
window.addEventListener("load", function () {
  let addButton = document.querySelector("input[value=Add]");
  let nameValue = document.querySelector("input[name=studentName]");
  let gradeValue = document.querySelector("input[name=studentGrade]");
  let studentTable = this.document.createElement("table");
  studentTable.id = "tableData";
  this.document.body.append(studentTable);
  capitalFirstChar(nameValue.value);
  // ++++++++++++++++++++++++=
  addButton.onclick = function () {
    if (nameValue.value == "" || gradeValue.value == "") {
      alert("Please,try agian");
    }
    else if ((nameValue.value).length < 3||!isNaN(nameValue.value)) {
      alert("wrong name ")
    }
    else if (gradeValue.value < 0 || gradeValue.value > 100 || isNaN(gradeValue.value)) {
      alert(" the grade must be number and less than or equal 100");
    }
//++++++++++++++++++++++++++=

    else {
      let checkUndefined = preventRepeatedName(nameValue.value);
      if (checkUndefined == undefined) { }
      else {
        let trElement = document.createElement("tr");
        studentTable.append(trElement);
        let tdElement = document.createElement("td");
        tdElement.innerText = checkUndefined;
        trElement.append(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerText = gradeValue.value;
        trElement.append(tdElement);
        trElement.classList.add(document.querySelector("input[type=radio]:checked").value);

////++++++++++++++++++++++++++++++
        tdElement = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete"
        deleteButton.classList.add("icons", "btn")
        tdElement.append(deleteButton);
        trElement.append(tdElement);
        deleteButton.onclick = function () {
          this.parentElement.parentElement.remove();
        }
      }
    }

  }
})

