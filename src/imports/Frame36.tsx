import { imgCopy } from "./svg-t9w3x";

function Copy() {
  return (
    <div className="relative shrink-0 size-8" data-name="Copy">
      <img className="block max-w-none size-full" src={imgCopy} />
    </div>
  );
}

function CopyButton() {
  return (
    <div className="bg-black box-border content-stretch flex gap-4 items-center justify-center px-3 py-3.5 relative rounded-[12px] shrink-0" data-name="copy-button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <Copy />
      <div className="font-['Gotham_Black:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white tracking-[3.36px] uppercase">
        <p className="leading-[normal] whitespace-pre">Copy</p>
      </div>
    </div>
  );
}

function CopyButton1() {
  return (
    <div className="bg-black box-border content-stretch flex gap-4 items-center justify-center px-3 py-3.5 relative rounded-[12px] shrink-0" data-name="copy-button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="font-['Gotham_Black:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white tracking-[3.36px] uppercase">
        <p className="leading-[normal] whitespace-pre">Buy GPU</p>
      </div>
    </div>
  );
}

export default function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <CopyButton />
      <CopyButton1 />
    </div>
  );
}