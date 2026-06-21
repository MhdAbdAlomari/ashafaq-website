"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BRANCHES, type Branch } from "@/lib/branches";

const RIYADH_CENTER: [number, number] = [24.7136, 46.6753];

const customIcon = L.divIcon({
  className: "ashafaq-marker",
  iconSize: [36, 46],
  iconAnchor: [18, 44],
  popupAnchor: [0, -42],
  html: `
    <svg width="36" height="46" viewBox="0 0 36 46" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1B1F52"/>
          <stop offset="100%" stop-color="#2E93B9"/>
        </linearGradient>
      </defs>
      <path d="M18 0C8.06 0 0 8.06 0 18c0 13 18 28 18 28s18-15 18-28C36 8.06 27.94 0 18 0z" fill="url(#grad)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <circle cx="18" cy="18" r="6" fill="#fff"/>
    </svg>
  `,
});

function FocusController({
  focusId,
  branches,
}: {
  focusId: string | null;
  branches: Branch[];
}) {
  const map = useMap();
  useEffect(() => {
    if (!focusId) return;
    const b = branches.find((x) => x.id === focusId);
    if (b) map.flyTo([b.lat, b.lng], 14, { duration: 0.8 });
  }, [focusId, branches, map]);
  return null;
}

export default function BranchesMap({
  focusId,
  onMarkerClick,
  ariaLabel,
  openLabel,
  locale,
}: {
  focusId: string | null;
  onMarkerClick: (id: string) => void;
  ariaLabel: string;
  openLabel: string;
  locale: "ar" | "en";
}) {
  const markersRef = useRef<Record<string, L.Marker | null>>({});

  useEffect(() => {
    if (!focusId) return;
    const m = markersRef.current[focusId];
    if (m) m.openPopup();
  }, [focusId]);

  const bounds = useMemo(
    () =>
      L.latLngBounds(BRANCHES.map((b) => [b.lat, b.lng] as [number, number])),
    []
  );

  return (
    <div
      className="relative h-[480px] sm:h-[560px] rounded-3xl overflow-hidden glow-ring"
      role="region"
      aria-label={ariaLabel}
    >
      <MapContainer
        center={RIYADH_CENTER}
        zoom={11}
        bounds={bounds}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ background: "#0b1030" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {BRANCHES.map((b) => (
          <Marker
            key={b.id}
            position={[b.lat, b.lng]}
            icon={customIcon}
            ref={(ref) => {
              markersRef.current[b.id] = ref;
            }}
            eventHandlers={{ click: () => onMarkerClick(b.id) }}
          >
            <Popup>
              <div className="min-w-[180px]">
                <div className="font-bold text-sm">
                  {locale === "ar" ? b.nameAr : b.nameEn}
                </div>
                <div className="mt-1 text-xs opacity-70">
                  {b.lat.toFixed(4)}, {b.lng.toFixed(4)}
                </div>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-semibold text-[#7fcfe8] hover:text-white"
                >
                  {openLabel} →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
        <FocusController focusId={focusId} branches={BRANCHES} />
      </MapContainer>
    </div>
  );
}
