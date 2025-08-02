type ReservationInputProps = {
  placeholder: string;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelTitle: string;
  type?: string;
};

export const ReservationInput = ({
  placeholder,
  value,
  id,
  onChange,
  labelTitle,
  type,
}: ReservationInputProps) => {
  return (
    <>
      <label htmlFor={id} className="block mb-3 mt-6">
        {labelTitle}
      </label>
      <input
        onChange={onChange}
        type={type || "text"  }
        id={id}
        placeholder={placeholder}
        className="md:w-[70%] lg:w-[100%]  bg-secondary-bg pl-[30px] py-[14px] rounded-4xl text-2xl pr-20 border-0 outline-0;"
        value={value}
      />
    </>
  );
};
