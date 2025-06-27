import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl";

import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export default function MissionsSection() {

    const t = useTranslations()


    const missions = [
        {
            id: 0,
            year: 2025, 
            title : "Agence Nylso",
            description : "missions_section.missions_list.nylso_descr",
            stack : ["Next.js", "Tailwind CSS", "TypeScript"],
            link : "https://nylso-landing-page.vercel.app/"

        },

        {
            id: 1, 
            year: 2025,
            title: "ITE-Partenaires",
            description: "missions_section.missions_list.ite_descr",
            stack: ["Spring Boot", "React", "PostgreSQL"],
            link : "https://courageous-starship-95343a.netlify.app/"
        },

        {
            id:2, 
            year: 2024,
            title: "Studio Headshot Pro", 
            description: "missions_section.missions_list.shp_descr",
            stack : ["Spring boot", "React", "PostgreSQL", "AWS", "Replicate API", "Stripe"],
            link : "https://studioheadshotpro.com/"

        },

        {
            id: 3, 
            year: 2023,
            title: "KM CHANGE",
            description: "missions_section.missions_list.kmc_descr",
            stack : ["Spring boot", "React", "Selenium", "Cron", "PostgreSQL"],
            link : "https://kmchange.fr/"
        }
    ]

    return (
        <section id="missions" className="w-full bg-[#F9FAFB] ">

                <div className="max-w-5xl py-20 mx-auto  px-4">

                    <h2 className="text-2xl md:text-3xl mb-12">{t('missions_section.title')}</h2>

                    <div className="flex flex-col gap-6 ">
                        {missions.map((mission) => (
                            <div key={mission.id} className="w-full rounded-md bg-white p-6 space-y-2">

                                <div className="flex justify-between items-center ">
                                <h3 className="font-medium text-lg">{mission.title}</h3>

                               <div className="flex items-start gap-2">
                               <span className={`${robotoMono.className} text-gray-500 text-sm font-mono`}>{mission.year}</span>
                               <span>
                                <Link href={mission.link}>
                                
                                <ExternalLink className="text-gray-600 hover:text-gray-900 w-4 h-4"/>
                                </Link>
                                </span>
                               </div>
                                </div>

                                <div className="mb-4 text-base leading-relaxed text-gray-600">{t(mission.description)}</div>

                                <div className="font-semibold flex flex-wrap items-center gap-2">
                                    {
                                        mission.stack.map((s)=> (
                                            <div key={s} className="bg-[#F3F4F6] hover:bg-[#e5e5e7] text-gray-700 transition-transform inline-flex justify-center items-center text-xs rounded-2xl px-2.5 py-0.5 ">
                                                {s}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

        </section>
    )
}