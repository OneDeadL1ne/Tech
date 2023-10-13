"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Image from "next/image";

export default function BasicRating({ value }: { value: number }) {
  return (
    <div className="">
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="read-only"
          value={value}
          readOnly
          className="float-left"
        />
        <mark className="bg-[#fff0] text-sm md:text-xl  text-white ">
          {value}
        </mark>
      </Box>
    </div>
  );
}
