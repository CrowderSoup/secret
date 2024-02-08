import type { MetaFunction } from "@vercel/remix";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Secret" },
    { name: "description", content: "encode and decode messages" },
  ];
};

export default function Index() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 w-9/12">
        <textarea
          className="rounded-md border border-gray-300 p-2 h-24 resize-none"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-50 hover:bg-blue-700 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              // base64 encode message
              const encoded = btoa(message);
              setMessage(encoded);
            }}
          >
            Encode
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md disabled:opacity-50 hover:bg-green-700 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              // base64 decode message
              const decoded = atob(message);
              setMessage(decoded);
            }}
          >
            Decode
          </button>
        </div>
      </div>
    </div>
  );
}
