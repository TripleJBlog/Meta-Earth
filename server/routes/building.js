const express = require("express");
const router = express.Router();
const { Building } = require("../models/Building");
const { User } = require("../models/User");

// get building
async function getBuildingInformation(req, res) {
  try {
    const doc_building_info = await Building.findOne({
      // uid: "abcd@naver.com",
      uid: "building_information",
    });
    // docs.forEach((doc) => console.log("data:", doc.name));
    console.log(doc_building_info);
    res.status(200).send(doc_building_info);
  } catch (e) {
    console.log("error:", e);
  }
}

// router.get("/", (req, res) => {
//   let query = { uid: "abcd@naver.com" };
//   const user_balance = Building.findOne(query, (error, doc) => {
//     if (error) {
//       console.log("error:", error);
//     } else {
//       const test = doc;
//       console.log(doc);
//       res.send(doc);
//     }
//   });
// });
router.get("/", getBuildingInformation);

module.exports = router;
