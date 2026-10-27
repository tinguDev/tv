export default function Home() {
  return (
    <main className="tv-shell">
      <iframe
        className="tv-frame"
        src="/zoolo-tv.html"
        title="Zoolo TV live channels"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </main>
  );
}
