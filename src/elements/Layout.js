import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

export const InputBox = tw.input`
    bg-zinc-700 
    rounded-sm 
    py-2
    px-4
    mt-6
    text-base
    text-white
`;

export const Card = tw.div`
flex-col w-96 flex bg-zinc-900 p-10 rounded-sm opacity-90`;

export const Center = tw.div`
flex flex-col w-screen h-screen justify-center items-center`;
