const compressCode = () => {
  const inputCode = document.getElementById("input-code").value;
  const compressedCode = compress(inputCode);
  document.getElementById("compressed-code").value = compressedCode;
};

const compress = (code) => {
  // Remove comments
  code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");

  // Remove leading/trailing whitespaces
  code = code.trim();

  // Remove new lines and extra whitespaces
  code = code.replace(/\s+/g, " ");

  return code;
};
