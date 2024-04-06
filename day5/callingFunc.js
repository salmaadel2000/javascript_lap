
function capitalFirstChar(capName) {
    return capName.charAt(0).toUpperCase() + capName.slice(1);
  }
  // ++++++++++++++++++++
function preventRepeatedName(repeatedName) {
  let newName = capitalFirstChar(repeatedName)
  let tableId = document.getElementById("tableData");
  let tableRows = tableId.rows;
  let checkRepeated = '';
  let i;
  if (tableRows.length == 0) { return newName }
  else {
    console.log(tableRows.length)
    for (i = 0; i < tableRows.length; i++) {
      checkRepeated = tableRows[i].getElementsByTagName("td")[0];
      if (newName == (checkRepeated.innerText)) {
        alert("Name Is Exist Before");
        newName = undefined;
        break;
      }
    }
  }
  return newName;
}

