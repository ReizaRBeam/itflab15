// รายการอาหารอย่างน้อย 5 รายการ ตามข้อกำหนด
const foodList = [
    {
        name: "ข้าวมันไก่",
        desc: "ข้าวมันหอมๆ เสิร์ฟพร้อมไก่นุ่มและน้ำจิ้มรสเด็ด",
        price: "50 - 60 บาท",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500"
    },
    {
        name: "กะเพราหมูกรอบไข่ดาว",
        desc: "หมูกรอบผัดซอสใบกะเพรารสเผ็ดร้อน ราดข้าวสวยร้อนๆ",
        price: "60 - 70 บาท",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500"
    },
    {
        name: "ต้มยำกุ้งน้ำข้น",
        desc: "ต้มยำรสแซ่บกลมกล่อม ใส่กุ้งตัวโตและเห็ดฟาง",
        price: "80 - 120 บาท",
        image: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=500"
    },
    {
        name: "ผัดไทยกุ้งสด",
        desc: "เส้นจันท์เหนียวนุ่ม ผัดกับซอสมะขามเปียก รสชาติครบรส",
        price: "60 - 80 บาท",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500"
    },
    {
        name: "ข้าวซอยไก่",
        desc: "แกงกะทิเข้มข้นสไตล์เหนือ ใส่เส้นนุ่มและเส้นกรอบ เสิร์ฟพร้อมน่องไก่",
        price: "55 - 65 บาท",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500"
    }
];

function randomFood() {
    // สุ่มดัชนีรายการอาหาร
    const randomIndex = Math.floor(Math.random() * foodList.length);
    const selectedFood = foodList[randomIndex];

    // อัปเดตข้อมูลบนหน้าเว็บ
    document.getElementById("food-img").src = selectedFood.image;
    document.getElementById("food-name").innerText = selectedFood.name;
    document.getElementById("food-desc").innerText = selectedFood.desc;
    document.getElementById("food-price").innerText = selectedFood.price;
}