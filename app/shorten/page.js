"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const generate = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (url === "" || shorturl === "") {
      alert("Please fill in both fields.");
      return;
    }

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setUrl("");
        setShorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <h1 className="headline text-2xl mt-3 font-bold text-center">
        Generate your short URLs
      </h1>
      <div className="flex flex-col justify-center items-center gap-5 p-10">
        <input
          className="w-1/3 py-2 px-4 rounded-3xl border border-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={url}
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          className="w-1/3 py-2 px-4 rounded-3xl border border-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={shorturl}
          type="text"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShorturl(e.target.value)}
        />
        <div className="button">
          <button onClick={generate} className="generate">
            Generate
          </button>
        </div>
      </div>
      {generated && (
        <div className="flex flex-col justify-center items-center gap-5 p-10">
          <p className="text-lg font-bold">Your generated short URL:</p>
          <Link
            href={generated}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {generated}
          </Link>
        </div>
      )}

    </main>
  );
};

export default generate;
