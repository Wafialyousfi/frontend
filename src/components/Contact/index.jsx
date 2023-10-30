import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import apiRequest from "../../../utils/apiRequest";
import { toast } from "react-toastify";
import { useState } from "react";
import LoaderStyleOne from "../Helpers/Loaders/LoaderStyleOne";
import ServeLangItem from "../Helpers/ServeLangItem";

export default function Contact({ datas }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const sendHandler = () => {
    setLoading(true);
    apiRequest
      .contact({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success(res && res.data.notification);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="page-title mb-10">
        <PageTitle
          title="Contact"
          breadcrumb={[
            { name: "home", path: "/" },
            { name: "contact", path: "/contact" },
          ]}
        />
      </div>
      <div className="contact-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px] rtl:space-x-reverse">
            <div className="lg:w-1/2 w-full">
              {datas.contact && (
                <div>
                  <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-1">
                    {datas.contact.title}
                  </h1>
                  <p className="text-[15px] text-qgraytwo leading-[30px] mb-5">
                    {datas.contact.description}
                  </p>

                  <div className="xl:flex xl:space-x-[30px] rtl:space-x-reverse mb-[30px]">
                    <div className="xl:w-1/2 w-full  h-[196px] flex flex-col item justify-center bg-[#FFEAE5] p-5">
                      <div className="flex justify-center mb-3 ">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="22" cy="22" r="21.5" stroke="#FCBF49" />
                          <path
                            d="M10.4708 17.7624L10.4708 17.7624C10.4976 19.0577 10.9088 20.276 11.473 21.4906C13.5525 25.9672 16.7815 29.3804 21.081 31.7969C22.5665 32.6319 24.0756 33.2848 25.7334 33.4698L25.7335 33.4698C26.8399 33.5935 27.7241 33.3528 28.4392 32.5473L28.4392 32.5473C28.724 32.2265 29.0458 31.9115 29.3517 31.612C29.514 31.4532 29.6717 31.2987 29.8172 31.15L29.8174 31.1498C30.2031 30.7562 30.3337 30.4343 30.336 30.1731C30.3383 29.9141 30.2153 29.5973 29.8364 29.2104L29.8363 29.2104C28.988 28.3441 28.1276 27.4873 27.2602 26.637L27.2601 26.6369C26.8659 26.2503 26.5505 26.126 26.2959 26.1268C26.0403 26.1277 25.7225 26.2552 25.3251 26.6438L25.325 26.6439C24.8114 27.1458 24.3044 27.6511 23.8109 28.166L23.8108 28.1661C23.6684 28.3146 23.4735 28.4645 23.2169 28.5099C22.9464 28.5578 22.7021 28.4739 22.5009 28.341C22.2427 28.1708 21.9677 28.0004 21.686 27.8258C21.0293 27.4187 20.3358 26.9889 19.7325 26.4866C18.0622 25.0969 16.5823 23.48 15.5981 21.4476C15.4993 21.2439 15.4281 21.0037 15.4728 20.7408C15.5179 20.4753 15.6665 20.2715 15.8341 20.112L15.8342 20.1119C16.3521 19.6191 16.86 19.1182 17.3507 18.6035L17.3508 18.6034C17.7203 18.2159 17.84 17.9093 17.8397 17.663C17.8395 17.4176 17.7199 17.1127 17.3474 16.7286L17.3474 16.7286C16.4823 15.8366 15.605 14.9566 14.7136 14.0922C14.3582 13.7475 14.053 13.6318 13.7983 13.6338C13.5412 13.6359 13.2305 13.7585 12.8676 14.1078L10.4708 17.7624ZM10.4708 17.7624L10.4706 17.757M10.4708 17.7624L10.4706 17.757M10.4706 17.757C10.4433 16.8876 10.7133 16.1864 11.3505 15.6062M10.4706 17.757L11.3505 15.6062M11.3505 15.6062C11.6606 15.3245 11.9774 15.0025 12.2815 14.6935C12.4844 14.4873 12.6817 14.2868 12.8675 14.1079L11.3505 15.6062Z"
                            fill="#FCBF49"
                            stroke="#FCBF49"
                          />
                          <path
                            d="M32.2315 21.3816C32.0539 21.4122 31.876 21.4429 31.6979 21.4737C31.0372 19.0025 29.9235 16.9878 28.3306 15.4436C26.7374 13.8992 24.6913 12.8511 22.2058 12.2728C22.239 12.0279 22.2727 11.7796 22.3066 11.53C26.7277 12.1754 31.3242 15.906 32.4497 21.344C32.377 21.3565 32.3043 21.369 32.2315 21.3816Z"
                            fill="#FCBF49"
                            stroke="#FCBF49"
                          />
                          <path
                            d="M25.1799 18.6377C24.3285 17.812 23.2491 17.2404 21.9585 16.9053C21.9807 16.7507 22.0026 16.5975 22.0243 16.4457C22.0391 16.3421 22.0538 16.2392 22.0685 16.1369C24.6502 16.5866 27.1312 18.8191 27.7615 21.6523C27.6473 21.6723 27.5333 21.6922 27.419 21.7121C27.2786 21.7366 27.1375 21.7612 26.9946 21.7861C26.6295 20.5174 26.0301 19.4623 25.1799 18.6377Z"
                            fill="#FCBF49"
                            stroke="#FCBF49"
                          />
                        </svg>
                      </div>
                      <p className="text-[22px] text-black leading-[30px] text-center font-semibold">
                        {ServeLangItem()?.phone}
                      </p>
                      <p className="text-[15px] text-black leading-[30px] text-center">
                        {datas.contact.phone}
                      </p>
                    </div>
                    <div className="xl:w-1/2 w-full h-[196px] flex flex-col item justify-center bg-[#D3EFFF] p-5">
                      <div className="flex justify-center mb-3 ">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                            fill="#FCBF49"
                          />
                          <path
                            d="M11.0183 18.6455C11.2024 18.761 11.3464 18.8458 11.4851 18.9382C14.2825 20.8029 17.0792 22.6676 19.8759 24.5331C21.3894 25.5429 22.6125 25.5413 24.1329 24.5277C26.9304 22.663 29.7271 20.7975 32.5237 18.9328C32.6539 18.8465 32.7856 18.7634 32.9659 18.6478C32.9782 18.8042 32.9959 18.9212 32.9959 19.0391C32.9974 22.1169 32.9997 25.1939 32.9959 28.2718C32.9944 29.6582 32.1625 30.4854 30.773 30.4862C24.9186 30.4877 19.0641 30.4877 13.2096 30.4862C11.8456 30.4854 11.0037 29.6543 11.0022 28.3003C10.9983 25.2086 11.0006 22.1169 11.0014 19.0245C11.0022 18.9151 11.0114 18.8065 11.0183 18.6455Z"
                            fill="#FCBF49"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.001 19.8174C11.001 19.7663 11.001 19.7152 11.001 19.6641C11.001 19.6641 11.001 19.664 11.001 19.664C11.0011 19.4508 11.0011 19.2376 11.0012 19.0245C11.0017 18.9566 11.0054 18.889 11.0098 18.8091C11.0126 18.7601 11.0155 18.7066 11.0181 18.6455C11.0841 18.6869 11.1449 18.7243 11.2021 18.7596C11.3047 18.8227 11.3959 18.8789 11.4849 18.9382M11.6145 19.0246C11.6167 19.026 11.6188 19.0274 11.6209 19.0288C11.7476 19.1133 11.8744 19.1978 12.0011 19.2823C12.001 19.6829 12.0009 20.0834 12.0008 20.4839C11.6675 20.2617 11.3342 20.0396 11.001 19.8174M19.3208 25.365C16.881 23.7376 14.4411 22.1107 12.0008 20.4839C12.0007 20.616 12.0007 20.7482 12.0006 20.8803C11.9998 23.3541 11.9989 25.8265 12.002 28.299L12.002 28.2991C12.0025 28.7664 12.1435 29.0368 12.2981 29.1898C12.4539 29.344 12.7318 29.4858 13.2097 29.4862L13.2094 30.4862L13.21 29.4862C13.2099 29.4862 13.2098 29.4862 13.2097 29.4862C19.064 29.4877 24.9183 29.4877 30.7726 29.4862L30.7728 30.4829L30.7723 29.4862C30.7724 29.4862 30.7725 29.4862 30.7726 29.4862C31.2688 29.4858 31.5467 29.3418 31.6992 29.1899C31.8512 29.0386 31.9952 28.7634 31.9957 28.2707L31.9957 28.2705C31.999 25.6758 31.9978 23.0816 31.9965 20.4862C32.3297 20.264 32.6629 20.0418 32.9961 19.8196C32.9961 19.7617 32.996 19.7037 32.996 19.6457C32.996 19.6443 32.996 19.6428 32.996 19.6414C32.9959 19.4406 32.9958 19.2399 32.9957 19.0391C32.9957 18.9617 32.9881 18.8846 32.9793 18.7965C32.9748 18.7505 32.9699 18.7014 32.9657 18.6478C32.9212 18.6763 32.8797 18.7029 32.8404 18.728C32.7205 18.8046 32.6216 18.8678 32.5236 18.9328C32.4704 18.9682 32.4173 19.0037 32.3641 19.0391C32.364 19.0392 32.3638 19.0393 32.3637 19.0394C32.2411 19.1212 32.1184 19.2029 31.9958 19.2847C31.996 19.545 31.9961 19.8053 31.9962 20.0655C31.9963 20.2057 31.9964 20.346 31.9965 20.4862C31.3081 20.9452 30.6197 21.4042 29.9313 21.8633C28.1836 23.0288 26.4356 24.1945 24.6874 25.3598L24.1327 24.5277L24.6874 25.3598C24.6874 25.3598 24.6874 25.3598 24.6874 25.3598C23.8278 25.9329 22.9502 26.288 22.0029 26.2892C21.055 26.2904 20.1783 25.9371 19.3208 25.365ZM19.3208 25.365L19.8742 24.5353L19.3207 25.365C19.3207 25.365 19.3208 25.365 19.3208 25.365ZM11.4849 18.9382C11.5281 18.967 11.5713 18.9958 11.6145 19.0246L11.4849 18.9382Z"
                            fill="#FCBF49"
                          />
                          <path
                            d="M22.0007 14.0029C24.963 14.0029 27.9261 13.9983 30.8883 14.0052C32.1292 14.0083 33.0427 14.9295 32.9934 16.1149C32.9633 16.8296 32.5944 17.3418 32.0082 17.7308C29.4226 19.4476 26.8424 21.1722 24.2598 22.8944C23.8793 23.1485 23.5042 23.4112 23.1145 23.6515C22.3766 24.1075 21.6133 24.1275 20.8901 23.6492C17.8839 21.6605 14.8862 19.6594 11.8915 17.6538C11.1213 17.1377 10.8333 16.2889 11.0936 15.4378C11.3547 14.5837 12.1288 14.0068 13.07 14.0045C15.889 13.9968 18.7088 14.0014 21.5278 14.0014C21.6857 14.0029 21.8436 14.0029 22.0007 14.0029Z"
                            fill="#FCBF49"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M32.0082 17.7308C32.5944 17.3418 32.9633 16.8296 32.9934 16.1149C33.0427 14.9295 32.1292 14.0083 30.8883 14.0052C28.7724 14.0003 26.6561 14.0012 24.5399 14.0022C23.6935 14.0025 22.8471 14.0029 22.0007 14.0029C21.8436 14.0029 21.6857 14.0029 21.5278 14.0014C20.759 14.0014 19.9902 14.001 19.2213 14.0007C17.1709 13.9998 15.1202 13.9989 13.07 14.0045C12.1288 14.0068 11.3547 14.5837 11.0936 15.4378C10.8333 16.2889 11.1213 17.1377 11.8915 17.6538C14.8862 19.6594 17.8839 21.6605 20.8901 23.6492C21.6133 24.1275 22.3766 24.1075 23.1145 23.6515C23.3977 23.4769 23.6732 23.2904 23.9487 23.104C24.0523 23.0339 24.1558 22.9638 24.2598 22.8944C24.9163 22.4566 25.5726 22.0186 26.229 21.5807C28.1545 20.2959 30.0799 19.0112 32.0082 17.7308ZM21.4417 22.8151C21.6574 22.9577 21.8376 23.0016 21.9909 23.0007C22.1486 22.9998 22.3464 22.9506 22.5888 22.8008L22.5896 22.8003C22.8536 22.6375 23.1029 22.4688 23.3716 22.287C23.4787 22.2145 23.5889 22.1399 23.7043 22.0628L23.705 22.0624C24.3607 21.6251 25.0165 21.1875 25.6725 20.7499C27.5985 19.4647 29.5255 18.179 31.4551 16.8977L31.4553 16.8976C31.8444 16.6394 31.9808 16.3923 31.9942 16.0729C32.0181 15.4929 31.5978 15.0071 30.886 15.0052M21.4417 22.8151C18.4378 20.8279 15.4419 18.8281 12.4482 16.823L21.4417 22.8151ZM12.0499 15.7302L12.0499 15.7303C11.9179 16.1618 12.0459 16.5534 12.448 16.8229M13.0727 15.0045L13.0724 15.0045C12.5581 15.0057 12.1793 15.3069 12.0499 15.7302M24.5417 15.0022C23.695 15.0025 22.848 15.0029 22.0007 15.0029H21.9984C21.8444 15.0029 21.6841 15.0029 21.523 15.0014C20.7548 15.0014 19.987 15.001 19.2194 15.0007C17.1695 14.9998 15.1212 14.9989 13.0727 15.0045M24.5417 15.0022C26.6573 15.0012 28.7714 15.0003 30.8859 15.0052L24.5417 15.0022Z"
                            fill="#FCBF49"
                          />
                        </svg>
                      </div>
                      <p className="text-[22px] text-black leading-[30px] text-center font-semibold">
                        {ServeLangItem()?.Email}
                      </p>
                      <p className="text-[15px] text-black leading-[30px] text-center">
                        {datas.contact.email}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between w-full bg-[#E7F2EC]">
                    <div className="flex space-x-5 rtl:space-x-reverse">
                      <span>
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.836 18.3183L13.836 18.3193C13.8307 18.9893 14.1161 20.2514 14.7605 21.4272C16.8558 25.2502 18.9688 29.0636 21.0823 32.8778C21.3445 33.3511 21.6068 33.8244 21.869 34.2977L21.869 34.2978C21.9201 34.39 21.9645 34.4453 21.9956 34.4762C22.0272 34.4449 22.0724 34.3887 22.1244 34.2948L22.1245 34.2946C22.6706 33.3089 23.2174 32.3239 23.7641 31.339C25.5963 28.0383 27.4274 24.7399 29.2268 21.4241L13.836 18.3183ZM13.836 18.3183C13.8642 13.6208 16.7919 10.206 20.6315 9.6048C24.7202 8.96493 28.5519 11.3061 29.7792 15.2223L29.7792 15.2224M13.836 18.3183L29.7792 15.2224M29.7792 15.2224C30.451 17.3646 30.2918 19.4599 29.2268 21.4239L29.7792 15.2224ZM26.8314 17.6289L26.8314 17.629C26.8518 20.2773 24.6735 22.4741 22.0205 22.4843C19.3627 22.4945 17.185 20.3434 17.1611 17.6823L26.8314 17.6289ZM26.8314 17.6289C26.8098 14.9632 24.6389 12.824 21.9718 12.8353C19.3106 12.8466 17.1362 15.0295 17.1611 17.6821L26.8314 17.6289Z"
                            fill="#FCBF49"
                            stroke="#FCBF49"
                          />
                          <circle cx="22" cy="22" r="21.5" stroke="#FCBF49" />
                        </svg>
                      </span>
                      <div>
                        <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-2">
                          {ServeLangItem()?.Address}
                        </h1>
                        <p className="text-[15px] text-qblack leading-[30px]">
                          {datas.contact.address}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-[206px] mt-5">
                      <iframe
                        title="newWork"
                        src={`${datas.contact.map}`}
                        style={{ border: "0", width: "100%", height: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 bg-white sm:p-10 p-3">
              <div className="title flex flex-col items-center">
                <h1 className="text-[34px] font-bold text-qblack">
                  {ServeLangItem()?.Get_In_Touch}
                </h1>
                <span className="-mt-5 block">
                  <svg
                    width="354"
                    height="30"
                    viewBox="0 0 354 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                      stroke="#FCBF49"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="inputs mt-5">
                <div className="mb-4">
                  <InputCom
                    label={ServeLangItem()?.Name + "*"}
                    placeholder={ServeLangItem()?.Name}
                    name="name"
                    inputClasses="h-[50px]"
                    value={name}
                    inputHandler={(e) => setName(e.target.value)}
                    error={!!(errors && Object.hasOwn(errors, "name"))}
                  />
                  {errors && Object.hasOwn(errors, "name") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.name[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <InputCom
                    label={ServeLangItem()?.Email_Address + "*"}
                    placeholder={ServeLangItem()?.Email}
                    name="email"
                    inputClasses="h-[50px]"
                    value={email}
                    error={!!(errors && Object.hasOwn(errors, "email"))}
                    inputHandler={(e) => setEmail(e.target.value)}
                  />
                  {errors && Object.hasOwn(errors, "email") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.email[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <InputCom
                    label="Subject*"
                    placeholder="Your Subject here"
                    name="subject"
                    inputClasses="h-[50px]"
                    value={subject}
                    error={!!(errors && Object.hasOwn(errors, "subject"))}
                    inputHandler={(e) => setSubject(e.target.value)}
                  />
                  {errors && Object.hasOwn(errors, "subject") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.subject[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-5">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    {ServeLangItem()?.Message}*
                  </h6>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                    className={` w-full h-[105px] focus:ring-0 focus:outline-none p-3 border placeholder:text-sm ${
                      !!(errors && Object.hasOwn(errors, "message"))
                        ? "border-qred"
                        : "border-qgray-border"
                    }`}
                  ></textarea>
                  {errors && Object.hasOwn(errors, "message") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.message[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <button
                    disabled={
                      name && email && subject && message ? false : true
                    }
                    onClick={sendHandler}
                    type="button"
                    className="disabled:bg-gray-400 disabled:cursor-not-allowed bg-qblack text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center"
                  >
                    <span>{ServeLangItem()?.Send_Now}</span>
                    {loading && (
                      <span className="w-5" style={{ transform: "scale(0.3)" }}>
                        <LoaderStyleOne />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
