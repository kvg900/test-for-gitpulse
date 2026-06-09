const apiKey = "AIzaSyD-FakeKey12345_ExampleOnly"; // Insecure: Hardcoded secret

async function fetchUserData() {
  const response = await fetch(`https://example.com{apiKey}`);
  return response.json();
}
