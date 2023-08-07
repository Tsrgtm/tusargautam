function generateGradient() {
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  const gradientPreview = document.querySelector('.gradient-preview');
  const cssCode = document.getElementById('css-code');

  // Set gradient background
  gradientPreview.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

  // Generate CSS code and update textarea
  const css = `background: linear-gradient(to right, ${color1}, ${color2});`;
  cssCode.value = css;
}