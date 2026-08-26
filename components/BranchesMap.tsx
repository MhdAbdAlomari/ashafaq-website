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
          <stop offset="0%" stop-color="#0B1F3A"/>
          <stop offset="100%" stop-color="#1F5EFF"/>
        </linearGradient>
      </defs>
      <path d="M18 0C8.06 0 0 8.06 0 18c0 13 18 28 18 28s18-15 18-28C36 8.06 27.94 0 18 0z" fill="url(#grad)" stroke="rgba(255,255,255,0.9)" stroke-width="1.5"/>
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
  branches,
  singleView = false,
}: {
  focusId: string | null;
  onMarkerClick: (id: string) => void;
  ariaLabel: string;
  openLabel: string;
  locale: "ar" | "en";
  /** Optional filtered set of branches to render. Defaults to all branches. */
  branches?: Branch[];
  /** When true, zoom in on a single branch instead of fitting all-Riyadh bounds. */
  singleView?: boolean;
}) {
  const items = branches ?? BRANCHES;
  const markersRef = useRef<Record<string, L.Marker | null>>({});

  useEffect(() => {
    if (!focusId) return;
    const m = markersRef.current[focusId];
    if (m) m.openPopup();
  }, [focusId]);

  const bounds = useMemo(
    () =>
      items.length > 1
        ? L.latLngBounds(items.map((b) => [b.lat, b.lng] as [number, number]))
        : undefined,
    [items]
  );

  const center: [number, number] =
    singleView && items.length === 1
      ? [items[0].lat, items[0].lng]
      : RIYADH_CENTER;
  const zoom = singleView && items.length === 1 ? 15 : 11;

  return (
    <div
      className="relative h-[480px] sm:h-[560px] rounded-3xl overflow-hidden border border-[#E6EAF2] shadow-[0_10px_30px_-15px_rgba(11,31,58,0.15)]"
      role="region"
      aria-label={ariaLabel}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        bounds={bounds}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ background: "#EAF1FF" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {items.map((b) => (
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
                  className="mt-3 inline-block text-xs font-semibold text-[#1F5EFF] hover:text-[#1A50DA]"
                >
                  {openLabel} →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
        <FocusController focusId={focusId} branches={items} />
      </MapContainer>
    </div>
  );
}
