import { ImageResponse } from "next/og";

export const alt =
  "Zeeshan Amjad — Software Engineer across automation, backend, and AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0E0D0B 0%, #14110B 55%, #1A1712 100%)",
          padding: "78px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "2px solid rgba(201,166,70,0.32)",
            borderRadius: 18,
            display: "flex",
          }}
        />

        <div
          style={{ position: "absolute", right: 28, top: 75, display: "flex" }}
        >
          <svg width="480" height="480" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="rgba(201,166,70,0.22)"
              strokeWidth="1.5"
            />
            <circle
              cx="100"
              cy="100"
              r="68"
              fill="none"
              stroke="rgba(201,166,70,0.16)"
              strokeWidth="1.5"
            />
            <line x1="100" y1="100" x2="162" y2="38" stroke="rgba(201,166,70,0.14)" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="162" y2="162" stroke="rgba(201,166,70,0.14)" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="38" y2="162" stroke="rgba(201,166,70,0.14)" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="38" y2="38" stroke="rgba(201,166,70,0.14)" strokeWidth="1.5" />
            <path d="M100 12 L108 100 L100 188 L92 100 Z" fill="rgba(201,166,70,0.34)" />
            <path d="M12 100 L100 92 L188 100 L100 108 Z" fill="rgba(201,166,70,0.20)" />
            <circle cx="100" cy="100" r="5" fill="rgba(201,166,70,0.55)" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 10,
            color: "#C9A646",
          }}
        >
          ZEESHAN AMJAD
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              color: "#F4EAD2",
              lineHeight: 1.02,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              color: "#C9A646",
              marginTop: 18,
            }}
          >
            across automation, backend, and AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 300,
              height: 2,
              background: "rgba(201,166,70,0.55)",
              marginBottom: 20,
            }}
          />
          <div style={{ display: "flex", fontSize: 26, color: "#B9AA8B" }}>
            github.com/ZeeshanAmjad0495 · Pakistan · Remote
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
