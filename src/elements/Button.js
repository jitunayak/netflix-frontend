import tw from "tailwind-styled-components";

// interface ButtonProps {
//     primary: boolean;
// }

export const Button = tw.button`
 ${(p) =>
   p.primary
     ? "bg-red-600 text-white hover:bg-red-700 "
     : "bg-white border-red-600 text-red-600"}
    rounded-sm py-1 px-2 mt-10 font-bold text-lg 
`;
