
export default function Home() {
  const classNames = `
      rounded-md 
      w-full h-20 
      text-black 
      font-bold 
      text-3xl 
      text-center 
      uppercase 
      border-2
      border-gray
      shadow-inner
      transition-all
      focus:border-orange
      focus:shadow-orange
      focus:shadow-md
      shadow-sm
      px-6`;
  return (
    <div className="flex p-10 align-center justify-center h-screen">
      <input type="search" placeholder="O que gostaria de ouvir ?" autoFocus className={classNames} />
    </div>
  );
}
