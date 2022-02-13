var name = "";
var birthday = "";
var sex = "";
var address = "";

// thay thế HTML chứa các đoạn mã input nhập thông tin
function replaceHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}
// Tạo các mã HTML chứa thẻ input
function makeTagInput(id, value, type) {
    return "<input id=\"" + id + "\" type=\"" + type + "\" value=\"" + value + "\">";
}
// Tạo các mã HTML chứa action link
function makeActionLink(event, label) {
    return "<a href='javascript:;' onclick='" + event + "()'>" + label + "</a>";
}

function profileOnEdit() {
    var cancelLink = makeActionLink("profileOnCancel", "Huỷ");
    var updateLink = makeActionLink("profileOnUpdate", "Cập nhật");

    // thay thế HTML chứa đoạn mã các link Huỷ và Cập nhật
    document.getElementById("profileActionButtons").innerHTML = cancelLink + " " + updateLink;

    // thay thế HTML chứa các đoạn mã input nhập thông tin
    // replaceHTML("name", `<input id="nameInput" type="text" value="${name}">`); // ES6 Literal Template String
    replaceHTML("name", makeTagInput("nameInput", name, "text"));
    replaceHTML("birthday", makeTagInput("birthdayInput", birthday, "text"));
    replaceHTML("sex", makeTagInput("sexInput", sex, "text"));
    replaceHTML("address", makeTagInput("addressInput", address, "text"));
}

function profileOnUpdate() {
    // lấy giá trị đã nhập và cập nhật vào các biến toàn cục
    name = document.getElementById("nameInput").value;
    birthday = document.getElementById("birthdayInput").value;
    sex = document.getElementById("sexInput").value;
    address = document.getElementById("addressInput").value;

    // thay thế giá trị đã nhập để hiển thị ra HTML
    replaceHTML("name", name);
    replaceHTML("birthday", birthday);
    replaceHTML("sex", sex);
    replaceHTML("address", address);

    // hiển thị link Sửa
    var editLink = makeActionLink("profileOnEdit", "Sửa");
    document.getElementById("profileActionButtons").innerHTML = editLink;
}

function profileOnCancel() {
    // lấy giá trị cũ để hiển thị ra HTML
    replaceHTML("name", name);
    replaceHTML("birthday", birthday);
    replaceHTML("sex", sex);
    replaceHTML("address", address);

    // hiển thị link Sửa
    var editLink = makeActionLink("profileOnEdit", "Sửa");
    document.getElementById("profileActionButtons").innerHTML = editLink;
}


/**
 * Work Experience
 */
/*function workObject(timeWE, companyWE, positionWE) {
    this.timeWE = timeWE;
    this.companyWE = companyWE;
    this.positionWE = positionWE;
}*/

/**
 * Delete row in table
 * 
 */
function deleteWorkExperience(row) {
    // get rowIndex to delete
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("workExperience").deleteRow(i);
}

function getTableValue() {
    var workExperienceValue = new Array();
    var table = document.getElementById("workExperience");
    for (let i in table.rows) {
        if (i == 0) {
            continue;
        }
        if (isNaN(i)) {
            break;
        }
        let row = (table.rows[i]);
        var col = [];
        for (let j in row.cells) {
            if (j == 0) {
                continue;
            }
            if (isNaN(j)) {
                break;
            }
            col[j - 1] = row.cells[j].innerText;
        }
        workExperienceValue.push(col);
    }
    
    return workExperienceValue;
}


function changeWorkExperience(row) {
    var i = row.parentNode.parentNode.rowIndex;
    var workExperienceList = getTableValue();
    console.log(typeof(workExperienceList[i-1][0]));

    // replaceHTML("lineFirst", makeActionLink("cancelWorkExperience","Hủy"));
    // replaceHTML("lineSecond", makeActionLink("updateWorkExperience","Cập nhật"));

    replaceHTML("timeWorkExperience1", makeTagInput("timeW",workExperienceList[i-1][0],"text"));
    replaceHTML("companyWorkExperience1", makeTagInput("timeW", workExperienceList[i-1][1], "text"));
    replaceHTML("positionWorkExperience1", makeTagInput("timeW", workExperienceList[i-1][2], "text"));

}