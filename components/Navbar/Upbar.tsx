const Upbar = () => {
  return (
    <div className="w-full py-3 flex justify-between items-center border-b ">
      <span className="uppercase text-xs font-black px-3 py-1 rounded-full border border-primary bg-primary/10 text-primary">
        beta
      </span>
      <p className="text-xs text-neutral-400">
        Güncellenmeye devam etmektedir.
      </p>
    </div>
  );
};

export default Upbar;
