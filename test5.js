const apiKey = "AIzaSyD-FakeKey12345_ExampleOnly"; // Insecure: Hardcoded secret
const secret = "GWJGwazSjA/HiL/3c+PnDBBmSfpBdGv4xTqJmQqc/bA=";

async function fetchUserData() {
  const response = await fetch(`https://example.com{apiKey}`);
  return response.json();
}
