import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "960px",
        margin: "40px auto",
        background: "#111",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 0 25px rgba(0,0,0,0.3)",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Professional Video Player
      </h2>

      {/* LOADING SPINNER */}
      {loading && !error && (
        <div
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Loading video...
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <div
          style={{
            color: "red",
            textAlign: "center",
            padding: "20px",
            fontSize: "16px",
          }}
        >
          ❌ Error loading the video
        </div>
      )}

      {/* VIDEO PLAYER */}
      <video
        controls
        preload="metadata"
        onCanPlay={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20px",
          outline: "none",
          border: "2px solid #222",
        }}
      >
        <source
          src="https://d1rpcbbklvr3io.cloudfront.net/VID-20250422-WA0006.mp4"
          type="video/mp4"
        />
        Your browser does not support video playback.
      </video>

      {/* EXTRA CONTROLS PANEL */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
        }}
      >
        <span>🎞  HD Streaming Secured</span>
        <span>🔒 CloudFront Protected</span>
      </div>
    </div>
  );
}

export default App;
