export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "1.25rem", textAlign: "center" }}>
        No blog posted yet.
      </p>
    </main>
  );
}