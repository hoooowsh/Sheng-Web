import Image from "next/image";
import React from "react";
import contactus from "../public/assets/contact.jpg";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div id="contact" className="w-full bg-slate-700">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          contact
        </h2>
        <div className="flex flex-col md:flex-row gap-8 bg-slate-600 mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4 pt-20">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            {/* <p className="pt-2 pb-8">
              i am a goooooooooooooooooooooooooooood
              mannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
            </p> */}
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10 pt-8">
              <a href="https://www.linkedin.com/in/sheng-hao-5a91511a2/">
                <div className="flex items-center justify-center rounded-full hover:scale-105 duration-200 p-3 cursor-pointer bg-slate-500">
                  <FaLinkedin size={25} />
                </div>
              </a>
              {/* <div className="flex items-center justify-center rounded-full hover:scale-105 duration-200 p-3 cursor-pointer bg-slate-500">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full hover:scale-105 duration-200 p-3 cursor-pointer bg-slate-500">
                <FaFacebook size={25} />
              </div> */}
              <a href="https://github.com/hoooowsh">
                <div className="flex items-center justify-center rounded-full hover:scale-105 duration-200 p-3 cursor-pointer bg-slate-500">
                  <FaGithub size={25} />
                </div>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      email
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("click ");
                      console.log({
                        email: email,
                        name: name,
                        phone: phone,
                        message: message,
                      });
                      axios
                        .post(
                          "http://localhost:5001/sheng-web/us-central1/app/SendMessage",
                          {
                            email: email,
                            name: name,
                            phone: phone,
                            message: message,
                          }
                        )
                        .then((res) => {
                          console.log(res);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
