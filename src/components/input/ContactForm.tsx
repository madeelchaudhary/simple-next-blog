import React, { FormEvent, useEffect, useReducer, useState } from "react";
import Toast from "../ui/Toast";

const mailRegex = /^([A-Za-z])+([._-]?\w+)+@([A-Za-z])+([._-]?\w+)+\.\w+$/;
const inputReducerInitial = {
  nameInput: "",
  emailInput: "",
  messageInput: "",
  isNameInvalid: null as null | boolean,
  isEmailInvalid: null as null | boolean,
  isMessageInvalid: null as null | boolean,
};

const inputReducerFun = (
  state: typeof inputReducerInitial,
  payload: {
    type: "ADD_MAIL" | "ADD_NAME" | "ADD_MESSAGE" | "RESET";
    value?: string;
  }
) => {
  if (payload.type === "ADD_MAIL") {
    const isEmailInvalid =
      payload.value!.trim().length === 0 || !mailRegex.test(payload.value!);
    const updatedState = {
      ...state,
      emailInput: payload.value!,
      isEmailInvalid,
    };
    return updatedState;
  }
  if (payload.type === "ADD_NAME") {
    const isNameInvalid = payload.value!.trim().length === 0;
    const updatedState = {
      ...state,
      nameInput: payload.value!,
      isNameInvalid,
    };
    return updatedState;
  }
  if (payload.type === "ADD_MESSAGE") {
    const isMessageInvalid = payload.value!.trim().length < 40;
    const updatedState = {
      ...state,
      messageInput: payload.value!,
      isMessageInvalid,
    };
    return updatedState;
  }

  if (payload.type === "RESET") {
    return inputReducerInitial;
  }
  return state;
};

const ContactForm = () => {
  const [inputState, dispathInput] = useReducer(
    inputReducerFun,
    inputReducerInitial
  );
  const [response, setResponse] = useState(null as any);
  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        setResponse(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [response]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const mail = inputState.emailInput;
    const name = inputState.nameInput;
    const message = inputState.messageInput;
    if (!mail.trim() || !name.trim() || message.length < 40) {
      return;
    }

    const data = {
      name,
      mail,
      message,
    };

    try {
      const result = await sendData(data);
      dispathInput({ type: "RESET" });
      setResponse({ status: "SUCCESS", text: "Message sent successfully!" });
    } catch (error: any) {
      setResponse({ status: "ERROR", text: error.message });
    }
  };

  return (
    <div>
      {response && (
        <Toast
          status={response.status}
          text={response.text}
          onClose={() => setResponse(null)}
        />
      )}

      <form action="#" onSubmit={submitHandler}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-6 ">
            <label
              htmlFor="username"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              aria-invalid={inputState.isNameInvalid ?? false}
              onChange={(e) =>
                dispathInput({ type: "ADD_NAME", value: e.target.value })
              }
              value={inputState.nameInput}
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500 aria-[invalid=true]:border-rose-500 aria-[invalid=true]:ring-rose-500 aria-[invalid=true]:outline-rose-500"
              placeholder="eg. Mike"
            />
            {inputState.isNameInvalid === true && (
              <p role="note" className="text-xs text-rose-500 mt-1">
                Name field is required!
              </p>
            )}
          </div>
          <div className=" w-full mb-6 group">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={(e) =>
                dispathInput({ type: "ADD_MAIL", value: e.target.value })
              }
              aria-invalid={inputState.isEmailInvalid ?? false}
              value={inputState.emailInput}
              type="email"
              id="email"
              className="peer bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500 aria-[invalid=true]:border-rose-500 aria-[invalid=true]:ring-rose-500 aria-[invalid=true]:outline-rose-500"
              placeholder="name@flowbite.com"
            />
            {inputState.isEmailInvalid === true && (
              <p role="note" className="text-xs text-rose-500 mt-1">
                {inputState.emailInput.length === 0
                  ? "Email field is required!"
                  : "Please enter a valid email"}
              </p>
            )}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            onChange={(e) =>
              dispathInput({ type: "ADD_MESSAGE", value: e.target.value })
            }
            aria-invalid={inputState.isMessageInvalid ?? false}
            value={inputState.messageInput}
            id="message"
            rows={4}
            minLength={20}
            className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-500 aria-[invalid=true]:border-rose-500 aria-[invalid=true]:ring-rose-500 aria-[invalid=true]:outline-rose-500"
            placeholder="Leave a comment..."
          ></textarea>
          {inputState.isMessageInvalid === true && (
            <p role="note" className="text-xs text-rose-500 mt-1">
              {inputState.messageInput.length === 0
                ? "Message field is required!"
                : "Message should be atleast 40 characters"}
            </p>
          )}
        </div>
        <button
          disabled={
            (inputState.isEmailInvalid ?? true) ||
            (inputState.isNameInvalid ?? true) ||
            (inputState.isMessageInvalid ?? true)
          }
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-7 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8 disabled:opacity-60"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

async function sendData(messageData: {
  name: string;
  mail: string;
  message: string;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  if (!res.ok) {
    const errMessage = await res.json();
    throw new Error(errMessage.error || "Something went wrong!");
  }

  const data = await res.json();
  return data;
}
