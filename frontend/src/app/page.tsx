"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useReducer } from "react";
import { E164Number } from "libphonenumber-js/types";
import Link from "next/link";

type StateProps = {
  name: string | undefined;
  email: string | undefined;
  phone: E164Number | undefined;
};

type StateActions = {
  type: STATEACTIONS;
  payload: string | E164Number;
};

enum STATEACTIONS {
  NAME,
  EMAIL,
  PHONE,
}

export default function Home() {
  const initialState: StateProps = {
    name: undefined,
    email: undefined,
    phone: undefined,
  };

  const reducer = (state: StateProps, action: StateActions) => {
    switch (action.type) {
      case STATEACTIONS.NAME:
        return { ...state, name: action.payload };
      case STATEACTIONS.EMAIL:
        return { ...state, email: action.payload };
      case STATEACTIONS.PHONE:
        return { ...state, phone: action.payload };
      default:
        return state;
    }
  };

  const submitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ptd-implants.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.error(error);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <section className="bg-[#A3C0E6] p-10 sm:p-20">
        <section className="max-w-[1100px] mx-auto">
          <h1 className="text-[32px] font-header font-bold text-center">
            Do you wear dentures or need an implant?
          </h1>
          <div className="youtube-container my-5">
            <iframe
              src="https://www.youtube.com/embed/tIZu_vguBqQ?si=zFMy1imlV8ZEGYwg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-[28px] font-header font-bold text-center mt-14">
            What my team can do for you
          </h2>
          <div className="youtube-container my-5">
            <iframe
              src="https://drive.google.com/file/d/1NEcWF4nZH-0lliV-6WJqMQ4nS9Cg5nOA/preview"
              allow="autoplay"
            ></iframe>
          </div>
        </section>
      </section>
      <section className="bg-[#ffffff] p-10 sm:p-20 text-[#000000]">
        <section className="max-w-[1100px] mx-auto block md:flex justify-center gap-10 text-center">
          <div className="flex-1">
            <img src="/all-on-x.webp" alt="All on X" className="block" />
            <h3 className="text-[21px] font-bold italic font-header">
              All on X
            </h3>
            <h4 className="text-[15px] italic text-[#555]">
              Cost $20-$25K per arch
            </h4>
            <ul className="list-disc text-left py-2">
              <li className="py-1">
                This gets secured in place and you only take it out when you
                come to the dentist
              </li>
              <li className="py-1">
                The day of surgery you leave with a temporary that our lab from
                Arizona secures in place during the healing process
              </li>
              <li className="py-1">
                After the healing process is done we begin making the final
                prosthesis
              </li>
              <li className="py-1">
                This has no palate and you can taste your food
              </li>
              <li className="py-1">
                We place 4 or more implants for this option
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="/overdenture.webp" alt="Overdenture" className="block" />
            <h3 className="text-[21px] font-bold italic font-header">
              Overdenture
            </h3>
            <h4 className="text-[15px] italic text-[#555]">
              Cost $6-$15K with no insurance
            </h4>
            <ul className="list-disc text-left py-2">
              <li className="py-1">
                This also gets secured in place by implants but it snaps in
                place
              </li>
              <li className="py-1">You have to take this out at night</li>
              <li className="py-1">
                After surgery you get a healing denture that doesn't secure in
                place
              </li>
              <li className="py-1">
                After the healing process the denture will be made that snaps in
                place
              </li>
              <li className="py-1">
                We place 2-4 implants for this option (typically 4){" "}
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="/dental-implant.webp"
              alt="Dental Implants"
              className="block"
            />
            <h3 className="text-[21px] font-bold italic font-header">
              Dental Implant
            </h3>
            <h4 className="text-[15px] italic text-[#555]">
              Cost $3-$5k with no insurance
            </h4>
            <ul className="list-disc text-left py-2">
              <li className="py-1">
                Maybe all you need is to replace one tooth or a few
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="bg-[#A3C0E6] p-10 sm:p-20">
        <section className="max-w-[1100px] mx-auto">
          <h3 className="text-[32px] font-header font-bold text-center">
            We offer financing for every option.
          </h3>
          <form
            onSubmit={submitEmail}
            className="bg-[white] max-w-[400px] mx-auto p-5 m-5 rounded shadow-lg mb-14"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-1 my-2 border rounded"
                value={state.name}
                onChange={(e) =>
                  dispatch({
                    type: STATEACTIONS.NAME,
                    payload: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-1 my-2 border rounded"
                value={state.email}
                onChange={(e) =>
                  dispatch({
                    type: STATEACTIONS.EMAIL,
                    payload: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <PhoneInput
                placeholder="Phone Number"
                value={state.phone}
                className="w-full p-1 my-2 border rounded"
                onChange={(e) =>
                  dispatch({ type: STATEACTIONS.PHONE, payload: e! })
                }
              />
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="bg-[#54a53b] py-1 px-3 text-[#fff] rounded font-bold mt-1 mb-5"
              />
            </div>
            <p className="mb-3 text-[14px]">
              Expect us to reach out via text, phone and email within 24hrs and
              on Monday if you contacted us during the weekend.
            </p>
            <p className="mb-3 text-[14px]">
              Our office number is{" "}
              <Link href="tel:7026169655" className="underline">
                702-616-9655
              </Link>{" "}
              if you would like to call and schedule a consultation.
            </p>
          </form>
          <section>
            <h3 className="text-[27px] font-header font-bold text-center mb-3">
              Your Providers
            </h3>
            <section className="max-w-[1100px] mx-auto block md:flex justify-center gap-10 text-center">
              <div className="mb-8 md:mb-0">
                <img
                  src="/anghel.webp"
                  alt="Patrick Anghel - DDS"
                  className="block max-w-[250px] mx-auto mb-5"
                />
                <h3 className="font-bold">Patrick Anghel, D.D.S.</h3>
                <h4>Detroit Mercy School of Dentistry</h4>
              </div>
              <div className="mb-8 md:mb-0">
                <img
                  src="/partovi.webp"
                  alt="Patrick Anghel - DDS"
                  className="block max-w-[250px] mx-auto mb-5"
                />
                <h3 className="font-bold">Pouya Partovi, D.D.S., M.D.</h3>
                <h4>Oral Surgeon -UCSF School of Dentistry</h4>
              </div>
              <div className="mb-8 md:mb-0">
                <img
                  src="/radmall.webp"
                  alt="Patrick Anghel - DDS"
                  className="block max-w-[250px] mx-auto mb-5"
                />
                <h3 className="font-bold">Aaron Radmall, D.M.D.</h3>
                <h4>Periodontist -UNLV</h4>
              </div>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
