import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utils/fakeDB";
import Applyed from "./Applyed/";

const Apply = () => {
  const { initialCart } = useLoaderData();

  return (
    <>
      <h2 className="my-24 text-center">Apply jobs</h2>
      <div className="mx-24 justify-center text-center">
        {initialCart.map((data) => (
          <Applyed apply={data} key={data.id}></Applyed>
        ))}
      </div>
    </>
  );
};

export default Apply;
