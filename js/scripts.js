var courseInfo = [
  {
    id: "courseInfo-detail1",
    title: "Thông tin khai giảng",
    details: [
      {
        id: "courseInfo-detail1-content1",
        title: "Nội dung khai giảng",
        html: document.getElementById("courseInfo-detail1-content1").innerHTML,
      },
    ]
  },
  {
    id: "courseInfo-detail2",
    title: "Thông tin Seminar",
    details: [
      {
        id: "courseInfo-detail2-content1",
        title: "Seminar hôm nay",
        html: document.getElementById("courseInfo-detail2-content1").innerHTML,
      },
      {
        id: "courseInfo-detail2-content2",
        title: "Nội dung seminar hôm nay",
        html: document.getElementById("courseInfo-detail2-content2").innerHTML,
      },
      {
        id: "courseInfo-detail2-content3",
        title: "Ảnh seminar hôm nay",
        html: document.getElementById("courseInfo-detail2-content3").innerHTML,
      }
    ]
  },
  {
    id: "courseInfo-detail3",
    title: "Thông tin công ty quan tâm",
    details: [
      {
        id: "courseInfo-detail3-content1",
        title: "Công ty quan tâm",     
        html: document.getElementById("courseInfo-detail3-content1").innerHTML,
      },
      {
        id: "courseInfo-detail3-content2",
        title: "Nội dung công ty quan tâm",   
        html: document.getElementById("courseInfo-detail3-content2").innerHTML,
      },
      {
        id: "courseInfo-detail3-content3",
        title: "Ảnh công ty quan tâm",   
        html: document.getElementById("courseInfo-detail3-content3").innerHTML,
      }
    ]
  }
];

