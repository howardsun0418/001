var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "孫群皓",
          cover:
            "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
          address: "410730088",
          tel: "教科二B",
          opentime: "聽音樂、看電影、健身",
          title_url: "https://www.facebook.com/IlluminationBooks/",
          bgimage: ""
        },
        {
            title: "",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "410730088",
            tel: "教科二B",
            opentime: "聽音樂、看電影、健身",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "410730088",
            tel: "教科二B",
            opentime: "聽音樂、看電影、健身",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "410730088",
            tel: "教科二B",
            opentime: "聽音樂、看電影、健身",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "410730088",
            tel: "教科二B",
            opentime: "聽音樂、看電影、健身",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "410730088",
            tel: "教科二B",
            opentime: "聽音樂、看電影、健身",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          }
		],
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
            effect:'cards',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })     

        }
  });