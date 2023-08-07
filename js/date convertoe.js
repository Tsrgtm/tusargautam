const adDateInput = document.getElementById("adDate");
const bsDateInput = document.getElementById("bsDate");
const bsResult = document.getElementById("bsResult");
const adResult = document.getElementById("adResult");

function convertToBS() {
  const adDate = adDateInput.value;
  if (adDate) {
    const convertedDate = NepaliDateConverter.convertFromAD(adDate);
    bsResult.textContent = `BS Date: ${convertedDate.year}-${convertedDate.month}-${convertedDate.day}`;
  } else {
    bsResult.textContent = "Please enter a valid AD date.";
  }
}

function convertToAD() {
  const bsDate = bsDateInput.value;
  if (bsDate) {
    const dateParts = bsDate.split("-");
    const bsYear = parseInt(dateParts[0]);
    const bsMonth = parseInt(dateParts[1]);
    const bsDay = parseInt(dateParts[2]);

    const convertedDate = NepaliDateConverter.convertToAD(
      bsYear,
      bsMonth,
      bsDay
    );
    adResult.textContent = `AD Date: ${convertedDate.year}-${convertedDate.month}-${convertedDate.day}`;
  } else {
    adResult.textContent = "Please enter a valid BS date.";
  }
}
