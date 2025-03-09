"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tomanec.f@gmail.com",
  },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Jméno je povinné"),
  surname: Yup.string().required("Příjmení je povinné"),
  email: Yup.string()
    .email("Neplatná e-mailová adresa")
    .required("E-mail je povinný"),
  message: Yup.string().required("Zpráva je povinná"),
});

const Contact = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      alert("Zpráva byla úspěšně odeslána!");
      resetForm();
    } else {
      alert("Chyba při odesílání zprávy.");
    }
    setSubmitting(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <h3 className="text-4xl text-accent">Pojďme spolupracovat</h3>
                  <p className="text-white/60">
                    Rád bych se dozvěděl více o Vašich potřebách a jak Vám můžu
                    pomoci.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Field
                        as={Input}
                        type="text"
                        name="name"
                        placeholder="Jméno"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        type="text"
                        name="surname"
                        placeholder="Příjmení"
                      />
                      <ErrorMessage
                        name="surname"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        type="email"
                        name="email"
                        placeholder="E-mailová adresa"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        type="tel"
                        name="phone"
                        placeholder="Telefonní číslo"
                      />
                    </div>
                  </div>
                  <div>
                    <Field
                      as={Textarea}
                      className="h-[200px]"
                      name="message"
                      placeholder="Zde napište svou zprávu."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="md"
                    className="max-w-40"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
