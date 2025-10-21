import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { baseURL } from "../constants/baseUrl";

export default function SubscribeSection() {
  const [sub, setSub] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const subscribe = () => {
    if (sub === "") {
      setTimeout(() => {
        toast.error("Please enter your email address.", {
          position: "top-right",
        });
      }, 50);
    } else {
      const obj = {
        email: sub,
      }
      console.log("obj", obj)
      
      const token = isClient ? localStorage.getItem("token") : null;
      
      return fetch(baseURL + "/api/subscribe/sub", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: "Bearer " + token }),
        }
      }).then(resp => resp.json())
        .then(resp => {
          setSub("");
          setTimeout(() => {
            toast.success("Thanks for subscribing to our email newsletter", {
              position: "top-right",
            });
          }, 50);
          console.log("subscribe successful", resp)
        })
        .catch(error => {
          console.error("Subscribe error:", error);
          setTimeout(() => {
            toast.error("Failed to subscribe. Please try again.", {
              position: "top-right",
            });
          }, 50);
        })
    }
  }


  return (
    <>
      {/* <section className="mt-12 max-w-[90vw] sm:max-w-[85vw] desktop:max-w-[900px] desktop:max-w-[900px] xl:max-w-[1100px] mx-auto flex flex-col gap-y-16">
        <div className="w-full max-w-[740px] gap-y-4 self-center justify-start items-center justify-between flex md:flex-row flex-col">
          <div className="zsm:w-[323px] flex-col justify-start items-start gap-[18.38px] inline-flex">
            <p className="max-w-96 text-base zsm:text-lg sm:text-xl lg:text-2xl">
              <span className="text-slate-800 text-base zsm:text-lg sm:text-xl lg:text-2xl font-semibold lg:leading-7">
                AI-Powered Matching:
                <br />
              </span>
              <span className="text-neutral-500 text-base zsm:text-lg sm:text-xl lg:text-2xl font-semibold lg:leading-7">
                Attract top talents.
              </span>
            </p>
            <button className="bg-gradient-to-l from-indigo-700 to-orange-500 rounded px-6 py-2.5" onClick={() => navigate("/hirelogin")}>
              <span className="text-center text-white text-xs font-medium">
                Start Hiring!
              </span>
            </button>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/drlcisipo/image/upload/v1705704284/Website%20images/Chat_bot_fsdr0y.png"
              alt="chat bot image"
              className="w-[80vw] max-w-[250px] sm:max-w-[370px] aspect-[1/1]"
            />
          </div>
        </div>
      </section> */}

      {/* suscribve input field */}
      <section>
        <div className="w-full self-center bg-[#5843BD] py-12 md:py-16 lg:py-24 flex justify-center px-4">
          <div className="flex-col justify-start max-w-[536px] items-center gap-y-4 zsm:gap-y-8 inline-flex">
            <div className="text-center text-white text-[20px] md:text-[24px] font-[500]">
              Subscribe and get exclusive deals & offers.
            </div>
            <div className="w-full flex gap-y-3 flex-col">
              <input type="email" placeholder="Enter your mail" className="w-full text-base p-4 md:p-6 rounded-[6px] focus:ring-transparent focus:border-transparent"
                value={sub} onChange={e => setSub(e.target.value)} />

              <button className="w-full py-4 md:py-5 bg-[#FD6535] rounded-lg justify-center items-start flex" onClick={subscribe}>
                <span className="text-white text-base">
                  Subscribe
                </span>
              </button>
            </div>

          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
