const formatCode = () => {
  const inputCode = document.getElementById('code-input').value;
  const formattedCode = beautifyCode(inputCode);
  document.getElementById('formatted-code').value = formattedCode;
};

const beautifyCode = (code) => {
  if (isHTMLCode(code)) {
    return html_beautify(code, { indent_size: 2 });
  } else if (isCSSCode(code)) {
    return css_beautify(code, { indent_size: 2 });
  } else if (isJSCode(code)) {
    return js_beautify(code, { indent_size: 2 });
  } else if (isPythonCode(code)) {
    return python_beautify(code, { indent_size: 2 });
  } else if (isJavaCode(code)) {
    return java_beautify(code, { indent_size: 2 });
  } else if (isCppCode(code)) {
    return cpp_beautify(code, { indent_size: 2 });
  } else if (isRubyCode(code)) {
    return ruby_beautify(code, { indent_size: 2 });
  } else if (isSwiftCode(code)) {
    return swift_beautify(code, { indent_size: 2 });
  } else {
    return "Unsupported language or invalid code format.";
  }
};

const isHTMLCode = (code) => {
  return code.includes("<html>") || code.includes("<body>") || code.includes("<script>");
};

const isCSSCode = (code) => {
  return code.includes("{") && code.includes("}");
};

const isJSCode = (code) => {
  return code.includes("function") || code.includes("let") || code.includes("const") || code.includes("if");
};

const isPythonCode = (code) => {
  return code.includes("def") || code.includes("for") || code.includes("if");
};

const isJavaCode = (code) => {
  return code.includes("class") || code.includes("public") || code.includes("private") || code.includes("static");
};

const isCppCode = (code) => {
  return code.includes("class") || code.includes("public") || code.includes("private") || code.includes("static");
};

const isRubyCode = (code) => {
  return code.includes("def") || code.includes("for") || code.includes("if");
};

const isSwiftCode = (code) => {
  return code.includes("class") || code.includes("func") || code.includes("if") || code.includes("var") || code.includes("let");
};