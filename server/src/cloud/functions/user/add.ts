Parse.Cloud.define("hello", async (request) => {
  const { a, b } = request.params;
  return `Hello, ${a} and ${b}!`;
});
