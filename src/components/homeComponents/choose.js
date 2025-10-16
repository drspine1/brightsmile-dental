"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { features } from "../../Datas";

  // Why Choose Us
  //         </motion.h2>

  //         <motion.p
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.6, delay: 0.2 }}
  //           className="text-gray-600 mb-8 leading-relaxed"
  //         >
  //           At <span className="font-semibold text-blue-700">BrightSmile Dental Clinic</span>,
  //           we’re committed to making every smile shine — combining expertise, comfort, and compassion.
  //         </motion.p>
export default function WhyUs() {
  return (
    <section id="why-us" className=" mt-40 md:px-6 max-w-7xl mx-auto text-center  bg-white text-gray-900 ">
     <h1  className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">Why Choose Us</h1>
     <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" leading-relaxed  text-gray-800 mb-10 max-w-2xl mx-auto "
          >
            At <span className="font-bold text-blue-700 text-lg">BrightSmile Dental Clinic</span>,
            we’re committed to making every smile shine — combining expertise, comfort, and compassion.
          </motion.p>
             <main className="mt-20 ">
              {
                features.map((feature)=>{
                const {id,title,description,className,image}=feature;
                return(
                  <article key={id} className={`p-6 mb-18 gap-10 ${className}`}>
               <div>
                   <h3 className="text-2xl font-semibold mb-2 text-center text-blue-700">{title}</h3>
                  <p className="text-gray-800 md:text-xl text-center">{description}</p>
               </div>
               <div>
                   <Image
                src={image}
                alt="About our clinic"
                width={700}
                height={800}
                className="rounded-2xl shadow-lg flex-grow object-cover"
                />
               </div>
                </article>
                )
                  
                })
                  
              }
             </main>
    </section>
  );
}