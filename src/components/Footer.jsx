import fb from "../assets/builder/fb.png"
import twitter from "../assets/builder/twitter.png"
import yt from "../assets/builder/yt.png"
import insta from "../assets/builder/insta.png"
import google_play from "../assets/builder/google_play.png"
import apple_store from "../assets/builder/apple_store.png"
import org from "../assets/builder/org.png"
import ddd from "../assets/builder/14d.png"

export const Footer = () => {
  return (
    <>
    <footer>
      <div>
              <strong>ONLINE&nbsp;SHOPPING</strong>
              <a href="">Men</a>
              <a href="">Women</a>
              <a href="">Kids</a>
              <a href="">Home&nbsp;&&nbsp;Living</a>
              <a href="">Beauty</a>
              <a href="">Gift&nbsp;Cards</a>
              <a href="">Myntra&nbsp;Insider</a>
      </div>
      <div>
              <strong>CUSTOMER&nbsp;POLICIES</strong>
              <a href="">Contact&nbsp;Us</a>
              <a href="">FAQ</a>
              <a href="">T&C</a>
              <a href="">Terms&nbsp;Of&nbsp;Use</a>
              <a href="">Track&nbsp;Orders</a>
              <a href="">Shipping</a>
              <a href="">Cancellation</a>
              <a href="">Returns</a>
              <a href="">Privacy&nbsp;Policy</a>
              <a href="">Grievance&nbsp;Officer</a>
      </div>
      <div>
              <strong>EXPERIENCE&nbsp;MYNTRA&nbsp;APP&nbsp;ON&nbsp;MOBILE</strong>
          <div className="inline">
              <a href="https://play.google.com/store/apps/details?id=com.myntra.android"><img className="instlr" src={google_play} /></a>
              <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059"><img className="instlr" src={apple_store} /></a>
          </div>   
              <strong>KEEP&nbsp;IN&nbsp;TOUCH</strong>
          <div className="inline">
              <img className="smg" src={fb}/>
              <img className="smg" src={twitter}/>
              <img className="smg" src={yt} style={{width: "28px"}}/>
              <img className="smg" src={insta} />
          </div>
      </div>
      <div>
          <div className="spl">
              <div style={{width: "48px", height: "40px"}}>
                  <img src={org} style={{width: "48px", height: "40px"}}/>
              </div>
              <div className="inline">
                  <strong className="akkk">100% ORIGINAL</strong> guarantee for all products at myntra.com
              </div>
          </div>
          <div className="spl">
              <div style={{width: "48px", height: "40px"}}>
                  <img src={ddd} style={{width: "48px", height: "49px"}}/>
              </div>
              <div className="inline">
                  <strong className="akkk">Return within 14days</strong> of receiving your order
              </div>
          </div>
      </div>
    </footer>
    </>
  )
}