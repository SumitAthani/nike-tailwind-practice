const Button = ({ icon, label, noColor = false }) => {
  return (
    <section>
      <button
        className={`text-xl font-medium flex  items-center ${
          noColor ? "bg-white" : "bg-coral-red"
        } px-6 py-4 rounded-full gap-2 ${
          noColor ? "text-slate-gray" : "text-white-400"
        } ${noColor ? "border border-slate-gray" : ""}`}
      >
        {label}
        <img src={icon} alt="" />
      </button>
    </section>
  );
};

export default Button;
