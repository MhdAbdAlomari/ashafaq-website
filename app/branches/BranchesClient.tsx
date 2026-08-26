"use client";

import PageHero from "@/components/PageHero";
import Branches from "@/components/Branches";
import { useLang } from "@/components/LanguageProvider";

export default function BranchesClient() {
  const { dict } = useLang();
  const b = dict.branchesPage;
  return (
    <>
      <PageHero eyebrow={b.eyebrow} title={b.title} subtitle={b.subtitle} />
      <Branches hideHeader />
    </>
  );
}
