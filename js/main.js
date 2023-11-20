let text = [
  {
    language: 'en',
    nav: ["Home", "About Us", "Services"],
    textPost:
      "I am a student who are always sad in social media. I love to share any posts but I am not a person who truly sad like Facebook.",
  },
  {
    language: 'kh',
    nav: ["ទំព័រដើម", "អំពីយើងខ្ញុំ", "សេវាកម្ម"],
    textPost:
      "ខ្ញុំជាសិស្សម្នាក់ ដែលតែងតែ មិនសប្បាយចិត្តនឹងបង្ហាញអាម្មណ៍លើ បណ្តាញសង្គម។ ខ្ញុំចូលចិត្ត ការចែករំលែកពត៍មានផ្សេងៗ តែ ខ្ញុំមិនមែនជាមនុស្សដែលពិតជា ខូចចិត្ត ដូចការ ក្នុង Facebook ខ្ញុំទេ។",
  },
  {
    language: "thai",
    nav: ["หน้าแรก", "เกี่ยวกับเรา", "บริการ"],
    textPost:
      "ฉันเป็นนักเรียนที่มักจะเศร้าในโซเชียลมีเดีย ฉันชอบแชร์โพสต์ต่างๆ แต่ฉันไม่ใช่คนเศร้าแบบ Facebook จริงๆ",
  },
];

const language = document.querySelector("#language");
const navbar = document.querySelectorAll("ul li a");
const post = document.querySelector('.post');
console.log(navbar);
language.addEventListener("change", () => {
  console.log(language.value);
  for (let content of text) {
    if (content.language === language.value) {
        for (let index in navbar) {
            navbar[index].textContent = content.nav[index];
        }
        post.textContent = content.textPost;
    }
  }
});
