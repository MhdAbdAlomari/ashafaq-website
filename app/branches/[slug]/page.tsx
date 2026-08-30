import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BRANCHES,
  UNIFIED_CONTACT,
  getBranchBySlug,
  buildDirectionsUrl,
  type Branch,
} from "@/lib/branches";
import BranchClient from "./BranchClient";

const SITE_URL = "https://ashafaq-wash.net";

export function generateStaticParams() {
  return BRANCHES.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) return { title: "الفروع | الشفق" };
  const title = `${branch.nameAr} | الشفق`;
  return {
    title,
    description: branch.description,
    alternates: { canonical: `/branches/${branch.slug}/` },
    openGraph: {
      title,
      description: branch.description,
      type: "website",
      images: branch.photoSrc ? [{ url: branch.photoSrc }] : undefined,
    },
  };
}

/**
 * Build a schema.org AutoWash JSON-LD object for a single branch, populated
 * with real per-branch data (hours, telephone, image, description). The
 * unified customer-service number is used for `telephone` since it's the same
 * across every branch — no per-branch phone exists.
 */
function buildBranchJsonLd(branch: Branch): Record<string, unknown> {
  const branchUrl = `${SITE_URL}/branches/${branch.slug}/`;
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": `${branchUrl}#business`,
    name: branch.nameAr,
    alternateName: branch.nameEn,
    url: branchUrl,
    description: branch.description,
    telephone: UNIFIED_CONTACT.telephoneE164,
    openingHours: branch.hours,
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.lat,
      longitude: branch.lng,
    },
    hasMap: buildDirectionsUrl(branch),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    parentOrganization: { "@id": `${SITE_URL}/#business` },
    brand: { "@id": `${SITE_URL}/#business` },
  };
  if (branch.photoSrc) obj.image = `${SITE_URL}${branch.photoSrc}`;
  // aggregateRating, review intentionally omitted — no real review data yet.
  return obj;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) notFound();
  const jsonLd = buildBranchJsonLd(branch);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BranchClient branch={branch} />
    </>
  );
}
