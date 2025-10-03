import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#D16F2A] text-white text-center py-4 mt-6">
      <p className="text-sm">
        © {new Date().getFullYear()} El Chef. All rights reserved.
      </p>
    </footer>
  );
}
