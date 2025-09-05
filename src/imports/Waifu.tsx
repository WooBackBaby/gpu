import imgImage42 from "figma:asset/3b4f2dfeb7ca5d76d8278d424cd6ee303eb0836a.png";
import imgImage41 from "figma:asset/8cee4256a1b6c998ccf6dbeae6d8fe9e397f2439.png";
import imgImage46 from "figma:asset/30ac075e7be31ca16fb99bd3e833178444692d89.png";

export default function Waifu() {
  return (
    <div className="relative size-full" data-name="waifu">
      <div className="absolute flex h-[345px] items-center justify-center left-0 top-[3px] w-[166px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-center bg-cover bg-no-repeat h-[345px] w-[166px]" data-name="image 42" style={{ backgroundImage: `url('${imgImage42}')` }} />
        </div>
      </div>
      <div className="absolute bg-center bg-cover bg-no-repeat h-[345px] left-[1194px] top-0 w-[166px]" data-name="image 47" style={{ backgroundImage: `url('${imgImage42}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat h-[197px] left-[377px] top-[127px] w-[117px]" data-name="image 41" style={{ backgroundImage: `url('${imgImage41}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat h-[200px] left-[846px] top-[124px] w-[137px]" data-name="image 46" style={{ backgroundImage: `url('${imgImage46}')` }} />
    </div>
  );
}