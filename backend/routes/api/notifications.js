const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const fakeNotifications = [
    { id: 0, message: "asldbhaydkahybsdahjabhdl" },
    { id: 1, message: "oalsdalsdhbalwduandalkjs" },
    { id: 2, message: "liaosindajh fkhjdbfhfbdw" },
    { id: 3, message: "byeiwunddoijwqoudnekfbka" },
    { id: 4, message: "fgaisldubawdpiajn;fasuda" },
  ];
  res.send(fakeNotifications);
});

module.exports = router;

// module.exports = (app) => {
//     app.get("/", (req, res) => {
//       const fakeNotifications = [
//         { id: 0, message: "asldbhaydkahybsdahjabhdl" },
//         { id: 1, message: "oalsdalsdhbalwduandalkjs" },
//         { id: 2, message: "liaosindajh fkhjdbfhfbdw" },
//         { id: 3, message: "byeiwunddoijwqoudnekfbka" },
//         { id: 4, message: "fgaisldubawdpiajn;fasuda" },
//       ];
//       res.send(fakeNotifications);
//     });
//   };
