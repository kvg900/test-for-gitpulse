const apiKey = "AIzaSyD-FakeKey12345_ExampleOnly"; // Insecure: Hardcoded secret
const seret = "0gLARR5IMLr36uZggbZrKu4WYM/ycwyf43cAHUSIaJg=";
async function fetchUserData() {
  const response = await fetch(`https://example.com{apiKey}`);
  return response.json();
}
