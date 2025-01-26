function TextFieldInput({
  label,
  name,
  id,
  register,
  validationSchema,
  errors,
  type = "text",
}) {
  return (
    <div
      className={`${errors && errors[name] ? "border-error-200 focus-within:border-error-200" : "border-gray-500 focus-within:border-tint-700"} relative min-w-52 rounded border bg-transparent px-3 pb-2 pt-5 text-sm font-light text-white xl:min-w-64`}
    >
      <label
        htmlFor={id}
        className="absolute -top-3 mr-2 w-1/2 rounded bg-primary px-2 py-1 text-center text-xs"
      >
        {label}
      </label>

      <input
        {...register(name, validationSchema)}
        className="min-w-52 bg-transparent xl:min-w-64"
        type={type}
        id={id}
        name={name}
        autoComplete="off"
      />

      {errors && errors[name] && (
        <span className="mt-2 block border-t border-t-gray-500 text-sm text-gray-500">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default TextFieldInput;
