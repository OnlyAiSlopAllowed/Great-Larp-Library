async function main(): Promise<void> {
  console.log("Hello, TypeScript com Node!");
}

main().catch((err: unknown) => {
  console.error("Error:", err);
});
