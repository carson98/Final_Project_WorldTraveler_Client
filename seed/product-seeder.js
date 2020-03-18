var Product = require("../models/product");
var mongoose = require("mongoose");
const mongo = mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true
});
mongo
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });
var products = [
  new Product({
    imagePath: "NhaTrang-DaLat.jpg",
    title: "Huế",
    userGroup: "domestic",
    price: 500,
    depart: {
      id: "5e6e63d9e1b9d03f1c7fa282",
      name: "TP HCM"
    },
    destination: {
      id: "5e691551d7a96940c425b470",
      name: "Huế"
    },
    duration: 4,
    seat: 5,
    tourGuide: "Dũng",
    hotel: 4,
    description: "Exellent",
    checkLocate: true,
    schedule: [
      {
        day: 1,
        img: "hoi-an.jpg",
        title:
          "TP. HỒ CHÍ MINH – ĐÀ NẴNG – HỘI AN – TẶNG VÉ XEM SHOW KÝ ỨC HỘI AN (Ăn trưa, chiều)",
        content:
          "Buổi sáng, quý khách tập trung tại Cổng D1, Ga đi trong nước, sân bay Tân Sơn Nhất. HDV Saigontourist đón quý khách, hỗ trợ làm thủ tục. Khởi hành ra Đà Nẵng trên chuyến bay VN110 lúc 6:00. Đến Đà Nẵng, đoàn tham quan bán đảo Sơn Trà, ngắm cảng Tiên Sa, viếng chùa Linh Ứng Bãi Bụt – ngôi chùa lớn nhất ở thành phố Đà Nẵng, chiêm bái tượng Phật Quan Thế Âm cao nhất Việt Nam, thắng cảnh Ngũ Hành Sơn và làng nghề điêu khắc đá Hoà Hải. Buổi chiều, cả đoàn cùng tham quan Phố cổ Hội An với các công trình tiêu biểu: Chùa Cầu Nhật Bản, chùa Ông, hội quán Phúc Kiến, phố đèn lồng. Công Viên Ấn tượng Hội An – Tái hiện Hội An của quá khứ, một cảng thị quốc tế sầm uất với sự hiện diện của các nền văn hóa Á, Âu với rất nhiều mini shows tương tác như Trại Hò Đả Hổ, Bà Chúa Tằm Tang, Phụng Nguyệt Tửu Lầu, Đám cưới của Ngọc Hoa Công Chúa; tìm hiểu nghề nuôi tằm ươm tơ, trải nghiệm quay tơ dệt lụa bằng khung cửi truyền thống, làm bánh đậu xanh Hội An, thưởng thức trà đạo phong cách Nhật Bản …. Đặc biệt xem Show “Ký Ức Hội An” - vở diễn thực cảnh ngoài trời với số lượng diễn viên đạt kỷ lục Việt Nam, tái hiện nhịp nhàng sinh động miền ký ức Faifo đa văn hóa: Champa, Bồ Đào Nha, Nhật, Trung… chứng kiến cuộc sống thôn quê bình dị bên dòng sông Hoài, khoảnh khắc hùng tráng trong lịch sử, nét hoàng kim của cảng thị một thời hay phố Hội nhộn nhịp của hiện tại... Sau khi xem show đoàn quay về & nghỉ đêm tại Đà Nẵng."
      },
      {
        day: 2,
        img: "ba-na.png",
        title:
          "ĐÀ NẴNG – KDL BÀ NÀ – CÀU VÀNG (Ăn sáng, chiều)",
        content: "Sau bữa sáng, quý khách sẽ được tự do tham quan hoàn toàn. Lữ hành Saigontourist xin phép gợi ý 2 chương trình để quý khách tham khảo. Xe đưa quý khách đến Ga cáp treo của KDL Bà Nà Hills. Lên Bà Nà bằng cáp treo, ngắm toàn cảnh núi non hùng vỹ và tận hưởng khí hậu trong lành. Dạo bước trên Cầu Vàng tọa lạc tại Vườn Thiên Thai, với thiết kế độc đáo và ấn tượng, đầy mềm mại tựa một dải lụa, được nâng đỡ bởi đôi bàn tay khổng lồ loang lổ rêu phong giữa cảnh sắc nên thơ tuyệt diệu của Bà Nà – Núi Chúa. Viếng chùa Linh Ứng, khám phá Fantasy Park - khu vui chơi giải trí trong nhà đẳng cấp quốc tế (miễn phí 105 trò chơi) và trò chơi Hiệp sĩ Thần thoại (Máng trượt). Dạo bộ giữa Khu làng Pháp một không gian kiến trúc tái hiện sinh động nước Pháp thời cận đại đầy lãng mạn, sang trọng và lịch lãm. Trải nghiệm Tàu hỏa leo núi, tham quan 9 vườn hoa, Hầm rượu cổ Debay (không bao gồm thưởng thức rượu vang) .Tự túc chi phí khám phá Khu trưng bày tượng sáp - duy nhất tại Việt Nam. Xe đưa quý khách về lại TP.Đà Nẵng.Buổi chiều tối, tự do dạo phố thưởng ngoạn cảnh đẹp Đà Nẵng. Nghỉ đêm tại Đà Nẵng."
      },
      {
        day: 3,
        img: "dong-Thien-Duong.jpg",
        title:
          "QUẢNG BÌNH – ĐỘNG THIÊN ĐƯỜNG – HUẾ (Ăn sáng, trưa, chiều)",
        content: "Buổi sáng, quý khách trả phòng. Khởi hành đi tham quan Động Thiên Đường – một trong những hang động kỳ vĩ và dài nhất thế giới với muôn trạng thạch nhũ và măng đá, mang vẻ đẹp lộng lẫy tựa một “Hoàng cung dưới lòng đất”. Buổi chiều khởi hành về Huế theo đường Hồ Chí Minh. Buổi tối, đi thuyền trên sông Hương và thưởng thức ca hò Huế. Nghỉ đêm tại Huế."
      },
      {
        day: 4,
        img: "chua-thien-mu.jpg",
        title:
          "HUẾ - TP. HỒ CHÍ MINH (Ăn sáng, trưa)",
        content: "Buổi sáng, quý khách tham quan Di sản Văn hóa Thế giới Kinh Thành Huế - Hoàng cung của 13 vị Vua triều Nguyễn với các công trình tiêu biểu: Ngọ Môn, điện Thái Hoà, Tử Cấm Thành, Thế Miếu, Hiển Lâm Các, Cửu Đỉnh, Bảo tàng Cổ vật Cung đình Huế. Chiều viếng chùa Thiên Mụ - ngôi chùa cổ và nổi tiếng nhất ở đất Cố Đô và lăng vua Khải Định – công trình được kết hợp hài hoà giữa kiến trúc truyền thống Huế và hiện đại của Tây phương. Ra sân bay Phú Bài để về TP.HCM trên  chuyến bay VN1375 lúc 17:50. Kết thúc chương trình. Quý khách tự túc phương tiện từ sân bay TSN về nhà."
      }
    ],
    reviews: [],
    orderList: [],
    productRate: 0,
    totalProfit: 0
  })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done == products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
