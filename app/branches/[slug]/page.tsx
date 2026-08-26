import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRANCHES, getBranchBySlug } from "@/lib/branches";
import BranchClient from "./BranchClient";

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
  const description = `موقع ${branch.nameAr}، الاتجاهات على خرائط Google، والخدمات المتوفرة في الفرع من الشفق لغسيل السيارات.`;
  return {
    title,
    description,
    alternates: { canonical: `/branches/${branch.slug}/` },
    openGraph: { title, description, type: "website" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) notFound();
  return <BranchClient branch={branch} />;
}
