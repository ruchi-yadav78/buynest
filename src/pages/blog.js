import React from 'react'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import '../css/blog.css'
import organi from '../media/onganic.jpg'
import fruits2 from '../media/fruits2.jpg'
import almonds from '../media/almonds.jpg'
import fastfood from '../media/fastfood.jpg'
import vege from '../media/vege.jpg'
import blogcontimg from '../media/blogcontimg.jpg'
export default function Blog() {
  return (
    <div>
     <Headcont />
     <div className="blogmain">
       <div className="blogsec1">
        <div className="catsearch"><input type="text" placeholder='Search'/> <i className="fa-solid fa-magnifying-glass"></i></div>
      <div className="articles">
         <h5>Recent Articles</h5>
         <div className="articlesinfo">
          <img src={organi} alt="" />
          <div className="organicdata">
             <h4>The best fashion influencers.</h4>
             <h6>June 30,2021-2022</h6>
             <span>- Organic</span>
          </div>
         </div>
         <div className="articlesinfo">
          <img src={fruits2} alt="" />
          <div className="organicdata">
             <h4>Vogue Shopping Weekend.</h4>
             <h6>April 02,2021-2022</h6>
             <span>- Fastfood</span>
          </div>
         </div>
         <div className="articlesinfo">
          <img src={vege} alt="" />
          <div className="organicdata">
             <h4>Trending Fresh Fruits Juice.</h4>
             <h6>Mar 09,2021-2022</h6>
             <span>- Juice</span>
          </div>
         </div>
         <div className="articlesinfo">
          <img src={fastfood} alt="" />
          <div className="organicdata">
             <h4>Summer Trending vegetable Market.</h4>
             <h6>January 25,2021-2022</h6>
             <span>- Vegetables</span>
          </div>
         </div>
         <div className="articlesinfo">
          <img src={almonds} alt="" />
          <div className="organicdata">
             <h4>Winter 2021 Trending Fashion Market.</h4>
             <h6>December 10,2021-2022</h6>
             <span>- Dried Fruits</span>
          </div>
         </div>
      </div>
       </div>

       <div className="blogsec2">
        <img src={blogcontimg} alt="" />
        <h5>June 30,2022 - Organic</h5>
        <h4>Marketing Guide: 5 Steps to Success.</h4>
        <p>To achieve marketing success, start by identifying your target audience through research and analysis of demographics, interests, and behavior. Next, develop a strong brand message that clearly communicates your unique value and resonates with your audience. Choosing the right marketing channels, such as social media, email marketing, SEO, and paid ads, is crucial for reaching potential customers effectively. Creating engaging content, including blogs, videos, and infographics, helps capture interest and build brand loyalty. Finally, continuously analyze key metrics, gather customer feedback, and optimize your strategies to improve results. By following these steps, you can build a strong marketing foundation and drive long-term success. </p>
        <div className="blogtwoimg">
          <img src={fastfood} alt="" />
          <img src={vege} alt="" />
          </div>     
          <p>Fresh fruit juices are a major trend this season, with mango, watermelon, and citrus blends taking the spotlight. People are opting for natural, sugar-free juices packed with vitamins to stay hydrated and refreshed. Smoothie bowls and detox drinks featuring berries, pomegranate, and coconut water are also gaining popularity. Meanwhile, the summer vegetable market is booming with fresh cucumbers, zucchini, and bell peppers in high demand. Seasonal greens like spinach and kale are being used for healthy salads and smoothies. Farmers’ markets and organic stores are experiencing increased foot traffic as consumers seek farm-fresh produce. The shift towards healthier eating habits has made local and organic vegetables more desirable. This summer, both fresh fruit juices and vibrant vegetables are shaping a healthier lifestyle trend.</p>
       </div>
     </div>
     <Footer />
    </div>
  )
}
