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
