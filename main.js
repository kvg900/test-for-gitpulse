const apiKey = "AIzaSyD-FakeKey12345_ExampleOnly"; // Insecure: Hardcoded secret
const secret = "IOUpg7+/bjAMmnAQBy1YUeO5UhtyvZQXL5uE99uh8n0=";
async function fetchUserData() {
  const response = await fetch(`https://example.com{apiKey}`);
  return response.json();
}
