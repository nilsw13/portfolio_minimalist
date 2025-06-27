import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {

    const t = useTranslations()

    return (

        <section id="hero" className=" w-full pt-32 pb-20">
                

        <div className="max-w-5xl  mx-auto px-4  items-start  flex flex-col">

          <h1 className="text-3xl md:text-5xl mb-8 ">Nils Wenting</h1>

          <div key="description" className="max-w-lg mb-6 font-medium ">
          {t("herosection.description")}
          </div>

          <div className="flex flex-col md:flex-row gap-4">

                <Link href='mailto:nilswentingpro@gmail.com' className="flex gap-2 p-2 px-6 text-sm items-center font-bold justify-center border border-[#d3d3d3] hover:bg-[#f7f7f7] transition-transform rounded-md shadow-xs">
                    <MailIcon/>
                    <span key={"contact_button"}>{t("herosection.contact_button")}</span>
                </Link>

                <Link href="#open-source" className="p-2 px-6 flex justify-center items-center text-sm text-[#6A727E] rounded-md hover:bg-[#f7f7f7] hover:text-black transition-transform">
                <span key="see_project_button" className="font-bold">{t('herosection.see_project_button')}</span>
                </Link>

          </div>

        </div>
        

    </section>
    )
}