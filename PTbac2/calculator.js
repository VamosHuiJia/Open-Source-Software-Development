function solveQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultDiv.textContent = "Vui lòng nhập đầy đủ các hệ số.";
      return;
    }

    if (a === 0) {
      resultDiv.textContent = "Đây không phải phương trình bậc 2.";
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      resultDiv.textContent = "Phương trình vô nghiệm.";
    } else if (delta === 0) {
      const x = -b / (2 * a);
      resultDiv.textContent = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resultDiv.textContent = `Phương trình có 2 nghiệm phân biệt: x₁ = ${x1}, x₂ = ${x2}`;
    }
  }