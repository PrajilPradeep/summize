function ErrorMessage({ error }) {
  return (
    <p className="font-inter font-bold text-black text-center">
      An Error Occurred! <br />
      <span className="font-satoshi font-normal text-grey-700">
        {error?.data?.error}
      </span>
    </p>
  );
}

export default ErrorMessage;
