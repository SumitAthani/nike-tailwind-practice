const Button = ({ icon, label }) => {
  return (
    <section>
      <button className="text-white-400 text-xl font-medium flex  items-center bg-coral-red px-6 py-4 rounded-full gap-2">
        {label}
        <img src={icon} alt="" />
      </button>
    </section>
  );
};

export default Button;
