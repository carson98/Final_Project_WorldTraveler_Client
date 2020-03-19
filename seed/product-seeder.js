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
        title: "ĐÀ NẴNG – KDL BÀ NÀ – CÀU VÀNG (Ăn sáng, chiều)",
        content:
          "Sau bữa sáng, quý khách sẽ được tự do tham quan hoàn toàn. Lữ hành Saigontourist xin phép gợi ý 2 chương trình để quý khách tham khảo. Xe đưa quý khách đến Ga cáp treo của KDL Bà Nà Hills. Lên Bà Nà bằng cáp treo, ngắm toàn cảnh núi non hùng vỹ và tận hưởng khí hậu trong lành. Dạo bước trên Cầu Vàng tọa lạc tại Vườn Thiên Thai, với thiết kế độc đáo và ấn tượng, đầy mềm mại tựa một dải lụa, được nâng đỡ bởi đôi bàn tay khổng lồ loang lổ rêu phong giữa cảnh sắc nên thơ tuyệt diệu của Bà Nà – Núi Chúa. Viếng chùa Linh Ứng, khám phá Fantasy Park - khu vui chơi giải trí trong nhà đẳng cấp quốc tế (miễn phí 105 trò chơi) và trò chơi Hiệp sĩ Thần thoại (Máng trượt). Dạo bộ giữa Khu làng Pháp một không gian kiến trúc tái hiện sinh động nước Pháp thời cận đại đầy lãng mạn, sang trọng và lịch lãm. Trải nghiệm Tàu hỏa leo núi, tham quan 9 vườn hoa, Hầm rượu cổ Debay (không bao gồm thưởng thức rượu vang) .Tự túc chi phí khám phá Khu trưng bày tượng sáp - duy nhất tại Việt Nam. Xe đưa quý khách về lại TP.Đà Nẵng.Buổi chiều tối, tự do dạo phố thưởng ngoạn cảnh đẹp Đà Nẵng. Nghỉ đêm tại Đà Nẵng."
      },
      {
        day: 3,
        img: "dong-Thien-Duong.jpg",
        title: "QUẢNG BÌNH – ĐỘNG THIÊN ĐƯỜNG – HUẾ (Ăn sáng, trưa, chiều)",
        content:
          "Buổi sáng, quý khách trả phòng. Khởi hành đi tham quan Động Thiên Đường – một trong những hang động kỳ vĩ và dài nhất thế giới với muôn trạng thạch nhũ và măng đá, mang vẻ đẹp lộng lẫy tựa một “Hoàng cung dưới lòng đất”. Buổi chiều khởi hành về Huế theo đường Hồ Chí Minh. Buổi tối, đi thuyền trên sông Hương và thưởng thức ca hò Huế. Nghỉ đêm tại Huế."
      },
      {
        day: 4,
        img: "chua-thien-mu.jpg",
        title: "HUẾ - TP. HỒ CHÍ MINH (Ăn sáng, trưa)",
        content:
          "Buổi sáng, quý khách tham quan Di sản Văn hóa Thế giới Kinh Thành Huế - Hoàng cung của 13 vị Vua triều Nguyễn với các công trình tiêu biểu: Ngọ Môn, điện Thái Hoà, Tử Cấm Thành, Thế Miếu, Hiển Lâm Các, Cửu Đỉnh, Bảo tàng Cổ vật Cung đình Huế. Chiều viếng chùa Thiên Mụ - ngôi chùa cổ và nổi tiếng nhất ở đất Cố Đô và lăng vua Khải Định – công trình được kết hợp hài hoà giữa kiến trúc truyền thống Huế và hiện đại của Tây phương. Ra sân bay Phú Bài để về TP.HCM trên  chuyến bay VN1375 lúc 17:50. Kết thúc chương trình. Quý khách tự túc phương tiện từ sân bay TSN về nhà."
      }
    ],
    reviews: [],
    orderList: [],
    productRate: 0,
    totalProfit: 0
  }),

  new Product({
    imagePath: "NhaTrang-DaLat.jpg",
    title: "Australia",
    userGroup: "international",
    price: 2500,
    depart: {
      id: "5e6e63d9e1b9d03f1c7fa282",
      name: "TP HCM"
    },
    destination: {
      id: "",
      name: "Australia"
    },
    duration: 5,
    seat: 8,
    tourGuide: "Nam",
    hotel: 6,
    description: "Exellent",
    checkLocate: false,
    schedule: [
      {
        day: 1,
        img: "Yarra-River.jpg",
        title: "TP.HCM - MELBOURNE",
        content:
          "Tham quan nhà thờ Thánh Patrick cao nhất đất nước được hoàn thành vào năm 1939, chụp hình bên ngoài Tòa nhà Nghị Viện và nhà của Thuyền Trưởng James Cook - người châu Âu đầu tiên tiếp xúc với bờ biển phía Đông nước Úc. Hít thở không khí trong lành và chiêm ngưỡng vẻ đẹp dịu dàng của những tán hoa, bãi cỏ nơi Vườn thực vật Fitzroy. Xe đưa đoàn dạo quanh chiêm ngưỡng Quảng trường Federation, trạm xe lửa trung tâm Flinders - nhà ga xe lửa hơi nước đầu tiên ở Úc và sông Yarra.  Nhận phòng khách sạn và nghỉ đêm tại Melbourne."
      },
      {
        day: 2,
        img: "Dandenong-Ranges.png",
        title: "MELBOURNE - DANDENONG RANGES - ĐẢO PHILLIP - MELBOURNE",
        content:
          "Xe đưa đoàn di chuyển đến Công viên quốc gia Dandenong Ranges quanh năm mát mẻ với diện tích rộng đến 1900 ha, nơi bảo tồn rất nhiều loài động thực vật quý hiếm. Trải nghiệm Tàu lửa hơi nước (Puffing Billy Steam Train) - đầu xe lửa xưa nhất thế giới còn sót lại, chạy giữa những hàng cây dương xỉ bản địa. Ăn trưa trong trang trại Warrook yên tĩnh, ngắm nhìn Kangaroo - chuột túi nổi tiếng ở Úc và xem màn trình diễn cắt xén lông cừu. Ghé mua sắm và tham quan xưởng sản xuất Chocolate (bên ngoài). Đến Đảo Phillip - thế giới của loài chim cánh cụt ngộ nghĩnh. Trải nghiệm đi trực thăng ngắm đảo Phillip từ trên cao, thu vào tầm mắt những bờ biển khúc khuỷu, những bãi lướt sóng ngoạn mục. Nghỉ đêm tại Melbourne."
      },
      {
        day: 3,
        img: "Australian-War-Memorial.jpg",
        title: "MELBOURNE – CANBERRA - SYDNEY",
        content:
          "Trả phòng. Xe đưa đoàn ra sân bay đáp chuyến bay sớm đi Canberra - thủ đô trong lành của xứ sở chuột túi. Chiêm ngưỡng bên ngoài Toà nhà Quốc Hội - nơi ngắm toàn cảnh thành phố Canberra từ trên đồi. Tham quan Bảo tàng chiến tranh và Xưởng đúc tiền Hoàng Gia (nếu thời gian cho phép). Quý khách di chuyển về nghỉ đêm tại Sydney."
      },
      {
        day: 4,
        img: "Captain-Cook-Cruises.jpg",
        title: "SYDNEY",
        content:
          "Tham quan Công viên Hyde Park, nhà thờ St Mary, Chiếc ghế của Bà Macquarie (Mrs. Macquarie's Chair) - nơi ghi dấu quyền thống trị của nữ hoàng Elizabeth. Ghé chụp hình bên ngoài Nhà hát Con Sò trứ danh và Cầu cảng Sydney - tuyệt tác kĩ thuật băng ngang cảng. Lên du thuyền Captain Cook đi quanh vịnh Sydney, chiêm ngưỡng cầu cảng Sydney ở góc nhìn mới. Buổi chiều, Quý khách tham quan và dạo chơi tại Cảng Darling - 'Bến cảng tình yêu' nổi tiếng dành cho các cặp tình nhân. Nghỉ đêm tại Sydney."
      },
      {
        day: 5,
        img: "Jamison-Valley.jpg",
        title: "SYDNEY - BLUE MOUNTAINS - SYDNEY",
        content:
          "Tham quan Vườn quốc gia Blue Mountains - vùng đất trước kia thuộc các bộ tộc thổ dân Úc. Đi cáp treo chiêm ngưỡng những thác nước trắng xóa nổi bật trong sắc xanh thiên nhiên hùng vĩ và ngồi xe điện xuống thung lũng Jamison khám phá hệ thực vật còn nguyên sơ tại đây. Tự do mua sắm. Nghỉ đêm ở Sydney."
      }
    ],
    reviews: [],
    orderList: [],
    productRate: 0,
    totalProfit: 0
  }),

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
        title: "ĐÀ NẴNG – KDL BÀ NÀ – CÀU VÀNG (Ăn sáng, chiều)",
        content:
          "Sau bữa sáng, quý khách sẽ được tự do tham quan hoàn toàn. Lữ hành Saigontourist xin phép gợi ý 2 chương trình để quý khách tham khảo. Xe đưa quý khách đến Ga cáp treo của KDL Bà Nà Hills. Lên Bà Nà bằng cáp treo, ngắm toàn cảnh núi non hùng vỹ và tận hưởng khí hậu trong lành. Dạo bước trên Cầu Vàng tọa lạc tại Vườn Thiên Thai, với thiết kế độc đáo và ấn tượng, đầy mềm mại tựa một dải lụa, được nâng đỡ bởi đôi bàn tay khổng lồ loang lổ rêu phong giữa cảnh sắc nên thơ tuyệt diệu của Bà Nà – Núi Chúa. Viếng chùa Linh Ứng, khám phá Fantasy Park - khu vui chơi giải trí trong nhà đẳng cấp quốc tế (miễn phí 105 trò chơi) và trò chơi Hiệp sĩ Thần thoại (Máng trượt). Dạo bộ giữa Khu làng Pháp một không gian kiến trúc tái hiện sinh động nước Pháp thời cận đại đầy lãng mạn, sang trọng và lịch lãm. Trải nghiệm Tàu hỏa leo núi, tham quan 9 vườn hoa, Hầm rượu cổ Debay (không bao gồm thưởng thức rượu vang) .Tự túc chi phí khám phá Khu trưng bày tượng sáp - duy nhất tại Việt Nam. Xe đưa quý khách về lại TP.Đà Nẵng.Buổi chiều tối, tự do dạo phố thưởng ngoạn cảnh đẹp Đà Nẵng. Nghỉ đêm tại Đà Nẵng."
      },
      {
        day: 3,
        img: "dong-Thien-Duong.jpg",
        title: "QUẢNG BÌNH – ĐỘNG THIÊN ĐƯỜNG – HUẾ (Ăn sáng, trưa, chiều)",
        content:
          "Buổi sáng, quý khách trả phòng. Khởi hành đi tham quan Động Thiên Đường – một trong những hang động kỳ vĩ và dài nhất thế giới với muôn trạng thạch nhũ và măng đá, mang vẻ đẹp lộng lẫy tựa một “Hoàng cung dưới lòng đất”. Buổi chiều khởi hành về Huế theo đường Hồ Chí Minh. Buổi tối, đi thuyền trên sông Hương và thưởng thức ca hò Huế. Nghỉ đêm tại Huế."
      },
      {
        day: 4,
        img: "chua-thien-mu.jpg",
        title: "HUẾ - TP. HỒ CHÍ MINH (Ăn sáng, trưa)",
        content:
          "Buổi sáng, quý khách tham quan Di sản Văn hóa Thế giới Kinh Thành Huế - Hoàng cung của 13 vị Vua triều Nguyễn với các công trình tiêu biểu: Ngọ Môn, điện Thái Hoà, Tử Cấm Thành, Thế Miếu, Hiển Lâm Các, Cửu Đỉnh, Bảo tàng Cổ vật Cung đình Huế. Chiều viếng chùa Thiên Mụ - ngôi chùa cổ và nổi tiếng nhất ở đất Cố Đô và lăng vua Khải Định – công trình được kết hợp hài hoà giữa kiến trúc truyền thống Huế và hiện đại của Tây phương. Ra sân bay Phú Bài để về TP.HCM trên  chuyến bay VN1375 lúc 17:50. Kết thúc chương trình. Quý khách tự túc phương tiện từ sân bay TSN về nhà."
      }
    ],
    reviews: [],
    orderList: [],
    productRate: 0,
    totalProfit: 0
  }),
  
  new Product({
    imagePath: "NhaTrang-DaLat.jpg",
    title: "Australia",
    userGroup: "international",
    price: 2500,
    depart: {
      id: "5e6e63d9e1b9d03f1c7fa282",
      name: "TP HCM"
    },
    destination: {
      id: "",
      name: "Australia"
    },
    duration: 5,
    seat: 8,
    tourGuide: "Nam",
    hotel: 6,
    description: "Exellent",
    checkLocate: false,
    schedule: [
      {
        day: 1,
        img: "Yarra-River.jpg",
        title: "TP.HCM - MELBOURNE",
        content:
          "Tham quan nhà thờ Thánh Patrick cao nhất đất nước được hoàn thành vào năm 1939, chụp hình bên ngoài Tòa nhà Nghị Viện và nhà của Thuyền Trưởng James Cook - người châu Âu đầu tiên tiếp xúc với bờ biển phía Đông nước Úc. Hít thở không khí trong lành và chiêm ngưỡng vẻ đẹp dịu dàng của những tán hoa, bãi cỏ nơi Vườn thực vật Fitzroy. Xe đưa đoàn dạo quanh chiêm ngưỡng Quảng trường Federation, trạm xe lửa trung tâm Flinders - nhà ga xe lửa hơi nước đầu tiên ở Úc và sông Yarra.  Nhận phòng khách sạn và nghỉ đêm tại Melbourne."
      },
      {
        day: 2,
        img: "Dandenong-Ranges.png",
        title: "MELBOURNE - DANDENONG RANGES - ĐẢO PHILLIP - MELBOURNE",
        content:
          "Xe đưa đoàn di chuyển đến Công viên quốc gia Dandenong Ranges quanh năm mát mẻ với diện tích rộng đến 1900 ha, nơi bảo tồn rất nhiều loài động thực vật quý hiếm. Trải nghiệm Tàu lửa hơi nước (Puffing Billy Steam Train) - đầu xe lửa xưa nhất thế giới còn sót lại, chạy giữa những hàng cây dương xỉ bản địa. Ăn trưa trong trang trại Warrook yên tĩnh, ngắm nhìn Kangaroo - chuột túi nổi tiếng ở Úc và xem màn trình diễn cắt xén lông cừu. Ghé mua sắm và tham quan xưởng sản xuất Chocolate (bên ngoài). Đến Đảo Phillip - thế giới của loài chim cánh cụt ngộ nghĩnh. Trải nghiệm đi trực thăng ngắm đảo Phillip từ trên cao, thu vào tầm mắt những bờ biển khúc khuỷu, những bãi lướt sóng ngoạn mục. Nghỉ đêm tại Melbourne."
      },
      {
        day: 3,
        img: "Australian-War-Memorial.jpg",
        title: "MELBOURNE – CANBERRA - SYDNEY",
        content:
          "Trả phòng. Xe đưa đoàn ra sân bay đáp chuyến bay sớm đi Canberra - thủ đô trong lành của xứ sở chuột túi. Chiêm ngưỡng bên ngoài Toà nhà Quốc Hội - nơi ngắm toàn cảnh thành phố Canberra từ trên đồi. Tham quan Bảo tàng chiến tranh và Xưởng đúc tiền Hoàng Gia (nếu thời gian cho phép). Quý khách di chuyển về nghỉ đêm tại Sydney."
      },
      {
        day: 4,
        img: "Captain-Cook-Cruises.jpg",
        title: "SYDNEY",
        content:
          "Tham quan Công viên Hyde Park, nhà thờ St Mary, Chiếc ghế của Bà Macquarie (Mrs. Macquarie's Chair) - nơi ghi dấu quyền thống trị của nữ hoàng Elizabeth. Ghé chụp hình bên ngoài Nhà hát Con Sò trứ danh và Cầu cảng Sydney - tuyệt tác kĩ thuật băng ngang cảng. Lên du thuyền Captain Cook đi quanh vịnh Sydney, chiêm ngưỡng cầu cảng Sydney ở góc nhìn mới. Buổi chiều, Quý khách tham quan và dạo chơi tại Cảng Darling - 'Bến cảng tình yêu' nổi tiếng dành cho các cặp tình nhân. Nghỉ đêm tại Sydney."
      },
      {
        day: 5,
        img: "Jamison-Valley.jpg",
        title: "SYDNEY - BLUE MOUNTAINS - SYDNEY",
        content:
          "Tham quan Vườn quốc gia Blue Mountains - vùng đất trước kia thuộc các bộ tộc thổ dân Úc. Đi cáp treo chiêm ngưỡng những thác nước trắng xóa nổi bật trong sắc xanh thiên nhiên hùng vĩ và ngồi xe điện xuống thung lũng Jamison khám phá hệ thực vật còn nguyên sơ tại đây. Tự do mua sắm. Nghỉ đêm ở Sydney."
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
