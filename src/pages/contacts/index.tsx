import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Head from "next/head";
import cn from "classnames";

import styles from "./Contacts.module.scss";

import MainLayout from "@/layouts/MainLayout";
import { info } from "@/info";
import ArrowIcon from "@/assets/icons/ArrowIcon";

interface IForm {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  message: string;
}

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = useCallback((formData) => {
    try {
      console.log(formData);
    } catch (error: any) {
      console.error("Form submission error:", error);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content={`${info.descr}`} />
        <title>Contacts | Okiimdigital Ltd</title>
      </Head>

      <MainLayout>
        <section className={styles.section}>
          <div className={cn("container", styles.container)}>
            <h1 className={styles.labelWrapper}>
              <span className={styles.label}>Get Started</span>
            </h1>
            <h2 className={styles.title}>
              Get in touch with us.
              <br />
              We're here to assist you.
            </h2>

            <form className={styles.form}>
              <div className={styles.inputWrapper}>
                <input
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "Full Name is required",
                    },
                  })}
                  placeholder="*Full Name"
                  type="text"
                  className={styles.input}
                />
                {errors.fullName && (
                  <p className={styles.error}>{errors.fullName.message}</p>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    validate: (value) => {
                      const emailRegex =
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                      return emailRegex.test(value) || "Invalid email";
                    },
                  })}
                  placeholder="*Email"
                  type="email"
                  className={styles.input}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email.message}</p>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  type="tel"
                  className={styles.input}
                />
                {errors.phone && (
                  <p className={styles.error}>{errors.phone.message}</p>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <input
                  {...register("companyName")}
                  placeholder="Company Name"
                  type="text"
                  className={styles.input}
                />
                {errors.companyName && (
                  <p className={styles.error}>{errors.companyName.message}</p>
                )}
              </div>

              <div className={styles.textareaWrapper}>
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is required",
                    },
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters long",
                    },
                  })}
                  placeholder="*Message"
                  className={styles.textarea}
                />
                {errors.message && (
                  <p className={styles.error}>{errors.message.message}</p>
                )}
              </div>

              <button
                className={styles.formButton}
                onClick={handleSubmit(onSubmit)}
              >
                <span>Leave us a Message</span>
                <div className={styles.ButtonArrowWrapper}>
                  <ArrowIcon className={styles.ButtonArrowIcon} />
                </div>
              </button>
            </form>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactContent}>
              <h2 className={styles.contactTitle}>
                We are always
                <br />
                happy to assist you
              </h2>

              <div className={styles.contactItem}>
                <h3 className={styles.contactItemTitle}>Email Address</h3>
                <span className={styles.contactItemDivider}></span>
                <a
                  className={styles.contactItemValue}
                  href={`mailto:info@okiimdigital.com`}
                >
                  info@okiimdigital.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Contacts;