var info = [
  {
    "id": "info-detail1",
    "title": "Mô tả tóm tắt học phần (tiếng Việt) (*)",
    "details": [
      {
        "id": "info-detail1-content1",
        "title": "Nội dung mô tả tóm tắt học phần (tiếng Việt) (*)",
        html: document.getElementById("info-detail1-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail2",
    "title": "Mô tả tóm tắt học phần (tiếng Anh) (*)",
    "details": [
      {
        "id": "info-detail2-content1",
        "title": "Nội dung mô tả tóm tắt học phần (tiếng Anh) (*)",
        html: document.getElementById("info-detail2-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail3",
    "title": "Nội dung tóm tắt học phần (tiếng Việt) (*)",
    "details": [
      {
        "id": "info-detail3-content1",
        "title": "Nội dung nội dung tóm tắt học phần (tiếng Việt) (*)",
        html: document.getElementById("info-detail3-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail4",
    "title": "Nội dung tóm tắt học phần (tiếng Anh) (*)",
    "details": [
      {
        "id": "info-detail4-content1",
        "title": "Nội dung nội dung tóm tắt học phần (tiếng Anh) (*)",
        html: document.getElementById("info-detail4-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail5",
    "title": "Sách tham khảo",
    "details": [
      {
        "id": "info-detail5-content1",
        "title": "Nội dung sách tham khảo",
        html: document.getElementById("info-detail5-content1").innerHTML
      },
      {
        "id": "info-detail5-content2",
        "title": "Ảnh minh họa sách tham khảo",
        html: document.getElementById("info-detail5-content2").innerHTML
      }
    ]
  }
];

var webTech = [
  {
    "id": "webTech-detail1",
    "title": "1. Frontend (Giao diện người dùng)",
    "details": [
      {
        "id": "webTech-detail1-content1",
        "title": "Nội dung Frontend (Giao diện người dùng)",
        html: document.getElementById("webTech-detail1-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail2",
    "title": "2. Backend (Máy chủ và xử lý dữ liệu)",
    "details": [
      {
        "id": "webTech-detail2-content1",
        "title": "Nội dung Backend (Máy chủ và xử lý dữ liệu)",
        html: document.getElementById("webTech-detail2-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail3",
    "title": "3. Cơ sở dữ liệu",
    "details": [
      {
        "id": "webTech-detail3-content1",
        "title": "Nội dung cơ sở dữ liệu",
        html: document.getElementById("webTech-detail3-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail4",
    "title": "4. API và Tích hợp dịch vụ",
    "details": [
      {
        "id": "webTech-detail4-content1",
        "title": "Nội dung API và tích hợp dịch vụ",
        html: document.getElementById("webTech-detail4-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail5",
    "title": "5. DevOps và Triển khai",
    "details": [
      {
        "id": "webTech-detail5-content1",
        "title": "Nội dung DevOps và triển khai",
        html: document.getElementById("webTech-detail5-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail6",
    "title": "6. Bảo mật",
    "details": [
      {
        "id": "webTech-detail6-content1",
        "title": "Nội dung bảo mật",
        html: document.getElementById("webTech-detail6-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail7",
    "title": "7. Testing và Debugging",
    "details": [
      {
        "id": "webTech-detail7-content1",
        "title": "Nội dung Testing và Debugging",
        html: document.getElementById("webTech-detail7-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail8",
    "title": "8. Performance Optimization",
    "details": [
      {
        "id": "webTech-detail8-content1",
        "title": "Nội dung Performance Optimization",
        html: document.getElementById("webTech-detail8-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail9",
    "title": "9. User Authentication & Authorization",
    "details": [
      {
        "id": "webTech-detail9-content1",
        "title": "Nội dung User Authentication & Authorization",
        html: document.getElementById("webTech-detail9-content1").innerHTML
      },
      {
        "id": "webTech-detail9-content2",
        "title": "Ảnh quảng cáo",
        html: document.getElementById("webTech-detail9-content2").innerHTML
      }
    ]
  }
];

var studentInfo = [
  {
    "id": "studentInfo-detail1",
    "title": "Thông tin cá nhân",
    "details": [
      {
        "id": "studentInfo-detail1-content1",
        "title": "Ảnh thông tin cá nhân",
        html: document.getElementById("studentInfo-detail1-content1").innerHTML
      },
      {
        "id": "studentInfo-detail1-content2",
        "title": "Nội dung thông tin cá nhân",
        html: document.getElementById("studentInfo-detail1-content2").innerHTML
      }
    ]
  },
  {
    "id": "studentInfo-detail2",
    "title": "Kĩ năng",
    "details": [
      {
        "id": "studentInfo-detail2-content1",
        "title": "Nội dung kĩ năng",
        html: document.getElementById("studentInfo-detail2-content1").innerHTML
      }
    ]
  },
  {
    "id": "studentInfo-detail3",
    "title": "Dự án",
    "details": [
      {
        "id": "studentInfo-detail3-content1",
        "title": "Nội dung dự án",
        html: document.getElementById("studentInfo-detail3-content1").innerHTML
      }
    ]
  },
  {
    "id": "studentInfo-detail4",
    "title": "Sở thích",
    "details": [
      {
        "id": "studentInfo-detail4-content1",
        "title": "Nội dung sở thích",
        html: document.getElementById("studentInfo-detail4-content1").innerHTML
      }
    ]
  }
]

var myWiki = [
  {
    "id": "myWiki-detail1",
    "title": "Wikipedia Search",
  }, 
  {
    "id": "myWiki-detail2",
    "title": "Wikipedia Nearby Search",
  },
  {
    "id": "myWiki-detail3",
    "title": "Wikipedia Map Search",
  }
]

var menu = [
  {
    id: "menu1",
    title: "Trang chủ",
    details: courseInfo,
  },
  {
    id: "menu2",
    title: "Thông tin môn học",
    details: info,
  },
  {
    id: "menu3",
    title: "Các công nghệ Web",
    details: webTech,
  },
  {
    id: "menu4",
    title: "Thông tin sinh viên",
    details: studentInfo,
  },
  {
    id: "menu5",
    title: "Admin page",
    details: [],
  },
  {
    id: "menu6",
    title: "My wiki",
    details: myWiki,
  }
]

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

var map;

const buttons = document.querySelectorAll('.w3-bar-item');
buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add('active');
  });
});

// Tạo một thẻ <style> và thêm vào <head>
let style = document.createElement('style');
document.head.appendChild(style);

// Thêm một quy tắc media query
style.sheet.insertRule(`
    @media (max-width: 992px) {
      #courseInfo-detail2-content2 {
        grid-column: 1 / -1 !important;
        margin: 0 !important;
      }

      #courseInfo-detail2-content3 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #courseInfo-detail3-content2 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #courseInfo-detail3-content3 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #info-detail5-content1 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #info-detail5-content2 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #webTech-detail9-content1 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #webTech-detail9-content2 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #studentInfo-detail1-content1 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }

      #studentInfo-detail1-content2 {
          grid-column: 1 / -1 !important;
          margin: 0 !important;
      }
    }
`, style.sheet.cssRules.length);

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
// Function to show content and update button style
function showContent(sectionId) {
  try {
    document.querySelector(".ck-editor").classList.add('hidden')
    document.getElementById("admin-menu").classList.remove('hidden')
    document.getElementById("preview").innerHTML = ``
  } catch (error) {
    document.getElementById("menu5").innerHTML = `
      <div class="container">
        <!--content-->
        <div id="admin-page">
          <h3 id="admin-page-title" class="admin-page-header"></h3>
          <div class="sectionId flex-col">
            <div id="editor" class="hidden"></div>
            <table class="table-info" id="admin-menu"></table>
            <div id="preview"></div>
          </div>
        </div>
      </div>`
  }
  
  // Hide all sections
  const sections = document.querySelectorAll('.w3-container');
  sections.forEach(section => section.classList.add('hidden'));

  // Remove active class from all buttons
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  try {
    const section = document.getElementById(sectionId)
  
    // Show selected section
    section.classList.remove('hidden')

    if(sectionId == "menu6") {
      section.innerHTML = 
        `<div class="container">
          <!--content-->
          <div id="myWiki-detail1">
            <div id="my-wiki-title" class="my-wiki-header">
              <img
                class="img-size"
                src="assets/wikipedia-logo.png"
                alt="wikipedia"
              />
              <h1>Wikipedia Search</h1>
              <input
                class="full-width"
                type="text"
                name="searchTerm"
                id="searchTerm"
                placeholder="Enter a search term..."
                oninput="search(this.value)"
              />
            </div>
            <div id="searchResult" class="sectionId flex-col"></div>
          </div>

          <div id="myWiki-detail2" class="hidden">
            <div id="my-wiki-title" class="my-wiki-header">
              <h1>Wikipedia Nearby Search</h1>
              <button id="getLocation" onclick="getLocation()">Find Nearby Wiki Pages</button>
            </div>
            <div id="searchNearbyResult" class="sectionId flex-col"></div>
          </div>

          <div id="myWiki-detail3" class="hidden">
            <div id="my-wiki-title" class="my-wiki-header">
              <h1>Wikipedia Map Search</h1>
              <div class="search-map-container">
                <input type="text" id="locationInput" placeholder="Enter a location..." />
                <button id="searchButton" onclick="searchButtonClick()">Search</button>
              </div>
            </div>
            <div id="map"></div>
          </div>
        </div>
        `
      map =  L.map('map').setView([20.5937, 78.9629], 5); // Đặt vị trí khởi đầu (India)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);
    }
    else if(sectionId !== "menu5"){
      section.innerHTML = converToSectionHTML(sectionId)
    }
    
  } catch (error) {
    let newMenu = document.createElement("div")
    newMenu.id = sectionId
    newMenu.className = "w3-container w3-padding-64 hidden"
    newMenu.classList.remove('hidden')
    newMenu.innerHTML = converToSectionHTML(sectionId)
    document.getElementById("content-container").innerHTML += newMenu.outerHTML
  }
  
  loadMenu();
  loadSidebar(sectionId);

}

window.onload = function () {
  showContent('menu1');
};

function extractCssContent(cssRule) {
  // Sử dụng biểu thức chính quy để tìm nội dung trong ngoặc {}
  const regex = /{([^}]*)}/; // Tìm và nhóm nội dung trong ngoặc nhọn
  const match = cssRule.match(regex); // Tìm match với regex
  if (match && match[1]) {
      return match[1].trim(); // Trả về nội dung trong ngoặc, loại bỏ khoảng trắng
  } else {
      return null; // Không tìm thấy nội dung
  }
}

function extractMediaCondition(mediaQuery) {
  // Sử dụng biểu thức chính quy để tìm điều kiện trong @media
  const regex = /@media\s*(.*?)\s*{/; // Tìm và nhóm điều kiện giữa @media và {
  const match = mediaQuery.match(regex); // Tìm match với regex

  if (match && match[1]) {
      return match[1].trim(); // Trả về điều kiện, loại bỏ khoảng trắng
  } else {
      return null; // Không tìm thấy điều kiện
  }
}

function loadMenuTable(arr, func, id){
  if(arr.length === 0) {
    let itemId = id
    if(id.includes("-detail")){
      itemId += "-content1"
    } else {
      itemId += "-detail1"
    }
    return `
    <tr>
      <th class="width-80">
        <div class="name-input-div">
          <div class="flex space-between">
            Tên: 
            <div class="flex">
            <i class="fa-xl fa-solid fa-check" onclick="saveAdd('0', '${itemId}')"></i>
            </div>
          </div>
          <textarea rows="2" class="name-input full-width" id="input-0"> </textarea>
        </div>
      </th>
    </tr>        
  `;
  }

  let html = ``;
  for(item of arr) {
        
    let layoutText = ""
    if(item.id.includes("-content")){
      console.log(document.getElementById(item.id))
      let layoutDiv = document.getElementById(item.id).cloneNode(false)
      layoutText = layoutDiv.style.cssText
    }

    html += `<tr>
              <th class="width-80" id="${item.id}-menu-name">
                <span class="name">${item.title}</span>
                <div class="name-input-div hidden">
                  <div class="flex space-between">
                    Tên: 
                    <div class="flex">
                      <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditName('${item.id}')"></i>
                      <i class="fa-xl fa-solid fa-check" onclick="saveEditName('${item.id}')"></i>
                    </div>
                  </div>
                  <textarea rows="2" class="name-input full-width">${item.title}</textarea>
                </div> 
                <div class="layout-input-div hidden">
                  <div class="flex space-between">
                    Layout:
                    <div class="flex">
                      <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditLayout('${item.id}')"></i>
                      <i class="fa-xl fa-solid fa-check" onclick="saveEditLayout('${item.id}')"></i>
                    </div>
                  </div>
                  <textarea rows="4" class="layout-input full-width">${layoutText}</textarea>
                </div>
                <div class="media-input-div hidden">
                  <div class="flex space-between">
                    Media queries:
                    <div class="flex">
                      <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditMedia('${item.id}')"></i>
                      <i class="fa-xl fa-solid fa-check" onclick="saveEditMedia('${item.id}')"></i>
                      <i class="fa-xl fa-solid fa-plus" onclick="addEditMedia('${item.id}')"></i>
                    </div>
                  </div>
                  <table id="${item.id}-media-list">
                    <tbody>
                      `+ loadMediaList(item.id) +`
                    </tbody>
                  </table>
                </div>
              </th>
              <td class="flex flex-wrap space-between">
                <img onclick="${func}('${item.id}')" src="assets/eye-open.svg" />
                <i class="fa-xl fa-solid fa-pencil" onclick="editMenu('${item.id}')"></i>
                <i class="fa-xl fa-solid fa-xmark" onclick="deleteMenu('${item.id}')"></i>
                <i class="fa-xl fa-solid fa-plus" onclick="addNewMenu('${item.id}')"></i>
              </td>
            </tr>
            `;
  }
  return html;
}

function loadAdminMenuTop() {
  let newMenu =  menu.filter(item => item.id !== "menu1" && item.id !== "menu5");

  html = `<tr>
            <th id="menu1-menu-name">
              <span class="name">Trang chủ</span>
            </th>
            <td class="flex flex-wrap space-between">
              <img onclick="loadAdminMenuLeft('menu1')" src="assets/eye-open.svg" />
              <i class="fa-xl fa-solid fa-plus" onclick="addNewMenu('menu1')"></i>
            </td>
          </tr>
          `;

  html += loadMenuTable(newMenu, "loadAdminMenuLeft", "menu")

  document.getElementById("admin-page-title").innerHTML = `Admin menu top: "Chỉnh sửa menu top"`
  document.getElementById("admin-menu").innerHTML = html
}

function getContentBeforeDash(input) {
  const parts = input.split("-");
  return parts[0];
}

function getArr(id){
  if(id === "menu") return menu
  id = getContentBeforeDash(id)
  id = convertSectionId(id)
  return (menu.find(item => item.id === id)).details
}

function convertSectionId(sectionId){
  switch (sectionId) {
    case 'menu':
      return menu;
    case 'menu1':
    case 'courseInfo':
      return 'menu1';
    case 'menu2':
    case 'info':
      return 'menu2';
    case 'menu3':
    case 'webTech':
      return 'menu3';
    case 'menu4':
    case 'studentInfo':
      return 'menu4';
    case 'menu6':
    case 'myWiki':
      return 'menu6';
    default:
      return sectionId;
  }
}

function findSectionId(key) {  
  if(key.includes("detail") && key.includes("menu")) return key
  const chars = key.split('');
  const letters = chars.filter(char => isNaN(char)).join('');
  return letters;
}

function resetStudentInfo(){
  let newStudentInfo = [
    {
      "id": "studentInfo-detail1",
      "title": "Curriculum vitea (CV)",
      "details": [
        {
          "id": "studentInfo-detail1-content1",
          "title": "Ảnh thông tin cá nhân",
          html: `<img
                  width="100%"
                  src="./assets/ava.jpg"
                  alt="Student Photo"
                  class="profile-photo"
                />
                `
        },
        {
          "id": "studentInfo-detail1-content2",
          "title": "Nội dung thông tin cá nhân",
          html: `
                <div class="details">
                  <span>Họ và tên:</span> Nguyễn Ngọc Anh Thư
                </div>
                <div class="details"><span>Năm vào trường:</span> 2021</div>
                <div class="details">
                  <span>Bậc đào tạo:</span> KSCLC-TN-TT-VNVP-ICT
                </div>
                <div class="details">
                  <span>Chương trình:</span> Công nghệ thông tin Việt-Nhật 2021
                </div>
                <div class="details"><span>MSSV:</span> 20215143</div>
                <div class="details"><span>Giới tính:</span> Nữ</div>
                <div class="details"><span>Lớp:</span> Việt-Nhật 01-K66</div>
                <div class="details"><span>Khóa học:</span> 66</div>
                <div class="details">
                  <span>Email:</span>
                  <p>thu.nna215143@sis.hust.edu.vn</p>
                </div>
                `
        }
      ]
    },
    {
      "id": "studentInfo-detail2",
      "title": "Các dự án đã tham gia",
      "details": [
        {
          "id": "studentInfo-detail2-content1",
          "title": "Nội dung các dự án đã tham gia",
          html: `
                    
                  <table class="table-info">
                    <tr>
                      <th>Nền tảng Học Trực Tuyến "EduA"</th>
                      <td>
                        Mô tả: EduA là một nền tảng học trực tuyến dành cho sinh
                        viên, cho phép người dùng tham gia các khóa học từ xa. Dự án
                        bao gồm việc phát triển giao diện người dùng thân thiện,
                        tích hợp tính năng video trực tuyến và quản lý khóa học.
                        <br />Công nghệ sử dụng: HTML, CSS, JavaScript, React cho
                        frontend; Node.js và MongoDB cho backend. <br />Vai trò:
                        Thiết kế giao diện người dùng và phát triển các tính năng
                        chính của nền tảng.
                      </td>
                    </tr>
                    <tr>
                      <th>Website Thương Mại Điện Tử "ShopB"</th>
                      <td>
                        Mô tả: ShopB là một trang web thương mại điện tử cho phép
                        người dùng mua sắm trực tuyến. Dự án bao gồm việc phát triển
                        các trang sản phẩm, giỏ hàng và thanh toán trực tuyến.
                        <br />Công nghệ sử dụng: Bootstrap cho thiết kế responsive,
                        PHP và MySQL cho backend, cùng với API thanh toán. <br />Vai
                        trò: Xây dựng hệ thống quản lý sản phẩm và giỏ hàng, cũng
                        như tích hợp tính năng thanh toán.
                      </td>
                    </tr>
                    <tr>
                      <th>Blog Cá Nhân "TechC"</th>
                      <td>
                        Mô tả: TechC là một blog cá nhân nơi người viết chia sẻ các
                        bài viết về công nghệ, thủ thuật lập trình và đánh giá sản
                        phẩm. Dự án bao gồm việc phát triển chức năng viết và quản
                        lý bài viết, cũng như hệ thống bình luận. <br />Công nghệ sử
                        dụng: WordPress cho hệ thống quản lý nội dung, CSS cho thiết
                        kế và jQuery cho các tính năng tương tác. <br />Vai trò:
                        Thiết kế giao diện blog, phát triển các chức năng bình luận
                        và tối ưu hóa SEO cho các bài viết.
                      </td>
                    </tr>
                  </table>
                     
                  `
        }
      ]
    },
    {
      "id": "studentInfo-detail3",
      "title": "Sinh hoạt cộng đồng",
      "details": [
        {
          "id": "studentInfo-detail3-content1",
          "title": "Nội dung sinh hoạt công dân",
          html: `
                    
                  <p>
                    SHCD-A là sự kiện thường niên được tổ chức bởi các tổ chức sinh viên
                    và cộng đồng nhằm nâng cao nhận thức và trách nhiệm của công dân
                    trong xã hội hiện đại. Năm nay, sự kiện sẽ tập trung vào những vấn
                    đề cấp bách mà giới trẻ phải đối mặt, cùng với các giải pháp thiết
                    thực để nâng cao sự tham gia của cộng đồng.
                  </p>
                
              `
        }
      ]
    }
  ]

  menu[3].details = newStudentInfo
  menu[3].html = converToSectionHTML("menu4")
  document.getElementById("menu4").innerHTML = menu[3].html
  loadAdminMenuLeft("menu4")
}

function converToSectionHTML(sectionId){
  let html = ``

  let sectionContent = menu.find(item => item.id === sectionId).details

  for(item of sectionContent) {
    let subSection = document.createElement("div")
    subSection.id = item.id
    subSection.innerHTML = `
      <div class="section-header w3-theme-l1">${item.title}<div>
    `

    let subSectionContainer = document.createElement("div")
    subSectionContainer.classList.add("subsection-grid-container")

    for(subItem of item.details){
      try {
        let subSectionContent = document.getElementById(subItem.id)
        subSectionContent.innerHTML = subItem.html
        subSectionContent.style.border = 0;
        subSectionContainer.appendChild(subSectionContent);
        if (!subSectionContent.style.gridColumn) {
          subSectionContent.style.gridColumn = "1 / -1";
        }
      } catch (error) {
        let subSectionContent = document.createElement("div")
        subSectionContent.id = subItem.id
        subSectionContent.innerHTML = subItem.html
        subSectionContent.style.gridColumn = "1 / -1";
        subSectionContainer.innerHTML += subSectionContent.outerHTML
      }

    }
    
    subSection.innerHTML += subSectionContainer.outerHTML
    html += subSection.outerHTML 
  }

  return `
    <div class="container">
    `+ html +`
    <div>
  `
}

function loadAdminMenuLeft(sectionId) {

  loadSidebar(sectionId);
  let arr = getArr(sectionId)
  let item = menu.find(item => item.id === sectionId);

  let html = `Admin menu left: "${item.title}"`
  if(sectionId === "menu4") {
    html += `<i class="fa-solid fa-arrow-rotate-left" id="reset-student-info" onclick="resetStudentInfo()"></i>`
  }

  document.getElementById("admin-page-title").innerHTML = html
  document.getElementById("admin-menu").innerHTML = loadMenuTable(arr, "loadAdminContentsLayout", sectionId)
}

function loadAdminContentsLayout(id) {
  document.getElementById(`${id}-sidebar`).classList.add('active')
  let sectionId = findSectionId(id)
  let arr = getArr(sectionId)

  sectionId = convertSectionId(getContentBeforeDash(sectionId))
  let title1 = menu.find(item => item.id === sectionId);
  let title2 = arr.find(item => item.id === id);
  let details = (arr.find(item => item.id === id)).details

  document.getElementById("admin-page-title").innerHTML = `Admin contents layout: "${title1.title}/${title2.title}" <a target="_blank" href="html/layout-help.html"><i class="fa-solid fa-circle-info"></i></a>`
  document.getElementById("admin-menu").innerHTML = loadMenuTable(details, "loadAdminContents", id)

  document.getElementById("preview").innerHTML = `
    <div class="section-header w3-theme-l1">${title2.title}</div>
    <div id="preview-layout" class="grid-container border-3px" style="height: 500px"></div>
  `
  let html = ``
  
  for(item of title2.details) {
    let layoutDiv = document.getElementById(item.id).cloneNode(false);

    layoutDiv.innerHTML = `${item.title}`
    layoutDiv.style.border = "5px solid black"

    html += layoutDiv.outerHTML
  }
  
  document.getElementById("preview-layout").innerHTML = html + loadGridContents(8, 15)
}

function loadGridContents(row, col){
  let html = ``
  const totalItems = row * col;

  for (let i = 0; i < totalItems; i++) {
    html += `<div class="item"></div>`;
  }

  return html
}

function loadAdminContents(id) {
  try {
    document.querySelector(".ck-editor").classList.remove('hidden')
    document.getElementById("admin-menu").classList.add('hidden')
  } catch (error) {}

  document.querySelector(".sectionId").id = id

  let sectionId = findSectionId(id)
  let arr = getArr(sectionId)

  let parts = id.split('-')
  sectionId = convertSectionId(getContentBeforeDash(sectionId))
  let title1 = menu.find(item => item.id === sectionId);
  let title2 = arr.find(item => item.id === parts[0] + '-' + parts[1]);
  let title3 = title2.details.find(item => item.id === id);
  
  document.getElementById("admin-page-title").innerHTML = `Admin contents: "${title1.title}/${title2.title}/${title3.title}"`

  document.getElementById("preview").innerHTML = `
    <div class="section-header w3-theme-l1">${title2.title}</div>
    <div class="border-3px" id="preview-content" style="height: 500px;"><div>
    `


  document.getElementById("preview-content").innerHTML = title3.html
  editor.setData(title3.html);

}

function sidebarHTML(arr){
  if(arr === null) return;
  var html = ``;
  for (item of arr){
    html += `<a class="w3-bar-item w3-button w3-hover-cyan" id="${item.id}-sidebar" href="#${item.id}">${item.title}</a>`;
  }
  return html;
}

function wikiSidebarHTML(arr){
  if(arr === null) return;
  var html = ``;
  for (item of arr){
    html += `<a class="w3-bar-item w3-button w3-hover-cyan wiki-sidebar-btn" id="${item.id}-sidebar" href="#${item.id}">${item.title}</a>`;
  }
  return html;
}

function loadSidebar(sectionId) {
  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = '';

  if(sectionId === 'menu5') {
    loadAdminMenuTop();
    return;
  }
  sectionId = convertSectionId(sectionId)
  let item = menu.find(item => item.id === sectionId)
  let arr = getArr(sectionId)

  if(sectionId == "menu6") {
    sidebar.innerHTML = `<h4 class="w3-bar-item"><b>${item.title}</b></h4>` + wikiSidebarHTML(arr)
  }
  else {
    sidebar.innerHTML = `<h4 class="w3-bar-item"><b>${item.title}</b></h4>` + sidebarHTML(arr)
  };

  document.querySelectorAll('.wiki-sidebar-btn').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
  
        // Ẩn tất cả các phần nội dung
        document.querySelectorAll('.container > div').forEach(detail => {
            detail.classList.add('hidden');
        });
  
        // Hiển thị phần nội dung tương ứng
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).classList.remove('hidden');
    });
  });
  
}

function editMenu(id){
  menuName = document.getElementById(`${id}-menu-name`)
  menuName.querySelector(".name-input-div").classList.remove("hidden")
  if(id.includes("-content")) {
    menuName.querySelector(".layout-input-div").classList.remove("hidden")  
    menuName.querySelector(".media-input-div").classList.remove("hidden")  
  }               
}

function cancelEditName(id){
  menuName = document.getElementById(`${id}-menu-name`)
  menuName.querySelector(".name-input-div").classList.add("hidden")  
}

function cancelEditLayout(id){
  menuName = document.getElementById(`${id}-menu-name`)
  menuName.querySelector(".layout-input-div").classList.add("hidden")  
}

function cancelEditMedia(id){
  menuName = document.getElementById(`${id}-menu-name`)
  menuName.querySelector(".media-input-div").classList.add("hidden")  
}

function getContentBeforeDash(input) {
  const parts = input.split("-");
  return parts[0];
}

function saveEditName(id){
  menuName = document.getElementById(`${id}-menu-name`)
  let value = menuName.querySelector(".name-input").value 
  cancelEditName(id)

  if(!value || value.trim() === "") return;

  menuName.querySelector(".name").innerHTML = `${value}`

  if(id.includes("-content")){
    parts = id.split("-")
    let arr = getArr(id)
    let details = (arr.find(item => item.id === parts[0] + "-" + parts[1])).details
    let contentIndex = details.findIndex(item => item.id === id)
    let html = details[contentIndex].html
    details.splice(contentIndex, 1, {
      id: id,
      title: value,
      html: html
    })
    reloadContentLayout(id)
  } else {
    let sectionId = findSectionId(id)
    let arr = getArr(sectionId)
    let arrIndex = arr.findIndex(item => item.id === id)
    let details = arr[arrIndex].details
    arr.splice(arrIndex, 1, {
      id: id,
      title: value,
      details: details
    })

    loadMenu()

    if(sectionId != 'menu') {
      sectionId = getContentBeforeDash(sectionId)
      sectionId = convertSectionId(sectionId)
      loadSidebar(sectionId);
    }
  }
}

function saveEditLayout(id){
  menuName = document.getElementById(`${id}-menu-name`)
  let value = menuName.querySelector(".layout-input").value
  cancelEditLayout(id)

  // Tách thành các cặp thuộc tính và giá trị
  let styles = value.split(';').map(style => style.trim()).filter(Boolean);

  // Tạo một đối tượng để lưu trữ các thuộc tính style
  let styleObject = {};
  styles.forEach(style => {
      let [key, value] = style.split(':').map(s => s.trim());
      styleObject[key] = value;
  });
  let tempDiv = document.getElementById(id)

  for (let [key, value] of Object.entries(styleObject)) {
    tempDiv.style[key] = value; // Gán giá trị vào thuộc tính style
  }

  reloadContentLayout(id)
}

// Hàm cập nhật CSS từ chuỗi đầu vào
function updateCssFromInput(id, mediaCondition, css) {
  const mediaRuleString = `@media ${mediaCondition} {`;

  let mediaRuleExists = false; // Biến để kiểm tra xem quy tắc media có tồn tại không

  // Duyệt qua các quy tắc trong thẻ <style>
  for (let i = 0; i < style.sheet.cssRules.length; i++) {
      const existingRule = style.sheet.cssRules[i];
      if (existingRule.cssRules) {
          // Kiểm tra nếu quy tắc media trong thẻ <style> có cùng điều kiện
          if (existingRule.cssText.startsWith(mediaRuleString)) {
              // Duyệt qua các quy tắc bên trong media query
              for (let j = 0; j < existingRule.cssRules.length; j++) {
                  const ruleToUpdate = existingRule.cssRules[j];
                  if (ruleToUpdate.selectorText === id) {
                      // Cập nhật các thuộc tính của quy tắc
                      mediaRuleExists = true; // Đánh dấu rằng quy tắc media đã tồn tại
                      ruleToUpdate.style.cssText = css;
                      return; // Dừng lại sau khi tìm thấy và cập nhật
                  }
              }
          }
      }
  }

  console.log(id, mediaCondition, css)

  // Nếu không tìm thấy quy tắc media, thêm mới
  if (!mediaRuleExists) {
      style.sheet.insertRule(`
        @media ${mediaCondition} {
          ${id} {
            ${css}
          }
        }
    `, style.sheet.cssRules.length);
      console.log(style.sheet)
  }
}


function saveEditMedia(id){
  let table = document.getElementById(`${id}-media-list`)
  let mediaQueries = table.querySelectorAll(".media-query")
  mediaQueries.forEach(mediaQuery => {
    let mediaCondition = mediaQuery.querySelector(".media-condition-input").value
    let css = mediaQuery.querySelector(".media-css-input").value
    updateCssFromInput(`#${id}`, mediaCondition, css)
  })
  reloadContentLayout(id)
}

function deleteMenu(id){
  const table = document.getElementById("admin-menu")
  let rowIndex = findRowIndex(id)
  table.deleteRow(rowIndex)

  if(id.includes("-content")){
    let sectionId = getContentBeforeDash(id)
    let parts = id.split("-");
    let contentId = parts[0] + "-" + parts[1]

    let arr = getArr(findSectionId(sectionId))
    
    let details = []
    if(arr === menu) {
      details = (arr.find(item => item.id === convertSectionId(sectionId))).details
      details = (details.find(item => item.id === contentId)).details
    } else {
      details = (arr.find(item => item.id === contentId)).details
    }
    let contentIndex = details.findIndex(item => item.id === id)
    details.splice(contentIndex, 1)
  } else {
    let sectionId = findSectionId(id)
    let arr = getArr(sectionId)
    let arrIndex = arr.findIndex(item => item.id === id)
    arr.splice(arrIndex, 1)
    loadMenu()
    try {
      sectionId = getContentBeforeDash(sectionId)
      loadSidebar(sectionId)
    } catch (error) { }
  }
}

function findRowIndex(id){
  const table = document.getElementById("admin-menu")
  const rows = table.getElementsByTagName("tr")  
  let rowIndex = rows.length - 1;
  for(i = 0; i < rows.length; i++){
    let cell = table.rows[i].cells[0]
    if(cell.id === id+"-menu-name") {
      rowIndex = i;
      break;
    }
  }
  return rowIndex;
}

function addNewMenu(id){
  const table = document.getElementById("admin-menu")
  let rowIndex = findRowIndex(id)
  const newRowHTML = `
    <tr>
      <th class="width-80">
        <div class="name-input-div">
          <div class="flex space-between">
            Tên: 
            <div class="flex">
            <i class="fa-xl fa-solid fa-xmark" onclick="cancelAdd('${rowIndex + 1}')"></i>
            <i class="fa-xl fa-solid fa-check" onclick="saveAdd('${rowIndex + 1}', '${id}')"></i>
            </div>
          </div>
          <textarea rows="2" class="name-input full-width" id="input-${rowIndex + 1}"> </textarea>
        </div>
      </th>
      <td class="flex flex-wrap space-between">
      </td>
    </tr>        
  `;
  const referenceRow = table.rows[rowIndex]; // Lấy hàng tham chiếu
  referenceRow.insertAdjacentHTML('afterend', newRowHTML);
}

function saveAdd(index, id){
  const table = document.getElementById("admin-menu")
  let value = document.getElementById(`input-${index}`).value
  if(!value || value.trim() === "") {
    table.deleteRow(index)
    return
  }
  let sectionId = 0
  let item = {}
  let func = ""

  if(id.includes("-content")){
    sectionId = getContentBeforeDash(id)

    let parts = id.split("-");
    let contentId = parts[0] + "-" + parts[1]

    let arr = getArr(findSectionId(sectionId))
    
    let details = []
    if(arr === menu) {
      details = (arr.find(item => item.id === convertSectionId(sectionId))).details
      details = (details.find(item => item.id === contentId)).details
    } else {
      details = (arr.find(item => item.id === contentId)).details
    }
    
    let contentIndex = details.findIndex(item => item.id === id)
    let newId = contentId + "-content" + (details.length + 1)
    item = {
      id: newId,
      title: value,
      html: ``
    }
    details.splice(contentIndex + 1, 0, item)
    
    let html = ``
    let layout = document.createElement("div")
    for(item of details) {
      try {
        let layoutDiv = document.getElementById(item.id).cloneNode(false);
  
        layoutDiv.innerHTML = `${item.title}`
        layoutDiv.style.border = "5px solid black"
    
        html += layoutDiv.outerHTML
      } catch (error) {
        layout.style.gridColumn = "1/-1"
        layout.innerHTML = `${item.title}`
        layout.style.border = "5px solid black"
      }
      
    }

    document.getElementById("preview-layout").innerHTML = html + layout.outerHTML + loadGridContents(8, 15)

  } else {
    let arr = []
    let key = ""
    if(!id.includes("-detail")) {
      sectionId = findSectionId(id)
      arr = getArr(sectionId)
      key = sectionId
    } else {
      sectionId = findSectionId(id)
      sectionId = getContentBeforeDash(id)
      arr = getArr(sectionId)
      key = sectionId + "-detail"
    }
    key = key + (arr.length + 1)
    let arrIndex = arr.findIndex(item => item.id === id)
    item = {
      id: key,
      title: value,
      details: []
    }
    arr.splice(arrIndex + 1, 0, item);
    
    loadMenu()
    try {
      loadSidebar(getContentBeforeDash(sectionId))
    } catch (error) { }
  }
  
  if(id.includes("-content")){
    func = "loadAdminContents"
  } else if(id.includes("-detail")){
    func = "loadAdminContentsLayout"
  } else {
    func = "loadAdminMenuLeft"
  }

  
  let conditionText = ""
  let cssText = ""

  for (let i = 0; i < style.sheet.cssRules.length; i++) {
    let cssSheet = style.sheet.cssRules[i].cssText
    if(cssSheet.includes(item.id)){
      let ruleList = style.sheet.cssRules[i].cssRules
      for (let i = 0; i < ruleList.length; i++) {
        let rule = ruleList[i];
        if(rule.selectorText === `#${item.id}`){
          cssText = rule.cssText
        }
        try{
          conditionText = extractMediaCondition(cssSheet)
          cssText = extractCssContent(cssText)
          break
        }catch{}
        
      }
    }
  }

  let layoutText = ""
  if(item.id.includes("-content")){
    try {
      let layoutDiv = document.getElementById(item.id).cloneNode(false)
      layoutText = layoutDiv.style.cssText
    } catch (error) {
      layoutText = 'grid-column: 1 / -1'
    }
    
  }

  table.rows[index].innerHTML = `
    <tr>
      <th class="width-80" id="${item.id}-menu-name">
        <span class="name">${item.title}</span>
        <div class="name-input-div hidden">
          <div class="flex space-between">
            Tên: 
            <div class="flex">
              <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditName('${item.id}')"></i>
              <i class="fa-xl fa-solid fa-check" onclick="saveEditName('${item.id}')"></i>
            </div>
          </div>
          <textarea rows="2" class="name-input full-width">${item.title}</textarea>
        </div> 
        <div class="layout-input-div hidden">
          <div class="flex space-between">
            Layout:
            <div class="flex">
              <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditLayout('${item.id}')"></i>
              <i class="fa-xl fa-solid fa-check" onclick="saveEditLayout('${item.id}')"></i>
            </div>
          </div>
          <textarea rows="4" class="layout-input full-width">${layoutText}</textarea>
        </div>
        <div class="media-input-div hidden">
          <div class="flex space-between">
            Media queries:
            <div class="flex">
              <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditMedia('${item.id}')"></i>
              <i class="fa-xl fa-solid fa-check" onclick="saveEditMedia('${item.id}')"></i>
              <i class="fa-xl fa-solid fa-plus" onclick="addEditMedia('${item.id}')"></i>
            </div>
          </div>
          <table id="${item.id}-media-list">
            <tbody>
              `+ loadMediaList(item.id) +`
            </tbody>
          </table>
        </div>
      </th>
      <td class="flex space-between">
        <img onclick="${func}('${item.id}')" src="assets/eye-open.svg" />
        <i class="fa-xl fa-solid fa-pencil" onclick="editMenu('${item.id}')"></i>
        <i class="fa-xl fa-solid fa-xmark" onclick="deleteMenu('${item.id}')"></i>
        <i class="fa-xl fa-solid fa-plus" onclick="addNewMenu('${item.id}')"></i>
      </td>
    </tr>
  `  
}

function addEditMedia(id) {
  const table = document.getElementById(`${id}-media-list`)
  const rows = table.getElementsByTagName("tr")  
  let rowIndex = rows.length - 1;
  let newRowHTML =
  `
  <tr>
    <td class="media-query">
      <div style="display:inline;">@media <input class="media-condition-input" style="width:calc(100% - 100px)"></input> { </div>
      <textarea rows="4" class="media-css-input full-width"></textarea>
      }
    </td>
  </tr>`
  const referenceRow = table.rows[rowIndex]; // Lấy hàng tham chiếu
  referenceRow.insertAdjacentHTML('afterend', newRowHTML);
}

function cancelAdd(index){
  const table = document.getElementById("admin-menu")
  table.deleteRow(index)
}

function loadMenu(){
  
  let html = ``
  for(item of menu) {
    html += `
        <a
        href="javascript:void(0)"
        onclick="showContent('${item.id}')"
        class="w3-bar-item w3-button w3-hover-cyan"
        >${item.title}</a
      >
    `
  } 

  document.getElementById("navbar").innerHTML = `
   <a
    class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
    href="javascript:void(0)"
    onclick="w3_open()"
    ><i class="fa fa-bars"></i>
  </a>
  <a
    href="#"
    onclick="showContent('menu1')"
    class="w3-bar-item w3-button w3-hover-cyan"
  >
    <i class="fas fa-home"></i>
  </a>
  ` + html;
}

function tableChange(arr, func, id) {
  const table = document.getElementById("admin-menu")
  table.innerHTML = loadMenuTable(arr, func, id)
}

function updatePreviewContent(){
  var editorData = editor.getData();
  
  if(editorData.includes("figure")) {
    // Tạo một phần tử tạm thời để xử lý
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = editorData;

    // Lấy nội dung bên trong thẻ figure
    editorData = tempDiv.querySelector('figure').innerHTML;
  }
  document.getElementById("preview-content").innerHTML = editorData
  
  let id = document.getElementById("preview").parentNode.id

  let sectionId = findSectionId(id)
  let arr = getArr(sectionId)

  let parts = id.split('-')
  let title2 = arr.find(item => item.id === parts[0] + '-' + parts[1]);
  let title3 = title2.details.find(item => item.id === id);

  title3.html = editorData
}

var ckEditor = document.querySelector(".ck-editor__editable")
ckEditor.addEventListener("input", updatePreviewContent)
ckEditor.addEventListener("keyup", updatePreviewContent);

const toolbarButtons = document.querySelectorAll(".ck-button")
toolbarButtons.forEach(button => {
  button.addEventListener("click", updatePreviewContent)
})

function reloadContentLayout(id) {

  let parts = id.split("-");
  let sectionId = parts[0] + "-" + parts[1]

  loadAdminContentsLayout(sectionId)

}

// Hàm nhận vào id và trả về một Map chứa các media query và cssText
function getMediaQueriesContainingId(id) {
  const mediaQueriesMap = new Map(); // Tạo một Map để lưu trữ media query và cssText

  // Duyệt qua các quy tắc trong thẻ <style>
  for (let i = 0; i < style.sheet.cssRules.length; i++) {
      const rule = style.sheet.cssRules[i];
      // Kiểm tra xem quy tắc có phải là một media query không
      if (rule.media) {
          // Duyệt qua các quy tắc bên trong media query
          for (let j = 0; j < rule.cssRules.length; j++) {
              const innerRule = rule.cssRules[j];

              // Kiểm tra xem quy tắc có chứa id không
              if (innerRule.selectorText === id) {
                  // Thêm vào Map với key là media query và value là cssText
                  mediaQueriesMap.set(rule.media.mediaText, innerRule.cssText);
                  break; // Dừng vòng lặp sau khi tìm thấy
              }
          }
      }
  }

  return mediaQueriesMap; // Trả về Map chứa các media query và cssText
}

function loadMediaList(id) {
  let html = ``
  const mediaQueriesContainingId = getMediaQueriesContainingId(`#${id}`);
  if (mediaQueriesContainingId.size === 0) {
    return `
    <tr>
      <td class="media-query">
        <div style="display:inline;">@media <input class="media-condition-input" style="width:calc(100% - 100px)"></input> { </div>
        <textarea rows="4" class="media-css-input full-width"></textarea>
        }
      </td>
    </tr>
    `
  }
  for ([conditionText, cssText] of mediaQueriesContainingId) {
    html += `
    <tr>
      <td class="media-query">
        <div style="display:inline;">@media <input class="media-condition-input" style="width:calc(100% - 100px)" value="${conditionText}"></input> { </div>
        <textarea rows="4" class="media-css-input full-width">${extractCssContent(cssText)}</textarea>
        }
      </td>
    </tr>
    `
  }
  return html
}

const searchTermElem = document.querySelector('#searchTerm');
searchTermElem.focus();

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
      timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay);
  };
};

const search = debounce(async (searchTerm) => {
  console.log("inputttt")
  if (!searchTerm) {
    // reset the search result
    document.querySelector('#searchResult').innerHTML = '';
    return;
  }
  try {
    // make an API request
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodeURIComponent(searchTerm)}`;
    const response = await fetch(url);
    const searchResults = await response.json();
    const searchResultHtml = generateSearchResultHTML(searchResults.query.search, searchTerm);
    console.log(searchResults);
    document.querySelector('#searchResult').innerHTML = searchResultHtml;
  } catch (error) {
    console.log(error);
  }
});

const stripHtml = (html) => {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent;
};

const highlight = (str, keyword, className = "highlight") => {
  const hl = `<span class="${className}">${keyword}</span>`;
  return str.replace(new RegExp(keyword, 'gi'), hl);
};

const generateSearchResultHTML = (results, searchTerm) => {
  return results
  .map(result => {
    const title = highlight(stripHtml(result.title), searchTerm);
    const snippet = highlight(stripHtml(result.snippet), searchTerm);
    return `<article>
    <a href="https://en.wikipedia.org/?curid=${result.pageid}">
    <h2>${title}</h2>
    </a>
    <div class="summary">${snippet}...</div>
    </article>`;
  })
  .join('');
}

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  searchNearbyWikiPages(latitude, longitude);
}

function showError(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;
      case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;
      case error.TIMEOUT:
          alert("The request to get user location timed out.");
          break;
      case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
  }
}

async function searchNearbyWikiPages(lat, lon) {
  const gscoord = `${lat}|${lon}`;
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${gscoord}&gsradius=10000&gslimit=10&format=json&origin=*`;
  
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      if (!data.query || !data.query.geosearch) {
          throw new Error('No geosearch results found');
      }

      // Lấy pageids cho yêu cầu sau
      const pageIds = data.query.geosearch.map(result => result.pageid).join('|');
      
      // Yêu cầu hình ảnh cho các pageids
      const imagesUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pageids=${pageIds}&origin=*`;
      const imagesResponse = await fetch(imagesUrl);
      const imagesData = await imagesResponse.json();

      // Gọi hàm để hiển thị kết quả với hình ảnh
      displayResults(data.query.geosearch, imagesData.query.pages);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function displayResults(results, pages) {
  const searchResultElem = document.getElementById('searchNearbyResult');
  searchResultElem.innerHTML = ''; // Reset kết quả trước khi hiển thị mới

  if (results.length === 0) {
      searchResultElem.innerHTML = '<p>No nearby wiki pages found.</p>';
      return;
  }

  results.forEach(result => {
    const article = document.createElement('article');
    article.style.display = 'flex';
    article.style.alignItems = 'center';
    // Lấy thông tin hình ảnh từ pages
    const pageInfo = pages[result.pageid];
    const thumbnail = pageInfo && pageInfo.thumbnail ? pageInfo.thumbnail.source : 'assets/default-image-url.jpg';

    article.innerHTML = `
        <img src="${thumbnail}" alt="${result.title}" style="width: 100px; height: auto; float: left; margin-right: 10px;">
        <div style="overflow: hidden;">
            <a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">
                <h2>${result.title}</h2>
            </a>
            <p>Distance: ${result.dist.toFixed(2)} meters</p>
        </div>
    `;
    searchResultElem.appendChild(article);
  });
}

function searchButtonClick() {
    const location = document.getElementById('locationInput').value;
    searchLocation(location);
};

async function searchLocation(location) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
            alert('Location not found');
            return;
        }

        const { lat, lon } = data[0];
        map.setView([lat, lon], 13); // Cập nhật bản đồ về vị trí tìm được

        L.marker([lat, lon]).addTo(map)
            .bindPopup(`<b>${data[0].display_name}</b>`)
            .openPopup();
    } catch (error) {
        console.error('Error fetching location:', error);
    }
}

// <!DOCTYPE html>
// <!-- saved from url=(0062)https://www.w3schools.com/w3css/tryw3css_templates_webpage.htm -->
// <html lang="en">
//   <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
//     <title>Web Tech (ver2)</title>

//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
//     />
//     <link rel="stylesheet" href="./css/styles.css" />
//     <link rel="stylesheet" href="./lib/w3.css" />
//     <link rel="stylesheet" href="./lib/w3-theme-black.css" />
//     <link rel="stylesheet" href="./lib/css" />
//     <link rel="stylesheet" href="./lib/font-awesome.min.css" />
//     <script src="https://cdn.ckeditor.com/ckeditor5/12.4.0/classic/ckeditor.js"></script>
//     <link
//       rel="stylesheet"
//       href="https://cdn.ckeditor.com/ckeditor5/43.3.0/ckeditor5.css"
//     />
//     <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
//   </head>

//   <body>
//     <!-- Navbar -->
//     <div class="w3-top">
//       <div class="w3-bar w3-theme w3-large" id="navbar">
//         <a
//           class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
//           href="javascript:void(0)"
//           onclick="w3_open()"
//           ><i class="fa fa-bars"></i
//         ></a>
//         <a
//           href="#"
//           onclick="showContent('menu1')"
//           class="w3-bar-item w3-button w3-hover-cyan"
//         >
//           <i class="fas fa-home"></i>
//         </a>
//         <a
//           href="javascript:void(0)"
//           onclick="showContent('menu2')"
//           class="w3-bar-item w3-button w3-hover-cyan"
//           >Thông tin môn học</a
//         >
//         <a
//           href="javascript:void(0)"
//           onclick="showContent('menu3')"
//           class="w3-bar-item w3-button w3-hover-cyan"
//           >Các công nghệ web</a
//         >
//         <a
//           href="javascript:void(0)"
//           onclick="showContent('menu4')"
//           class="w3-bar-item w3-button w3-hover-cyan"
//           >Thông tin sinh viên</a
//         >
//         <a
//           href="javascript:void(0)"
//           onclick="showContent('menu5')"
//           class="w3-bar-item w3-button w3-hover-cyan"
//           >Admin page</a
//         >
//       </div>
//     </div>

//     <!-- Sidebar -->
//     <nav
//       class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left"
//       id="mySidebar"
//     >
//       <a
//         href="javascript:void(0)"
//         onclick="w3_close()"
//         class="w3-right w3-xlarge w3-padding-large w3-hover-cyan w3-hide-large"
//         title="Close Menu"
//       >
//         <i class="fa fa-remove"></i>
//       </a>
//       <h4 class="w3-bar-item"><b>Menu</b></h4>
//       <a
//         class="w3-bar-item w3-button w3-hover-cyan"
//         href="https://www.w3schools.com/w3css/tryw3css_templates_webpage.htm#"
//         >Link</a
//       >
//       <a
//         class="w3-bar-item w3-button w3-hover-cyan"
//         href="https://www.w3schools.com/w3css/tryw3css_templates_webpage.htm#"
//         >Link</a
//       >
//       <a
//         class="w3-bar-item w3-button w3-hover-cyan"
//         href="https://www.w3schools.com/w3css/tryw3css_templates_webpage.htm#"
//         >Link</a
//       >
//       <a
//         class="w3-bar-item w3-button w3-hover-cyan"
//         href="https://www.w3schools.com/w3css/tryw3css_templates_webpage.htm#"
//         >Link</a
//       >
//     </nav>

//     <!-- Overlay effect when opening sidebar on small screens -->
//     <div
//       class="w3-overlay w3-hide-large"
//       onclick="w3_close()"
//       style="cursor: pointer"
//       title="close side menu"
//       id="myOverlay"
//     ></div>

//     <!-- Main content -->
//     <div id="content-container" class="w3-main" style="margin-left: 250px">
//       <!-- Section 1: Logo -->
//       <div id="menu1" class="w3-container w3-padding-64 hidden">
//         <div class="container">
//           <!-- Subsection 1: courseInfo1 -->
//           <div id="courseInfo-detail1">
//             <!-- Subsection 1 Header -->
//             <div class="subContent-title section-header w3-theme-l1">
//               Thông tin khai giảng
//             </div>
//             <!-- Subsection 1 contents -->
//             <div class="subsection-grid-container">
//               <!-- content 1: courseInfo-detail1-content1 -->
//               <div id="courseInfo-detail1-content1" style="grid-column: 1/-1">
//                 <table class="table-info">
//                   <tr>
//                     <th>Thứ</th>
//                     <td>Thứ 6</td>
//                   </tr>
//                   <tr>
//                     <th>Thời gian/Tiết</th>
//                     <td>Từ 3 đến 6</td>
//                   </tr>
//                   <tr>
//                     <th>Ngày/Tuần</th>
//                     <td>2-9,11-18</td>
//                   </tr>
//                   <tr>
//                     <th>Tại địa điểm</th>
//                     <td>D9-501</td>
//                   </tr>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <!-- Subsection 2: courseInfo2 -->
//           <div id="courseInfo-detail2">
//             <!-- Subsection 2 Header -->
//             <div
//               class="subContent-title section-header w3-theme-l1"
//               style="margin-top: 20px"
//             >
//               Thông tin seminar
//             </div>
//             <!-- Subsection 2 contents -->
//             <div class="subsection-grid-container">
//               <div id="courseInfo-detail2-content1" style="grid-column: 1/-1">
//                 <h3>Sử dụng JavaScript để xây dựng Responsible Web</h3>
//               </div>
//               <div
//                 id="courseInfo-detail2-content2"
//                 style="grid-column: 1/11; margin-right: 30px"
//               >
//                 <p>
//                   Nếu bạn có bất kỳ câu hỏi nào, hãy đến và chúng ta sẽ cùng
//                   thảo luận trong buổi semina nhé!
//                 </p>
//                 <p>
//                   <i class="fa-solid fa-clock"></i>
//                   <em>Thời gian:</em> 8h30-12h00, ngày 25/10/2024
//                 </p>
//                 <p>
//                   <i class="fa-solid fa-location-dot"></i>
//                   <em>Địa điểm:</em> Phòng học D9-501, Đại học Bách Khoa Hà Nội
//                 </p>
//                 <p>
//                   <i class="fa-solid fa-person"></i>
//                   <em>Người thuyết trình:</em> CLB sinh viên
//                 </p>
//               </div>
//               <div id="courseInfo-detail2-content3" style="grid-column: 11/-1">
//                 <img style="width: 100%" src="assets/seminar_.jpg" />
//               </div>
//             </div>
//           </div>
//           <div id="courseInfo-detail3">
//             <!-- Subsection 3 Header -->
//             <div
//               class="subContent-title section-header w3-theme-l1"
//               style="margin-top: 20px"
//             >
//               Thông tin công ty quan tâm
//             </div>
//             <!-- Subsection 3 contents -->
//             <div class="subsection-grid-container">
//               <!-- Nội dung bên trái -->

//               <div id="courseInfo-detail3-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li><strong>Công ty:</strong> FPT Software</li>
//                 </ul>
//               </div>
//               <div
//                 id="courseInfo-detail3-content2"
//                 style="grid-column: 1/11; margin-right: 30px"
//               >
//                 <p>
//                   FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với
//                   nhiệm vụ chính là gia công phần mềm tại Việt Nam và nước
//                   ngoài. Thành lập từ năm 1988 đến nay với 3 Trụ sở chính FPT
//                   Software đặt tại Việt Nam và một số nước trên toàn thế giới
//                   như Hoa Kỳ, Nhật Bản, Malaysia, Đức, Úc, Singapore, Malaysia,
//                   Thái Lan và Philipines hiện FPT Software đáp ứng nhu cầu gia
//                   công phần mềm lớn cho hơn 150 công ty hàng đầu tại 20 quốc gia
//                   lớn nhất trên thế giới hiện nay với các hợp đồng lớn có khi
//                   đạt cả 1 triệu USD dành cho một số đối tác lớn như Hitachi,
//                   NEOPOST, Petronas, Deutsche Bank, và Unilever với hơn 4000
//                   nhân viên trên toàn thế giới.
//                 </p>

//                 <p>
//                   FPT Software theo đuổi mục tiêu gia công phần mềm để đáp ứng
//                   cho nhu cầu phát triển CNTT của các hãng phần mềm trong nước,
//                   các công ty lớn trong nước và tham vọng hơn là xuất khẩu phần
//                   mềm trên toàn thế giới cho các công ty nước ngoài biết đến tập
//                   đoàn FPT, mục đích chính là vươn đến tầm cao mới thông qua
//                   công nghệ nhằm nâng cao năng suất lao động.
//                 </p>

//                 <p>
//                   Kinh doanh của FPT Software xuất phát từ Công nghệ thông tin
//                   và Viễn Thông FPT là cốt lõi để đáp ứng cho khách hàng trên 63
//                   tỉnh thành trên toàn lãnh thổ Việt Nam và mở rộng đến khách
//                   hàng toàn cầu. Từ khi được thành lập cho đến nay, FPT Software
//                   đã là công ty phần mềm số 1 tại Việt Nam trong lĩnh vực tích
//                   hợp hệ thống, phân phối và bán lẻ, dịch vụ Công Nghệ Thông
//                   tin, xuất khẩu gia công phần mềm, bán lẻ sản phẩm CNTT. Ở lĩnh
//                   vực Viễn Thông FPT là một trong 3 nhà cung cấp dịch vụ
//                   internet cáp quang FPT hàng đầu tại Việt Nam. Về lĩnh vực
//                   quảng cáo, FPT là đơn vị quảng cáo trực tuyến số 1 tại Việt
//                   Nam với trang báo điện tử VNexpress với hơn 42 triệu lượt truy
//                   cập mỗi ngày.
//                 </p>
//               </div>

//               <!-- Quảng cáo bên phải -->
//               <div id="courseInfo-detail3-content3" style="grid-column: 11/-1">
//                 <a
//                   href="https://fptsoftware.com/"
//                   target="_blank"
//                   style="flex: 1; margin-top: 20px"
//                 >
//                   <div class="FRB" style="width: 100%">
//                     <img
//                       class="DRB"
//                       src="http://itde.hvnh.edu.vn/public/img/news/files/FPT%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20(2).jpg"
//                       style="width: 100%"
//                     />
//                     <div class="ERB w3-center" style="width: 100%" title="">
//                       FPT SOFTWARE TUYỂN DỤNG
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Section 2: Thông tin môn học -->
//       <div id="menu2" class="w3-container w3-padding-64 hidden">
//         <div class="container">
//           <div class="header">Thông tin môn học</div>
//           <div style="width: 100%">
//             <table cellspacing="0" cellpadding="0" style="width: 100%">
//               <tbody>
//                 <tr>
//                   <td style="vertical-align: top">
//                     <div class="GBC">
//                       <div style="display: flex; flex-wrap: wrap; gap: 20px">
//                         <!-- Cột 1 -->
//                         <div style="flex: 1; min-width: 300px">
//                           <label>Đơn vị (*)</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>
//                               Trường Công nghệ Thông tin và Truyền thông
//                             </option>
//                           </select>
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Đơn vị con</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>Nothing selected</option>
//                           </select>
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Mã học phần (*)</label>
//                           <input
//                             type="text"
//                             value="IT4409"
//                             dir="ltr"
//                             readonly=""
//                             disabled
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Tên học phần</label>
//                           <input
//                             type="text"
//                             value="Công nghệ web và dịch vụ trực tuyến"
//                             dir="ltr"
//                             readonly=""
//                             disabled
//                             style="
//                               width: 100%;
//                               white-space: nowrap;
//                               overflow: hidden;
//                             "
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Tên tiếng Anh</label>
//                           <input
//                             type="text"
//                             value="Web technologies and e-Services"
//                             class="form-control IBC form-control-readonly"
//                             dir="ltr"
//                             readonly=""
//                             disabled
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Hệ đào tạo</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>4 items selected</option>
//                           </select>
//                           <div style="width: 100%">
//                             <a>Thạc sỹ Khoa học&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
//                             <a>Kỹ sư chính quy&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
//                             <a>Cử nhân&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
//                             <a>Việt-Nhật&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
//                           </div>
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Ngành đào tạo</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>
//                               Trường Công nghệ Thông tin và Truyền thông
//                             </option>
//                           </select>
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Loại hình (*)</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>Lớp</option>
//                           </select>
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Điều phối viên</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>Phạm Huy Hoàng</option>
//                           </select>
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Nhóm chuyên môn</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>Phạm Huy Hoàng</option>
//                           </select>
//                         </div>
//                       </div>

//                       <!-- Cột 2 -->
//                       <div style="display: flex; flex-wrap: wrap; gap: 20px">
//                         <div style="flex: 1; min-width: 300px">
//                           <label>HP liên quan</label>
//                           <input
//                             type="text"
//                             placeholder="Nhập mã HP"
//                             disabled
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Hệ số điểm thực hành</label>
//                           <input
//                             type="text"
//                             value="0"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Số tín chỉ</label>
//                           <input
//                             type="text"
//                             value="3"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Số giờ LT</label>
//                           <input
//                             type="text"
//                             value="2"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Số giờ BT</label>
//                           <input
//                             type="text"
//                             value="2"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Số giờ TN/TH</label>
//                           <input
//                             type="text"
//                             value="0"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Số giờ tự học</label>
//                           <input
//                             type="text"
//                             value="6"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Số giờ thực tập</label>
//                           <input
//                             type="text"
//                             value="0"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>kHD thực tập</label>
//                           <input
//                             type="text"
//                             value="0"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>kHD đồ án</label>
//                           <input
//                             type="text"
//                             value="0"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Phân bố</label>
//                           <input
//                             type="text"
//                             value="3(2-2-0-6)"
//                             class="form-control IBC"
//                             dir="ltr"
//                             disabled=""
//                             style="width: 100%"
//                           />
//                         </div>

//                         <div style="flex: 1; min-width: 300px">
//                           <label>Hình thức thi cuối kỳ</label>
//                           <select id="dropdown" disabled style="width: 100%">
//                             <option>[Chọn hình thức thi cuối kỳ]</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <div>
//               <div style="width: 100%">
//                 &nbsp;
//                 <hr />
//               </div>
//               <div>
//                 <label
//                   ><strong>Mô tả tóm tắt học phần (tiếng Việt)</strong>
//                   (*)</label
//                 >
//               </div>
//               <div class="subsection-grid-container" id="info-detail1">
//                 <div id="info-detail1-content1" style="grid-column: 1/-1">
//                   <p>
//                     <strong>Mục tiêu: </strong>Học phần cung cấp các kiến thức
//                     cần thiết để xây dựng và phát triển các ứng dụng, dịch vụ
//                     trực tuyến trên môi trường web. Sau khi học xong học phần
//                     này, sinh viên có khả năng:
//                   </p>
//                   <ul>
//                     <li>
//                       Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát
//                       triển ứng dụng web cho các lĩnh vực khác nhau như: hệ quản
//                       trị nội dung (CMS), cổng thông tin (Portal), hay các ứng
//                       dụng điện tử (eCommerce, eLearning, eGoverment,…)
//                     </li>
//                     <li>
//                       Nắm vững được các công nghệ web, các platform, framework
//                       hiện đang thịnh hành.
//                     </li>
//                   </ul>
//                   <p>
//                     Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng
//                     làm việc nhóm, thuyết trình và thái độ cần thiết để làm việc
//                     và ứng dụng các kỹ thuật trong các dự án, công ty về phần
//                     mềm sau này.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div style="width: 100%">
//                 &nbsp;
//                 <hr />
//               </div>
//               <div>
//                 <label
//                   ><strong>Mô tả tóm tắt học phần (tiếng Anh)</strong>
//                   (*)</label
//                 >
//               </div>
//               <div class="subsection-grid-container" id="info-detail2">
//                 <div id="info-detail2-content1" style="grid-column: 1/-1">
//                   <p>
//                     <strong>Objectives:</strong>
//                     The course provides students with the necessary knowledge to
//                     build and develop online applications and services on the
//                     web environment. After completing this couse, students are
//                     able to:
//                   </p>

//                   <ul>
//                     <li>
//                       Use a programming language such as JSP, PHP to develop web
//                       applications for different areas such as content
//                       management system (CMS), portal, or online applications
//                       (eCommerce, eLearning, eGoverment, ...)
//                     </li>
//                     <li>
//                       Understand the popular web technologies, platforms,
//                       frameworks.
//                     </li>
//                   </ul>
//                   <p>
//                     In addition, the course also provides students with skills
//                     of teamwork and presentation, and attitudes needed to work
//                     and apply the techniques in software projects and companies
//                     in the future.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div style="width: 100%">
//                 &nbsp;
//                 <hr />
//               </div>
//               <div>
//                 <label
//                   ><strong>Nội dung tóm tắt của học phần (tiếng Việt)</strong>
//                   (*)</label
//                 >
//               </div>
//               <div class="subsection-grid-container" id="info-detail3">
//                 <div id="info-detail3-content1" style="grid-column: 1/-1">
//                   <p>
//                     Internet, web, kiến trúc ứng dụng web,&nbsp; HTML, CSS,
//                     Javascript, PHP, JSP, Ajax, DOM, XML, SOA, An toàn bảo mật
//                     web, v.v.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div style="width: 100%">
//                 &nbsp;
//                 <hr />
//               </div>
//               <div>
//                 <label
//                   ><strong>Nội dung tóm tắt của học phần (tiếng Anh)</strong>
//                   (*)</label
//                 >
//               </div>
//               <div class="subsection-grid-container" id="info-detail4">
//                 <div id="info-detail4-content1" style="grid-column: 1/-1">
//                   <p>
//                     Internet, web, architecture of web application,&nbsp; HTML,
//                     CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA,&nbsp;website
//                     security, etc.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div style="width: 100%">
//               &nbsp;
//               <hr />
//             </div>
//             <div>
//               <label><strong>Sách tham khảo</strong></label>
//             </div>
//             <div class="subsection-grid-container" id="info-detail5">
//               <div
//                 id="info-detail5-content1"
//                 style="grid-column: 1/11; margin-right: 30px"
//               >
//                 <p>
//                   Sách Web Technologies: HTML, Javascript, PHP, Java, Jsp, XML
//                   and Ajax, Black Book
//                 </p>
//               </div>
//               <div id="info-detail5-content2" style="grid-column: 11/-1">
//                 <a
//                   href="https://www.amazon.com/menu3nologies-HTML-Javascript-Black/dp/8177229974"
//                   target="_blank"
//                   style="margin-top: 20px"
//                 >
//                   <div class="FRB" style="width: 100%">
//                     <img
//                       class="DRB"
//                       src="https://m.media-amazon.com/images/I/71t58FV+qFL._SY466_.jpg"
//                       style="width: 100%"
//                     />
//                     <div class="ERB w3-center" style="width: 100%" title="">
//                       Web Technologies: HTML, Javascript, PHP, Java, Jsp, XML
//                       and Ajax, Black Book
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Section 3: Các công nghệ web -->
//       <div id="menu3" class="w3-container w3-padding-64 hidden">
//         <div class="container">
//           <div class="header">Các công nghệ web</div>
//           <p>
//             Dưới đây là các công nghệ phổ biến được sử dụng trong xây dựng ứng
//             dụng Web:
//           </p>

//           <div id="webTech-detail1">
//             <h3 class="subContent-title">1. Frontend (Giao diện người dùng)</h3>

//             <div class="subsection-grid-container">
//               <div id="webTech-detail1-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>HTML, CSS, JavaScript</strong>: Các công nghệ cơ bản
//                     để xây dựng cấu trúc và giao diện người dùng.
//                   </li>
//                   <li>
//                     <strong>ReactJS</strong>: Thư viện JavaScript để xây dựng
//                     giao diện người dùng động.
//                   </li>
//                   <li>
//                     <strong>Angular</strong>: Framework JavaScript mạnh mẽ cho
//                     các ứng dụng Web quy mô lớn.
//                   </li>
//                   <li>
//                     <strong>Vue.js</strong>: Framework linh hoạt giúp phát triển
//                     giao diện người dùng hiệu quả.
//                   </li>
//                   <li>
//                     <strong>CSS Preprocessors (SASS, LESS)</strong>: Giúp cải
//                     thiện mã CSS với các tính năng như biến và hàm.
//                   </li>
//                   <li>
//                     <strong>Responsive Design</strong>: Thiết kế giao diện phù
//                     hợp với mọi kích thước màn hình (sử dụng Bootstrap, Tailwind
//                     CSS).
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div id="webTech-detail2">
//             <h3 class="subContent-title">
//               2. Backend (Máy chủ và xử lý dữ liệu)
//             </h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail2-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>Node.js</strong>: Môi trường runtime JavaScript hiệu
//                     quả cho ứng dụng Web.
//                   </li>
//                   <li>
//                     <strong>Express.js</strong>: Framework giúp xây dựng API và
//                     xử lý các yêu cầu HTTP nhanh chóng.
//                   </li>
//                   <li>
//                     <strong>Django (Python)</strong>: Framework Python phù hợp
//                     cho các ứng dụng Web cần bảo mật cao.
//                   </li>
//                   <li>
//                     <strong>Ruby on Rails</strong>: Framework giúp phát triển
//                     ứng dụng Web nhanh chóng và dễ dàng bảo trì.
//                   </li>
//                   <li>
//                     <strong>Java Spring Boot</strong>: Framework mạnh mẽ cho ứng
//                     dụng Web Java với khả năng mở rộng cao.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div id="webTech-detail3">
//             <h3 class="subContent-title">3. Cơ sở dữ liệu</h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail3-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>MySQL</strong>: Cơ sở dữ liệu quan hệ phổ biến.
//                   </li>
//                   <li>
//                     <strong>PostgreSQL</strong>: Cơ sở dữ liệu mạnh mẽ hỗ trợ
//                     truy vấn phức tạp.
//                   </li>
//                   <li>
//                     <strong>MongoDB</strong>: Cơ sở dữ liệu NoSQL linh hoạt cho
//                     dữ liệu phi cấu trúc.
//                   </li>
//                   <li>
//                     <strong>Cassandra</strong>: Cơ sở dữ liệu NoSQL phân tán phù
//                     hợp cho dữ liệu lớn.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div id="webTech-detail4">
//             <h3 class="subContent-title">4. API và Tích hợp dịch vụ</h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail4-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>RESTful APIs</strong>: Phương thức phổ biến để giao
//                     tiếp giữa các hệ thống qua HTTP.
//                   </li>
//                   <li>
//                     <strong>GraphQL</strong>: Công nghệ API mạnh mẽ giúp lấy dữ
//                     liệu theo yêu cầu.
//                   </li>
//                   <li>
//                     <strong>WebSockets</strong>: Giải pháp cho các ứng dụng thời
//                     gian thực.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div id="webTech-detail5">
//             <h3 class="subContent-title">5. DevOps và Triển khai</h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail5-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>Docker</strong>: Giải pháp đóng gói ứng dụng và môi
//                     trường vào container.
//                   </li>
//                   <li>
//                     <strong>CI/CD</strong>: Tự động hóa quy trình kiểm thử và
//                     triển khai (Jenkins, GitLab CI, GitHub Actions).
//                   </li>
//                   <li>
//                     <strong>AWS, Azure, Google Cloud</strong>: Các dịch vụ đám
//                     mây linh hoạt cho phát triển và triển khai ứng dụng Web.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div id="webTech-detail6">
//             <h3 class="subContent-title">6. Bảo mật</h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail6-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>OAuth2 & JWT</strong>: Cơ chế xác thực và phân quyền
//                     người dùng an toàn.
//                   </li>
//                   <li>
//                     <strong>HTTPS</strong>: Đảm bảo giao tiếp an toàn qua mã hóa
//                     SSL/TLS.
//                   </li>
//                   <li>
//                     <strong>Helmet.js</strong>: Thư viện Node.js tăng cường bảo
//                     mật HTTP header.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div id="webTech-detail7">
//             <h3 class="subContent-title">7. Testing và Debugging</h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail7-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>Jest</strong>: Công cụ kiểm thử JavaScript, thường
//                     dùng với React và Node.js.
//                   </li>
//                   <li>
//                     <strong>Mocha & Chai</strong>: Framework kiểm thử cho
//                     Node.js.
//                   </li>
//                   <li>
//                     <strong>Cypress</strong>: Công cụ kiểm thử tích hợp mạnh mẽ
//                     cho các ứng dụng Web.
//                   </li>
//                   <li>
//                     <strong>Postman</strong>: Công cụ kiểm thử API và làm việc
//                     với RESTful API.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div id="webTech-detail8">
//             <h3 class="subContent-title">8. Performance Optimization</h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail8-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>Lazy Loading</strong>: Tải tài nguyên theo yêu cầu
//                     để cải thiện tốc độ tải trang.
//                   </li>
//                   <li>
//                     <strong>CDN (Content Delivery Network)</strong>: Mạng phân
//                     phối nội dung giúp giảm độ trễ và cải thiện tốc độ.
//                   </li>
//                   <li>
//                     <strong>Caching</strong>: Sử dụng Redis hoặc Memcached để
//                     lưu trữ dữ liệu tạm thời và giảm tải cho server.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div id="webTech-detail9">
//             <h3 class="subContent-title">
//               9. User Authentication & Authorization
//             </h3>
//             <div class="subsection-grid-container">
//               <div id="webTech-detail9-content1" style="grid-column: 1/-1">
//                 <ul>
//                   <li>
//                     <strong>Firebase Authentication</strong>: Dịch vụ đăng nhập
//                     thông qua Google, Facebook, email/password.
//                   </li>
//                   <li>
//                     <strong>Auth0</strong>: Dịch vụ bảo mật giúp quản lý xác
//                     thực và phân quyền người dùng dễ dàng.
//                   </li>
//                 </ul>
//               </div>
//               <div id="webTech-detail9-content2" style="grid-column: 1/-1">
//                 <a
//                   href="https://developer.mozilla.org/en-US/docs/Web"
//                   target="_blank"
//                   style="grid-column: 1/-1"
//                 >
//                   <img
//                     width="100%"
//                     src="https://www.shutterstock.com/shutterstock/photos/1854050815/display_1500/stock-vector-abstract-technology-horizontal-motion-style-concept-particle-connection-background-design-with-red-1854050815.jpg"
//                     alt=""
//                   />
//                   <p class="ERB w3-center">Các công nghệ web</p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Section 4: Thông tin sinh viên -->
//       <div id="menu4" class="w3-container w3-padding-64 hidden">
//         <div class="container">
//           <div class="header">Thông tin sinh viên</div>

//           <div id="studentInfo-detail1">
//             <div class="subContent-title section-header w3-theme-l1">
//               Thông tin cá nhân
//             </div>

//             <div class="subsection-grid-container">
//               <div id="studentInfo-detail1-content1" style="grid-column: 1/6">
//                 <img
//                   width="100%"
//                   src="./assets/ava.jpg"
//                   alt="Student Photo"
//                   class="profile-photo"
//                 />
//               </div>
//               <div
//                 id="studentInfo-detail1-content2"
//                 style="grid-column: 7/-1; margin-right: 30px"
//               >
//                 <div class="details">
//                   <span>Họ và tên:</span> Nguyễn Ngọc Anh Thư
//                 </div>
//                 <div class="details"><span>Năm vào trường:</span> 2021</div>
//                 <div class="details">
//                   <span>Bậc đào tạo:</span> KSCLC-TN-TT-VNVP-ICT
//                 </div>
//                 <div class="details">
//                   <span>Chương trình:</span> Công nghệ thông tin Việt-Nhật 2021
//                 </div>
//                 <div class="details"><span>MSSV:</span> 20215143</div>
//                 <div class="details"><span>Giới tính:</span> Nữ</div>
//                 <div class="details"><span>Lớp:</span> Việt-Nhật 01-K66</div>
//                 <div class="details"><span>Khóa học:</span> 66</div>
//                 <div class="details">
//                   <span>Email:</span>
//                   <p>thu.nna215143@sis.hust.edu.vn</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div id="studentInfo-detail2" class="skills-info">
//             <div class="subContent-title section-header w3-theme-l1">
//               Kĩ năng
//             </div>
//             <div class="subsection-grid-container">
//               <div style="grid-column: 1/-1" id="studentInfo-detail2-content1">
//                 <table class="table-info">
//                   <tr>
//                     <th>Ngôn ngữ</th>
//                     <td>HTML, CSS, JavaScript, PHP, Java</td>
//                   </tr>
//                   <tr>
//                     <th>Frameworks</th>
//                     <td>ReactJS, NodeJS, Express</td>
//                   </tr>
//                   <tr>
//                     <th>Công cụ</th>
//                     <td>Git, Visual Studio Code, Postman</td>
//                   </tr>
//                   <tr>
//                     <th>Cơ sở dữ liệu</th>
//                     <td>MySQL, SQL Server, MongoDB</td>
//                   </tr>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <div class="projects-info" id="studentInfo-detail3">
//             <div class="subContent-title section-header w3-theme-l1">Dự án</div>
//             <div style="grid-column: 1/-1" id="studentInfo-detail3-content1">
//               <table class="table-info">
//                 <tr>
//                   <th>Nền tảng Học Trực Tuyến "EduA"</th>
//                   <td>
//                     Mô tả: EduA là một nền tảng học trực tuyến dành cho sinh
//                     viên, cho phép người dùng tham gia các khóa học từ xa. Dự án
//                     bao gồm việc phát triển giao diện người dùng thân thiện,
//                     tích hợp tính năng video trực tuyến và quản lý khóa học.
//                     <br />Công nghệ sử dụng: HTML, CSS, JavaScript, React cho
//                     frontend; Node.js và MongoDB cho backend. <br />Vai trò:
//                     Thiết kế giao diện người dùng và phát triển các tính năng
//                     chính của nền tảng.
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Website Thương Mại Điện Tử "ShopB"</th>
//                   <td>
//                     Mô tả: ShopB là một trang web thương mại điện tử cho phép
//                     người dùng mua sắm trực tuyến. Dự án bao gồm việc phát triển
//                     các trang sản phẩm, giỏ hàng và thanh toán trực tuyến.
//                     <br />Công nghệ sử dụng: Bootstrap cho thiết kế responsive,
//                     PHP và MySQL cho backend, cùng với API thanh toán. <br />Vai
//                     trò: Xây dựng hệ thống quản lý sản phẩm và giỏ hàng, cũng
//                     như tích hợp tính năng thanh toán.
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Blog Cá Nhân "TechC"</th>
//                   <td>
//                     Mô tả: TechC là một blog cá nhân nơi người viết chia sẻ các
//                     bài viết về công nghệ, thủ thuật lập trình và đánh giá sản
//                     phẩm. Dự án bao gồm việc phát triển chức năng viết và quản
//                     lý bài viết, cũng như hệ thống bình luận. <br />Công nghệ sử
//                     dụng: WordPress cho hệ thống quản lý nội dung, CSS cho thiết
//                     kế và jQuery cho các tính năng tương tác. <br />Vai trò:
//                     Thiết kế giao diện blog, phát triển các chức năng bình luận
//                     và tối ưu hóa SEO cho các bài viết.
//                   </td>
//                 </tr>
//               </table>
//             </div>
//           </div>
//           <div class="hobbies-info" id="studentInfo-detail4">
//             <div class="subContent-title section-header w3-theme-l1">
//               Sở thích
//             </div>
//             <div class="subsection-grid-container">
//               <div id="studentInfo-detail4-content1" style="grid-column: 1/-1">
//                 <p>
//                   <strong>Chơi Game</strong>
//                   <br />
//                   Chơi game là một phần không thể thiếu trong cuộc sống của tôi,
//                   và hiện tại, tựa game yêu thích nhất của tôi là Honkai: Star
//                   Rail. Đây là một trò chơi thể loại gacha, nơi tôi có thể thu
//                   thập và phát triển các nhân vật độc đáo trong một vũ trụ đầy
//                   màu sắc và huyền bí. Tôi thích khám phá các nhiệm vụ và đấu
//                   tranh với những thử thách trong game. Thể loại gacha mang lại
//                   cho tôi cảm giác hồi hộp khi mở các hộp quà và tìm kiếm những
//                   nhân vật hiếm.
//                   <br />
//                   <br />
//                   <strong>Xem Phim và Đọc Manga</strong>
//                   <br />Tôi là một tín đồ của thể loại hành động viễn tưởng, và
//                   cả phim và manga đều là những nguồn cảm hứng lớn cho tôi. Tôi
//                   thích theo dõi những câu chuyện hấp dẫn, nơi các nhân vật phải
//                   đối mặt với những tình huống gay cấn và vượt qua thử thách.
//                   Những bộ phim hành động viễn tưởng như Attack on Titan luôn
//                   khiến tôi hồi hộp và thỏa mãn. Tương tự, tôi cũng rất yêu
//                   thích các bộ manga như Chainsaw Man, nơi mà những cuộc chiến
//                   đấu không ngừng diễn ra. Cả phim và manga đều mang đến cho tôi
//                   những trải nghiệm tuyệt vời và mở ra những thế giới mới để
//                   khám phá.
//                   <br />
//                   <br />
//                   <strong>Uống Trà Sữa</strong>
//                   <br />Khi muốn thư giãn, không gì tuyệt vời hơn là ghé qua một
//                   quán trà sữa yêu thích. Tôi thường xuyên đến Mixue và
//                   TocoToco, hai quán trà sữa mà tôi rất thích. Tại Mixue, tôi
//                   thường gọi trà sữa matcha với trân châu dẻo, trong khi ở
//                   TocoToco, tôi thích thử các hương vị độc đáo như trà sữa trái
//                   cây. Việc thưởng thức trà sữa cùng bạn bè không chỉ là một thú
//                   vui mà còn là dịp để chúng tôi trò chuyện, chia sẻ những câu
//                   chuyện hài hước và tận hưởng những khoảnh khắc vui vẻ bên
//                   nhau. Trà sữa đã trở thành một phần không thể thiếu trong
//                   những buổi gặp gỡ của chúng tôi.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Section 5: Admin page -->
//       <div id="menu5" class="w3-container w3-padding-64 hidden">
//         <div class="container">
//           <!--content-->
//           <div id="admin-page">
//             <h3 id="admin-page-title" class="admin-page-header"></h3>
//             <div class="sectionId flex-col">
//               <div id="editor" class="hidden"></div>
//               <table class="table-info" id="admin-menu"></table>
//               <div id="preview"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Section 6: My wiki -->
//       <div id="menu6" class="w3-container w3-padding-64 hidden">
//         <div class="container">
//           <!--content-->
//           <div id="myWiki-detail1">
//             <div id="my-wiki-title" class="my-wiki-header">
//               <img
//                 class="img-size"
//                 src="assets/wikipedia-logo.png"
//                 alt="wikipedia"
//               />
//               <h1>Wikipedia Search</h1>
//               <input
//                 class="full-width"
//                 type="text"
//                 name="searchTerm"
//                 id="searchTerm"
//                 placeholder="Enter a search term..."
//                 oninput="search(this.value)"
//               />
//             </div>
//             <div id="searchResult" class="sectionId flex-col"></div>
//           </div>

//           <div id="myWiki-detail2" class="hidden">
//             <div id="my-wiki-title" class="my-wiki-header">
//               <h1>Wikipedia Nearby Search</h1>
//               <button id="getLocation" onclick="getLocation()">
//                 Find Nearby Wiki Pages
//               </button>
//             </div>
//             <div id="searchResult" class="sectionId flex-col"></div>
//           </div>

//           <div id="myWiki-detail3" class="hidden">
//             <div id="my-wiki-title" class="my-wiki-header">
//               <h1>Wikipedia Map Search</h1>
//               <div class="search-map-container">
//                 <input
//                   type="text"
//                   id="locationInput"
//                   placeholder="Enter a location..."
//                 />
//                 <button id="searchButton" onclick="searchButtonClick()">
//                   Search
//                 </button>
//               </div>
//             </div>
//             <div id="map"></div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <footer id="myFooter" style="margin-left: 250px">
//       <div class="w3-theme-l2 w3-padding-32 w3-row w3-center">
//         <div class="w3-third">
//           <h4>Thông Tin Liên Hệ</h4>

//           <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
//           <p>Điện thoại: (012) 345-6789</p>
//           <p>Email: info@website.com</p>
//         </div>
//         <div class="w3-third">
//           <h4>Liên Kết Nhanh</h4>

//           <p>
//             <a href="javascript:void(0)" onclick="showContent('menu1')"
//               >Trang chủ</a
//             >
//           </p>
//           <p>
//             <a href="javascript:void(0)" onclick="showContent('menu2')"
//               >Thông tin môn học</a
//             >
//           </p>
//           <p>
//             <a href="javascript:void(0)" onclick="showContent('menu3')"
//               >Các công nghệ Web</a
//             >
//           </p>
//           <p>
//             <a href="javascript:void(0)" onclick="showContent('menu4')"
//               >Thông tin sinh viên</a
//             >
//           </p>
//           <p>
//             <a href="javascript:void(0)" onclick="showContent('menu5')"
//               >Admin page</a
//             >
//           </p>
//         </div>

//         <div class="w3-third">
//           <h4>Mạng Xã Hội</h4>

//           <p>
//             <i class="fab fa-facebook" style="color: #ffffff"></i>
//             <a target="_blank" href="https://www.facebook.com/">Facebook</a>
//           </p>
//           <p>
//             <i class="fab fa-twitter" style="color: #ffffff"></i>
//             <a target="_blank" href="https://x.com/">Twitter</a>
//           </p>
//           <p>
//             <i class="fab fa-instagram" style="color: #ffffff"></i>
//             <a target="_blank" href="https://www.instagram.com/">Instagram</a>
//           </p>
//         </div>
//       </div>
//       <div class="w3-theme-l1 w3-center w3-padding-16">
//         <span>
//           &copy; Nguyễn Ngọc Anh Thư - 20215143 -
//           <a target="_blank">ORA2</a>
//         </span>
//       </div>
//     </footer>

//     <!-- END MAIN -->
//     <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
//     <!-- Initialize Quill editor -->
//     <script>
//       let editor;

//       ClassicEditor.create(document.querySelector("#editor"))
//         .then((newEditor) => {
//           editor = newEditor;
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     </script>

//     <script src="./js/scripts.js"></script>
//     <div id="highlighter--hover-tools" style="display: none">
//       <div id="highlighter--hover-tools--container">
//         <div
//           class="highlighter--icon highlighter--icon-copy"
//           title="Copy"
//         ></div>
//         <div
//           class="highlighter--icon highlighter--icon-change-color"
//           title="Change Color"
//         ></div>
//         <div
//           class="highlighter--icon highlighter--icon-delete"
//           title="Delete"
//         ></div>
//       </div>
//     </div>
//   </body>
// </html>
