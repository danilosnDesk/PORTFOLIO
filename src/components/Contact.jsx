import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "", });
  const [loading, setLoading] = useState(false);




  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //
    //
    //UFNR1Zsbzi0bkc0RO
    emailjs.send(
      'service_zfgi04p',
      'template_l3q8tbs',
      {
        from_name: form.name,
        to_name: 'Danilson',
        from_email: form.email,
        to_email: '944440377esma@gmail.com',
        message: form.message
      },
      'UFNR1Zsbzi0bkc0RO'
    ).then(() => {
      setLoading(false);
      alert(`thank you ${form.name} I'll retorn as soom to ${form.email} !`)
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }), (error) => {
      setLoading(false)
      console.log("Erro encontrado: " + error);
      alert('Samething went wrong..!');
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>


          <div className="pt-2">
            <p className={styles.sectionSubText}>OR</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-400 text-[12px] lg:text-base flex flex-col lg:flex-row"><span className="text-slate-300">Email:</span> 944440377esma@gmail.com</span>
            <span className="text-slate-400 text-[12px] lg:text-base flex flex-col lg:flex-row"><span className="text-slate-300">telefone: 🇦🇴  </span>  +244 932129667 | +244 958315270</span>
            <span className="text-slate-400 text-[12px] lg:text-base flex flex-col lg:flex-row"><span className="text-slate-300">WhatsApp:  </span>  +244 932129667 | +244 958315270</span>
          </div>
        </form>
      </motion.div>



      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");