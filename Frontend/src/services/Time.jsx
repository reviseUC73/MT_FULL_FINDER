export const GetCurrentTime = () => {
  // Get current date
  var currentDate = new Date();
  // Convert to Thailand's local time
  currentDate.toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
  // Format the date as "yyyy-mm-dd"
  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, "0");
  var day = String(currentDate.getDate()).padStart(2, "0");
  var formattedDate = year + "-" + month + "-" + day;
  //Format the time local time
  var time =
    String(currentDate.getHours()).padStart(2, "0") +
    ":" +
    String(currentDate.getMinutes()).padStart(2, "0") +
    ":" +
    String(currentDate.getSeconds()).padStart(2, "0");

  return formattedDate + " " + time;
};
export function ConvertDateTimeFormat(inputDateTime) {
  const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d{3}Z$/;
  const match = inputDateTime.match(regex);

  if (!match) {
    throw new Error("Invalid datetime format");
  }

  const [, year, month, day, hours, minutes, seconds] = match;
  const convertedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return convertedDateTime;
}

// Example usage:
// const inputDateTime = "2023-06-29T10:04:51.000Z";
// const convertedDateTime = convertDateTimeFormat(inputDateTime);
// console.log(convertedDateTime); // Output: "2023-06-29 10:04:51"


