import React, { useEffect, useState } from "react";

const welcome = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Mount fetching Api");
    }, 1000);

    return () => {
      console.log("UnMount");
      clearInterval(interval);
    };
  }, []);
  return <div>welcome</div>;
};

export default welcome;
