import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import PricingCards from "@/components/PricingCards/PricingCards";
import Link from "next/link";
export default function Home() {
  return (
   <>
  <Hero />
  
  {/* 醒目搜索框 + 热门国家卡片 */}
  <section className="py-16 bg-gray-50">
    <div className="max-container text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Search for Country Etiquette</h2>
      <div className="flex justify-center mb-12">
        <input 
          type="text" 
          placeholder="Search Countries..." 
          className="w-full max-w-2xl px-6 py-4 text-lg rounded-l-full border border-gray-300 focus:outline-none focus:border-green-500"
        />
        <button className="bg-green-500 text-white px-8 py-4 rounded-r-full font-semibold hover:bg-green-600">
          Search
        </button>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-semibold mb-8">Popular Destinations</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
       {/* 日本 */}
<Link href="/countries/japan">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
    <img src="https://www.nicolelabarge.com/japanese-landmarks-in-japan/senso-ji-temple-tokyo/" alt="Japan" className="w-full h-48 object-cover" />
    <div className="p-4 text-center">
      <h4 className="text-xl font-bold">Japan</h4>
      <p className="text-gray-600">Etiquette & Taboos</p>
    </div>
  </div>
</Link>
        
        {/* 泰国 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://cdn.forevervacation.com/uploads/blog/top-10-cultural-landmarks-to-explore-in-bangkok-2025-3577.jpg" alt="Thailand" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold">Thailand</h4>
            <p className="text-gray-600">Temple & Dining Tips</p>
          </div>
        </div>
        
        {/* 法国 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://www.toureiffel.paris/sites/default/files/styles/1200x675/public/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg?itok=FqfmDgIB" alt="France" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold">France</h4>
            <p className="text-gray-600">Greeting & Dining</p>
          </div>
        </div>
        
        {/* 阿联酋 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://landmarksarchitects.com/wp-content/uploads/2025/01/UAE-Landmarks-Burj-Khalifa-Dubai-1212025.jpg" alt="UAE" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold">UAE</h4>
            <p className="text-gray-600">Dress & Respect</p>
          </div>
        </div>
        
        {/* 印度 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://media.architecturaldigest.com/photos/67acb9b0339bcbaaadeb91b5/16:9/w_2560%2Cc_limit/GettyImages-873536102.jpg" alt="India" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold">India</h4>
            <p className="text-gray-600">Religion & Gestures</p>
          </div>
        </div>
        
        {/* 意大利 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg" alt="Italy" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold">Italy</h4>
            <p className="text-gray-600">Dining & Gestures</p>
          </div>
        </div>
        
        {/* 美国 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/USA_flag_in_New_York_City.jpg/1280px-USA_flag_in_New_York_City.jpg" alt="USA" className="w-full h-48 object-cover" /> {/* 备用美国图片 */}
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold">USA</h4>
            <p className="text-gray-600">Tipping & Space</p>
          </div>
        </div>
        
        {/* 沙特阿拉伯 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Al_Masjid_al_Haram_-_Flickr_-_Al_Jazeera_English.jpg/1280px-Al_Masjid_al_Haram_-_Flickr_-_Al_Jazeera_English.jpg" alt="Saudi Arabia" className="w-full h-48 object-cover" /> {/* 备用麦加图片 */}
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold">Saudi Arabia</h4>
            <p className="text-gray-600">Dress & Prayer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  );
}
