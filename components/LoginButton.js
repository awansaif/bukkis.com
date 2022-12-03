"use client";
const Button = () => {
  return (
    <li onClick={() => signIn()} className="hover:opacity-80 cursor-pointer">
      Login
    </li>
  );
};
export default Button;
