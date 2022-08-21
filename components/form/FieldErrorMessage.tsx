function FieldErrorMessage({ message }) {
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500" id="email-error">
      <span>{message}</span>
    </p>
  );
}

export default FieldErrorMessage;
