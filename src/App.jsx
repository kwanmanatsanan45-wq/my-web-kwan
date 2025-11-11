import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const products = [
  { id: 1, name: "คอปเตอร์ไม้ไผ่", price: "20฿", img: "/images/copcop.jpg" },
  { id: 2, name: "ไฟฉายขยายส่วน", price: "10฿", img: "/images/ff.jpg" },
  { id: 3, name: "กระจกโกหก", price: "25฿", img: "/images/kaj.jpg" },
  { id: 4, name: "ขนมปังช่วยจำ", price: "25฿", img: "/images/kanumpa.jpg" },
  { id: 5, name: "ขนมดังโงะ ตราโมโมทาโร่", price: "30฿", img: "/images/kk.jpg" },
  { id: 6, name: "อุโมงการิเวอร์", price: "25฿", img: "/images/lumo.jpg" },
  { id: 7, name: "ผ้าคลุมย้อนเวลา", price: "25฿", img: "/images/pakum.jpg" },
  { id: 8, name: "ประตูไปที่ไหนก็ได้", price: "30฿", img: "/images/patu.jpg" },
  { id: 9, name: "ดินสอคอมพิวเตอร์", price: "25฿", img: "/images/pi.jpg" },
  { id: 10, name: "ตู้ติ๊งต่าง", price: "30฿", img: "/images/tt.jpg" },
  { id: 11, name: "วุ้นแปลภาษา", price: "35฿", img: "/images/wo.jpg" },
  { id: 12, name: "ห่วงผ่านตลอด", price: "30฿", img: "/images/ww.jpg" },
  { id: 13, name: "ผงปรุงรส", price: "35฿", img: "/images/i13.jpg" },
  { id: 14, name: "พาสปอร์ตซาตาน", price: "35฿", img: "/images/i14.jpg" },
  { id: 15, name: "สวิตซ์เผด็จการ", price: "30฿", img: "/images/i15.png" },
  { id: 16, name: "มือปืนสั่งล้ม", price: "30฿", img: "/images/i16.jpg" },
  { id: 17, name: "ชุดกองของเล่น", price: "35฿", img: "/images/i17.jpg" },
  { id: 18, name: "ผ้าคลุมล่องหน", price: "30฿", img: "/images/i18.jpg" },
  { id: 19, name: "ช้อนชิมรสชาติ", price: "20฿", img: "/images/i19.png" },
  { id: 20, name: "ผงจมดิน", price: "35฿", img: "/images/i20.png" },
];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-1">
        <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-4xl font-bold mb-2">Welcome to the magic shop</h1>
          <p className="text-lg">Every dream we can make come true</p>
          <br />
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service</h2>
              <p className="text-gray-600 text-lg">Everything you need for success</p>
            </div>
            
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((item) => (
          <Card
                  
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  
                />
          ))}
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default App;