import { Link } from "react-router-dom";
import facebookIconUrl from "../../assets/Facebook.svg";
import twitterIconUrl from "../../assets/Twitter.svg";
import instagramIconUrl from "../../assets/Instagram.svg";

export default function HomePageFooter() {
  return (
    <>
      <div className="bg-[#06031E]">
        <footer className="mx-auto w-[1280px] max-w-full p-4 text-start text-base text-white">
          <div className="mx-auto w-[1200px] max-w-full space-y-[43px]">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="space-y-8 self-start">
                <h3 className="text-[28px] font-bold leading-[32px] text-white">
                  Math<span className="text-[#FD632F]">C</span>ollab
                </h3>
                <div className="flex justify-between">
                  <img src={facebookIconUrl} alt="" />
                  <img src={instagramIconUrl} alt="" />
                  <img src={twitterIconUrl} alt="" />
                </div>
              </div>

              <div className="space-y-[16px]">
                <h3 className="text-lg font-normal text-[#696974]">LINKS</h3>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="about">About Us</Link>
                    </li>
                    <li>
                      <Link to="tools">Tools</Link>
                    </li>
                    <li>
                      <Link to="classes">Classes</Link>
                    </li>
                    <li>
                      <Link to="blog">Blogs & Resources</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="space-y-[16px]">
                <h3 className="text-lg font-normal text-[#696974]">CONTACTS</h3>
                <address className="space-y-4">
                  <div>24, mobolaje street, Aja, lagos</div>
                  <div>mathcolab@customercare.com</div>
                  <div>+234-906-594-1182</div>
                </address>
              </div>

              <div className="space-y-[22px] self-start">
                <div className="space-y-[16px]">
                  <h3 className="text-lg font-normal">
                    Sign Up To Our Newsletter
                  </h3>
                  <p className="text-sm">
                    Be the first to get the latest Updates, tips from our blogs
                  </p>
                </div>
                <form action="#" method="post">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id=""
                      className="w-full rounded-full pr-[120px] text-[#06031E]"
                      autoComplete="off"
                      placeholder="Enter Your Email"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-[50%] -translate-y-[50%] rounded-[21.28px] bg-[#06031E] px-[20px] py-[5px]"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-center text-[#696974]">
              <hr className="mb-[18px]" />
              <p>© 2024 MathCollab, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
