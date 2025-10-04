import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-[#D16F2A] text-orange-100 text-center p-4 w-full
    "
    >
      <p className="text-xs flex items-center justify-center">
        © {new Date().getFullYear()} The Chef. All rights reserved.
      </p>
    </footer>
  );
}
