import React from "react";

export default function Contact() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p>Email: <a href="mailto:youremail@example.com" className="text-blue-500">youremail@example.com</a></p>
      <p>GitHub: <a href="https://github.com/your-username" className="text-blue-500">@your-username</a></p>
    </section>
  );
}