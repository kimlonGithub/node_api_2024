// import fs from "fs";
import fs from "fs/promises";

// readFile() - callback
// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf8");
    l
  } catch (error) {
    console.log(error);
  }
};
readFile();

