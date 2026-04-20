import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Materials Group DIN — Agricultural raw materials trading";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80";

export default async function Image() {
  let bgDataUrl = null;
  try {
    const res = await fetch(BG_IMAGE);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      bgDataUrl = `data:image/jpeg;base64,${buf.toString("base64")}`;
    }
  } catch {}

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          fontFamily: "serif",
          color: "#f7f5ef",
          background: "#0f2a1d",
        }}
      >
        {bgDataUrl && (
          <img
            src={bgDataUrl}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(15,42,29,0.92) 0%, rgba(15,42,29,0.72) 55%, rgba(15,42,29,0.55) 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "72px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              color: "#d9b97a",
              fontFamily: "sans-serif",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            <svg width="42" height="42" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="7" fill="#0f2a1d" />
              <path
                d="M16 28 L16 10"
                stroke="#d9b97a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <g fill="#d9b97a">
                <ellipse cx="11.6" cy="22" rx="1.9" ry="3" transform="rotate(-32 11.6 22)" />
                <ellipse cx="20.4" cy="22" rx="1.9" ry="3" transform="rotate(32 20.4 22)" />
                <ellipse cx="11.6" cy="16.5" rx="1.9" ry="3" transform="rotate(-32 11.6 16.5)" />
                <ellipse cx="20.4" cy="16.5" rx="1.9" ry="3" transform="rotate(32 20.4 16.5)" />
                <ellipse cx="12.4" cy="11.5" rx="1.7" ry="2.7" transform="rotate(-32 12.4 11.5)" />
                <ellipse cx="19.6" cy="11.5" rx="1.7" ry="2.7" transform="rotate(32 19.6 11.5)" />
                <ellipse cx="16" cy="7.2" rx="1.4" ry="2.4" />
              </g>
            </svg>
            <span>Materials Group · Sofia · Bulgaria</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 900,
            }}
          >
            <div
              style={{
                fontSize: 86,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#f7f5ef",
              }}
            >
              Agricultural raw
              <br />
              materials trading
            </div>
            <div
              style={{
                marginTop: 28,
                fontFamily: "sans-serif",
                fontSize: 28,
                lineHeight: 1.35,
                color: "rgba(247, 245, 239, 0.78)",
                maxWidth: 780,
              }}
            >
              Wheat, corn, sunflower, barley, soy, rapeseed — sourced from the
              Black Sea region, delivered worldwide.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: "sans-serif",
              fontSize: 20,
              color: "rgba(247, 245, 239, 0.6)",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <span>materialsgroup.bg</span>
            <span style={{ color: "#d9b97a" }}>MATERIALS GROUP DIN EOOD</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
